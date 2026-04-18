import Link from "next/link";

type Cert = {
  id: string;
  acronym: string;
  name: string;
  category: string;
  description: string;
  topics: string[];
  available: boolean;
  href: string;
};

const certifications: Cert[] = [
  {
    id: "cpa",
    acronym: "CPA",
    name: "Certified Public Accountant",
    category: "Contabilidad",
    description:
      "La credencial más reconocida en contabilidad pública. Acredita conocimiento en auditoría, impuestos, contabilidad financiera y regulación.",
    topics: ["Contabilidad Financiera", "Auditoría", "Regulación & Impuestos", "Análisis de Negocios"],
    available: true,
    href: "/examenes-profesionales/cpa",
  },
  {
    id: "cfa",
    acronym: "CFA",
    name: "Chartered Financial Analyst",
    category: "Finanzas & Inversiones",
    description:
      "Estándar global en gestión de inversiones y análisis financiero. Cubre análisis de activos, portafolios y ética profesional.",
    topics: ["Análisis de Inversiones", "Gestión de Portafolios", "Ética", "Economía"],
    available: false,
    href: "#",
  },
  {
    id: "frm",
    acronym: "FRM",
    name: "Financial Risk Manager",
    category: "Gestión de Riesgos",
    description:
      "Certificación de referencia en riesgo financiero. Abarca riesgo de mercado, crédito, operacional y gestión cuantitativa.",
    topics: ["Riesgo de Mercado", "Riesgo de Crédito", "Modelos Cuantitativos", "Derivados"],
    available: false,
    href: "#",
  },
  {
    id: "cfp",
    acronym: "CFP",
    name: "Certified Financial Planner",
    category: "Planeación Financiera",
    description:
      "Credencial en planeación financiera personal. Cubre retiro, impuestos, seguros, bienes raíces y planificación patrimonial.",
    topics: ["Planeación de Retiro", "Impuestos", "Seguros", "Inversiones"],
    available: false,
    href: "#",
  },
  {
    id: "ea",
    acronym: "EA",
    name: "Enrolled Agent",
    category: "Impuestos Federales",
    description:
      "Máxima credencial otorgada por el IRS. Especialización en impuestos federales para individuos, negocios y representación.",
    topics: ["Impuestos Individuales", "Impuestos Empresariales", "Representación IRS", "Ética"],
    available: false,
    href: "#",
  },
  {
    id: "actuary",
    acronym: "SOA",
    name: "Actuario — Society of Actuaries",
    category: "Ciencias Actuariales",
    description:
      "Exámenes de la Society of Actuaries. Alta intensidad matemática en probabilidad, estadística, modelos financieros y seguros.",
    topics: ["Probabilidad", "Matemáticas Financieras", "Modelos de Vida", "Estadística"],
    available: false,
    href: "#",
  },
  {
    id: "cma",
    acronym: "CMA",
    name: "Certified Management Accountant",
    category: "Contabilidad Gerencial",
    description:
      "Enfocada en contabilidad de gestión y finanzas corporativas. Cubre presupuestos, análisis de costos y toma de decisiones.",
    topics: ["Análisis Financiero", "Presupuestos", "Toma de Decisiones", "Control Interno"],
    available: false,
    href: "#",
  },
  {
    id: "pe",
    acronym: "PE",
    name: "Professional Engineer",
    category: "Ingeniería",
    description:
      "Licencia estatal para ingenieros con énfasis en matemáticas aplicadas, diseño, economía de ingeniería y ética profesional.",
    topics: ["Matemáticas de Ingeniería", "Economía de Ingeniería", "Estadística", "Diseño"],
    available: false,
    href: "#",
  },
];

