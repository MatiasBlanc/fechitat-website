// Endpoint JSON: eventos pasados paginados (para "Ver más" sin recargar página).
import { getEventosPasadosPaginados, getTotalEventosPasados } from "../../lib/sanityQueries";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const offset = Math.max(0, Number(url.searchParams.get("offset") ?? 0) || 0);
  const limite = Math.min(24, Math.max(1, Number(url.searchParams.get("limite") ?? 12) || 12));

  const [eventos, total] = await Promise.all([
    getEventosPasadosPaginados(offset, limite),
    getTotalEventosPasados(),
  ]);

  return new Response(
    JSON.stringify({ eventos, total, offset }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      },
    }
  );
};