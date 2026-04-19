import { sections } from "@/lib/cpa-questions";
import { notFound } from "next/navigation";
import QuizClient from "./quiz-client";

export default async function SectionExamPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = sections[section];

  if (!data) notFound();

  return <QuizClient data={data} />;
}
