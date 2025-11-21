export default function manifest() {
  return {
    name: 'Photobooth Canada',
    short_name: 'Photobooth Canada',
    description: 'Professional photo booth rentals across Canada for weddings, corporate events, and parties.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/images/photobooth-canada-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/photobooth-canada-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
