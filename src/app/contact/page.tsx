import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact | Yoftahe Yoseph",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mb-8 space-y-3 text-left sm:mb-10">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-zinc-300">Let&apos;s build something secure and performant together.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Reach me</h2>
            <ContactInfo />
          </div>
        </Reveal>
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
