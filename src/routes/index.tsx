import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  CalendarDays,
  Search,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — AI Workplace Productivity Assistant" },
      { name: "description", content: "Your AI-powered productivity hub." },
    ],
  }),
  component: DashboardPage,
});

const features = [
  {
    title: "Smart Email Generator",
    description: "Draft professional emails tailored to tone and audience.",
    icon: Mail,
    url: "/email",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Meeting Notes Summarizer",
    description: "Extract key points, actions, and deadlines from notes.",
    icon: FileText,
    url: "/meeting",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "AI Task Planner",
    description: "Prioritize and schedule your work automatically.",
    icon: CalendarDays,
    url: "/planner",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "AI Research Assistant",
    description: "Get insights and summaries on any topic instantly.",
    icon: Search,
    url: "/research",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "AI Chat",
    description: "Ask anything and get professional AI assistance.",
    icon: MessageSquare,
    url: "/chat",
    color: "bg-rose-500/10 text-rose-600",
  },
];

function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="mt-2 text-muted-foreground">
          Pick a tool below to automate your work with AI.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.url}
            className="group flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="text-base font-semibold text-card-foreground">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-xl border bg-gradient-to-r from-primary/5 to-accent/5 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              AI Workplace Assistant
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              This assistant uses structured prompt engineering to deliver
              professional, actionable outputs. Each tool is optimized for a
              specific work task. AI-generated content may require human
              review before sending or sharing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
