import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { FileText, Wand2, Copy, Check } from "lucide-react";
import { generateAiResponse } from "@/lib/ai.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LoadingState } from "@/components/loading-state";
import { AiDisclaimer } from "@/components/ai-disclaimer";

export const Route = createFileRoute("/meeting")({
  head: () => ({
    meta: [
      { title: "Meeting Notes Summarizer — AI Workplace" },
      { name: "description", content: "Summarize meeting notes with AI." },
    ],
  }),
  component: MeetingPage,
});

function MeetingPage() {
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = useServerFn(generateAiResponse);

  const handleSummarize = async () => {
    if (!notes.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const system = `You are a professional meeting summarizer. Analyze meeting notes and produce a structured summary with:
1. Key Points — the most important discussion items
2. Action Items — specific tasks with owners if mentioned
3. Deadlines — any dates or timelines discussed
4. Decisions Made — any conclusions or decisions

Format the output cleanly with headers and bullet points.`;
      const prompt = `Please summarize the following meeting notes:

${notes}`;

      const { text } = await generate({ data: { system, prompt } });
      setResult(text);
    } catch {
      setResult("Failed to summarize notes. Please try again.");
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
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Meeting Notes Summarizer
          </h1>
          <p className="text-sm text-muted-foreground">
            Extract key points, actions, and deadlines from your meeting notes.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="notes">Meeting Notes</Label>
            <Textarea
              id="notes"
              placeholder="Paste your raw meeting notes here..."
              rows={16}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSummarize}
            disabled={loading || !notes.trim()}
            className="w-full"
          >
            {loading ? (
              "Summarizing..."
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Summarize Notes
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-3">
            <span className="text-sm font-medium text-card-foreground">
              Summary
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
              <LoadingState message="Analyzing your notes..." />
            ) : result ? (
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
                {result}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Your summary will appear here.
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
