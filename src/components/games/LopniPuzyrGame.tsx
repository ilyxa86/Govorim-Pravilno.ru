import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";
import GameControls from "./GameControls";
import { allWords, shuffle, Sound, speakRussian, wordBanks, WordItem } from "./gameData";

type Bubble = WordItem & { id: number; correct: boolean; left: number; duration: number; size: number };
type Speed = "slow" | "normal" | "fast";
const speedOptions: { value: Speed; label: string; duration: number; interval: number }[] = [
  { value: "slow", label: "Медленно", duration: 11, interval: 1400 },
  { value: "normal", label: "Обычно", duration: 8.5, interval: 1050 },
  { value: "fast", label: "Быстро", duration: 6.5, interval: 780 },
];

export default function LopniPuzyrGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [missed, setMissed] = useState(0);
  const [speed, setSpeed] = useState<Speed>("normal");
  const [message, setMessage] = useState("Лопни 10 пузырей с нужным звуком");
  const [round, setRound] = useState(0);
  const idRef = useRef(0);
  const handledRef = useRef(new Set<number>());
  const finished = score >= 10;

  const pools = useMemo(() => {
    const target = [...wordBanks[sound].start, ...wordBanks[sound].inside];
    const letter = sound.toLowerCase();
    const distractors = Array.from(new Map(allWords.filter((item) => !item.word.includes(letter)).map((item) => [item.word, item])).values());
    return { target, distractors };
  }, [sound, round]);

  useEffect(() => {
    if (finished) return;
    const spawn = () => {
      const correct = Math.random() < 0.58;
      const pool = correct ? pools.target : pools.distractors;
      const item = pool[Math.floor(Math.random() * pool.length)];
      const speedConfig = speedOptions.find((option) => option.value === speed) ?? speedOptions[1];
      const bubble: Bubble = { ...item, correct, id: ++idRef.current, left: 3 + Math.random() * 70, duration: speedConfig.duration + (Math.random() * 1.5 - 0.75), size: 82 + Math.random() * 18 };
      setBubbles((current) => [...current.slice(-6), bubble]);
      window.setTimeout(() => miss(bubble), (bubble.duration * 1000) + 120);
    };
    spawn();
    const speedConfig = speedOptions.find((option) => option.value === speed) ?? speedOptions[1];
    const timer = window.setInterval(spawn, speedConfig.interval);
    return () => window.clearInterval(timer);
  }, [pools, finished, speed]);

  const restart = (nextSound = sound) => {
    window.speechSynthesis?.cancel();
    setSound(nextSound); setScore(0); setErrors(0); setMissed(0); setBubbles([]); setRound((value) => value + 1);
    handledRef.current.clear();
    setMessage("Лопни 10 пузырей с нужным звуком");
  };

  const miss = (bubble: Bubble) => {
    if (handledRef.current.has(bubble.id)) return;
    handledRef.current.add(bubble.id);
    setBubbles((current) => current.filter((item) => item.id !== bubble.id));
    if (!bubble.correct) return;
    setErrors((value) => value + 1);
    setMissed((value) => value + 1);
    setMessage(`Пропущено слово со звуком ${sound}. Это ошибка.`);
  };

  const chooseSpeed = (nextSpeed: Speed) => {
    if (nextSpeed === speed) return;
    setSpeed(nextSpeed);
    restart();
  };

  const pop = (bubble: Bubble) => {
    if (handledRef.current.has(bubble.id)) return;
    handledRef.current.add(bubble.id);
    speakRussian(bubble.word, soundEnabled);
    setBubbles((current) => current.filter((item) => item.id !== bubble.id));
    if (bubble.correct) {
      const next = score + 1;
      setScore(next);
      setMessage(next === 10 ? "🎉 Отлично! Все пузыри пойманы!" : `Хлоп! В слове есть звук ${sound}.`);
    } else {
      setErrors((value) => value + 1);
      setMessage(`Послушай ещё раз: в слове «${bubble.word}» нет звука ${sound}.`);
    }
  };

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="bubble-title">
      <header className="text-center sm:text-left">
        <h1 id="bubble-title" className="text-2xl font-bold md:text-4xl">Лопни пузырь</h1>
        <p className="mx-auto mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:text-base">Пузыри поднимаются вверх. Успей лопнуть только те, на которых написано слово с выбранным звуком. Игра развивает фонематический слух, внимание и скорость реакции.</p>
      </header>
      <GameControls sound={sound} onSoundChange={(value) => restart(value)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} />
      <div className="my-2 flex items-center justify-between gap-2">
        <button type="button" onClick={() => restart()} className="inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 text-sm font-bold text-sky-800"><RotateCcw size={17}/>Заново</button>
        <div className="flex flex-wrap justify-end gap-2 text-sm font-bold"><span className="rounded-full bg-emerald-100 px-3 py-2 text-emerald-800">✓ {score}/10</span><span className="rounded-full bg-rose-100 px-3 py-2 text-rose-700">Ошибки: {errors}</span><span className="rounded-full bg-amber-100 px-3 py-2 text-amber-800">Пропущено: {missed}</span></div>
      </div>
      <div className={`mb-2 min-h-6 text-center text-sm font-bold sm:text-base ${message.startsWith("Послушай") || message.startsWith("Пропущено") ? "text-rose-600" : "text-emerald-700"}`} aria-live="polite">{message}</div>
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white/80 p-2 text-sm font-bold text-sky-900 sm:justify-between"><span>Скорость пузырей</span><div className="flex rounded-full bg-sky-50 p-1">{speedOptions.map((option) => <button key={option.value} type="button" onClick={() => chooseSpeed(option.value)} aria-pressed={speed === option.value} className={`rounded-full px-3 py-2 text-xs transition sm:px-4 ${speed === option.value ? "bg-sky-500 text-white shadow-sm" : "text-sky-800 hover:bg-white"}`}>{option.label}</button>)}</div></div>
      <div className="bubble-sky relative h-[360px] overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-b from-sky-200 via-sky-100 to-cyan-50 shadow-inner sm:h-[430px]" aria-label="Поле с поднимающимися пузырями">
        <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-sky-800 backdrop-blur"><Sparkles size={14}/>Нажимай до верхнего края</div>
        {bubbles.map((bubble) => <button key={bubble.id} type="button" onClick={() => pop(bubble)} onAnimationEnd={() => miss(bubble)} className="rising-bubble absolute grid place-items-center rounded-full border-4 border-white/80 bg-gradient-to-br from-white/90 via-sky-100 to-violet-200 p-1 text-center shadow-lg transition active:scale-90" style={{ left: `${bubble.left}%`, width: bubble.size, height: bubble.size, animationDuration: `${bubble.duration}s` }}><span><span className="block text-2xl leading-none sm:text-3xl">{bubble.icon}</span><span className="mt-1 block text-[11px] font-extrabold leading-tight text-slate-800 sm:text-xs">{bubble.word}</span></span></button>)}
        {finished && <div className="absolute inset-0 grid place-items-center bg-sky-50/90 p-6 text-center"><div><div className="text-6xl">🏆</div><p className="mt-2 text-2xl font-bold text-sky-900">Отличная работа!</p><button type="button" onClick={() => restart()} className="mt-4 rounded-full bg-sky-500 px-6 py-3 font-bold text-white shadow-md">Играть ещё раз</button></div></div>}
      </div>
      <style>{`@keyframes bubble-rise{from{transform:translateY(390px) rotate(-3deg)}50%{transform:translateY(135px) rotate(4deg)}to{transform:translateY(-130px) rotate(-2deg)}}.rising-bubble{bottom:0;animation-name:bubble-rise;animation-timing-function:linear;animation-fill-mode:forwards}.rising-bubble:hover{filter:saturate(1.15);box-shadow:0 12px 28px rgba(14,165,233,.28)}@media(min-width:640px){@keyframes bubble-rise{from{transform:translateY(470px) rotate(-3deg)}50%{transform:translateY(165px) rotate(4deg)}to{transform:translateY(-135px) rotate(-2deg)}}}`}</style>
    </section>
  );
}
