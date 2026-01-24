import { Metadata } from 'next';
import ToroMeccanicoLanding from '../../components/toro-meccanico-landing';
import { copy } from '../../copy';

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  keywords: copy.seo.keywords,
  openGraph: {
    title: copy.seo.title,
    description: copy.seo.description,
    url: 'https://futuroeventi.it/toro-meccanico',
    siteName: 'FuturoEventi',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.seo.title,
    description: copy.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ToroMeccanicoPage() {
  return (
    <ToroMeccanicoLanding />
  );
}
