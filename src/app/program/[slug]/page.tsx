import { notFound } from "next/navigation";
import { PROGRAMS } from "@constants/programs";
import ProgramDetailClient from "./ProgramDetailClient";

type ProgramDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = PROGRAMS.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient slug={slug} />;
}
