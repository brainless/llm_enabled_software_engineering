export default function WhatYouOwn() {
  const delegate = [
    { what: "Formatting", to: "cargo fmt / prettier", how: "pre-commit hook" },
    { what: "Type consistency", to: "Generated TS from Rust", how: "ts-rs + generate script" },
    { what: "Schema drift", to: "Versioned migrations", how: "refinery, auto-run" },
    { what: "Build breakage", to: "Pre-commit hooks", how: "cargo check + npm build" },
    { what: "Deploy config", to: "Scripts from day one", how: "systemd, nginx, rsync" },
    { what: "Email parsing", to: "LLM + typed tool schema", how: "JsonSchema derive + retry loop" },
  ];

  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">What You Own. What You Delegate.</h2>
        <p class="text-xl text-base-content/60">Set the system up once — then step away from the details</p>
      </div>

      <div class="grid grid-cols-2 gap-6 items-start">
        <div class="flex flex-col gap-3">
          <h3 class="font-semibold text-base text-base-content/50 uppercase tracking-widest text-xs">You delegate to the toolchain</h3>
          <div class="flex flex-col gap-2">
            {delegate.map((row) => (
              <div class="flex items-center gap-3 bg-base-200 rounded-lg px-4 py-2.5">
                <span class="text-sm font-medium text-base-content/80 w-36 shrink-0">{row.what}</span>
                <span class="text-xs text-base-content/40 mx-1">→</span>
                <span class="text-sm text-base-content/60 flex-1">{row.to}</span>
                <span class="text-xs font-mono text-base-content/30 shrink-0">{row.how}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-semibold text-base text-base-content/50 uppercase tracking-widest text-xs">You still own</h3>
          <div class="flex flex-col gap-3">
            {[
              { label: "Architecture decisions", detail: "How the system is shaped — the agent builds within it" },
              { label: "Type design", detail: "What the contracts look like — this is your core leverage" },
              { label: "Context engineering", detail: "What the agent knows, in what structure, from day one" },
              { label: "Business logic review", detail: "Does it do the right thing, not just compile?" },
            ].map((item) => (
              <div class="card bg-primary/10 border border-primary/20 px-5 py-3 gap-1">
                <span class="font-semibold text-sm text-primary">{item.label}</span>
                <span class="text-sm text-base-content/60">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        The less you need to babysit, the more ambitious the features you can hand to the agent.
      </p>
    </div>
  );
}
