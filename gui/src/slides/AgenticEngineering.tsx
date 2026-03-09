export default function AgenticEngineering() {
  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">Agentic Engineering, not Vibe Coding</h2>
        <p class="text-xl text-base-content/60">The industry has a name for what went wrong — and what works instead</p>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card bg-error/10 border border-error/20 p-6 gap-3">
          <h3 class="font-semibold text-xl text-error">Vibe Coding <span class="text-base font-normal text-base-content/50">— 2025</span></h3>
          <ul class="flex flex-col gap-2 text-base-content/80 list-disc list-inside text-base">
            <li>Describe what you want, let AI figure it out</li>
            <li>Fast to start, painful to maintain</li>
            <li>Accumulates "cognitive debt" silently</li>
            <li>Breaks down past trivial projects</li>
          </ul>
        </div>
        <div class="card bg-success/10 border border-success/20 p-6 gap-3">
          <h3 class="font-semibold text-xl text-success">Agentic Engineering <span class="text-base font-normal text-base-content/50">— 2026</span></h3>
          <ul class="flex flex-col gap-2 text-base-content/80 list-disc list-inside text-base">
            <li>You design the guardrails; agent navigates them</li>
            <li>Discipline, structure, and verifiable feedback</li>
            <li>Context engineering is a first-class skill</li>
            <li>Agent speed + engineering rigour = confidence</li>
          </ul>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        "If 2025 was the year of the Vibe Coding party, 2026 is the year of the hangover." — The New Stack
      </p>

      <div class="flex gap-6 text-xs text-base-content/40">
        <a href="https://thenewstack.io/vibe-coding-agentic-engineering/" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">The New Stack — From vibes to engineering</a>
        <a href="https://github.blog/ai-and-ml/llms/why-ai-is-pushing-developers-toward-typed-languages/" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">GitHub Blog — AI &amp; typed languages</a>
        <a href="https://addyosmani.com/blog/ai-coding-workflow/" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Addy Osmani — LLM coding workflow 2026</a>
      </div>
    </div>
  );
}
