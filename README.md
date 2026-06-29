# AI Service Ticket Generator

An AI-powered service ticket generation application built with **Next.js**, **OpenAI Responses API**, **Prisma ORM**, and **Supabase PostgreSQL**.

The application transforms natural language customer support requests into structured service tickets using Large Language Models (LLMs) with **Structured Outputs (JSON Schema)** for reliable and consistent results.

---

## 🚀 Features

* 🤖 AI-powered service ticket generation
* 📋 Structured ticket output using OpenAI Responses API
* ✅ JSON Schema validation with Zod
* 💾 Persistent storage using Prisma ORM and Supabase PostgreSQL
* ⚡ Built with Next.js App Router
* 🎨 Responsive UI with Tailwind CSS
* ⏳ Loading indicator while AI generates responses
* 🔒 Environment variable configuration for secure API keys

---

## 🛠 Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* OpenAI Responses API
* Zod
* Prisma ORM

### Database

* Supabase PostgreSQL

### AI

* OpenAI GPT-5 Mini
* Structured Outputs (JSON Schema)

---

## 📁 Project Structure

```text
app/
├── api/
│   └── service-ticket/
│       └── route.ts
├── page.tsx

components/
├── LoadingSpinner.tsx
├── TicketCard.tsx
└── TicketForm.tsx

lib/
├── openai.ts
├── prisma.ts
└── schema.ts

prisma/
└── schema.prisma
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ai-service-ticket-generator.git
```

Navigate into the project:

```bash
cd ai-service-ticket-generator
```

Install dependencies:

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
OPENAI_API_KEY=your_openai_api_key

DATABASE_URL=your_supabase_transaction_pooler_url

DIRECT_URL=your_supabase_session_pooler_url

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Database Setup

Push the Prisma schema to Supabase:

```bash
npx prisma db push
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

## Run the Application

Development mode:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Example

### Customer Request

```
My fire alarm is beeping every 30 minutes.
```

### AI Generated Ticket

**Category**

```
Fire Alarm Troubleshooting
```

**Priority**

```
Medium
```

**Technician**

```
Fire Alarm Service Technician
```

**Estimated Duration**

```
1–2 hours
```

**Summary**

```
Fire alarm is beeping every 30 minutes, which may indicate a low backup battery,
device fault, or control panel issue.
```

**Recommended Parts**

* Backup battery
* Smoke detector head
* Control panel battery

---

## Architecture

```text
Customer Request
        │
        ▼
Next.js Frontend
        │
        ▼
API Route
        │
        ▼
OpenAI Responses API
        │
        ▼
Structured JSON Output
        │
        ▼
Prisma ORM
        │
        ▼
Supabase PostgreSQL
        │
        ▼
Response to Frontend
```

---

## Future Improvements

* User authentication
* Ticket history dashboard
* Ticket status management
* Email notifications
* AI confidence score
* Retrieval-Augmented Generation (RAG) using internal documentation
* Multi-tenant support
* Admin analytics dashboard

---

## Learning Outcomes

This project demonstrates practical experience with:

* Large Language Models (LLMs)
* Prompt Engineering
* OpenAI Responses API
* Structured Outputs
* Zod Schema Validation
* Next.js App Router
* Prisma ORM
* PostgreSQL
* Supabase
* REST API Development
* Full-Stack TypeScript

---

## Deployment

The application can be deployed on:

* Vercel
* Supabase
* OpenAI Platform

---

## Author

**Olukosi Ismaila**

Full Stack & AI Developer

* GitHub: https://github.com/Bravolakmedia
* LinkedIn: https://www.linkedin.com/in/olukosi-ismaila
* Email: [olukosiolakunle@gmail.com](mailto:olukosiolakunle@gmail.com)

---

## License

This project is licensed under the MIT License.
