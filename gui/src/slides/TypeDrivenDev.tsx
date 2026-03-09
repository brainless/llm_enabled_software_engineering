export default function TypeDrivenDev() {
  return (
    <div class="flex h-full flex-col justify-center gap-7 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">Type-Driven Development in Practice</h2>
        <p class="text-xl text-base-content/60">One type definition propagates correctness across the entire stack</p>
      </div>

      <div class="grid grid-cols-2 gap-6 items-start">
        <div class="flex flex-col gap-4">
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-base text-primary">1. Define the type in Rust</h3>
            <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/80 leading-relaxed">{`// shared-types/src/lib.rs
#[derive(Serialize, Deserialize, TS)]
#[ts(export)]
pub struct HeartbeatResponse {
    pub status: String,
    pub service: String,
}`}</pre>
          </div>
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-base text-secondary">2. Generate TypeScript</h3>
            <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/80 leading-relaxed">{`cargo run --bin generate_api_types
# → writes gui/src/types/api.ts

export type HeartbeatResponse = {
  status: string;
  service: string;
};`}</pre>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-base text-accent">3. Backend implements against the type</h3>
            <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/80 leading-relaxed">{`// backend/src/handlers/heartbeat.rs
pub async fn heartbeat() -> impl Responder {
    Json(HeartbeatResponse {
        status: "ok".into(),
        service: "api".into(),
    })
}`}</pre>
          </div>
          <div class="card bg-base-200 p-5 gap-3">
            <h3 class="font-semibold text-base text-warning">4. Frontend uses the generated type</h3>
            <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/80 leading-relaxed">{`// gui/src/App.tsx
import type { HeartbeatResponse } from "./types/api";

const [status] = createResource<HeartbeatResponse>(
  () => fetch("/api/heartbeat").then(r => r.json())
);`}</pre>
          </div>
          <div class="card bg-success/10 border border-success/20 p-4">
            <p class="text-sm text-base-content/80">
              Add a field in Rust → regenerate → <span class="text-error font-semibold">TypeScript compile error</span> points exactly where the UI needs updating.
              The agent can't hallucinate the shape — the compiler enforces it.
            </p>
          </div>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        Feature is only "done" when both ends compile against the same contract. No runtime surprises.
      </p>
    </div>
  );
}
