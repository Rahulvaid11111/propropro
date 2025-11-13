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
        src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📸</text></svg>',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
  }
}
