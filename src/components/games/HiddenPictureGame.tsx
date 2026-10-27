import { useMemo, useState } from "react";
import { ChevronRight, RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { Sound, speakRussian, wordBanks } from "./gameData";

export default function HiddenPictureGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [index, setIndex] = useState(0);
  const [clicks, setClicks] = useState(0);
  const items = useMemo(() => wordBanks[sound].start.slice(0, 10), [sound]);
  const item = items[index];
  const remaining = 3 - clicks;

  const reset = (nextSound = sound, nextIndex = index) => { window.speechSynthesis?.cancel(); setSound(nextSound); setIndex(nextIndex); setClicks(0); };
  const reveal = () => {
    if (clicks >= 3) return;
    const next = clicks + 1; setClicks(next);
    if (next === 3) speakRussian(item.word, soundEnabled);
  };

  const blur = clicks === 0 ? "blur-md scale-105 opacity-75" : clicks === 1 ? "blur-sm opacity-85" : clicks === 2 ? "blur-[1px] opacity-95" : "blur-0 opacity-100";

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="hidden-title">
      <header className="flex items-start justify-between gap-3"><div><h1 id="hidden-title" className="text-2xl font-bold md:text-4xl">Что спряталось?</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Угадай спрятанный предмет за три шага. После каждого нажатия картинка становится чётче, а при третьем открывается полностью и произносит слово.</p></div><div className="shrink-0 rounded-full border-2 border-sky-200 bg-white px-4 py-3 font-bold text-sky-800">{index + 1} / 10</div></header>
      <GameControls sound={sound} onSoundChange={(value) => reset(value, 0)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} />
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="text-center md:text-right"><div className="text-sm font-bold uppercase tracking-wide text-sky-700">Нажми ещё</div>{clicks < 3 ? <div className="text-7xl font-black leading-none text-amber-500">{remaining}</div> : <div className="text-3xl font-black text-emerald-600">Готово!</div>}<div className="mt-1 font-semibold text-muted-foreground">{remaining === 1 ? "раз" : "раза"}</div></div>
        <button type="button" onClick={reveal} disabled={clicks >= 3} className="mx-auto grid aspect-square w-full max-w-[18rem] place-items-center overflow-hidden rounded-[2rem] border-4 border-sky-300 bg-white text-8xl shadow-inner sm:text-9xl" aria-label="Открыть картинку"><span className={`transition-all duration-500 ${blur}`}>{item.icon}</span></button>
        <div className="text-center md:text-left"><div className="text-sm font-bold uppercase tracking-wide text-sky-700">Звук</div><div className="text-6xl font-black text-sky-600">{sound}</div>{clicks === 3 && <div className="mt-2 text-2xl font-black text-emerald-600">Это {item.word}!</div>}</div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2"><button type="button" onClick={() => reset()} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Спрятать снова</button><button type="button" onClick={() => reset(sound, (index + 1) % 10)} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sky-500 px-5 font-bold text-white">Следующая картинка<ChevronRight size={18}/></button></div>
    </section>
  );
}
