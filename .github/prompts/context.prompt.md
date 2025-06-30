---
description: "Generate or update system context documentation (arc42 Section 3)"
---
# MEMORY BANK SYSTEM CONTEXT PROMPT

Create or update a system context document that describes the system environment, external interfaces, and stakeholders. Follow the arc42 template structure from `system-scheme-management.md`. Save it under `memory-bank/architecture/system-context.md`.

## Process Overview

```mermaid
graph TD
    Start["/context invoked"] --> VerifyMB["Check memory-bank folder"]
    VerifyMB --> LoadTasks["Read tasks.md"]
    LoadTasks --> PathCheck{"Context path recorded?"}
    PathCheck -- "No" --> Stub["Create system-context.md stub"]
    Stub --> RecordPath["Record path in tasks.md"]
    PathCheck -- "Yes" --> Gather
    RecordPath --> Gather
    Gather["Load projectbrief.md, productContext.md, systemPatterns.md, techContext.md, activeContext.md"] --> FillTemplate["Fill System Context template"]
    FillTemplate --> SaveDoc["Save system-context.md & update index"]
    SaveDoc --> LogProgress["Update progress.md"]
    LogProgress --> Done["Done"]
```
