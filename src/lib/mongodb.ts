import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string | undefined;

type Cached = {
  client: MongoClient | null;
  db: Db | null;
  promise: Promise<{ client: MongoClient; db: Db }> | null;
};

const globalWithMongo = global as typeof globalThis & { _mongo?: Cached };

let cached: Cached = globalWithMongo._mongo || {
  client: null,
  db: null,
  promise: null,
};

if (!globalWithMongo._mongo) {
  globalWithMongo._mongo = cached;
}

async function connectToDatabase() {
  if (!uri) {
    throw new Error("MONGODB_URI is not set in the environment");
  }

  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri as string).then((client) => {
      const db = client.db();
      return { client, db };
    });
  }

  const { client, db } = await cached.promise;
  cached.client = client;
  cached.db = db;
  return { client, db };
}

export { connectToDatabase };
export default connectToDatabase;
