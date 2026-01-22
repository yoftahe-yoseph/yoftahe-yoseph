import { z } from "zod";
import { withCorsJson, corsOk } from "@/lib/cors";
import { connectToDatabase } from "@/lib/mongodb";

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tech: z.array(z.string()).default([]),
  link: z.string().url().optional(),
});

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const projects = await db
      .collection("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const normalized = projects.map(({ _id, createdAt, updatedAt, ...rest }) => ({
      _id: _id.toString(),
      createdAt,
      updatedAt,
      ...rest,
    }));

    return withCorsJson({ projects: normalized });
  } catch (error) {
    return withCorsJson({ error: "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = projectSchema.parse(payload);

    const { db } = await connectToDatabase();
    const doc = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("projects").insertOne(doc);

    return withCorsJson({ id: result.insertedId.toString(), ...doc }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return withCorsJson({ error: error.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    return withCorsJson({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return corsOk();
}
