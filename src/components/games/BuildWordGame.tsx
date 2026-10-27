import { useMemo, useState } from "react";
import { ChevronRight, RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { Position, shuffle, Sound, speakRussian, wordBanks } from "./gameData";

const vowels = "аеёиоуыэюя";
function syllabify(word: string) {
  const positions = [...word].map((letter, index) => vowels.includes(letter) ? index : -1).filter((index) => index >= 0);
  if (positions.length < 2) return [word];
  const result: string[] = []; let start = 0;
  positions.slice(0, -1).forEach((vowelIndex, index) => {
    const nextVowel = positions[index + 1];
    const cut = Math.max(vowelIndex + 1, nextVowel - 1);
    result.push(word.slice(start, cut)); start = cut;
  });
  result.push(word.slice(start)); return result;
}

export default function BuildWordGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [position, setPosition] = useState<Position>("start");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const item = wordBanks[sound][position][index];
  const syllables = useMemo(() => shuffle(syllabify(item.word).map((text, id) => ({ text, id }))), [item.word, round]);
  const answer = picked.map((id) => syllables.find((part) => part.id === id)?.text ?? "").join("");
  const complete = picked.length === syllables.length;
  const correct = complete && answer === item.word;

  const reset = (nextSound = sound, nextPosition = position, nextIndex = index) => { window.speechSynthesis?.cancel(); setSound(nextSound); setPosition(nextPosition); setIndex(nextIndex); setPicked([]); setRound((value) => value + 1); };

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="build-title">
      <header className="flex items-start justify-between gap-3"><div><h1 id="build-title" className="text-2xl font-bold md:text-4xl">Собери слово</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Рассмотри картинку и поставь слоги в правильном порядке. В каждом наборе — пятнадцать слов с выбранным звуком для тренировки чтения и слоговой структуры.</p></div><div className="shrink-0 rounded-full border-2 border-sky-200 bg-white px-4 py-3 font-bold text-sky-800">{index + 1} / 15</div></header>
      <GameControls sound={sound} onSoundChange={(value) => reset(value, position, 0)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} position={position} onPositionChange={(value) => reset(sound, value, 0)} />
      <div className="my-4 text-center"><div className="text-7xl">{item.icon}</div><div className={`mx-auto mt-3 min-h-16 max-w-lg rounded-2xl border-2 border-dashed p-3 text-2xl font-black tracking-wider ${correct ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-sky-300 bg-white text-sky-900"}`}>{picked.length ? picked.map((id) => syllables.find((part) => part.id === id)?.text).join(" · ") : "Выбери первый слог"}</div></div>
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">{syllables.map((part) => <button key={`${round}-${part.id}`} type="button" disabled={picked.includes(part.id) || correct} onClick={() => { setPicked((current) => [...current, part.id]); speakRussian(part.text, soundEnabled); }} className="min-h-14 rounded-xl border-2 border-sky-200 bg-white text-xl font-bold transition hover:border-sky-400 disabled:bg-slate-200 disabled:text-slate-400">{part.text}</button>)}</div>
      <div className={`my-4 min-h-7 text-center text-lg font-bold ${correct ? "text-emerald-600" : "text-rose-600"}`} aria-live="polite">{correct ? `🎉 Отлично! Получилось слово «${item.word}»!` : complete ? "Порядок слогов пока неверный. Попробуй ещё раз." : ""}</div>
      <div className="flex flex-wrap justify-center gap-2"><button type="button" onClick={() => reset()} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Собрать заново</button><button type="button" onClick={() => reset(sound, position, (index + 1) % 15)} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sky-500 px-5 font-bold text-white">Следующее слово<ChevronRight size={18}/></button></div>
    </section>
  );
}
