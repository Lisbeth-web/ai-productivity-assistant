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
  CheckCircle2,
  Brain,
  Clock,
  BarChart3,
  Zap,
  Users,
  Layers,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — AI Workplace Productivity Platform" },
      {
        name: "description",
        content:
          "Enterprise AI workspace to automate emails, meetings, planning, research, and communication.",
      },
    ],
  }),
  component: DashboardPage,
});

const kpis = [
  {
    label: "Emails Generated",
    value: "124",
    delta: "+12.4%",
    icon: Mail,
    accent: "text-blue-600",
    ring: "ring-blue-100",
    bg: "bg-blue-50",
  },
  {
    label: "Meetings Summarized",
    value: "56",
    delta: "+8.1%",
    icon: FileText,
    accent: "text-emerald-600",
    ring: "ring-emerald-100",
    bg: "bg-emerald-50",
  },
  {
    label: "Tasks Completed",
    value: "87",
    delta: "+15.3%",
    icon: CheckCircle2,
    accent: "text-amber-600",
    ring: "ring-amber-100",
    bg: "bg-amber-50",
  },
  {
    label: "Research Reports",
    value: "39",
    delta: "+5.6%",
    icon: Search,
    accent: "text-violet-600",
    ring: "ring-violet-100",
    bg: "bg-violet-50",
  },
];

const features = [
  {
    title: "Smart Email Generator",
    description: "Draft professional emails tailored to tone and audience.",
    icon: Mail,
    url: "/email",
    accent: "bg-blue-600",
    tint: "from-blue-50 to-transparent",
  },
  {
    title: "Meeting Notes Summarizer",
    description: "Extract key points, action items, and deadlines from notes.",
    icon: FileText,
    url: "/meeting",
    accent: "bg-emerald-600",
    tint: "from-emerald-50 to-transparent",
  },
  {
    title: "AI Task Planner",
    description: "Prioritize and schedule work automatically with AI.",
    icon: CalendarDays,
    url: "/planner",
    accent: "bg-amber-600",
    tint: "from-amber-50 to-transparent",
  },
  {
    title: "AI Research Assistant",
    description: "Get structured insights and summaries on any topic instantly.",
    icon: Search,
    url: "/research",
    accent: "bg-violet-600",
    tint: "from-violet-50 to-transparent",
  },
  {
    title: "AI Chat",
    description: "Ask anything and receive professional AI assistance in seconds.",
    icon: MessageSquare,
    url: "/chat",
    accent: "bg-rose-600",
    tint: "from-rose-50 to-transparent",
  },
];

const activity = [
  { icon: Mail, color: "text-blue-600 bg-blue-50", title: "Email generated for HR department", time: "2 min ago" },
  { icon: FileText, color: "text-emerald-600 bg-emerald-50", title: "Meeting summary created — Q4 Strategy Sync", time: "1 hr ago" },
  { icon: CalendarDays, color: "text-amber-600 bg-amber-50", title: "New task schedule generated for product team", time: "3 hr ago" },
  { icon: Search, color: "text-violet-600 bg-violet-50", title: "Research report completed — Market Landscape", time: "Yesterday" },
];

const usage = [
  { label: "Emails", value: 124, max: 250, color: "bg-blue-600" },
  { label: "Meetings", value: 56, max: 100, color: "bg-emerald-600" },
  { label: "Research", value: 39, max: 80, color: "bg-violet-600" },
  { label: "Chat Sessions", value: 214, max: 300, color: "bg-rose-600" },
];

const weekly = [
  { day: "Mon", emails: 18, tasks: 12, research: 6 },
  { day: "Tue", emails: 22, tasks: 16, research: 8 },
  { day: "Wed", emails: 14, tasks: 9, research: 5 },
  { day: "Thu", emails: 28, tasks: 20, research: 11 },
  { day: "Fri", emails: 24, tasks: 18, research: 7 },
  { day: "Sat", emails: 10, tasks: 6, research: 3 },
  { day: "Sun", emails: 8, tasks: 4, research: 2 },
];

