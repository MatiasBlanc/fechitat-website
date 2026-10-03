# Guía de Contribución — Sitio Web Oficial FECHITAT

Bienvenido al repositorio del sitio web oficial de la **Federación Chilena de Taekwon-Do Tradicional** (`fechitat/website`), construido con **Astro**, **Tailwind CSS** y **Sanity CMS**.

Dominio oficial: [https://fechitat.cl](https://fechitat.cl) (Staging: [https://fechitat-website.vercel.app](https://fechitat-website.vercel.app))

---

## 🛠️ Requisitos Previos

- **Node.js**: v20 o v22 LTS.
- **Gestor de paquetes**: `pnpm` (recomendado) o `npm`.
- **Sanity CMS**: Acceso al proyecto de Sanity de FECHITAT (opcional para desarrollo local estático si se usa fallback).

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone git@github.com:fechitat/website.git
   cd website
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   # o bien: npm install
   ```

3. **Variables de entorno**:
   ```bash
   cp .env.example .env
   ```
   Configura las variables de Sanity (Project ID, Dataset y API Token si aplica):
   ```env
   PUBLIC_SANITY_PROJECT_ID=tu_project_id
   PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=tu_token_de_lectura
   ```

4. **Levantar el servidor local**:
   ```bash
   pnpm dev
   # o bien: npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`.

---

## 📁 Arquitectura del Código

- `src/layouts/BaseLayout.astro`: Layout base que contiene el Header, Footer, BeltBar, metadatos SEO globales y Google Analytics/Search Console.
- `src/pages/`: Enrutamiento basado en archivos de Astro.
  - `index.astro`: Portada institucional.
  - `escuelas.astro` y `escuelas/[slug].astro`: Directorio de escuelas y dojangs oficiales.
  - `blog.astro` y `blog/[slug].astro`: Artículos federativos y noticias.
  - `eventos.astro` y `eventos/[slug].astro`: Calendario deportivo y torneos.
  - `federacion.astro`: Estructura, directiva y estatutos.
  - `estudio.astro` y `examen.astro`: Programas de graduación y teoría marcial.
- `src/components/`: Componentes modulares y reutilizables.
- `sanity/`: Esquemas de Sanity Studio para gestionar el contenido.

---

## 🌿 Flujo de Trabajo Git

1. **Ramas**:
   - `main`: Rama de producción (se despliega automáticamente en Vercel).
   - `feature/nombre-tarea` o `fix/nombre-arreglo`: Ramas de trabajo.
2. **Validar antes de enviar**:
   ```bash
   pnpm build
   ```
   Asegúrate de que la compilación termine con `Complete!` sin errores de TypeScript o rutas rotas.
3. **Pull Request**:
   - Abre un PR hacia `main`.
   - Vercel generará un *Preview Deployment* con una URL única para revisar el sitio antes de fusionar.
