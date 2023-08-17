import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Dashboard - Michel Marinho",
  description: "Dashboard - Michel Marinho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body className={"min-h-screen font-sans antialiased"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            {children}
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
