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
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const KeyboardShortcut = dynamic(() => import('@left-note/components/keyboardShortcut'));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider>
            <ThemeProvider>
              <SidebarProvider>
                <div className="flex w-full">
                  <KeyboardShortcut />
                  <Sidebar />
                  {children}
                </div>
              </SidebarProvider>
            </ThemeProvider>
          </ReduxProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
