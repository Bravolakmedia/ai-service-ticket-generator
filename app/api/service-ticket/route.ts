import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { openai } from "@/lib/openai";
import { zodTextFormat } from "openai/helpers/zod";
import { ServiceTicketSchema } from "@/lib/schema";

export async function POST(req: Request) {
  try {
    const { customerRequest } = await req.json();

    const response = await openai.responses.parse({
      model: "gpt-5.4-mini",

      input: [
        {
          role: "system",
          content:
            "You are an expert dispatcher for a fire safety company.",
        },
        {
          role: "user",
          content: customerRequest,
        },
      ],

      text: {
        format: zodTextFormat(
          ServiceTicketSchema,
          "service_ticket",
        ),
      },
    });

    const ticket =
  ServiceTicketSchema.parse(
    response.output_parsed,
  );

    const savedTicket =
      await prisma.serviceTicket.create({
        data: {
          customerRequest,
          category: ticket.category,
          priority: ticket.priority,
          technician: ticket.technician,
          estimatedDuration:
            ticket.estimatedDuration,
          recommendedParts:
            ticket.recommendedParts,
          summary: ticket.summary,
        },
      });

    return NextResponse.json(savedTicket);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to generate ticket",
      },
      {
        status: 500,
      }
    );
  }
}