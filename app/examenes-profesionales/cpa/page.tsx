import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA — Práctica de Examen | CertPrep",
  description:
    "Prepárate para el examen CPA con práctica por sección: FAR, AUD, REG, BAR, ISC y TCP.",
};

type Section = {
  id: string;
  code: string;
  title: string;
  type: "core" | "discipline";
  description: string;
  topics: string[];
  questionCount: number;
  passRate: string;
  color: string;
};

const sections: Section[] = [
  {
    id: "aud",
    code: "AUD",
    title: "Auditing and Attestation",
    type: "core",
    description:
      "Cubre principios de auditoría, normas profesionales (GAAS/PCAOB), procedimientos de auditoría, controles internos y servicios de atestación.",
    topics: [
      "Planificación de auditoría",
      "Riesgo y materialidad",
      "Procedimientos sustantivos",
      "Control interno",
      "Informes de auditoría",
      "Normas PCAOB",
    ],
    questionCount: 72,
    passRate: "52%",
    color: "blue",
  },
  {
    id: "far",
    code: "FAR",
    title: "Financial Accounting and Reporting",
    type: "core",
    description:
      "La sección más extensa. Abarca GAAP para entidades comerciales, gubernamentales y sin fines de lucro, estados financieros y transacciones complejas.",
    topics: [
      "Estados financieros (GAAP)",
      "Inventarios y activos fijos",
      "Contabilidad gubernamental",
      "Entidades sin fines de lucro",
      "Consolidaciones",
      "Instrumentos financieros",
    ],
    questionCount: 66,
    passRate: "44%",
    color: "indigo",
  },
  {
    id: "reg",
    code: "REG",
    title: "Regulation",
    type: "core",
    description:
      "Impuestos federales para individuos, corporaciones, sociedades y fideicomisos. También incluye ética, responsabilidad profesional y derecho comercial.",
    topics: [
      "Impuesto individual (Form 1040)",
      "Impuesto corporativo (Form 1120)",
      "Sociedades y S-Corps",
      "Impuesto a propiedades y fideicomisos",
      "Ética del CPA",
      "Derecho comercial",
    ],
    questionCount: 72,
    passRate: "61%",
    color: "violet",
  },
  {
    id: "bar",
    code: "BAR",
    title: "Business Analysis and Reporting",
    type: "discipline",
    description:
      "Disciplina enfocada en análisis financiero avanzado, reporte de información financiera y uso de herramientas de análisis de datos.",
    topics: [
      "Análisis financiero avanzado",
      "Reporte de información financiera",
      "Análisis de datos",
      "Inteligencia de negocios",
      "Métricas de desempeño",
    ],
    questionCount: 60,
    passRate: "59%",
    color: "emerald",
  },
  {
    id: "isc",
    code: "ISC",
    title: "Information Systems and Controls",
    type: "discipline",
    description:
      "Disciplina de sistemas de información, controles de IT, ciberseguridad y continuidad del negocio desde la perspectiva del CPA.",
    topics: [
      "Controles de sistemas de información",
      "Ciberseguridad",
      "Continuidad del negocio",
      "Gestión de riesgos de IT",
      "SOC Reports",
    ],
    questionCount: 60,
    passRate: "N/A",
    color: "cyan",
  },
  {
    id: "tcp",
    code: "TCP",
    title: "Tax Compliance and Planning",
    type: "discipline",
    description:
      "Disciplina de planeación fiscal avanzada para individuos de alto patrimonio, entidades y negocios. Enfoque en optimización fiscal y cumplimiento.",
    topics: [
      "Planeación fiscal individual",
      "Impuesto a herencias y donaciones",
      "Transacciones corporativas",
      "Reorganizaciones fiscales",
      "Planeación fiscal internacional",
    ],
    questionCount: 60,
    passRate: "N/A",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", light: "bg-indigo-50", border: "border-indigo-200" },
  violet: { bg: "bg-violet-600", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
  emerald: { bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
  amber: { bg: "bg-amber-500", text: "text-amber-600", light: "bg-amber-50", border: "border-amber-200" },
};

export default function CPAPage() {
  const coreSections = sections.filter((s) => s.type === "core");
  const disciplines = sections.filter((s) => s.type === "discipline");

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fa]">
      {/* Header */}
      <header className="bg-[#0c1f3f] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-[#d4a017] text-[#0c1f3f]">
              CP
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">CertPrep</span>
          </Link>
          <span className="text-blue-400">/</span>
          <span className="text-blue-200 text-sm">CPA</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0c1f3f] to-[#1a3560] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-blue-300 text-sm hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Todas las certificaciones
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-blue-100/10 text-blue-200 border border-blue-200/20">
                Contabilidad · AICPA
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Examen <span className="text-[#f0c040]">CPA</span>
              </h1>
              <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
                Certified Public Accountant — la certificación más reconocida en contabilidad pública en
                los Estados Unidos. El examen consta de 3 secciones <strong className="text-white">core</strong> y
                1 sección de <strong className="text-white">disciplina</strong> a elección.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-4 sm:flex-col sm:gap-3 sm:text-right">
              {[
                { label: "Secciones", value: "4" },
                { label: "Puntuación mínima", value: "75 / 99" },
                { label: "Vigencia por sección", value: "30 meses" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-[#f0c040]">{s.value}</div>
                  <div className="text-xs text-blue-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam structure info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0c1f3f]" />
              <span>
                <strong className="text-gray-900">Core:</strong> AUD, FAR, REG — obligatorias
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <span>
                <strong className="text-gray-900">Disciplina:</strong> BAR, ISC o TCP — elige una
              </span>
            </div>
            <div className="ml-auto text-xs text-gray-400">Estructura vigente desde enero 2024 (CPA Evolution)</div>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Core sections */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-[#0c1f3f]" />
              <h2 className="text-xl font-bold text-[#0c1f3f]">Secciones Core</h2>
              <span className="text-sm text-gray-500 font-normal">— obligatorias para todos los candidatos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {coreSections.map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>
          </div>

          {/* Discipline sections */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-6 rounded-full bg-amber-400" />
              <h2 className="text-xl font-bold text-[#0c1f3f]">Secciones de Disciplina</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-5">
              Debes aprobar <strong>una</strong> de las tres disciplinas según tu área de especialización.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {disciplines.map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>
          </div>

          {/* Study tips */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0c1f3f] mb-5">Información del Examen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "📋",
                  title: "Formato",
                  detail: "Múltiple opción (MCQ) + Preguntas de simulación (TBS)",
                },
                {
                  icon: "⏱️",
                  title: "Duración",
                  detail: "4 horas por sección",
                },
                {
                  icon: "🏛️",
                  title: "Administrado por",
                  detail: "AICPA — American Institute of CPAs",
                },
                {
                  icon: "📅",
                  title: "Ventanas de examen",
                  detail: "Disponible casi todo el año en Prometric",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CertPrep · Información basada en los requisitos del AICPA
        </div>
      </footer>
    </div>
  );
}

function SectionCard({ section }: { section: Section }) {
  const c = colorMap[section.color] ?? colorMap.blue;

  return (
    <div className={`bg-white rounded-2xl border ${c.border} flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
      <div className={`h-1.5 ${c.bg}`} />
      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className={`px-3 py-1 rounded-lg text-xs font-bold ${c.light} ${c.text}`}>
            {section.code}
          </div>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              section.type === "core"
                ? "bg-[#0c1f3f] text-white"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {section.type === "core" ? "Core" : "Disciplina"}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm mb-2">{section.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{section.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {section.topics.map((topic) => (
            <span key={topic} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
              {topic}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
          <span>{section.questionCount} preguntas MCQ</span>
          <span>Tasa de aprobación: <strong className="text-gray-700">{section.passRate}</strong></span>
        </div>

        {["far", "aud", "reg", "bar", "isc", "tcp"].includes(section.id) ? (
          <Link
            href={`/examenes-profesionales/cpa/${section.id}`}
            className={`mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-colors block ${c.bg} text-white hover:opacity-90`}
          >
            Practicar {section.code} →
          </Link>
        ) : (
          <button
            disabled
            className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            Próximamente
          </button>
        )}
      </div>
    </div>
  );
}
