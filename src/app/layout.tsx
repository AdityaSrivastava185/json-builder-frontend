import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON Builder",
  description: "An organization-level utility for creating and visualizing JSON schemas in real-time. Designed for teams and developers working with APIs, configurations, and contract-based systems.",
  keywords: [
    "JSON Builder",
    "Schema Generator",
    "Open Source Tool",
    "Developer Tools",
    "OpenDev",
    "Organization Level JSON",
    "JSON Visualizer",
    "Next.js Tools"
  ],
  authors: [{ name: "Aditya Srivastava", url: "https://github.com/AdityaSrivastava185" }],
  creator: "Aditya Srivastava",
  openGraph: {
    title: "JSON Builder | OpenDev Tools",
    description: "Create and visualize JSON schemas at scale. Built for developer teams and open-source collaboration.",
    url: "https://json-builder-frontend-75b7.vercel.app/", 
    siteName: "JSON Builder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Builder",
    description: "Build JSON schemas easily. Free, open source, and collaboration-ready.",
  },
  metadataBase: new URL("https://json-builder-frontend-75b7.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
