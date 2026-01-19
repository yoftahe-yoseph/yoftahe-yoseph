import { PROJECTS } from "@/data/projects";
import { withCorsJson, corsOk } from "@/lib/cors";

export async function GET() {
  return withCorsJson({ projects: PROJECTS });
}

export async function OPTIONS() {
  return corsOk();
}
