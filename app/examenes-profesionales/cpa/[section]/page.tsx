"use client";

import { useParams } from "next/navigation";
import { sections } from "@/lib/cpa-questions";
import QuizClient from "./quiz-client";
import Link from "next/link";

export default function SectionExamPage() {
  const params = useParams();
  const section = typeof params.section === "string" ? params.section : "";
  const data = sections[section];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa]">
        <p className="text-gray-500 mb-4">Esta sección aún no tiene preguntas disponibles.</p>
        <Link href="/examenes-profesionales/cpa" className="text-blue-600 hover:underline text-sm">
          ← Volver a CPA
        </Link>
      </div>
    );
  }

  return <QuizClient data={data} />;
}
