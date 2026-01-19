import { EXPERIENCE } from "@/data/experience";
import { withCorsJson, corsOk } from "@/lib/cors";

export async function GET() {
  return withCorsJson({ experience: EXPERIENCE });
}

export async function OPTIONS() {
  return corsOk();
}
