import { NextResponse } from "next/server";
import { CORS_HEADERS } from "@/lib/cors";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { Message } from "@/models/message";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Share a bit more detail").max(2000),
});

export async function POST(request: Request) {
  try {
    // Basic in-memory rate limiting (per IP) — 5 requests / 10 minutes
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("cf-connecting-ip") ||
      "unknown";
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const max = 5;
    type RateStore = Map<string, number[]>;
    const globalWithRateStore = global as typeof globalThis & { _rateStore?: RateStore };
    const store: RateStore =
      globalWithRateStore._rateStore || (globalWithRateStore._rateStore = new Map());

    const bucket = store.get(ip) || [];
    const recent = bucket.filter((ts: number) => now - ts < windowMs);
    if (recent.length >= max) {
      return NextResponse.json({ error: "Too many requests. Try later." }, { status: 429 });
    }
    store.set(ip, [...recent, now]);

    const payload = await request.json();
    const data = contactSchema.parse(payload);

    await connectToDatabase();
    await Message.create(data);

    const res = NextResponse.json({ ok: true }, { status: 201 });
    Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues?.[0]?.message ?? "Invalid input";
      const res = NextResponse.json({ error: first }, { status: 400 });
      Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
      return res;
    }

    const res = NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 }
    );
    Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }
}

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}
