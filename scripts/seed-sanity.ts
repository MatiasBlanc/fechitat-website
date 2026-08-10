/**
 * Script para poblar Sanity con contenido de ejemplo para FECHITAT
 * Ejecutar: npx tsx scripts/seed-sanity.ts
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'wyg7m2t0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

async function seed() {
  console.log('🌱 Poblando Sanity con datos de ejemplo...\n')

  // ── Métricas ──────────────────────────────────────────────
  console.log('📊 Creando métricas...')
  const metricas = [
    {titulo: 'Cinturones negros', valor: 50, sufijo: '+', icono: '🥋', orden: 1, activo: true},
    {titulo: 'Competidores activos', valor: 150, sufijo: '+', icono: '🏆', orden: 2, activo: true},
    {titulo: 'Escuelas afiliadas', valor: 32, sufijo: '+', icono: '🏫', orden: 3, activo: true},
    {titulo: 'Años de trayectoria', valor: 20, sufijo: '+', icono: '📅', orden: 4, activo: true},
  ]

  for (const m of metricas) {
    await client.createIfNotExists({_id: `metrica-${m.titulo.toLowerCase().replace(/\s+/g, '-')}`, _type: 'metrica', ...m})
    console.log(`  ✓ ${m.titulo}`)
  }

  // ── Escuelas ──────────────────────────────────────────────
  console.log('\n🏫 Creando escuelas...')
  const escuelas = [
    {nombre: 'Dojang Osvaldo Rojas', slug: 'dojang-osvaldo-rojas', sensei: 'Osvaldo Rojas', ciudad: 'La Serena', region: 'Coquimbo', activo: true},
    {nombre: 'Dojang Ernesto Reyes', slug: 'dojang-ernesto-reyes', sensei: 'Ernesto Reyes', ciudad: 'Santiago', region: 'Metropolitana', activo: true},
    {nombre: 'Dojang Javier Lillo', slug: 'dojang-javier-lillo', sensei: 'Javier Lillo', ciudad: 'Valparaíso', region: 'Valparaíso', activo: true},
    {nombre: 'Dojang Marcelo Russo', slug: 'dojang-marcelo-russo', sensei: 'Marcelo Russo', ciudad: 'Copiapó', region: 'Atacama', activo: true},
  ]

  for (const e of escuelas) {
    await client.createIfNotExists({_id: `escuela-${e.slug}`, _type: 'escuela', ...e})
    console.log(`  ✓ ${e.nombre}`)
  }

  // ── Organigrama ──────────────────────────────────────────
  console.log('\n👥 Creando organigrama...')
  const directivos = [
    {nombre: 'Juan Bravo', cargo: 'Presidente', nivel: 'presidencia', email: 'presidencia@fechitat.cl', orden: 1, activo: true},
    {nombre: 'Camila Soto', cargo: 'Vicepresidenta', nivel: 'vicepresidencia', email: 'vicepresidencia@fechitat.cl', orden: 2, activo: true},
    {nombre: 'Rodrigo Muñoz', cargo: 'Secretario General', nivel: 'directiva', email: 'secretaria@fechitat.cl', orden: 3, activo: true},
    {nombre: 'Daniela Toro', cargo: 'Directora Técnica', nivel: 'directiva', email: 'tecnica@fechitat.cl', orden: 4, activo: true},
  ]

  for (const d of directivos) {
    await client.createIfNotExists({_id: `directivo-${d.nombre.toLowerCase().replace(/\s+/g, '-')}`, _type: 'miembroOrganigrama', ...d})
    console.log(`  ✓ ${d.nombre} - ${d.cargo}`)
  }

  // ── Campeones ─────────────────────────────────────────────
  console.log('\n🏆 Creando salón de campeones...')
  const campeones = [
    {nombre: 'Osvaldo Rojas', slug: 'osvaldo-rojas', grado: 'Sahyun Nim · 7° Dan', titulo: 'Maestro Senior', nivel: 'internacional', anio: 2005, competencia: 'ITF Internacional'},
    {nombre: 'Ernesto Reyes', slug: 'ernesto-reyes', grado: 'Sahyun Nim · 7° Dan', titulo: 'Maestro Senior', nivel: 'internacional', anio: 2008, competencia: 'ITF Internacional'},
    {nombre: 'Javier Lillo', slug: 'javier-lillo', grado: 'Sabum Nim · 6° Dan', titulo: 'Maestro Instructor', nivel: 'panamericano', anio: 2010, competencia: 'Panamericano ITF'},
    {nombre: 'Marcelo Russo', slug: 'marcelo-russo', grado: 'Sabum Nim · 6° Dan', titulo: 'Maestro Instructor', nivel: 'nacional', anio: 2012, competencia: 'Nacional Chile'},
  ]

  for (const c of campeones) {
    await client.createIfNotExists({_id: `campeon-${c.slug}`, _type: 'campeon', ...c})
    console.log(`  ✓ ${c.nombre}`)
  }

  // ── Hitos históricos ──────────────────────────────────────
  console.log('\n📜 Creando línea de tiempo...')
  const hitos = [
    {titulo: 'Primeros dojangs ITF', anio: 2005, descripcion: 'Sabum Nim pioneros comienzan a enseñar Taekwon-Do ITF en la IV Región.', tipo: 'fundacion', destacado: true, orden: 1},
    {titulo: 'Se constituye la Federación', anio: 2011, descripcion: 'Osvaldo Rojas, Ernesto Reyes y Javier Lillo respaldan la creación de FECHITAT con personalidad jurídica.', tipo: 'fundacion', destacado: true, orden: 2},
    {titulo: 'Se une Sabumnim Marcelo Russo', anio: 2013, descripcion: 'Sus escuelas de la IV Región se integran, ampliando la red nacional.', tipo: 'organizacional', destacado: false, orden: 3},
    {titulo: 'Primer podio panamericano', anio: 2018, descripcion: 'La selección nacional obtiene sus primeras medallas internacionales.', tipo: 'logro', destacado: true, orden: 4},
    {titulo: 'Rumbo a Jesolo', anio: 2025, descripcion: '+150 competidores activos y delegación confirmada al Mundial ITF.', tipo: 'evento', destacado: true, orden: 5},
  ]

  for (const h of hitos) {
    await client.createIfNotExists({_id: `hito-${h.anio}`, _type: 'hitoHistorico', ...h})
    console.log(`  ✓ ${h.anio} - ${h.titulo}`)
  }

  // ── Eventos ───────────────────────────────────────────────
  console.log('\n📅 Creando eventos...')
  const eventos = [
    {
      titulo: 'XVIII Campeonato Mundial ITF',
      slug: 'mundial-itf-2025',
      fecha: '2025-10-03T09:00:00Z',
      tipo: 'competencia',
      estado: 'proximo',
      lugar: 'Jesolo, Italia',
      ciudad: 'Jesolo',
      descripcion: 'Delegación nacional confirmada para representar a Chile en el Mundial ITF.',
      destacado: true,
    },
    {
      titulo: 'Examen Nacional de Grado',
      slug: 'examen-nacional-2025',
      fecha: '2025-11-15T10:00:00Z',
      tipo: 'examen',
      estado: 'proximo',
      lugar: 'Santiago, Chile',
      ciudad: 'Santiago',
      descripcion: 'Todos los niveles. Inscripción a través de tu dojang afiliado.',
      destacado: false,
    },
    {
      titulo: 'Seminario Técnico Nacional',
      slug: 'seminario-tecnico-2025',
      fecha: '2025-12-07T09:00:00Z',
      tipo: 'seminario',
      estado: 'proximo',
      lugar: 'La Serena, Chile',
      ciudad: 'La Serena',
      descripcion: 'Con instructores invitados de ITF. Abierto a todos los grados.',
      destacado: false,
    },
    {
      titulo: 'Campeonato Nacional Absoluto 2024',
      slug: 'nacional-absoluto-2024',
      fecha: '2024-09-15T09:00:00Z',
      tipo: 'competencia',
      estado: 'finalizado',
      lugar: 'Santiago, Chile',
      ciudad: 'Santiago',
      descripcion: 'Competencia anual con participación de todas las escuelas afiliadas.',
      destacado: false,
    },
  ]

  for (const e of eventos) {
    await client.createIfNotExists({_id: `evento-${e.slug}`, _type: 'evento', ...e})
    console.log(`  ✓ ${e.titulo}`)
  }

  // ── Testimonios ───────────────────────────────────────────
  console.log('\n💬 Creando testimonios...')
  const testimonios = [
    {texto: '"Mi hija pasó de ser tímida a presentarse voluntaria en la escuela. El cambio se nota en su seguridad diaria, no solo en el dojang."', autor: 'Madre de alumna, 8 años', orden: 1, activo: true},
    {texto: '"Los instructores son exigentes pero muy pacientes. Nunca sentí que fuera un ambiente de presión, sino de aprendizaje real."', autor: 'Padre de alumno, 11 años', orden: 2, activo: true},
    {texto: '"Nos encantó que la federación tenga proyección internacional. Mi hijo ahora sueña con representar a Chile."', autor: 'Madre de alumno, 13 años', orden: 3, activo: true},
  ]

  for (const t of testimonios) {
    await client.createIfNotExists({_id: `testimonio-${t.orden}`, _type: 'testimonio', ...t})
    console.log(`  ✓ ${t.autor}`)
  }

  // ── Blog ──────────────────────────────────────────────────
  console.log('\n📝 Creando posts de blog...')
  const posts = [
    {titulo: 'Principios de la defensa personal en Taekwon-Do', slug: 'defensa-personal', fecha: '2025-06-15T10:00:00Z', autor: 'Comisión Técnica FECHITAT', extracto: 'Los fundamentos de la defensa personal según la filosofía ITF.', categorias: ['tecnica'], destacado: true},
    {titulo: 'Resultados del Campeonato Nacional 2024', slug: 'resultados-nacional-2024', fecha: '2024-09-20T10:00:00Z', autor: 'Prensa FECHITAT', extracto: 'Resumen completo de los resultados del campeonato nacional absoluto.', categorias: ['noticias', 'eventos'], destacado: true},
    {titulo: '5 deportistas destacados 2025', slug: 'deportistas-destacados-2025', fecha: '2025-01-10T10:00:00Z', autor: 'Comisión Técnica FECHITAT', extracto: 'Conoce a los competidores que brillaron este año.', categorias: ['noticias'], destacado: true},
    {titulo: 'El Taekwon-Do ITF en Chile: nuestra historia', slug: 'historia-itf-chile', fecha: '2024-03-01T10:00:00Z', autor: 'Directiva FECHITAT', extracto: 'Un recorrido por los 20 años del ITF en el país.', categorias: ['historia'], destacado: true},
  ]

  for (const p of posts) {
    await client.createIfNotExists({_id: `blog-${p.slug}`, _type: 'blogPost', ...p})
    console.log(`  ✓ ${p.titulo}`)
  }

  console.log('\n✅ ¡Contenido creado exitosamente!')
  console.log('   Abre Sanity Studio en http://localhost:3333 para ver el contenido.')
}

seed().catch(console.error)
