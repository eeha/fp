"use client";

import { useState } from "react";
import Link from "next/link";
import type { Question, SectionData } from "@/lib/cpa-questions";

type Phase = "quiz" | "results";

export default function QuizClient({ data }: { data: SectionData }) {
  const questions = data.questions;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [phase, setPhase] = useState<Phase>("quiz");

  const q: Question = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q.correctAnswer;
  const score = answers.filter((a, i) => a === questions[i].correctAnswer).length;
  const pct = Math.round((score / questions.length) * 100);

  function handleSelect(id: "A" | "B" | "C" | "D") {
    if (isAnswered) return;
    setSelected(id);
    const updated = [...answers];
    updated[current] = id;
    setAnswers(updated);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(answers[current + 1] as "A" | "B" | "C" | "D" | null);
    } else {
      setPhase("results");
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setPhase("quiz");
  }

  if (phase === "results") {
    return (
      <ResultsScreen
        score={score}
        total={questions.length}
        pct={pct}
        questions={questions}
        answers={answers}
        onRestart={handleRestart}
        sectionCode={data.code}
        sectionTitle={data.title}
      />
    );
  }

  const progress = ((current + (isAnswered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fa]">
      <header className="bg-[#0c1f3f] shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs bg-[#d4a017] text-[#0c1f3f]">
              CP
            </div>
          </Link>
          <span className="text-blue-400 text-sm">/</span>
          <Link href="/examenes-profesionales/cpa" className="text-blue-300 text-sm hover:text-white">
            CPA
          </Link>
          <span className="text-blue-400 text-sm">/</span>
          <span className="text-white text-sm font-semibold">{data.code}</span>
          <span className="ml-auto text-blue-300 text-sm">
            {current + 1} / {questions.length}
          </span>
        </div>
        <div className="h-1 bg-[#1a3560]">
          <div
            className="h-full bg-[#d4a017] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-3xl">
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {q.topic}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-5">
            <p className="text-gray-900 text-base sm:text-lg font-medium leading-relaxed">
              {q.text}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {q.options.map((opt) => {
              let style = "border-gray-200 bg-white text-gray-800 hover:border-blue-300 hover:bg-blue-50";
              if (isAnswered) {
                if (opt.id === q.correctAnswer) style = "border-emerald-400 bg-emerald-50 text-emerald-900";
                else if (opt.id === selected) style = "border-red-400 bg-red-50 text-red-900";
                else style = "border-gray-200 bg-gray-50 text-gray-400";
              } else if (opt.id === selected) {
                style = "border-blue-500 bg-blue-50 text-blue-900";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  disabled={isAnswered}
                  className={`w-full text-left rounded-xl border-2 px-5 py-4 transition-all duration-150 flex items-start gap-4 ${style} ${!isAnswered ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                      isAnswered && opt.id === q.correctAnswer
                        ? "bg-emerald-500 text-white"
                        : isAnswered && opt.id === selected
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {opt.id}
                  </span>
                  <span className="text-sm sm:text-base leading-snug">{opt.text}</span>
                  {isAnswered && opt.id === q.correctAnswer && <span className="ml-auto shrink-0 text-emerald-600 text-lg">✓</span>}
                  {isAnswered && opt.id === selected && opt.id !== q.correctAnswer && <span className="ml-auto shrink-0 text-red-500 text-lg">✗</span>}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`rounded-2xl border p-5 mb-6 ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
                <span className={`font-bold text-sm ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                  {isCorrect ? "¡Correcto!" : "Incorrecto"}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
            </div>
          )}

          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-xl font-semibold text-base bg-[#0c1f3f] text-white hover:bg-[#1a3560] transition-colors"
            >
              {current + 1 < questions.length ? "Siguiente pregunta →" : "Ver resultados →"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function ResultsScreen({
  score, total, pct, questions, answers, onRestart, sectionCode, sectionTitle,
}: {
  score: number; total: number; pct: number; questions: Question[];
  answers: (string | null)[]; onRestart: () => void;
  sectionCode: string; sectionTitle: string;
}) {
  const passed = pct >= 75;

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fa]">
      <header className="bg-[#0c1f3f] shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/"><div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs bg-[#d4a017] text-[#0c1f3f]">CP</div></Link>
          <span className="text-blue-400">/</span>
          <Link href="/examenes-profesionales/cpa" className="text-blue-300 text-sm hover:text-white">CPA</Link>
          <span className="text-blue-400">/</span>
          <span className="text-white text-sm font-semibold">{sectionCode}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-3xl">
          <div className={`rounded-2xl p-8 text-center mb-8 ${passed ? "bg-emerald-600" : "bg-[#0c1f3f]"}`}>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">{sectionCode} — {sectionTitle}</p>
            <div className="text-7xl font-bold text-white mb-1">{pct}%</div>
            <p className="text-white/80 text-lg mb-4">{score} de {total} correctas</p>
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm ${passed ? "bg-white text-emerald-700" : "bg-[#d4a017] text-[#0c1f3f]"}`}>
              {passed ? "✓ Aprobado (≥75%)" : "✗ Por debajo del mínimo (75%)"}
            </div>
          </div>

          <div className="flex gap-3 mb-10">
            <button onClick={onRestart} className="flex-1 py-3.5 rounded-xl font-semibold text-sm bg-[#0c1f3f] text-white hover:bg-[#1a3560] transition-colors">
              Volver a intentar
            </button>
            <Link href="/examenes-profesionales/cpa" className="flex-1 py-3.5 rounded-xl font-semibold text-sm border-2 border-[#0c1f3f] text-[#0c1f3f] text-center hover:bg-[#0c1f3f] hover:text-white transition-colors">
              Otras secciones
            </Link>
          </div>

          <h2 className="text-lg font-bold text-[#0c1f3f] mb-4">Revisión de respuestas</h2>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const correct = userAnswer === q.correctAnswer;
              return (
                <div key={q.id} className={`bg-white rounded-2xl border p-5 ${correct ? "border-emerald-200" : "border-red-200"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${correct ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                      {i + 1}
                    </span>
                    <p className="text-sm font-medium text-gray-900">{q.text}</p>
                  </div>
                  <div className="ml-9 space-y-1.5 mb-3">
                    {q.options.map((opt) => (
                      <div key={opt.id} className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 ${
                        opt.id === q.correctAnswer ? "bg-emerald-50 text-emerald-800 font-semibold"
                        : opt.id === userAnswer ? "bg-red-50 text-red-700"
                        : "text-gray-500"
                      }`}>
                        <span className="font-bold">{opt.id}.</span> {opt.text}
                        {opt.id === q.correctAnswer && <span className="ml-auto">✓</span>}
                        {opt.id === userAnswer && opt.id !== q.correctAnswer && <span className="ml-auto">✗</span>}
                      </div>
                    ))}
                  </div>
                  <p className="ml-9 text-xs text-gray-500 leading-relaxed">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
