export default function VerifiableLoop() {
  const steps = [
    {
      label: "Types",
      detail: "Rust types → generated TypeScript",
      note: "Single source of truth. Contract enforced at compile time on both ends.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Compile",
      detail: "cargo check + npm run build",
      note: "Agent runs this after every change. No broken API surface ships.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      label: "Schema",
      detail: "Versioned DB migrations",
      note: "Schema changes are tracked. Agent applies them; no drift, no surprises.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      label: "Commit",
      detail: "Pre-commit hooks",
      note: "fmt + check + test + frontend build must all pass. Nothing lands broken.",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      label: "Deploy",
      detail: "Scripts from day one",
      note: "Server setup, systemd, nginx — agent can validate the full stack, not just dev.",
      color: "text-success",
      bg: "bg-success/10",
    },
  ];

  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">Every Step Is Verifiable</h2>
        <p class="text-xl text-base-content/60">The agent doesn't need to be "smart" about correctness — the toolchain enforces it</p>
      </div>

      <div class="flex gap-3 items-stretch">
        {steps.map((step, i) => (
          <div class={`flex-1 rounded-xl p-4 flex flex-col gap-2 ${step.bg}`}>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-base-content/30">{i + 1}</span>
              <span class={`font-bold text-lg ${step.color}`}>{step.label}</span>
            </div>
            <p class="text-xs font-mono text-base-content/60">{step.detail}</p>
            <p class="text-sm text-base-content/70 mt-auto">{step.note}</p>
          </div>
        ))}
      </div>

      <p class="text-base-content/50 text-base italic">
        94% of LLM compilation errors are type-check failures. Strong types aren't optional — they're your first guardrail.
      </p>

      <div class="flex gap-6 text-xs text-base-content/40">
        <a href="https://github.blog/ai-and-ml/llms/why-ai-is-pushing-developers-toward-typed-languages/" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">GitHub Blog — AI &amp; typed languages</a>
        <a href="https://www.anthropic.com/engineering/claude-code-best-practices" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Anthropic — Claude Code best practices</a>
        <a href="https://arxiv.org/abs/2509.14744" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">arXiv — Agentic coding manifests study</a>
      </div>
    </div>
  );
}
