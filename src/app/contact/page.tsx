import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Contact | Yoftahe Yoseph",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-zinc-300">Let&apos;s build something secure and performant together.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h2 className="text-xl font-semibold">Reach me</h2>
            <ContactInfo />
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
