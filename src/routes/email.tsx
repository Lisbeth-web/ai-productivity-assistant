import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Send, Copy, Check } from "lucide-react";
import { generateAiResponse } from "@/lib/ai.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoadingState } from "@/components/loading-state";
import { AiDisclaimer } from "@/components/ai-disclaimer";

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Email Generator — AI Workplace" },
      { name: "description", content: "Generate professional emails with AI." },
    ],
  }),
  component: EmailPage,
});

const tones = ["Professional", "Friendly", "Formal", "Casual", "Persuasive", "Apologetic"];
const audiences = ["Client", "Team", "Manager", "Vendor", "Stakeholder", "General"];

function EmailPage() {
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("Professional");
  const [audience, setAudience] = useState("Client");
  const [keyPoints, setKeyPoints] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = useServerFn(generateAiResponse);

  const handleGenerate = async () => {
    if (!purpose.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const system = `You are a professional email writing assistant. Write clear, concise, and well-structured emails. Use the specified tone and audience context. Include a subject line at the top. Format with proper paragraphs and sign-offs.`;
      const prompt = `Write a professional email with the following details:

Purpose: ${purpose}
Tone: ${tone}
Audience: ${audience}
${keyPoints ? `Key points to include:\n${keyPoints}` : ""}

Please provide:
1. A clear subject line
2. A well-structured email body
3. An appropriate sign-off`;

      const { text } = await generate({ data: { system, prompt } });
      setResult(text);
    } catch {
      setResult("Failed to generate email. Please try again.");
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
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Smart Email Generator
          </h1>
          <p className="text-sm text-muted-foreground">
            Draft professional emails tailored to tone and audience.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="purpose">Email Purpose</Label>
            <Input
              id="purpose"
              placeholder="e.g., Request project deadline extension"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Audience</Label>
              <Select value={audience} onValueChange={setAudience}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {audiences.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyPoints">Key Points (optional)</Label>
            <Textarea
              id="keyPoints"
              placeholder="List specific points to include in the email..."
              rows={4}
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading || !purpose.trim()}
            className="w-full"
          >
            {loading ? (
              "Generating..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Generate Email
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-3">
            <span className="text-sm font-medium text-card-foreground">
              Generated Email
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
              <LoadingState message="Drafting your email..." />
            ) : result ? (
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
                {result}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Your generated email will appear here.
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
