import "@/app/globals.css";

import { ReactNode } from "react";
import Providers from "@/components/Providers";

import { PageLoader } from "@/components/shared/PageLoader";
import { StaticBackground } from "@/components/layout/StaticBackground";
import { FloatingActions } from "@/components/layout/FloatingActions";

export const metadata = {
  title: "Dr. Vikram Aggarwal College of Arts & Science",
  description: "College Website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {/* Global UI */}
          <PageLoader />
          <StaticBackground />

          {/* Pages */}
          {children}

          {/* Floating UI */}
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
