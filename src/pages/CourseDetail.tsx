"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  Users,
  IndianRupee,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/shared/Badge";
import { CTAButton } from "@/components/shared/CTAButton";

import { COURSES } from "@/data/college";
import { STRINGS } from "@/data/strings";

export default function CourseDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const course = COURSES.find(
    (c) => c.id === slug && c.category === category
  );

  // ❗ Next.js way of redirecting to 404
  if (!course) return notFound();

  const related = COURSES.filter(
    (c) => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow={course.department}
        title={course.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.code },
        ]}
        sub={course.overview}
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton
            variant="onDark"
            size="md"
            iconRight={<ArrowUpRight className="h-4 w-4" />}
          >
            {STRINGS.pages.courseDetail.apply}
          </CTAButton>

          <CTAButton variant="outlineDark" size="md">
            {STRINGS.pages.courseDetail.brochure}
          </CTAButton>
        </div>
      </PageHero>

      {/* Quick facts */}
      <section className="border-b border-border-subtle bg-surface-canvas">
        <div className="container-wide grid grid-cols-2 gap-px bg-border-subtle md:grid-cols-4">
          {[
            { icon: Clock, label: STRINGS.pages.courseDetail.duration, value: course.duration },
            { icon: Users, label: STRINGS.pages.courseDetail.seats, value: `${course.totalSeats}` },
            { icon: IndianRupee, label: STRINGS.pages.courseDetail.fees, value: `₹${course.fees.annual.toLocaleString("en-IN")}` },
            { icon: GraduationCap, label: STRINGS.pages.courseDetail.affiliation, value: course.affiliation },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2 bg-surface-canvas p-6 md:p-8">
              <item.icon className="h-4 w-4 text-purple-mid" />
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                {item.label}
              </p>
              <p className="font-display text-lg text-ink-primary">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Highlights */}
      <section className="section bg-surface-canvas">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">
              {STRINGS.pages.courseDetail.eligibility}
            </p>
            <p className="text-ink-secondary">{course.eligibility}</p>

            <p className="eyebrow mt-10 mb-3">
              {STRINGS.pages.courseDetail.avgSalary}
            </p>
            <p className="text-2xl">{course.avgSalary}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-3 inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              {STRINGS.pages.courseDetail.highlights}
            </p>

            <h2 className="text-3xl md:text-4xl">
              What sets this programme apart
            </h2>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {course.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex gap-3 border p-5 rounded-lg"
                >
                  <Check className="h-4 w-4 text-purple-rich" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-surface-base">
        <div className="container-wide">
          <p className="eyebrow mb-3">
            {STRINGS.pages.courseDetail.curriculum}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {(["year1", "year2", "year3"] as const).map((y, idx) => (
              <div key={y} className="border p-7 rounded-lg">
                <Badge variant="purple" size="xs">
                  Year {idx + 1}
                </Badge>

                <ul className="mt-6 space-y-3">
                  {course.curriculum[y].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="section">
        <div className="container-wide">
          <p className="eyebrow mb-3">{STRINGS.pages.courseDetail.careers}</p>

          <div className="flex flex-wrap gap-3">
            {course.careerOpportunities.map((c) => (
              <span key={c} className="border px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/courses/${r.category}/${r.id}`}
                  className="border p-6 rounded-lg"
                >
                  <Badge>{r.code}</Badge>
                  <h3>{r.name}</h3>
                </Link>
              ))}
            </div>

            <Link href="/courses" className="mt-10 inline-flex gap-2">
              <ArrowLeft /> Back
            </Link>
          </div>
        </section>
      )}
    </>
  );
}