---
description: "Generate or update building block view (arc42 Section 5)"
---
# MEMORY BANK BUILDING BLOCK VIEW PROMPT

Create or update a building block view document that details the system's internal structure and component relationships. Follow the arc42 template structure from `system-scheme-management.md`. Save it under `memory-bank/architecture/building-blocks.md`.

## Process Overview

```mermaid
graph TD
    Start["/blocks invoked"] --> VerifyMB["Check memory-bank folder"]
    VerifyMB --> LoadTasks["Read tasks.md"]
    LoadTasks --> PathCheck{"Building blocks path recorded?"}
    PathCheck -- "No" --> Stub["Create building-blocks.md stub"]
    Stub --> RecordPath["Record path in tasks.md"]
    PathCheck -- "Yes" --> LoadContext
    RecordPath --> LoadContext["Read system-context.md for reference"]
    LoadContext --> AnalyzeCode["Analyze components & tasks"]
    AnalyzeCode --> FillTemplate["Fill Building Blocks template"]
    FillTemplate --> SaveDoc["Save building-blocks.md & update index"]
    SaveDoc --> LogProgress["Update progress.md"]
    LogProgress --> Done["Done"]
```
