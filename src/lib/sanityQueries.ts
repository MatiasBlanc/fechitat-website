import {sanity} from './sanity'

/** Obtener todos los eventos ordenados por fecha */
export async function getEventos() {
  return sanity.fetch(`*[_type == "evento"] | order(fecha desc)`)
}

/** Obtener eventos próximos (excluye el destacado) */
export async function getProximosEventos() {
  return sanity.fetch(
    `*[_type == "evento" && estado == "proximo" && fecha >= now() && destacado != true] | order(fecha asc)`
  )
}

/** Obtener eventos pasados */
export async function getEventosPasados() {
  return sanity.fetch(
    `*[_type == "evento" && (estado == "finalizado" || fecha < now())] | order(fecha desc)`
  )
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

/** Obtener posts del blog */
export async function getBlogPosts() {
  return sanity.fetch(`*[_type == "blogPost"] | order(fecha desc)`)
}

/** Obtener post por slug */
export async function getBlogPostBySlug(slug: string) {
  return sanity.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, {slug})
}

/** Obtener miembros del organigrama */
export async function getOrganigrama() {
  return sanity.fetch(`*[_type == "miembroOrganigrama" && activo == true] | order(orden asc)`)
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

/** Obtener álbumes de galería */
export async function getGalerias() {
  return sanity.fetch(`*[_type == "galeria"] | order(fecha desc)`)
}

/** Obtener galería por slug */
export async function getGaleriaBySlug(slug: string) {
  return sanity.fetch(`*[_type == "galeria" && slug.current == $slug][0]`, {slug})
}

/**
 * Obtiene el álbum de galería relacionado con un evento.
 *
 * @param eventoId - Identificador del documento de evento en Sanity.
 * @returns El álbum relacionado o null cuando el evento no tiene álbum.
 */
export async function getGaleriaByEventoId(eventoId: string) {
  return sanity.fetch(
    `*[_type == "galeria" && evento._ref == $eventoId][0]`,
    {eventoId}
  )
}

/** Obtener métricas de la federación */
export async function getMetricas() {
  return sanity.fetch(`*[_type == "metrica" && activo == true] | order(orden asc)`)
}

/** Obtener el próximo evento destacado */
export async function getProximoEventoDestacado() {
  return sanity.fetch(
    `*[_type == "evento" && estado == "proximo" && fecha >= now()] | order(fecha asc)[0]`
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
