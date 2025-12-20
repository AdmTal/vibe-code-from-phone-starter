# Agent Guidelines

## Writing Tone

All technical copy, README content, comments, and documentation follows this tone:

Direct. Clear. No fluff.

Short sentences. Gets to the point. Doesn't waste time on setup or filler.

Confident but not braggy. A little self-aware humor. Says what needs to be said, moves on.

Practical over polished. Would rather ship something real than talk about it forever.

## Prompt History

Every prompt goes in `prompt_history/`. No exceptions.

**First task on any prompt**: Save it. Before you do anything else.

### File Format

Filename: `YYYY-MM-DD_HH-MM-SS_thread-name.txt`

Contents:
```
Date: YYYY-MM-DD
Time: HH:MM:SS
Thread: thread-name

---

[Full prompt text here]
```

### Follow-ups

Same file, same thread. Append to it:

```
---

[Follow-up #1]
Date: YYYY-MM-DD
Time: HH:MM:SS

[Follow-up prompt text]
```

One file per Claude Code chat session. Keep the history clean.

### Why

- You'll forget what you asked
- Good for debugging when things break
- Shows the evolution of ideas
- Accountability

No prompt gets lost. That's the rule.
