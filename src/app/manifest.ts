import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Croxono Perfumes - Perfumes de Lujo',
    short_name: 'Croxono',
    description: 'Tienda especializada en perfumes de lujo y fragancias exclusivas',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/assets/croxono-logo.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/croxono-logo.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
} 