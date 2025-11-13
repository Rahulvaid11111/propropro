import { Inter } from "next/font/google";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ClientWrapper from '../../components/ClientWrapper';
import { generatePageMetadata, generateStructuredData } from '../../lib/metadata';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = generatePageMetadata({
  title: '',
  description: 'Professional photo booth rentals for weddings, corporate events, and parties across Ontario. Serving Toronto, Mississauga, Brampton, and all GTA cities. Book your photo booth today!',
  path: '',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData('organization');
  const localBusinessSchema = generateStructuredData('localBusiness');
  const serviceSchema = generateStructuredData('service');

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
