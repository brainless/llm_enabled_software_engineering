export default function StateOfAgents() {
  return (
    <div class="flex h-full flex-col justify-center gap-10 px-16">
      <h2 class="text-5xl font-bold tracking-tight">The State of Coding with Agents</h2>
      <div class="grid grid-cols-2 gap-6 text-lg">
        <div class="card bg-base-200 p-6 gap-3">
          <h3 class="font-semibold text-xl text-primary">Where we are</h3>
          <ul class="flex flex-col gap-2 text-base-content/80 list-disc list-inside">
            <li>LLMs write production-quality code today</li>
            <li>Agents run autonomously: read, edit, test, commit</li>
            <li>Tools: Claude Code, Codex, opencode, Cursor, Aider</li>
            <li>Context windows now span entire codebases</li>
          </ul>
        </div>
        <div class="card bg-base-200 p-6 gap-3">
          <h3 class="font-semibold text-xl text-secondary">What's changed</h3>
          <ul class="flex flex-col gap-2 text-base-content/80 list-disc list-inside">
            <li>Developer role: architect &amp; reviewer, not typist</li>
            <li>Prompting and context design are core skills</li>
            <li>Speed: features in minutes, not days</li>
            <li>Quality depends on project structure &amp; guardrails</li>
          </ul>
        </div>
      </div>
      <p class="text-base-content/50 text-base italic">
        We are in the early days — but it already changes everything about how we work.
      </p>
    </div>
  );
}
