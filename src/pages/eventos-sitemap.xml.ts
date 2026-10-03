import type { APIRoute } from 'astro';
import { getEventosSitemap } from '../lib/sanityQueries';

export const prerender = false;

/**
 * Sirve las URLs de eventos renderizados bajo demanda, que Astro no incluye en su sitemap estático.
 *
 * @param context - Contexto de la petición con la URL canónica del sitio.
 * @returns Respuesta XML con las rutas publicadas y su fecha de modificación.
 * @throws Error si Sanity no puede recuperar los eventos; evita publicar un sitemap incompleto.
 */
export const GET: APIRoute = async ({ site }) => {
  const eventos = await getEventosSitemap();
  const base = site ?? new URL('https://fechitat.vercel.app');
  const rutas = eventos.map(({ slug, updatedAt }) => {
    const url = new URL(`/eventos/${encodeURIComponent(slug)}/`, base);
    return `<url><loc>${url.href}</loc><lastmod>${updatedAt}</lastmod></url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rutas.join('')}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
