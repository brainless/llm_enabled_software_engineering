export default function CliFirst() {
  const commits = [
    "Add email content inspect CLI and improve normalization",
    "Add unified email normalization and sender LLM input preview",
    "Add reverse template extractor and wire template detect flow",
    "Separate Bill and Transaction types for clearer domain modeling",
    "Improve reverse template extraction to use simple variable placeholders",
    "Replace LLM reverse template extractor with variable extraction approach",
    "Align financial extract to use LLM variable extraction pipeline",
  ];

  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">CLI-First: Build the Pipeline Before the API</h2>
        <p class="text-xl text-base-content/60">Test your core logic against real data before wiring anything to a server</p>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-4">
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-lg text-primary">The binary</h3>
            <code class="text-sm font-mono bg-base-300 rounded-lg px-3 py-2 text-success">
              cargo run --bin inspect_email_content -- &lt;email_id&gt;
            </code>
            <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
              <li>Normalize raw email (HTML → clean text)</li>
              <li>LLM classifies: Bill? Transaction? Both?</li>
              <li>LLM extracts: amount, date, vendor, reference</li>
              <li>Prints DB preview — exactly what would be stored</li>
            </ul>
          </div>
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-lg text-secondary">Why it matters</h3>
            <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
              <li>Real data from day one — no mocks, no fixtures</li>
              <li>No server, no frontend, no API noise</li>
              <li>Change a prompt or type → re-run in seconds</li>
              <li>API integration is just plumbing once this works</li>
              <li>The agent can run this binary too — same feedback loop</li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-semibold text-base text-base-content/50 uppercase tracking-widest text-xs mb-1">Git history — the pipeline evolving</h3>
          <div class="flex flex-col gap-1">
            {commits.map((msg, i) => (
              <div class="flex gap-3 items-start text-sm">
                <span class="font-mono text-xs text-base-content/30 mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span class="text-base-content/70">{msg}</span>
              </div>
            ))}
          </div>
          <p class="text-xs text-base-content/40 mt-2 italic">Each commit is a verifiable step. No broken state ever landed.</p>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        Core logic lives independently of its delivery mechanism — the API is a thin layer on top.
      </p>
    </div>
  );
}
