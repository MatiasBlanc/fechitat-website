import {sanity} from './sanity'

/** Obtener todos los eventos ordenados por fecha */
export async function getEventos() {
  return sanity.fetch(`*[_type == "evento"] | order(fecha desc)`)
}

/** Obtener eventos próximos (excluye el destacado) */
export async function getProximosEventos() {
  return sanity.fetch(
    `*[_type == "evento" && estado == "proximo" && fecha >= now() && destacado != true] | order(fecha asc) {
      ...,
      "tieneGaleria": count(galeria) > 0
    }`
  )
}

/** Obtener eventos pasados (limitado; el resto se carga con "Ver más") */
export async function getEventosPasados(limite = 12) {
  return sanity.fetch(
    `*[_type == "evento" && (estado == "finalizado" || fecha < now())] | order(fecha desc) [0...${limite}] {
      _id,
      titulo,
      slug,
      fecha,
      tipo,
      direccion,
      ciudad,
      lugar,
      flyer,
      descripcion,
      "tieneGaleria": count(galeria) > 0
    }`
  )
}

/** Obtener eventos pasados paginados (offset/limite) para "Ver más" */
export async function getEventosPasadosPaginados(offset = 0, limite = 12) {
  return sanity.fetch(
    `*[_type == "evento" && (estado == "finalizado" || fecha < now())] | order(fecha desc) [${offset}...${offset + limite}] {
      _id,
      titulo,
      slug,
      fecha,
      tipo,
      direccion,
      ciudad,
      lugar,
      flyer,
      descripcion,
      "tieneGaleria": count(galeria) > 0,
      "flyerUrl": flyer.asset->url
    }`
  )
}

/** Contar eventos pasados (para saber si hay más) */
export async function getTotalEventosPasados() {
  return sanity.fetch(`count(*[_type == "evento" && (estado == "finalizado" || fecha < now())])`)
}

/** Obtener evento por slug */
export async function getEventoBySlug(slug: string) {
  return sanity.fetch(`*[_type == "evento" && slug.current == $slug][0]`, {slug})
}

/** Obtener todas las escuelas */
export async function getEscuelas() {
  return sanity.fetch(`*[_type == "escuela" && activo == true] | order(nombre asc)`)
}

/** Obtener escuela por slug */
export async function getEscuelaBySlug(slug: string) {
  return sanity.fetch(`*[_type == "escuela" && slug.current == $slug][0]`, {slug})
}

/** Obtener todos los competidores activos */
export async function getCompetidores() {
  return sanity.fetch(`*[_type == "competidor" && activo == true] | order(nombre asc)`)
}

/** Obtener cinturones negros */
export async function getCinturonesNegros() {
  return sanity.fetch(`*[_type == "competidor" && esCinturonNegro == true] | order(nombre asc)`)
}

/** Obtener competidor por slug */
export async function getCompetidorBySlug(slug: string) {
  return sanity.fetch(`*[_type == "competidor" && slug.current == $slug][0]`, {slug})
}

/** Obtener posts del blog con paginación */
export async function getBlogPosts(pagina = 1, porPagina = 12) {
  const inicio = (pagina - 1) * porPagina
  return sanity.fetch(
    `*[_type == "blogPost"] | order(fecha desc) [${inicio}...${inicio + porPagina}] {
      _id,
      titulo,
      slug,
      fecha,
      autor,
      extracto,
      imagen,
      categorias,
      destacado
    }`
  )
}

/** Contar posts del blog (para paginación) */
export async function getTotalBlogPosts() {
  return sanity.fetch(`count(*[_type == "blogPost"])`)
}

/** Obtener material de estudio activo, ordenado manualmente */
export async function getMaterialEstudio() {
  return sanity.fetch(
    `*[_type == "materialEstudio" && activo == true] | order(orden asc) {
      _id,
      titulo,
      tipo,
      grado,
      descripcion,
      archivo,
      contenido,
      recursos,
      "archivoUrl": archivo.asset->url,
      "archivoNombre": archivo.asset->originalFilename
    }`
  )
}

