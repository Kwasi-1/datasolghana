import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "DataSOL Technologies",
    template: "%s | DataSOL Technologies",
  },
  description: "Your trusted partner in data-driven solutions.",
  applicationName: "DataSOL Technologies",
  keywords: [
    "data recovery",
    "cybersecurity",
    "IT support",
    "digital forensics",
    "DataSOL",
    "DataSOL Technologies",
    "data recovery services",
  ],
  authors: [{ name: "DataSOL Technologies" }],
  creator: "DataSOL Technologies",
  openGraph: {
    title: "DataSOL Technologies",
    description: "Your trusted partner in data-driven solutions.",
    url: "https://yourdomain.com",
    siteName: "DataSOL Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DataSOL Technologies Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataSOL Technologies",
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
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
