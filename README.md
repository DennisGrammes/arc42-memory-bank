# Memory Bank System v0.7-beta

Memory Bank is a token-optimized, hierarchical task management system for software projects. The system now integrates with **GitHub Copilot** using instruction and prompt files so that Copilot can guide development through distinct phases.

## About Memory Bank

The Memory Bank workflow divides development into several specialized phases:

- **VAN** – Project initialization
- **PLAN** – Detailed task planning
- **CREATIVE** – Design and architecture exploration
- **IMPLEMENT** – Systematic implementation of planned work
- **QA** – Technical validation and quality assurance
- **REFLECT** – Review and lessons learned
- **ARCHIVE** – Final documentation

Each phase has an associated prompt file in `.github/prompts` and can be triggered from Copilot Chat via a smart action (`/van`, `/plan`, `/creative`, `/implement`, `/qa`, `/reflect`, or `/archive`).
`/scenario` – create or update user scenario files.
`/c1` – create or update a system scheme description (level C1).
`/c2` – create or update a component scheme description (level C2).
The scheme file paths are recorded in `tasks.md` so every phase can load the correct C1 or C2 diagram.

## Installation

1. Clone this repository into your project.
2. Enable GitHub Copilot Chat and set `github.copilot.chat.codeGeneration.useInstructionFiles` to `true`.
3. Create `.vscode/settings.json` with the following snippet so Copilot automatically loads the prompt files:

```json
{
  "github.copilot.chat.codeGeneration.useInstructionFiles": true,
  "github.copilot.chat.codeGeneration.instructions": [
    { "file": ".github/copilot-instructions.md" }
  ]
}
```

4. Copy the `.github` folder into the root of your workspace if it is not already there. The `instructions` subfolder contains the rule files referenced by each prompt.
5. In Copilot Chat, use the provided smart actions to run the workflow:
   - `/van` – initialize the Memory Bank and analyze existing tasks *(run once when starting a project)*
   - `/plan` – produce or update the implementation plan *(use after gathering requirements)*
   - `/scenario` – create or update user scenario files
   - `/c1` – document or update a system scheme at detail level C1
   - `/c2` – document or update a component-level scheme at detail level C2
   - `/creative` – brainstorm design approaches for complex components *(helpful for high complexity work)*
   - `/implement` – build the planned components *(use iteratively as you code)*
   - `/qa` – run validation checks to ensure quality *(execute after implementation or whenever needed)*
   - `/reflect` – review the finished work and capture lessons learned *(run after `/implement` or `/qa` completes)*
   - `/archive` – finalize documentation once reflection is complete *(triggered by typing `ARCHIVE NOW` during `/reflect`)*

### Example Workflow

1. `/van` – create the Memory Bank for the project
2. `/plan` – outline the tasks and milestones
3. `/scenario` – document or update user scenarios
4. `/c1` – generate the system scheme
5. `/c2` – generate the component scheme
6. `/creative` – explore alternative designs if needed
7. `/implement` – develop the planned features
8. `/qa` – validate the implementation and environment
9. `/reflect` – document successes and lessons
10. `/archive` – store final documentation and reset context
11. Optionally create `.vscode/tasks.json` with helpful build and test commands:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Pytest",
      "type": "shell",
      "command": "pytest",
      "group": "test"
    },
    {
      "label": "Dotnet Build",
      "type": "shell",
      "command": "dotnet build",
      "group": "build"
    },
    {
      "label": "Dotnet Test",
      "type": "shell",
      "command": "dotnet test",
      "group": "test"
    },
    {
      "label": "NPM Build",
      "type": "shell",
      "command": "npm run build",
      "group": "build"
    },
    {
      "label": "NPM Test",
      "type": "shell",
      "command": "npm test",
      "group": "test"
    },
    {
      "label": "NPM Dev",
      "type": "shell",
      "command": "npm run dev",
      "isBackground": true,
      "problemMatcher": "$tsc-watch"
    },
    {
      "label": "TypeScript Check",
      "type": "shell",
      "command": "npx tsc --noEmit --skipLibCheck",
      "group": "test"
    }
  ]
}
```

### Using in an existing project

Copy the `.github` folder and the `.vscode` settings from this repository into your own project. Merge the JSON snippets with any existing `settings.json` or `tasks.json` files. Once copied, Copilot Chat will recognize the smart actions when you open the workspace.

### Global setup for all projects

Add the same configuration snippet to your *User* settings (`File > Preferences > Settings`). This enables Copilot to load `.github/copilot-instructions.md` automatically whenever it exists in a repository.

## Resources

- [Memory Bank Optimizations](MEMORY_BANK_OPTIMIZATIONS.md)
- [Release Notes](RELEASE_NOTES.md)
- [Memory Bank Upgrade Guide](memory_bank_upgrade_guide.md)
- [Think Methodology](creative_mode_think_tool.md)
