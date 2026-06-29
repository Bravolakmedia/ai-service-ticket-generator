type Props = {
  ticket: any;
};

export default function TicketCard({
  ticket,
}: Props) {
  return (
    <div className="mt-10 rounded-lg bg-white shadow p-6">

      <h2 className="text-2xl font-bold mb-4">
        Generated Ticket
      </h2>

      <div className="space-y-2">

        <p>
          <strong>Category:</strong>
          {" "}
          {ticket.category}
        </p>

        <p>
          <strong>Priority:</strong>
          {" "}
          {ticket.priority}
        </p>

        <p>
          <strong>Technician:</strong>
          {" "}
          {ticket.technician}
        </p>

        <p>
          <strong>Estimated Time:</strong>
          {" "}
          {ticket.estimatedDuration}
        </p>

        <p>
          <strong>Summary:</strong>
          {" "}
          {ticket.summary}
        </p>

        <div>

          <strong>Recommended Parts</strong>

          <ul className="list-disc ml-5">

            {ticket.recommendedParts.map(
              (part: string) => (
                <li key={part}>
                  {part}
                </li>
              )
            )}

          </ul>

        </div>

      </div>

    </div>
  );
}