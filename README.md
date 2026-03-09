# LLM Enabled Software Engineering — Workshop Slideshow

A workshop on building software with coding agents using well-established engineering practices as the foundation. The core argument: you don't need to review every line the agent writes — you design systems where the toolchain does the checking for you.

---

## Central Thesis

> **Agent speed + engineering rigour = confidence.**
> The agent is fast. The toolchain is honest. Together, you ship with confidence.

Traditional software engineering practices — strong types, compilers, linters, migrations, hooks, deployment scripts — become the agent's **guardrails and feedback loops**. The agent runs a command, gets pass/fail, and self-corrects. Your role shifts from code reviewer to architect of the system the agent works within.

---

## Slide Outline

### Slide 1 — Title
`HelloWorld.tsx`

**LLM Enabled Software Engineering** — A workshop for developers.

---

### Slide 2 — The State of Coding with Agents
`StateOfAgents.tsx`

High-level current affairs. Two columns:
- **Where we are:** LLMs write production code, agents run autonomously, tools have matured (Claude Code, Codex, opencode, Cursor), context windows span entire codebases.
- **What's changed:** Developer role is now architect & reviewer. Prompting and context design are core skills. Speed is measured in minutes, not days. Quality depends on project structure.

---

### Slide 3 — Agentic Engineering, not Vibe Coding
`AgenticEngineering.tsx`

Names the contrast the industry has settled on. Two columns:
- **Vibe Coding (2025):** Fast to start, painful to maintain. Accumulates "cognitive debt." Breaks down past trivial projects.
- **Agentic Engineering (2026):** You design the guardrails, agent navigates them. Discipline, structure, verifiable feedback. Context engineering as a first-class skill.

Quote: *"If 2025 was the year of the Vibe Coding party, 2026 is the year of the hangover."* — The New Stack

---

### Slide 4 — Every Step Is Verifiable
`VerifiableLoop.tsx`

Five-step horizontal flow: Types → Compile → Schema → Commit → Deploy. Each step gives the agent an objective pass/fail signal. Stat: *"94% of LLM compilation errors are type-check failures."*

---

### Slide 5 — CLI-First: Build the Pipeline Before the API
`CliFirst.tsx`

Before any API endpoint exists, build and iterate the core data/processing flow as a standalone CLI binary against real data. From `dwata`: `cargo run --bin inspect_email_content -- <email_id>` runs normalize → LLM classify → LLM extract → DB preview. When the CLI is right, API integration is just plumbing.

---

### Slide 6 — LLM as a Structured Parser
`LlmStructuredParser.tsx`

Types with `JsonSchema` derive become the LLM's tool call schema directly. LLM handles ambiguity (classify, identify, extract). Rust handles correctness (parse amounts/dates, validate). Agent loop handles failures (retry on invalid JSON, prompt for missing tool call).

*"You never wrote a parser for email formats — the LLM is the parser. Your types define what a correct parse looks like."*

---

### Slide 7 — Type-Driven Development in Practice
`TypeDrivenDev.tsx`

The four-step workflow from `rustysolid`:
1. Define type in `shared-types/src/lib.rs` with `#[derive(TS)]`
2. Run `generate_api_types` → TypeScript written to `gui/src/types/api.ts`
3. Backend handler implements against the Rust type
4. Frontend uses the generated TypeScript type

Add a field in Rust → regenerate → TypeScript compile error points exactly where the UI needs updating. The agent can't hallucinate the API shape.

---

### Slide 8 — Context Engineering
`ContextEngineering.tsx`

Three columns: `CLAUDE.md` (loaded every session, captures stack/conventions/structure), project structure as implicit context (agent knows where everything lives without asking), `rustysolid` as a pre-engineered agent environment (productive from the first prompt on a fresh clone).

*"The template is not just for humans — it is a pre-engineered environment for the agent to work confidently inside."*

---

### Slide 9 — What You Own. What You Delegate.
`WhatYouOwn.tsx`

Two columns:
- **You delegate:** formatting, type consistency, schema drift, build breakage, deploy config, email parsing — each mapped to the specific tool/mechanism.
- **You still own:** architecture decisions, type design, context engineering, business logic review.

*"The less you need to babysit, the more ambitious the features you can hand to the agent."*

---

## Reference Projects

- **`rustysolid`** — `~/Projects/rustysolid` — The template. Actix Web + SolidJS, Rust types → generated TS, SQLite/PostgreSQL via features, pre-commit hooks (fmt/check/test/build), systemd/nginx deployment scripts, Casbin auth starters.
- **`dwata`** — `~/Projects/dwata` — The inspiration. Personal data intelligence platform. Type-driven financial extraction, LLM agents with typed tool schemas, CLI-first pipeline development, OS keychain credential management, GitHub Actions CI/CD.

---

## Tech Stack (this slideshow)
- SolidJS + Vite
- Tailwind CSS v4
- DaisyUI v5
- Each slide is a component in `gui/src/slides/`
- Register slides in `gui/src/slides/index.ts`

## Slide Component Template

```tsx
export default function SlideN() {
  return (
    <div class="flex h-full flex-col justify-center gap-8 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">Slide Title</h2>
        <p class="text-xl text-base-content/60">Subtitle or framing sentence</p>
      </div>

      {/* Main content */}

      <p class="text-base-content/50 text-base italic">
        Closing callout or quote
      </p>

      <div class="flex gap-6 text-xs text-base-content/40">
        <a href="..." target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Source — Description</a>
      </div>
    </div>
  );
}
```

Register in `gui/src/slides/index.ts`:
```ts
import SlideN from './SlideN';
// add to slides array:
{ id: N, title: 'Slide Title', component: SlideN },
```
