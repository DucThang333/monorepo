import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'NOTE',
  description: 'The App Helper User Take notes.',
  icons: '/icons/favorite.png',
};
import '@/styles/globals.css';
import '@package/ui/style';
import '@package/tiptap/style';
import { SidebarProvider } from '@package/ui/component/sidebar';
import { Sidebar } from '@/components/sidebar';
import { Providers } from '@/providers/theme-provider';
import { ShortcutInit } from '@/components/keyboardShortcut';
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
              <ShortcutInit />
              <Sidebar />
              {children}
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
