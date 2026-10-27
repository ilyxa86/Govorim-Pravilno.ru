import { useMemo, useState } from "react";
import { ChevronRight, RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { Position, shuffle, Sound, speakRussian, wordBanks, WordItem } from "./gameData";

type RoundCard = WordItem & { odd: boolean };

function makeRounds(sound: Sound, position: Position): RoundCard[][] {
  const items = wordBanks[sound][position];
  const groups = Array.from(new Set(items.map((item) => item.category)));
  return Array.from({ length: 10 }, (_, round) => {
    const category = groups[round % groups.length];
    const other = groups[(round + 1 + Math.floor(round / groups.length)) % groups.length];
    const same = items.filter((item) => item.category === category);
    const different = items.filter((item) => item.category === other);
    const rotated = [...same.slice(round % same.length), ...same.slice(0, round % same.length)].slice(0, 3);
    return shuffle([...rotated.map((item) => ({ ...item, odd: false })), { ...different[round % different.length], odd: true }]);
  });
}

export default function OddOneOutGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [position, setPosition] = useState<Position>("start");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [round, setRound] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const rounds = useMemo(() => makeRounds(sound, position), [sound, position]);
  const cards = rounds[round];

  const reset = (nextSound = sound, nextPosition = position, nextRound = 0) => { window.speechSynthesis?.cancel(); setSound(nextSound); setPosition(nextPosition); setRound(nextRound); setChosen(null); };
  const correct = chosen !== null && cards[chosen].odd;

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="odd-title">
      <header className="flex items-start justify-between gap-3"><div><h1 id="odd-title" className="text-2xl font-bold md:text-4xl">Лишняя картинка</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Сравни четыре слова с выбранным звуком: три относятся к одной группе, а одно отличается. Найди лишнее и объясни, почему оно не подходит.</p></div><div className="shrink-0 rounded-full border-2 border-sky-200 bg-white px-4 py-3 font-bold text-sky-800">{round + 1} / 10</div></header>
      <GameControls sound={sound} onSoundChange={(value) => reset(value, position)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} position={position} onPositionChange={(value) => reset(sound, value)} />
      <p className="my-3 text-center text-base font-bold text-sky-800">{position === "start" ? `Все слова начинаются со звука ${sound}` : `Во всех словах звук ${sound} находится внутри или в конце`}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{cards.map((card, index) => <button key={`${round}-${card.word}`} type="button" onClick={() => { setChosen(index); speakRussian(card.word, soundEnabled); }} className={`min-h-32 rounded-2xl border-2 p-2 text-center transition sm:min-h-40 ${chosen === index ? card.odd ? "border-emerald-500 bg-emerald-50" : "border-rose-400 bg-rose-50" : "border-sky-200 bg-white hover:-translate-y-1 hover:border-sky-400"}`}><span className="block text-5xl sm:text-6xl">{card.icon}</span><span className="mt-2 block text-base font-bold">{card.word}</span></button>)}</div>
      <div className={`my-4 min-h-7 text-center text-lg font-bold ${correct ? "text-emerald-600" : "text-rose-600"}`} aria-live="polite">{chosen !== null && (correct ? "🎉 Правильно! Это лишняя картинка." : "Посмотри внимательнее: три картинки можно назвать одним словом.")}</div>
      <div className="flex flex-wrap justify-center gap-2"><button type="button" onClick={() => reset()} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Сначала</button><button type="button" onClick={() => reset(sound, position, (round + 1) % 10)} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sky-500 px-5 font-bold text-white">Следующая группа<ChevronRight size={18}/></button></div>
    </section>
  );
}
