import type { Context } from '@netlify/functions'

export default async (req: Request, context: Context) => {
  return new Response(JSON.stringify({ message: 'Hello from the edge.' }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
