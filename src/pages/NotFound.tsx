"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { STRINGS } from "@/data/strings";
import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="container-wide max-w-2xl text-center">
        <p className="font-display text-[8rem] leading-none text-purple-tint md:text-[14rem]">
          {STRINGS.notFound.code}
        </p>

        <h1 className="-mt-6 font-display text-3xl text-ink-primary md:text-5xl">
          {STRINGS.notFound.heading}
        </h1>

        <p className="mt-5 font-body text-ink-secondary md:text-lg">
          {STRINGS.notFound.sub}
        </p>

        <Link href="/" className="mt-10 inline-block">
          <CTAButton
            variant="primary"
            size="lg"
            iconLeft={<ArrowLeft className="h-4 w-4" />}
          >
            {STRINGS.notFound.cta}
          </CTAButton>
        </Link>
      </div>
    </main>
  );
}