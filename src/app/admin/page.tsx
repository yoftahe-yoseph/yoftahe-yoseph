import { connectToDatabase } from "@/lib/mongodb";

type MessageDTO = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default async function AdminPage() {
  const { db } = await connectToDatabase();
  const messages = await db
    .collection("messages")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const formatted: MessageDTO[] = messages.map((doc) => ({
    _id: doc._id.toString(),
    name: String(doc.name ?? ""),
    email: String(doc.email ?? ""),
    message: String(doc.message ?? ""),
    createdAt: ((doc.createdAt instanceof Date ? doc.createdAt : new Date()) as Date).toISOString(),
  }));

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Messages</h1>
        
        <div className="space-y-6">
          {formatted.map((message) => (
            <div key={message._id} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{message.name}</h3>
                  <p className="text-emerald-400">{message.email}</p>
                </div>
                <span className="text-sm text-zinc-400">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-zinc-300 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))}
          
          {formatted.length === 0 && (
            <p className="text-zinc-400 text-center py-12">No messages yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}