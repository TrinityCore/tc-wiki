// Starts the GitHub login for the page editor at /edit (Decap CMS).
export function onRequestGet({ request, env }) {
  const state = crypto.randomUUID()
  const authorize = new URL('https://github.com/login/oauth/authorize')
  authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
  authorize.searchParams.set('redirect_uri', new URL('/api/callback', request.url).href)
  // Enough to fork the wiki and open pull requests from the fork.
  authorize.searchParams.set('scope', 'public_repo')
  authorize.searchParams.set('state', state)
  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.href,
      'Set-Cookie': `oauth_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  })
}
