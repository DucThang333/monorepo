import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'NOTE',
  description: 'The App Helper User Take notes.',
  icons: '/icons/favorite.png',
};

import '@package/ui/style';
import '@/styles/globals.css';
import { SidebarProvider } from '@package/ui/component/sidebar';
import { Sidebar } from '@/components/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
