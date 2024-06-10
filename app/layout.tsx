'use client'

import { Inter } from 'next/font/google';
import Navbar from '././components/Navbar';
import './globals.css';
import type { ReactNode } from 'react';
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] });
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

