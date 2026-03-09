export default function ContextEngineering() {
  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">Context Engineering</h2>
        <p class="text-xl text-base-content/60">Deliberately designing what the agent knows — and when it knows it</p>
      </div>

      <div class="grid grid-cols-3 gap-5">
        <div class="card bg-base-200 p-5 gap-3">
          <h3 class="font-semibold text-lg text-primary">CLAUDE.md</h3>
          <p class="text-sm text-base-content/60">Loaded at the start of every session. Tells the agent:</p>
          <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
            <li>Tech stack and versions</li>
            <li>Where types, migrations, scripts live</li>
            <li>How to run, test, build, deploy</li>
            <li>Project-specific conventions</li>
            <li>What not to change</li>
          </ul>
          <p class="text-xs text-base-content/40 mt-auto italic">Written once. Used every session.</p>
        </div>

        <div class="card bg-base-200 p-5 gap-3">
          <h3 class="font-semibold text-lg text-secondary">Project structure as context</h3>
          <p class="text-sm text-base-content/60">Consistent structure means the agent already knows where to look:</p>
          <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/70 leading-relaxed">{`shared-types/src/   ← types
backend/migrations/ ← schema
backend/src/        ← handlers
gui/src/types/      ← generated TS
scripts/            ← deploy`}</pre>
          <p class="text-xs text-base-content/40 mt-auto italic">No hunting. No asking.</p>
        </div>

        <div class="card bg-base-200 p-5 gap-3">
          <h3 class="font-semibold text-lg text-accent">rustysolid as pre-engineered context</h3>
          <p class="text-sm text-base-content/60">A fresh clone gives the agent:</p>
          <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
            <li>A working stack to build on</li>
            <li>Known patterns to follow</li>
            <li>Hooks already in place</li>
            <li>Deploy scripts already written</li>
          </ul>
          <p class="text-xs text-base-content/40 mt-auto italic">Agent is productive from the first prompt.</p>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        The template is not just for humans — it is a pre-engineered environment for the agent to work confidently inside.
      </p>

      <div class="flex gap-6 text-xs text-base-content/40">
        <a href="https://arxiv.org/abs/2509.14744" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">arXiv — Agentic coding manifests study</a>
        <a href="https://code.claude.com/docs/en/how-claude-code-works" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Claude Code — How it works</a>
        <a href="https://matsen.fhcrc.org/general/2025/10/30/agentic-coding-principles.html" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Agentic coding from first principles</a>
      </div>
    </div>
  );
}
