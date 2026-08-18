// Cloudflare Worker for the Schedula landing page.
//
// It serves the static site from ./dist and forwards a first-party path
// (`/ph/*`) to PostHog. The first-party path lets capture requests share the
// site origin, so content blockers do not drop them the way they drop calls
// to the third-party `us.i.posthog.com` domain.

const API_HOST = "us.i.posthog.com"
const ASSET_HOST = "us-assets.i.posthog.com"
const PROXY_PREFIX = "/ph"

async function forwardToPostHog(request, url, ctx) {
  // Strip the `/ph` prefix, then send static loader files to the assets host
  // and every other capture/flags request to the api host.
  const path = url.pathname.slice(PROXY_PREFIX.length) || "/"
  const isStatic = path.startsWith("/static/")
  const host = isStatic ? ASSET_HOST : API_HOST

  // The loader assets are immutable and shared across visitors, so serve them
  // from the edge cache. Capture and flags traffic is per-request, so it is
  // never cached.
  if (isStatic) {
    const cached = await caches.default.match(request)
    if (cached) return cached
  }

  const target = new URL(request.url)
  target.hostname = host
  target.port = ""
  target.pathname = path

  const headers = new Headers(request.headers)
  headers.delete("cookie")
  headers.set("host", host)

  const response = await fetch(target.toString(), {
    method: request.method,
    headers,
    body: request.body,
    redirect: "manual",
  })

  if (isStatic && response.ok) {
    ctx.waitUntil(caches.default.put(request, response.clone()))
  }
  return response
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    if (url.pathname === PROXY_PREFIX || url.pathname.startsWith(`${PROXY_PREFIX}/`)) {
      return forwardToPostHog(request, url, ctx)
    }
    return env.ASSETS.fetch(request)
  },
}
