import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CalendarDays, Zap, Copy, Check } from "lucide-react";
import { generateAiResponse } from "@/lib/ai.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingState } from "@/components/loading-state";
import { AiDisclaimer } from "@/components/ai-disclaimer";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Task Planner — AI Workplace" },
      { name: "description", content: "Plan and prioritize tasks with AI." },
    ],
  }),
  component: PlannerPage,
});

function PlannerPage() {
  const [goals, setGoals] = useState("");
  const [constraints, setConstraints] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = useServerFn(generateAiResponse);

  const handlePlan = async () => {
    if (!goals.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const system = `You are an expert task planner and productivity coach. Given a set of goals and constraints, create a structured task plan with:
1. Prioritized task list (High / Medium / Low priority)
2. Suggested order of execution
3. Time estimates where possible
4. Any dependencies between tasks
5. A brief rationale for the prioritization

Format clearly with headers and bullet points. Be practical and actionable.`;
      const prompt = `Please create a task plan based on the following information:

Goals / Tasks:
${goals}

${constraints ? `Constraints / Context:\n${constraints}` : ""}

Provide a prioritized, scheduled plan.`;

      const { text } = await generate({ data: { system, prompt } });
      setResult(text);
    } catch {
      setResult("Failed to generate plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-1 flex-col p-8">
      <div className="sticky top-0 z-10 -mx-8 -mt-8 flex items-center gap-3 border-b bg-background/95 px-8 pb-6 pt-8 backdrop-blur-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
          <CalendarDays className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            AI Task Planner
          </h1>
          <p className="text-sm text-muted-foreground">
            Prioritize and schedule your work automatically.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="goals">Goals & Tasks</Label>
            <Textarea
              id="goals"
              placeholder="List your goals and tasks for the week..."
              rows={8}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="constraints">Constraints (optional)</Label>
            <Input
              id="constraints"
              placeholder="e.g., 4 hours available, deadline Friday..."
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
            />
          </div>
          <Button
            onClick={handlePlan}
            disabled={loading || !goals.trim()}
            className="w-full"
          >
            {loading ? (
              "Planning..."
            ) : (
              <>
                <Zap className="mr-2 h-4 w-4" />
                Generate Plan
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-3">
            <span className="text-sm font-medium text-card-foreground">
              Task Plan
            </span>
            {result && (
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>
            )}
          </div>
          <div className="flex-1 p-6">
            {loading ? (
              <LoadingState message="Building your plan..." />
            ) : result ? (
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
                {result}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Your task plan will appear here.
              </div>
            )}
          </div>
          <div className="border-t px-6 py-3">
            <AiDisclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}
