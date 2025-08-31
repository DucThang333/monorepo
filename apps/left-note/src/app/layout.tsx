import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: 'NOTE',
  description: 'The App Helper User Take notes.',
  icons: '/icons/favorite.png',
};
import '@left-note/styles/globals.css';
import { SidebarProvider } from '@package/ui/components/sidebar';
import { Sidebar } from '@left-note/components/sidebar';
import { Providers } from '@left-note/providers/theme-provider';
const KeyboardShortcut = dynamic(() => import('@left-note/components/keyboardShortcut'));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SidebarProvider>
            <div className="flex w-full">
              <KeyboardShortcut />
              <Sidebar />
              {children}
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
