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

Closing line: *"We are in the early days — but it already changes everything about how we work."*

---

### Slide 3 — Agentic Engineering, not Vibe Coding
`AgenticEngineering.tsx`

Names the contrast the industry has settled on. Two columns:
- **Vibe Coding (2025):** Describe what you want, let AI figure it out. Fast to start, painful to maintain. Accumulates "cognitive debt." Breaks down past trivial projects.
- **Agentic Engineering (2026):** You design the guardrails, agent navigates them. Discipline, structure, verifiable feedback. Context engineering as a first-class skill.

Quote: *"If 2025 was the year of the Vibe Coding party, 2026 is the year of the hangover."* — The New Stack

Sources:
- https://thenewstack.io/vibe-coding-agentic-engineering/
- https://github.blog/ai-and-ml/llms/why-ai-is-pushing-developers-toward-typed-languages/
- https://addyosmani.com/blog/ai-coding-workflow/

---

### Slide 4 — Every Step Is Verifiable
`VerifiableLoop.tsx`

Five-step horizontal flow showing the concrete practice from the `rustysolid` template and how each step gives the agent an objective feedback signal:

| Step | Practice | Why it matters for agents |
|------|----------|--------------------------|
| Types | Rust types → generated TypeScript | Single source of truth. Contract enforced at compile time on both ends. |
| Compile | `cargo check` + `npm run build` | Agent runs this after every change. No broken API surface ships. |
| Schema | Versioned DB migrations | Schema always in sync. Agent applies them; no drift, no surprises. |
| Commit | Pre-commit hooks | `fmt + check + test + frontend build` must all pass. Nothing lands broken. |
| Deploy | Scripts from day one | Agent can validate the full stack, not just the dev environment. |

Stat callout: *"94% of LLM compilation errors are type-check failures. Strong types aren't optional — they're your first guardrail."*

Sources:
- https://github.blog/ai-and-ml/llms/why-ai-is-pushing-developers-toward-typed-languages/
- https://www.anthropic.com/engineering/claude-code-best-practices
- https://arxiv.org/abs/2509.14744

---

## Ideas for Future Slides

### Slide 5 — Type-Driven Development in Practice
Show the actual workflow in `rustysolid`/`dwata`:
1. Define a type in `shared-types/src/*.rs` with `serde` + `ts-rs`
2. Run `generate_api_types` → TypeScript emitted to `gui/src/types/api.ts`
3. Implement the backend handler against the Rust type
4. Implement the frontend UI against the generated TS type
5. Feature is only "done" when both ends compile against the same contract

Key point: the agent can't hallucinate the API shape — the compiler won't let it.

---

### Slide 6 — Context Engineering
The deliberate design of what information the agent has access to and when. Covers:
- `CLAUDE.md` / `AGENTS.md` — project-specific instructions loaded every session
- How project structure itself is a form of context (where types live, where migrations go, where scripts are)
- The `rustysolid` template as a pre-engineered context: agent already knows where everything belongs
- Research finding: single context files don't scale past ~1,000 lines of code — structured, hierarchical context does

Source: https://arxiv.org/abs/2509.14744

---

### Slide 7 — Live Demo: Adding a Feature
Walk through adding a simple feature live during the workshop:
- Define the Rust type
- Regenerate TypeScript
- Prompt the agent to implement both handler and UI
- Watch pre-commit hooks catch and correct issues
- Ship

This is the slide to transition from theory to the live coding portion.

---

### Slide 8 — What You Can Step Away From
Flip side of the thesis — what you no longer need to babysit when the system is set up:
- Formatting (automated)
- Type consistency across frontend/backend (generated)
- Schema drift (migrations)
- Build breakage (hooks)
- Deploy configuration (scripts)

What you still own: architecture decisions, type design, business logic review, context engineering.

---

### Slide 9 — Starting a New Project Right
Practical takeaways for the audience:
- Use a typed language for your backend (`Rust`, `Go`, `TypeScript` with strict mode)
- Generate your frontend types from your backend — never write them twice
- Set up pre-commit hooks on day one, not when things break
- Write deployment scripts before you need them
- Use `CLAUDE.md` to capture your project's conventions immediately

Reference: `rustysolid` as an open template they can use.

---

## Reference Projects

- **`rustysolid`** — `~/Projects/rustysolid` — The template. Actix Web + SolidJS, Rust types → generated TS, SQLite/PostgreSQL via features, pre-commit hooks (fmt/check/test/build), systemd/nginx deployment scripts, Casbin auth starters.
- **`dwata`** — `~/Projects/dwata` — The inspiration. Personal data intelligence platform. First project to establish the Rust workspace + SolidJS pattern, type-driven financial extraction, OS keychain credential management, GitHub Actions CI/CD.

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
