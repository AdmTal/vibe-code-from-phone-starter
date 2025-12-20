# Vibe Starter

Starter repo for vibe code projects. Clone it, build stuff, ship.

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
