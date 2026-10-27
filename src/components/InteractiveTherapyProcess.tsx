import { useState } from "react";
import startImage from "@/assets/therapy-process/start.png";
import planImage from "@/assets/therapy-process/plan.png";
import onlineImage from "@/assets/therapy-process/online.png";
import progressImage from "@/assets/therapy-process/progress.png";
import resultImage from "@/assets/therapy-process/result.png";

const steps = [
  { title: "Начало терапии", text: "Знакомство и диагностика", image: startImage, color: "text-yellow-600" },
  { title: "План терапии", text: "Индивидуальный план терапии", image: planImage, color: "text-orange-600" },
  { title: "Онлайн-занятия", text: "Занятия и упражнения", image: onlineImage, color: "text-red-500" },
  { title: "Мониторинг прогресса", text: "Прогресс и корректировка", image: progressImage, color: "text-pink-600" },
  { title: "Улучшение речи", text: "Улучшение речи и коммуникации", image: resultImage, color: "text-purple-600" },
];

export default function InteractiveTherapyProcess() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => {
        const isActive = active === index;
        const isDimmed = active !== null && !isActive;
        return (
          <button
            key={step.title}
            type="button"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
            className={`group rounded-2xl border p-2 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isDimmed ? "border-slate-200 bg-slate-100/80 grayscale" : "border-transparent bg-white hover:-translate-y-1 hover:shadow-md"}`}
            aria-label={`${step.title}: ${step.text}`}
          >
            <div className="flex h-40 items-end justify-center overflow-hidden rounded-xl bg-white/70">
              <img src={step.image} alt="" className={`h-full w-full object-contain transition-transform duration-300 ${isActive ? "scale-105" : ""}`} aria-hidden="true" />
            </div>
            <h3 className={`mt-2 text-base font-bold leading-tight transition-transform duration-300 sm:text-lg ${step.color} ${isActive ? "scale-105" : ""}`}>{step.title}</h3>
            <p className={`mt-2 min-h-12 text-sm leading-snug text-slate-700 transition-all duration-300 ${isActive ? "scale-105 font-semibold" : ""}`}>{step.text}</p>
          </button>
        );
      })}
    </div>
  );
}
