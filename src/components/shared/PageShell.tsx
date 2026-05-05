"use client";

import { ReactNode, useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const PageShell = ({ children, title, description }: PageShellProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="relative">
      <Head>
        {title ? <title>{title}</title> : null}
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <TopBanner />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};
