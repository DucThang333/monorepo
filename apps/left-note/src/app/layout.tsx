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
import { Providers as ThemeProvider } from '@left-note/providers/theme-provider';
import { ReduxProvider } from '@left-note/deps/store/providers';
import { AuthProvider } from '@left-note/providers/auth-provider';
import { ToasterIOS } from '@package/ui/components/sonner';

const QueryProvider = dynamic(() => import('@left-note/providers/query-provider'));
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
        <ReduxProvider>
          <QueryProvider>
            <ThemeProvider>
              <AuthProvider>
                <SidebarProvider>
                  <div className="flex w-full">
                    <KeyboardShortcut />
                    <Sidebar />
                    {children}
                    <ToasterIOS
                      position="top-right"
                      richColors={true}
                    />
                  </div>
                </SidebarProvider>
              </AuthProvider>
            </ThemeProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
