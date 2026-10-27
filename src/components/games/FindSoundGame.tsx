import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { allWords, shuffle, Sound, speakRussian, wordBanks } from "./gameData";

type Card = { icon: string; word: string; correct: boolean };

export default function FindSoundGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState<Record<string, "correct" | "wrong">>({});
  const [message, setMessage] = useState("");

  const cards = useMemo<Card[]>(() => {
    const target = [...wordBanks[sound].start.slice(0, 4), ...wordBanks[sound].inside.slice(0, 4)]
      .map((item) => ({ ...item, correct: true }));
    const letter = sound.toLowerCase();
    const uniqueDistractors = Array.from(new Map(allWords.filter((item) => !item.word.includes(letter)).map((item) => [item.word, item])).values());
    const distractors = shuffle(uniqueDistractors).slice(0, 8)
      .map((item) => ({ ...item, correct: false }));
    return shuffle([...target, ...distractors]);
  }, [sound, round]);
  const score = Object.values(selected).filter((value) => value === "correct").length;
  const expired = timeLeft === 0 && score < 8;

  useEffect(() => {
    if (!timerRunning || timeLeft <= 0 || score === 8) return;
    const id = window.setInterval(() => setTimeLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, timeLeft, score]);

  const restart = (nextSound = sound, nextTimer = timer, startTimer = false) => {
    window.speechSynthesis?.cancel();
    setSound(nextSound); setTimer(nextTimer); setTimeLeft(nextTimer); setTimerRunning(startTimer);
    setSelected({}); setMessage(""); setRound((value) => value + 1);
  };

  const choose = (card: Card, index: number) => {
    if (expired || score === 8) return;
    const key = `${index}-${card.word}`;
    if (selected[key] === "correct") return;
    speakRussian(card.word, soundEnabled);
    if (card.correct) {
      setSelected((current) => ({ ...current, [key]: "correct" }));
      setMessage(score === 7 ? `🎉 Отлично! Все слова со звуком ${sound} найдены!` : `Правильно! В слове есть звук ${sound}.`);
    } else {
      setSelected((current) => ({ ...current, [key]: "wrong" }));
      setMessage(`Попробуй ещё раз — в этом слове нет звука ${sound}.`);
      window.setTimeout(() => setSelected((current) => { const next = { ...current }; delete next[key]; return next; }), 650);
    }
  };

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="find-title">
      <header><h1 id="find-title" className="text-2xl font-bold md:text-4xl">Найди звук</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Слушай и рассматривай слова: выбери восемь картинок, в названиях которых слышится заданный звук. Игра тренирует фонематический слух и внимательное различение звуков.</p></header>
      <GameControls sound={sound} onSoundChange={(value) => restart(value, timer)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} timer={timer} timeLeft={timeLeft} timerRunning={timerRunning} onTimerChange={(value) => restart(sound, value, true)} />
      <div className="my-3 flex flex-wrap items-center justify-between gap-2"><button type="button" onClick={() => restart(sound, timer, timerRunning)} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Начать заново</button><div className="rounded-full bg-white px-4 py-2 font-bold text-sky-800">{score} / 8</div></div>
      <div className={`mb-3 min-h-7 text-center text-base font-bold ${message.startsWith("Попробуй") || expired ? "text-rose-600" : "text-emerald-600"}`} aria-live="polite">{expired ? "Время вышло. Попробуй ещё раз!" : message}</div>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{cards.map((card, index) => { const state = selected[`${index}-${card.word}`]; return <button key={`${round}-${index}-${card.word}`} type="button" onClick={() => choose(card, index)} disabled={state === "correct" || expired} className={`min-h-24 rounded-xl border-2 p-1 text-center transition sm:min-h-32 sm:rounded-2xl sm:p-2 ${state === "correct" ? "border-slate-400 bg-slate-300 text-slate-500 grayscale opacity-60" : state === "wrong" ? "border-rose-400 bg-rose-50" : "border-sky-200 bg-white hover:-translate-y-1 hover:border-sky-400"}`}><span className="block text-4xl sm:text-5xl">{card.icon}</span><span className="mt-1 block text-xs font-bold sm:text-sm">{card.word}</span></button>; })}</div>
    </section>
  );
}