const categoryColors: Record<string, string> = {
  Contabilidad: "bg-blue-100 text-blue-800",
  "Finanzas & Inversiones": "bg-purple-100 text-purple-800",
  "Gestión de Riesgos": "bg-orange-100 text-orange-800",
  "Planeación Financiera": "bg-teal-100 text-teal-800",
  "Impuestos Federales": "bg-red-100 text-red-800",
  "Ciencias Actuariales": "bg-indigo-100 text-indigo-800",
  "Contabilidad Gerencial": "bg-cyan-100 text-cyan-800",
  Ingeniería: "bg-green-100 text-green-800",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fa]">
      {/* Header */}
      <header className="bg-[#0c1f3f] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-[#d4a017] text-[#0c1f3f]">
              CP
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">CertPrep</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
            <a href="#certificaciones" className="hover:text-white transition-colors">
              Certificaciones
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              ¿Cómo funciona?
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-[#0c1f3f] to-[#1a3560]">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-[rgba(212,160,23,0.15)] text-[#f0c040] border border-[rgba(212,160,23,0.3)]">
            Exámenes Profesionales · EE.UU.
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Prepárate para tu
            <br />
            <span className="text-[#f0c040]">Certificación Profesional</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Practica con preguntas reales y simulacros de examen para las certificaciones más exigentes
            en contabilidad, finanzas y ciencias cuantitativas en los Estados Unidos.
          </p>

          <a
            href="#certificaciones"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95 bg-[#d4a017] text-[#0c1f3f]"
          >
            Ver Certificaciones
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-3 divide-x divide-gray-200">
          {[
            { value: "8", label: "Certificaciones" },
            { value: "1,000+", label: "Preguntas de práctica" },
            { value: "100%", label: "Basadas en el examen real" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-2xl font-bold text-[#0c1f3f]">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <section id="certificaciones" className="py-16 sm:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-[#0c1f3f]">Elige tu Certificación</h2>
            <p className="text-gray-600">
              Todas las certificaciones están basadas en matemáticas y análisis cuantitativo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-[#0c1f3f]">¿Cómo funciona?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Elige tu certificación",
                desc: "Selecciona la credencial profesional para la que quieres prepararte.",
              },
              {
                step: "02",
                title: "Practica por sección",
                desc: "Cada certificación está dividida en secciones temáticas con preguntas de práctica.",
              },
              {
                step: "03",
                title: "Revisa y mejora",
                desc: "Recibe retroalimentación inmediata y explicaciones detalladas de cada respuesta.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 bg-[#0c1f3f] text-[#f0c040]">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CertPrep · Práctica de Exámenes Profesionales en EE.UU.
        </div>
      </footer>
    </div>
  );
}

function CertCard({ cert }: { cert: Cert }) {
  const categoryColor = categoryColors[cert.category] ?? "bg-gray-100 text-gray-700";

  const inner = (
    <div
      className={`relative bg-white rounded-2xl border flex flex-col h-full transition-all duration-200 overflow-hidden
        ${
          cert.available
            ? "border-blue-200 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            : "border-gray-200 opacity-70"
        }`}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${cert.available ? "bg-[#0c1f3f]" : "bg-gray-300"}`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Status badge */}
        <div className="flex justify-end mb-2">
          {cert.available ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible
            </span>
          ) : (
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
              Próximamente
            </span>
          )}
        </div>

        {/* Acronym + category */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
              cert.available ? "bg-[#0c1f3f] text-[#f0c040]" : "bg-gray-200 text-gray-400"
            }`}
          >
            {cert.acronym}
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base leading-tight">{cert.acronym}</p>
            <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-1 ${categoryColor}`}>
              {cert.category}
            </span>
          </div>
        </div>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{cert.name}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{cert.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.topics.map((topic) => (
            <span key={topic} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
              {topic}
            </span>
          ))}
        </div>

        {cert.available && (
          <div className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-[#0c1f3f] text-white">
            Comenzar práctica →
          </div>
        )}
      </div>
    </div>
  );

  if (cert.available) {
    return (
      <Link href={cert.href} className="flex flex-col h-full">
        {inner}
      </Link>
    );
  }

  return <div className="flex flex-col h-full">{inner}</div>;
}
