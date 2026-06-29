"use client";

import { useState } from "react";
import TicketCard from "./TicketCard";

export default function TicketForm() {
  const [customerRequest, setCustomerRequest] = useState("");

  const [ticket, setTicket] = useState(null);

  const [loading, setLoading] = useState(false);

  async function generateTicket() {

    if (!customerRequest) return;

    setLoading(true);

    const response = await fetch("/api/service-ticket", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        customerRequest,
      }),
    });

    const data = await response.json();

    setTicket(data);

    setLoading(false);
  }

  return (
    <>
      <textarea
        className="w-full rounded border p-4 h-40"
        placeholder="Describe customer's issue..."

        value={customerRequest}

        onChange={(e) =>
          setCustomerRequest(e.target.value)
        }
      />

      <button

        onClick={generateTicket}

        disabled={loading}

        className="mt-5 bg-blue-600 px-6 py-3 rounded text-white"
      >
        {loading
          ? "Generating..."
          : "Generate Service Ticket"}
      </button>

      {ticket && (
        <TicketCard ticket={ticket} />
      )}
    </>
  );
}