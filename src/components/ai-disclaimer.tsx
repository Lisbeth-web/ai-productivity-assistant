import { AlertTriangle } from "lucide-react";

export function AiDisclaimer() {
  return (
    <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
      <span>AI-generated content may require human review.</span>
    </div>
  );
}
