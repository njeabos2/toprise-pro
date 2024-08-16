import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnarToaster } from '@/components/ui/sonner'

const font = DM_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "toprise | professional services",
  description: "Professional Services For your home & Commercial needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={ { baseTheme: dark }}>
      <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <Toaster />
            <SonnarToaster position="bottom-left" />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
