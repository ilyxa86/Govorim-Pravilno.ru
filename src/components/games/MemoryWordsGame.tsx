import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { shuffle, Sound, speakRussian, wordBanks } from "./gameData";

type MemoryCard = { id: string; pair: string; icon: string; word: string };

export default function MemoryWordsGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [round, setRound] = useState(0);
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const cards = useMemo<MemoryCard[]>(() => {
    const items = [...wordBanks[sound].start.slice(0, 4), ...wordBanks[sound].inside.slice(0, 4)];
    return shuffle(items.flatMap((item, index) => ["a", "b"].map((suffix) => ({ id: `${index}-${suffix}`, pair: String(index), icon: item.icon, word: item.word }))));
  }, [sound, round]);
  const finished = matched.length === 8;
  const expired = timeLeft === 0 && !finished;

  useEffect(() => {
    if (!timerRunning || timeLeft <= 0 || finished) return;
    const id = window.setInterval(() => setTimeLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, timeLeft, finished]);

  useEffect(() => {
    if (open.length !== 2) return;
    const first = cards.find((card) => card.id === open[0]);
    const second = cards.find((card) => card.id === open[1]);
    if (!first || !second) return;
    if (first.pair === second.pair) {
      setMatched((current) => [...current, first.pair]); setMessage("🎉 Правильно! Пара найдена!"); setOpen([]);
    } else {
      setMessage("Картинки разные — запомни их и попробуй снова.");
      const id = window.setTimeout(() => setOpen([]), 800); return () => window.clearTimeout(id);
    }
  }, [open, cards]);

  const restart = (nextSound = sound, nextTimer = timer, startTimer = false) => {
    window.speechSynthesis?.cancel(); setSound(nextSound); setTimer(nextTimer); setTimeLeft(nextTimer); setTimerRunning(startTimer);
    setOpen([]); setMatched([]); setMessage(""); setRound((value) => value + 1);
  };

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="memory-title">
      <header><h1 id="memory-title" className="text-2xl font-bold md:text-4xl">Найди пару</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Открывай по две карточки, запоминай расположение картинок и находи одинаковые слова с выбранным звуком. Игра укрепляет память, внимание и чистую речь.</p></header>
      <GameControls sound={sound} onSoundChange={(value) => restart(value, timer)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} timer={timer} timeLeft={timeLeft} timerRunning={timerRunning} onTimerChange={(value) => restart(sound, value, true)} />
      <div className="my-3 flex flex-wrap items-center justify-between gap-2"><button type="button" onClick={() => restart(sound, timer, timerRunning)} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Начать заново</button><div className="rounded-full bg-white px-4 py-2 font-bold text-sky-800">{matched.length} / 8 пар</div></div>
      <div className={`mb-3 min-h-7 text-center text-base font-bold ${expired || message.startsWith("Картинки") ? "text-rose-600" : "text-emerald-600"}`} aria-live="polite">{expired ? "Время вышло. Попробуй ещё раз!" : finished ? "🎉 Отлично! Все пары найдены!" : message}</div>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{cards.map((card) => { const shown = open.includes(card.id) || matched.includes(card.pair); const done = matched.includes(card.pair); return <button key={`${round}-${card.id}`} type="button" disabled={done || expired || open.length === 2} onClick={() => { if (shown) return; speakRussian(card.word, soundEnabled); setOpen((current) => [...current, card.id]); setMessage(""); }} className={`min-h-24 rounded-xl border-2 p-1 text-center transition sm:min-h-32 sm:rounded-2xl ${done ? "border-slate-400 bg-slate-300 text-slate-500 grayscale opacity-60" : shown ? "border-sky-400 bg-sky-100" : "border-sky-200 bg-white hover:border-sky-400"}`}>{shown ? <><span className="block text-4xl sm:text-5xl">{card.icon}</span><span className="mt-1 block text-xs font-bold sm:text-sm">{card.word}</span></> : <span className="text-4xl font-bold text-sky-500">?</span>}</button>; })}</div>
    </section>
  );
}
