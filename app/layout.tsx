import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/shared/BackToTopButton";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Datasol Technologies",
    template: "%s | Datasol Technologies",
  },
  description: "Your trusted partner in data-driven solutions.",
  applicationName: "Datasol Technologies",
  keywords: [
    "data recovery",
    "data recovery ghana",
    "cybersecurity",
    "IT support",
    "digital forensics",
    "Datasol",
    "datasol",
    "Datasol Technologies",
    "data recovery services",
  ],
  authors: [{ name: "Datasol Technologies" }],
  creator: "Datasol Technologies",
  openGraph: {
    title: "Datasol Technologies",
    description: "Your trusted partner in data-driven solutions.",
    url: "https://datasolghana.net",
    siteName: "Datasol Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Datasol Technologies Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DatasoL Technologies",
    description: "Your trusted partner in data-driven solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <TooltipProvider>
          <div>
            <Sonner />
            {children}
            <Footer />
            {/* <WhatsAppButton /> */}
            <BackToTopButton />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
