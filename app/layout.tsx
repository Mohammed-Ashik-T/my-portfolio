import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name",
  description: "Developer Portfolio",
};

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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}