/** Obtener el programa de examen activo. */
export async function getProgramaExamen() {
  return sanity.fetch(
    `*[_type == "programaExamen" && activo == true] | order(_updatedAt desc)[0] {
      titulo,
      descripcion,
      grados[]{
        _key,
        rango,
        cinturon,
        posiciones,
        ataquesBrazo,
        ataquesPierna,
        defensas,
        formas,
        combate,
        defensaPersonal,
        rotura,
        teoria
      }
    }`,
  )
}

/** Obtener post por slug */
export async function getBlogPostBySlug(slug: string) {
  return sanity.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, {slug})
}

/** Obtener integrantes del directorio, excluyendo las comisiones */
export async function getOrganigrama() {
  return sanity.fetch(
    `*[_type == "miembroOrganigrama" && activo == true && nivel != "comision"] | order(orden asc, nombre asc) {
      _id,
      nombre,
      cargo,
      nivel,
      grado,
      foto,
      email,
      bio
    }`
  )
}

/** Obtener las comisiones activas y sus integrantes */
export async function getComisiones() {
  return sanity.fetch(
    `*[_type == "comision" && activo == true] | order(orden asc, nombre asc) {
      _id,
      nombre,
      descripcion,
      miembros[]->{
        _id,
        nombre,
        cargo,
        grado,
        foto,
        email,
        bio
      }
    }`
  )
}

/** Obtener los documentos oficiales visibles en el sitio */
export async function getDocumentosOficiales() {
  return sanity.fetch(
    `*[_type == "documentoOficial" && activo == true] | order(fechaPublicacion desc, orden asc) {
      _id,
      titulo,
      slug,
      tipo,
      descripcion,
      version,
      fechaPublicacion,
      fechaVigencia,
      estado,
      "archivoUrl": archivo.asset->url,
      "archivoNombre": archivo.asset->originalFilename,
      "comisionNombre": comision->nombre
    }`
  )
}

/** Obtener campeones del salón de campeones */
export async function getCampeones() {
  return sanity.fetch(`*[_type == "campeon"] | order(anio desc)`)
}

/** Obtener hitos históricos para la línea de tiempo */
export async function getHitoHistorico() {
  return sanity.fetch(`*[_type == "hitoHistorico"] | order(anio asc)`)
}

/** Obtener hitos destacados */
export async function getHitosDestacados() {
  return sanity.fetch(`*[_type == "hitoHistorico" && destacado == true] | order(anio asc)`)
}

/** Obtener métricas de la federación */
export async function getMetricas() {
  return sanity.fetch(`*[_type == "metrica" && activo == true] | order(orden asc)`)
}

/** Obtener el próximo evento destacado */
export async function getProximoEventoDestacado() {
  return sanity.fetch(
    `*[_type == "evento" && estado == "proximo" && fecha >= now()] | order(fecha asc)[0] {
      ...,
      "tieneGaleria": count(galeria) > 0
    }`
  )
}

/** Obtener escuelas agrupadas por región */
export async function getEscuelasPorRegion() {
  return sanity.fetch(`*[_type == "escuela" && activo == true] | order(region asc, nombre asc)`)
}

/** Obtener posts destacados del blog (máximo 4) */
export async function getBlogPostsDestacados() {
  return sanity.fetch(`*[_type == "blogPost" && destacado == true] | order(fecha desc)[0...4]`)
}

/** Obtener testimonios */
export async function getTestimonios() {
  return sanity.fetch(`*[_type == "testimonio"] | order(orden asc)`)
}

/** Obtener eventos del calendario (por mes/año) */
export async function getEventosCalendario(anio: number, mes?: number) {
  if (mes) {
    return sanity.fetch(
      `*[_type == "evento" && fecha >= $inicio && fecha <= $fin] | order(fecha asc)`,
      {
        inicio: `${anio}-${String(mes).padStart(2, '0')}-01`,
        fin: `${anio}-${String(mes).padStart(2, '0')}-31`,
      }
    )
  }
  return sanity.fetch(
    `*[_type == "evento" && fecha >= $inicio && fecha <= $fin] | order(fecha asc)`,
    {
      inicio: `${anio}-01-01`,
      fin: `${anio}-12-31`,
    }
  )
}
