import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriTechAi",
  description: "Predict which crop is best for your soil and environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
   layout: {
     unsafe_disableDevelopmentModeWarnings: true
   }
 }}>
      <html lang="en">
        <body>
          {children}<Toaster /><Analytics/><SpeedInsights/>
        </body>
      </html>
    </ClerkProvider>
  );
}
