import type { Metadata } from 'next';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Roktim Gogoi — Full Stack Engineer',
  description: 'Portfolio of Roktim Gogoi, a Full Stack Software Engineer based in Assam, India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg text-fg">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
