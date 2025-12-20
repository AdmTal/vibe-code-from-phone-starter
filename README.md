# Vibe Starter

Starter repo for vibe code projects. Clone it, build stuff, ship.

## Philosophy

This project is designed for **vibe coding from your phone**. The goal is to enable building and shipping software with minimal friction while on mobile.

Key principles:
- **Low-effort prompting** — Quick, casual prompts should work. No need for elaborate instructions.
- **Automated tooling** — Let CI/CD and agents do the heavy lifting.
- **Mobile-friendly workflows** — Everything should be doable from a phone keyboard.

The less typing required, the better.

## Stack

- TypeScript
- Vite
- Netlify (hosting + functions)

## Structure

```
src/
  www/        # Static site source
  funcs/      # Netlify functions
prompt_history/  # Every prompt, saved
```

## Setup

```bash
npm install
npm run dev
```

Dev server runs at `localhost:5173`. Functions at `localhost:8888/api/*`.

## Deploy

Push to main. Netlify handles the rest.

Or connect your repo at [netlify.com](https://netlify.com).

## Functions

Functions live in `src/funcs/`. Access them at `/api/[function-name]`.

Example: `src/funcs/hello.ts` → `/api/hello`

## Rules

Read `AGENTS.md`. Especially the prompt history part.

## Contributing

PRs welcome! When proposing changes, please keep the mobile-first philosophy in mind:

- Will this work well for someone coding from their phone?
- Does it reduce friction or add complexity?
- Can it be triggered with a short, simple prompt?

If your change requires elaborate setup or verbose prompts, it might not be the right fit.

## License

MIT — see [LICENSE](LICENSE).
