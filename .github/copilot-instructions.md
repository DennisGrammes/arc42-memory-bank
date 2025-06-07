---
smart-actions:
  - name: "/van"
    description: "Initialize the Memory Bank and analyze existing tasks"
    prompt: "./prompts/van.prompt.md"
  - name: "/plan"
    description: "Generate or update the implementation plan"
    prompt: "./prompts/plan.prompt.md"
  - name: "/creative"
    description: "Brainstorm design options for complex components"
    prompt: "./prompts/creative.prompt.md"
  - name: "/implement"
    description: "Build the planned features"
    prompt: "./prompts/implement.prompt.md"
  - name: "/qa"
    description: "Run technical validation checks across phases"
    prompt: "./prompts/qa.prompt.md"
  - name: "/reflect"
    description: "Review completed work and capture lessons; type 'ARCHIVE NOW' to finalize"
    prompt: "./prompts/reflect_archive.prompt.md"
  - name: "/archive"
    description: "Finalize documentation after reflection"
    prompt: "./prompts/reflect_archive.prompt.md"
---

These instructions configure GitHub Copilot to use Memory Bank prompts for each development phase. Trigger a phase by typing the corresponding smart action in Copilot Chat.
