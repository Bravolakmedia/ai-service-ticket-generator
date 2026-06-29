import { z } from "zod";

export const ServiceTicketSchema = z.object({
  category: z.string(),

  priority: z.enum([
    "Low 🟢",
    "Medium 🟡",
    "High 🟠",
    "Critical 🔴",
  ]),

  technician: z.string(),

  estimatedDuration: z.string(),

  recommendedParts: z.array(z.string()),

  summary: z.string(),
});

export type ServiceTicket =
  z.infer<typeof ServiceTicketSchema>;