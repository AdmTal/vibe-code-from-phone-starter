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

## Building

Two build modes:

```bash
npm run build          # Normal build for Netlify
npm run build:offline  # Single HTML file for Itch.io/local
```

The offline build inlines everything—JS, CSS, assets. Works with `file://` protocol. No server needed.

### Itch.io Upload

```bash
make itch-zip
```

Creates `game.zip` ready for upload.

## Debug Console

[Eruda](https://github.com/liriliri/eruda) auto-loads on Netlify preview deploys. Open any preview URL and you get a mobile dev console—inspect elements, view network requests, check console logs.

Only activates when URL contains "preview". Production stays clean.

## Functions

Functions live in `src/funcs/`. Access them at `/api/[function-name]`.

Example: `src/funcs/hello.ts` → `/api/hello`

## Rules

Read `AGENTS.md`. Especially the prompt history part.

## Contributing

PRs welcome. Keep in mind the goal here is vibe coding from your phone.

## License

MIT — see [LICENSE](LICENSE).
