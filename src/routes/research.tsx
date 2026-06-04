import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Search, Lightbulb, Copy, Check } from "lucide-react";
import { generateAiResponse } from "@/lib/ai.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LoadingState } from "@/components/loading-state";
import { AiDisclaimer } from "@/components/ai-disclaimer";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Assistant — AI Workplace" },
      { name: "description", content: "Get AI-powered research insights and summaries." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = useServerFn(generateAiResponse);

  const handleResearch = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const system = `You are a professional research assistant. Given a topic and any context, produce a structured research brief with:
1. Executive Summary — a concise overview
2. Key Insights — the most important findings and takeaways
3. Detailed Analysis — deeper exploration of relevant aspects
4. Recommendations — actionable next steps or considerations
5. Sources / References — note that these are AI-generated suggestions and should be verified

Write in a professional, objective tone. Be thorough but concise.`;
      const prompt = `Please research and summarize the following topic:

Topic: ${topic}

${context ? `Additional Context:\n${context}` : ""}

Provide a comprehensive research brief.`;

      const { text } = await generate({ data: { system, prompt } });
      setResult(text);
    } catch {
      setResult("Failed to generate research. Please try again.");
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
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600">
          <Search className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            AI Research Assistant
          </h1>
          <p className="text-sm text-muted-foreground">
            Get insights and summaries on any topic instantly.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="topic">Research Topic</Label>
            <Textarea
              id="topic"
              placeholder="Enter the topic you want to research..."
              rows={6}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="context">Context (optional)</Label>
            <Textarea
              id="context"
              placeholder="Any specific angles, questions, or background..."
              rows={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
          <Button
            onClick={handleResearch}
            disabled={loading || !topic.trim()}
            className="w-full"
          >
            {loading ? (
              "Researching..."
            ) : (
              <>
                <Lightbulb className="mr-2 h-4 w-4" />
                Generate Research
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col rounded-xl border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-3">
            <span className="text-sm font-medium text-card-foreground">
              Research Brief
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
              <LoadingState message="Researching your topic..." />
            ) : result ? (
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
                {result}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Your research brief will appear here.
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
