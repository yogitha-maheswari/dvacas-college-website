"use client";

import CourseDetailPage from "@/views/CourseDetail";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export default async function CourseDetailRoutePage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CourseDetailPage params={resolvedParams} />;
}
