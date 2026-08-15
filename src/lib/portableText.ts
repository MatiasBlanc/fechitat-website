import { urlFor } from './sanity';

/**
 * Renderiza contenido Portable Text de Sanity a HTML semántico y accesible.
 * Soporta párrafos, encabezados, listas, citas, código, texto enriquecido
 * (negrita/cursiva/tachado/enlace) e imágenes con alt descriptivo.
 *
 * @param bloques - Arreglo de bloques Portable Text desde Sanity.
 * @returns HTML ya renderizado o cadena vacía si no hay contenido.
 */
export function renderPortableText(bloques: unknown): string {
  if (!Array.isArray(bloques)) return '';

  const html: string[] = [];
  let tipoLista: 'ul' | 'ol' | null = null;

  const cerrarLista = () => {
    if (tipoLista) {
      html.push(`</${tipoLista}>`);
      tipoLista = null;
    }
  };

  for (const bloque of bloques) {
    const esLista = bloque?._type === 'block' && Boolean(bloque.listItem);
    if (esLista) {
      const nuevoTipo: 'ul' | 'ol' = bloque.listItem === 'number' ? 'ol' : 'ul';
      if (tipoLista !== nuevoTipo) {
        cerrarLista();
        tipoLista = nuevoTipo;
        html.push(`<${tipoLista}>`);
      }
      html.push(`<li>${renderHijos(bloque)}</li>`);
      continue;
    }

    cerrarLista();
    if (bloque?._type === 'block') html.push(renderBloque(bloque));
    if (bloque?._type === 'image') html.push(renderImagen(bloque));
  }

  cerrarLista();
  return html.join('\n');
}

/** Escapa texto para evitar inyección de HTML. */
function escapar(texto: string): string {
  return texto
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** Renderiza los spans de un bloque aplicando sus marcas (bold, italic, link…). */
function renderHijos(bloque: any): string {
  const marksDefs = bloque.markDefs ?? [];
  return (bloque.children ?? [])
    .map((hijo: any) => {
      let texto = escapar(hijo.text ?? '');
      const marcas = hijo.marks ?? [];

      // Aplicar marcas en orden inverso para anidar correctamente.
      for (const marca of [...marcas].reverse()) {
        if (marca === 'strong') texto = `<strong>${texto}</strong>`;
        else if (marca === 'em') texto = `<em>${texto}</em>`;
        else if (marca === 'code') texto = `<code>${texto}</code>`;
        else if (marca === 'strike-through') texto = `<del>${texto}</del>`;
        else if (marca === 'underline') texto = `<u>${texto}</u>`;
        else {
          const def = marksDefs.find((d: any) => d._key === marca);
          if (def?._type === 'link') {
            const href = def.href || '#';
            const externo = href.startsWith('http');
            texto = `<a href="${escapar(href)}"${externo ? ' target="_blank" rel="noopener noreferrer"' : ''}>${texto}</a>`;
          }
        }
      }
      return texto;
    })
    .join('');
}

/** Renderiza un bloque de texto (párrafo, encabezado, lista, cita…). */
function renderBloque(bloque: any): string {
  const style = bloque.style ?? 'normal';
  const contenido = renderHijos(bloque);

  switch (style) {
    case 'h2':
      return `<h2>${contenido}</h2>`;
    case 'h3':
      return `<h3>${contenido}</h3>`;
    case 'h4':
      return `<h4>${contenido}</h4>`;
    case 'blockquote':
      return `<blockquote>${contenido}</blockquote>`;
    case 'pre':
      return `<pre><code>${contenido}</code></pre>`;
    default:
      return `<p>${contenido}</p>`;
  }
}

/** Renderiza una imagen embebida en el contenido con su descripción (alt). */
function renderImagen(bloque: any): string {
  const alt = bloque.alt ?? bloque.caption ?? 'Imagen del artículo';
  const url = urlFor(bloque)
    .width(1200)
    .auto('format')
    .fit('max')
    .url();
  const caption = bloque.caption
    ? `<figcaption>${escapar(bloque.caption)}</figcaption>`
    : '';

  return `<figure class="my-8"><img src="${url}" alt="${escapar(alt)}" loading="lazy" decoding="async" class="w-full rounded-sm">${caption}</figure>`;
}