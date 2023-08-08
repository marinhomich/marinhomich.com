import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
