import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinesia Labs",
  description: "EMG-driven interfaces that let humans control machines through muscle intent.",
  generator: 'v0.app',
  applicationName: 'Kinesia Labs',
  keywords: [
    'Kinesia Labs',
    'EMG',
    'electromyography',
    'assistive technology',
    'wheelchair control',
    'biomedical engineering',
    'robotics',
    'AI signal processing'
  ],
  openGraph: {
    title: 'Kinesia Labs — EMG-driven machine interfaces',
    description: 'EMG-driven interfaces that let humans control machines through muscle intent.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinesia Labs — EMG-driven machine interfaces',
    description: 'EMG-driven interfaces that let humans control machines through muscle intent.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
