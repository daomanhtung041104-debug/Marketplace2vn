import AuthSessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { WalletProvider } from "@/contexts/WalletContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  title: "Marketplace2vn | Nền tảng freelancer phi tập trung",
  description: "Nền tảng freelancer phi tập trung với xác minh danh tính DID và escrow tự động trên Aptos blockchain",
  keywords: "freelancer, blockchain, DID, escrow, Aptos, Web3, phi tập trung",
  authors: [{ name: "Marketplace2vn Team" }],
  creator: "Marketplace2vn",
  publisher: "Marketplace2vn",
  icons: {
    icon: "/images/landing/logo_full.png",
    shortcut: "/images/landing/logo_full.png",
    apple: "/images/landing/logo_full.png",
  },
  openGraph: {
    title: "Marketplace2vn | Nền tảng freelancer phi tập trung",
    description: "Nền tảng freelancer phi tập trung với xác minh danh tính DID và escrow tự động trên Aptos blockchain",
    url: "https://marketplace2vn.com",
    siteName: "Marketplace2vn",
    images: [
      {
        url: "/images/landing/logo_full.png",
        width: 1200,
        height: 630,
        alt: "Marketplace2vn",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace2vn | Nền tảng freelancer phi tập trung",
    description: "Nền tảng freelancer phi tập trung với xác minh danh tính DID và escrow tự động trên Aptos blockchain",
    images: ["/images/landing/logo_full.png"],
    creator: "@marketplace2vn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <AuthSessionProvider>
          <ThemeProvider>
            <WalletProvider>
          <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute inset-0 bg-gradient-to-tl from-background via-transparent to-background-secondary/20" />
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
            
            {/* Subtle logo watermark */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url('/images/landing/logo_full.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60vh',
                backgroundAttachment: 'fixed',
              }}
            />
          </div>

            
            {/* Main content */}
            <div className="relative z-10 min-h-screen">
              {children}
            </div>
            
              <Toaster />
            </WalletProvider>
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
