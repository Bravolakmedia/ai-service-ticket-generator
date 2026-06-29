import TicketForm from "@/components/TicketForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl p-10">
        <h1 className="text-4xl font-bold mb-2">
          AI Service Ticket Generator
        </h1>

        <p className="text-gray-600 mb-8">
          Generate technician-ready service tickets using AI.
        </p>

        <TicketForm />
      </div>
    </main>
  );
}