export const dynamic = 'force-static'

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
