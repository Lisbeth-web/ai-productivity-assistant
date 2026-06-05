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

type Feature = {
  title: string;
  description: string;
  icon: typeof Mail;
  url: string;
  gradient: string;
  iconBg: string;
  border: string;
  hoverShadow: string;
  bgTint: string;
};

const features: Feature[] = [
  {
    title: "Smart Email Generator",
    description: "Draft professional emails tailored to tone and audience.",
    icon: Mail,
    url: "/email",
    gradient: "from-sky-500 via-blue-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    border: "hover:border-sky-400/70",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.6)]",
    bgTint: "from-sky-50/80 via-blue-50/40 to-transparent dark:from-sky-950/30 dark:via-blue-950/20",
  },
  {
    title: "Meeting Notes Summarizer",
    description: "Extract key points, actions, and deadlines from notes.",
    icon: FileText,
    url: "/meeting",
    gradient: "from-emerald-500 via-green-500 to-teal-400",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    border: "hover:border-emerald-400/70",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]",
    bgTint: "from-emerald-50/80 via-green-50/40 to-transparent dark:from-emerald-950/30 dark:via-green-950/20",
  },
  {
    title: "AI Task Planner",
    description: "Prioritize and schedule your work automatically.",
    icon: CalendarDays,
    url: "/planner",
    gradient: "from-orange-500 via-amber-500 to-rose-400",
    iconBg: "bg-gradient-to-br from-orange-500 to-rose-500",
    border: "hover:border-orange-400/70",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.6)]",
    bgTint: "from-orange-50/80 via-amber-50/40 to-transparent dark:from-orange-950/30 dark:via-amber-950/20",
  },
  {
    title: "AI Research Assistant",
    description: "Get insights and summaries on any topic instantly.",
    icon: Search,
    url: "/research",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-400",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    border: "hover:border-violet-400/70",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)]",
    bgTint: "from-violet-50/80 via-purple-50/40 to-transparent dark:from-violet-950/30 dark:via-purple-950/20",
  },
  {
    title: "AI Chat",
    description: "Ask anything and get professional AI assistance.",
    icon: MessageSquare,
    url: "/chat",
    gradient: "from-pink-500 via-fuchsia-500 to-rose-400",
    iconBg: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    border: "hover:border-pink-400/70",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)]",
    bgTint: "from-pink-50/80 via-fuchsia-50/40 to-transparent dark:from-pink-950/30 dark:via-fuchsia-950/20",
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
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(at_15%_15%,rgba(167,139,250,0.18),transparent_55%),radial-gradient(at_85%_10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(at_85%_85%,rgba(236,72,153,0.12),transparent_55%),radial-gradient(at_10%_90%,rgba(52,211,153,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="sticky top-0 z-10 -mx-8 -mt-8 bg-background/70 px-8 pb-8 pt-8 backdrop-blur-md">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Welcome back
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
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${feature.border} ${feature.hoverShadow}`}
          >
            {/* gradient top bar */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
            {/* tinted background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgTint} opacity-60`} />
            {/* hover sheen */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]`} />

            <div className="relative mb-4 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}
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
