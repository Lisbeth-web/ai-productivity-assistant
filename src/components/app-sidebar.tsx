import { Link, useRouterState } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  CalendarDays,
  Search,
  MessageSquare,
  LayoutDashboard,
  Bot,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Email Generator", url: "/email", icon: Mail },
  { title: "Meeting Notes", url: "/meeting", icon: FileText },
  { title: "Task Planner", url: "/planner", icon: CalendarDays },
  { title: "Research", url: "/research", icon: Search },
  { title: "AI Chat", url: "/chat", icon: MessageSquare },
];

interface AppSidebarProps {
  className?: string;
  mobileOpen?: boolean;
  onClose?: () => void;
}

export function AppSidebar({ className, mobileOpen, onClose }: AppSidebarProps) {
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r bg-sidebar text-sidebar-foreground transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Bot className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            AI Workplace
          </span>
          <button
            onClick={onClose}
            className="ml-auto lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-4">
          {navItems.map((item) => {
            const active = currentPath === item.url;
            return (
              <Link
                key={item.title}
                to={item.url}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border px-6 py-4">
          <p className="text-xs text-muted-foreground">
            AI-generated content may require human review.
          </p>
        </div>
      </aside>
    </>
  );
}
