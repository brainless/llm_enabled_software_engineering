export default function LlmStructuredParser() {
  return (
    <div class="flex h-full flex-col justify-center gap-7 px-16">
      <div class="flex flex-col gap-2">
        <h2 class="text-5xl font-bold tracking-tight">LLM as a Structured Parser</h2>
        <p class="text-xl text-base-content/60">LLM handles ambiguity — the type system handles correctness</p>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="card bg-base-200 p-5 gap-3 col-span-2">
          <h3 class="font-semibold text-base text-primary">Types are the contract — derived directly as tool schema</h3>
          <pre class="text-xs font-mono bg-base-300 rounded-lg p-3 text-base-content/80 overflow-auto leading-relaxed">{`#[derive(Deserialize, JsonSchema)]
struct LabelDocumentParams {
    doc_type: DocumentType,  // Bill | Invoice | Receipt | ...
    has_bill: bool,          // triggers bill extractor
    has_transaction: bool,   // triggers transaction extractor
}

#[derive(Deserialize, JsonSchema)]
struct TemplateVariableParams {
    variables: Vec<TemplateVariable>,
    // TemplateVariable { variable_name, value }
}`}</pre>
          <p class="text-xs text-base-content/50">
            <code class="bg-base-300 px-1 rounded">JsonSchema</code> derive turns these types directly into the LLM's tool call schema.
            The LLM <span class="text-base-content/80 font-medium">must</span> return data that matches — or the agent retries with a corrective message.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <div class="card bg-primary/10 p-4 gap-2">
            <h3 class="font-semibold text-sm text-primary">LLM does</h3>
            <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
              <li>Classify document type</li>
              <li>Identify variable names</li>
              <li>Extract raw values from free text</li>
            </ul>
          </div>
          <div class="card bg-secondary/10 p-4 gap-2">
            <h3 class="font-semibold text-sm text-secondary">Rust does</h3>
            <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
              <li>Parse amounts strictly</li>
              <li>Parse and normalise dates</li>
              <li>Validate required fields</li>
              <li>Map to DB schema</li>
            </ul>
          </div>
          <div class="card bg-warning/10 p-4 gap-2">
            <h3 class="font-semibold text-sm text-warning">Agent does</h3>
            <ul class="flex flex-col gap-1 text-sm text-base-content/70 list-disc list-inside">
              <li>Retry on invalid JSON</li>
              <li>Prompt for missing tool call</li>
              <li>Surface failures to caller</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="text-base-content/50 text-base italic">
        You never wrote a parser for email formats — the LLM is the parser. Your types define what a correct parse looks like.
      </p>

      <div class="flex gap-6 text-xs text-base-content/40">
        <a href="https://github.blog/ai-and-ml/llms/why-ai-is-pushing-developers-toward-typed-languages/" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">GitHub Blog — AI &amp; typed languages</a>
        <a href="https://www.infoworld.com/article/4142019/coding-for-agents.html" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">InfoWorld — Coding for agents</a>
        <a href="https://matsen.fhcrc.org/general/2025/10/30/agentic-coding-principles.html" target="_blank" class="hover:text-base-content/70 underline underline-offset-2">Agentic coding from first principles</a>
      </div>
    </div>
  );
}
