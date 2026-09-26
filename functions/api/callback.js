// Finishes the GitHub login and hands the token to the editor window.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url)
  const state = url.searchParams.get('state')
  const expected = /(?:^|;\s*)oauth_state=([^;]+)/.exec(request.headers.get('Cookie') ?? '')?.[1]
  if (!state || state !== expected) return reply('error', 'The login expired. Close this window and try again.')

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'tc-wiki-editor' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code: url.searchParams.get('code'),
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!data.access_token) return reply('error', data.error_description || 'GitHub login failed.')
  return reply('success', { token: data.access_token, provider: 'github' })
}

// Decap's handshake: announce to the editor window, wait for it to answer,
// then send the result to that window's origin only.
function reply(status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`
  const script = `
    const message = ${JSON.stringify(message).replace(/</g, '\\u003c')}
    window.addEventListener('message', (e) => {
      if (e.origin === location.origin) window.opener.postMessage(message, e.origin)
    })
    window.opener.postMessage('authorizing:github', location.origin)`
  return new Response(`<!doctype html><meta charset="utf-8"><title>Logging in</title><script>${script}</script>`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': 'oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    },
  })
}