const benefits = [
  { icon: Clock, title: "Reduce repetitive work", desc: "Automate drafting, summarizing, and planning so teams focus on outcomes." },
  { icon: Users, title: "Save employee time", desc: "Cut hours spent on email, notes, and research every single week." },
  { icon: TrendingUp, title: "Increase productivity", desc: "Standardize quality output across departments with AI-powered workflows." },
  { icon: Layers, title: "Centralize AI tools", desc: "One workspace for email, meetings, planning, research, and chat." },
  { icon: ShieldCheck, title: "Enterprise ready", desc: "Consistent, reviewable outputs built for professional environments." },
  { icon: Brain, title: "Smarter task management", desc: "Let AI prioritize, schedule, and track work across your team." },
];

function DashboardPage() {
  const maxWeekly = Math.max(...weekly.map((d) => d.emails + d.tasks + d.research));

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 px-4 py-6 backdrop-blur sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-md shadow-blue-600/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                AI-Powered Workplace Productivity Platform
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground sm:text-[15px]">
                Automate emails, meetings, planning, research, and workplace communication from one intelligent workspace.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>
      </header>

      <div className="space-y-8 px-4 py-6 sm:px-8">
        {/* KPI cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="group rounded-xl border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${kpi.bg} ${kpi.ring}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.accent}`} />
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-700">
                  <TrendingUp className="h-3 w-3" />
                  {kpi.delta}
                </span>
              </div>
              <div className="mt-4 text-2xl font-bold tracking-tight text-foreground">{kpi.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{kpi.label}</div>
            </div>
          ))}
        </section>

        {/* Tools */}
        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">AI Tools</h2>
              <p className="text-sm text-muted-foreground">Choose a workflow to get started.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.title}
                to={f.url}
                className="group relative flex flex-col overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${f.accent}`} />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.tint} opacity-60`} />
                <div className="relative mb-4 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg text-white shadow-sm ${f.accent}`}>
                    <f.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <h3 className="relative text-base font-semibold text-card-foreground">{f.title}</h3>
                <p className="relative mt-1 text-sm text-muted-foreground">{f.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Analytics row */}
        <section className="grid gap-4 lg:grid-cols-3">
          {/* Weekly chart */}
          <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">Weekly Productivity Overview</h3>
                <p className="text-sm text-muted-foreground">Activity across all AI tools this week.</p>
              </div>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex h-52 items-end gap-3">
              {weekly.map((d) => {
                const total = d.emails + d.tasks + d.research;
                const h = (total / maxWeekly) * 100;
                return (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <div className="flex w-full flex-col overflow-hidden rounded-md" style={{ height: `${h}%` }}>
                        <div className="bg-blue-600" style={{ flex: d.emails }} />
                        <div className="bg-amber-500" style={{ flex: d.tasks }} />
                        <div className="bg-violet-600" style={{ flex: d.research }} />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{d.day}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-blue-600" />Emails</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-amber-500" />Tasks</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-violet-600" />Research</span>
            </div>
          </div>

          {/* AI usage */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">AI Usage This Month</h3>
                <p className="text-sm text-muted-foreground">Across your workspace.</p>
              </div>
              <Zap className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {usage.map((u) => (
                <div key={u.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground">{u.label}</span>
                    <span className="font-medium text-muted-foreground">{u.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full rounded-full ${u.color}`} style={{ width: `${(u.value / u.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent activity */}
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-foreground">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">Latest actions across your workspace.</p>
            </div>
          </div>
          <ul className="divide-y">
            {activity.map((a, i) => (
              <li key={i} className="flex items-center gap-4 py-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${a.color}`}>
                  <a.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{a.title}</p>
                </div>
                <span className="text-xs text-muted-foreground">{a.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-foreground">Why Use AI Workplace?</h2>
            <p className="text-sm text-muted-foreground">Built to deliver measurable productivity gains across teams.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <b.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-foreground">{b.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
