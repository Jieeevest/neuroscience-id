import Events from "@/components/sections/Events";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Events | Neuroscience Indonesia",
  description: "Explore our upcoming and past events related to neuroscience research and education in Indonesia.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Events />
      </div>
      <Footer />
    </main>
  );
}