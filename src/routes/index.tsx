import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  CalendarDays,
  Search,
  MessageSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Clock,
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
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    glow: "shadow-blue-500/30",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "Meeting Notes Summarizer",
    description: "Extract key points, actions, and deadlines from notes.",
    icon: FileText,
    url: "/meeting",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    glow: "shadow-emerald-500/30",
    iconBg: "bg-gradient-to-br from-emerald-500 to-lime-500",
  },
  {
    title: "AI Task Planner",
    description: "Prioritize and schedule your work automatically.",
    icon: CalendarDays,
    url: "/planner",
    gradient: "from-amber-500 via-orange-500 to-red-400",
    glow: "shadow-orange-500/30",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  {
    title: "AI Research Assistant",
    description: "Get insights and summaries on any topic instantly.",
    icon: Search,
    url: "/research",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-400",
    glow: "shadow-violet-500/30",
    iconBg: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
  },
  {
    title: "AI Chat",
    description: "Ask anything and get professional AI assistance.",
    icon: MessageSquare,
    url: "/chat",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-400",
    glow: "shadow-pink-500/30",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
];

const stats = [
  { label: "Tasks Automated", value: "12.4k", icon: Zap, accent: "text-amber-500", ring: "ring-amber-400/30" },
  { label: "Hours Saved", value: "847", icon: Clock, accent: "text-cyan-500", ring: "ring-cyan-400/30" },
  { label: "Productivity Boost", value: "+38%", icon: TrendingUp, accent: "text-emerald-500", ring: "ring-emerald-400/30" },
];

function DashboardPage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden p-8">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-pink-400/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-transparent blur-3xl" />

      <div className="sticky top-0 z-10 -mx-8 -mt-8 bg-background/80 px-8 pb-8 pt-8 backdrop-blur-md">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                back
              </span>
            </h1>
            <p className="mt-2 text-muted-foreground">
              Pick a tool below to automate your work with AI.
            </p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`relative overflow-hidden rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur-sm ring-1 ${s.ring}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1 text-2xl font-bold">{s.value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-background ${s.accent}`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.url}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${feature.glow}`}
          >
            {/* gradient top bar */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
            {/* hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.06]`} />

            <div className="relative mb-4 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${feature.iconBg}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <ArrowRight className="h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
            <h3 className="relative text-base font-semibold text-card-foreground">
              {feature.title}
            </h3>
            <p className="relative mt-1 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Link>
        ))}

        {/* Highlight CTA card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 p-6 text-white shadow-xl shadow-fuchsia-500/30">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold">All Tools, One Workspace</h3>
            <p className="mt-1 text-sm text-white/90">
              Structured prompts deliver professional, actionable outputs tuned to each task.
            </p>
          </div>
          <p className="relative mt-4 text-xs text-white/80">
            ✨ AI-generated content may require human review.
          </p>
        </div>
      </div>
    </div>
  );
}
