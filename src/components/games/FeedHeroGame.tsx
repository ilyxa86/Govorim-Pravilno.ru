import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import GameControls from "./GameControls";
import { shuffle, Sound, speakRussian } from "./gameData";

type Food = { icon: string; word: string; correct: boolean };
const food = (items: [string, string, number][]): Food[] => items.map(([icon, word, correct]) => ({ icon, word, correct: Boolean(correct) }));

const games: Record<Sound, { hero: string; foods: Food[] }> = {
  Р: { hero: "🐻", foods: food([["🍚","рис",1],["🍐","груша",1],["🍅","помидор",1],["🍰","торт",1],["🍓","клубника",1],["🥕","морковь",1],["🥧","пирог",1],["🧀","сыр",1],["🍎","яблоко",0],["🍌","банан",0],["🍋","лимон",0],["🥛","молоко",0],["🍞","хлеб",0],["🥚","яйцо",0],["🥣","каша",0],["🍲","суп",0]]) },
  Ш: { hero: "🦊", foods: food([["🍫","шоколад",1],["🥣","каша",1],["🍜","лапша",1],["🍩","пышка",1],["🍐","груша",1],["🍒","вишня",1],["🥔","картошка",1],["🫓","лепёшка",1],["🍎","яблоко",0],["🍌","банан",0],["🍚","рис",0],["🍞","хлеб",0],["🍋","лимон",0],["🥕","морковь",0],["🥛","молоко",0],["🍲","суп",0]]) },
  Л: { hero: "🐰", foods: food([["🍎","яблоко",1],["🍋","лимон",1],["🥛","молоко",1],["🍓","клубника",1],["🥗","салат",1],["🧈","масло",1],["🍬","халва",1],["🌭","колбаса",1],["🍚","рис",0],["🍐","груша",0],["🍒","вишня",0],["🥕","морковь",0],["🥧","пирог",0],["🧀","сыр",0],["🥚","яйцо",0],["🍉","арбуз",0]]) },
  С: { hero: "🐶", foods: food([["🌭","сосиска",1],["🧀","сыр",1],["🥣","суп",1],["🍣","суши",1],["🥗","салат",1],["🧂","соль",1],["🫐","смородина",1],["🍊","апельсин",1],["🍎","яблоко",0],["🍌","банан",0],["🍞","хлеб",0],["🍫","шоколад",0],["🥕","морковь",0],["🍉","арбуз",0],["🥛","молоко",0],["🥚","яйцо",0]]) },
  З: { hero: "🐼", foods: food([["🍡","зефир",1],["🍇","изюм",1],["🍩","глазурь",1],["🥜","козинак",1],["🌽","кукуруза",1],["🥬","зелень",1],["🥘","запеканка",1],["🍉","арбуз",1],["🍎","яблоко",0],["🍌","банан",0],["🍋","лимон",0],["🍞","хлеб",0],["🧀","сыр",0],["🥕","морковь",0],["🍓","клубника",0],["🥛","молоко",0]]) },
};

export default function FeedHeroGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<Record<string, "correct" | "wrong">>({});
  const [message, setMessage] = useState("");
  const [feeding, setFeeding] = useState(false);
  const cards = useMemo(() => shuffle(games[sound].foods), [sound, round]);
  const score = Object.values(picked).filter((value) => value === "correct").length;

  const restart = (nextSound = sound) => { window.speechSynthesis?.cancel(); setSound(nextSound); setPicked({}); setMessage(""); setFeeding(false); setRound((value) => value + 1); };
  const choose = (card: Food, index: number) => {
    const key = `${index}-${card.word}`;
    if (picked[key] === "correct") return;
    speakRussian(card.word, soundEnabled);
    if (card.correct) {
      setPicked((current) => ({ ...current, [key]: "correct" })); setMessage("Ням-ням! Правильно!"); setFeeding(true);
      window.setTimeout(() => setFeeding(false), 500);
    } else {
      setPicked((current) => ({ ...current, [key]: "wrong" })); setMessage(`Попробуй ещё раз — в этом слове нет звука ${sound}.`);
      window.setTimeout(() => setPicked((current) => { const next = { ...current }; delete next[key]; return next; }), 700);
    }
  };

  const bubbleText = score === 8 ? "🎉 Отлично! Герой сыт и очень рад!" : message;
  const error = bubbleText.startsWith("Попробуй");

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="feed-title">
      <header className="flex items-start justify-between gap-3"><div><h1 id="feed-title" className="text-2xl font-bold md:text-4xl">Покорми героя</h1><p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">Помоги голодному герою выбрать подходящее угощение. Произнеси название еды и нажимай только на те карточки, в которых слышится выбранный звук.</p></div><div className="shrink-0 rounded-full border-2 border-sky-200 bg-white px-4 py-3 font-bold text-sky-800">{score} / 8</div></header>
      <GameControls sound={sound} onSoundChange={restart} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} />
      <div className="relative mx-auto my-4 max-w-md pt-10 text-center">
        {bubbleText && <div className={`absolute left-1/2 top-0 z-10 w-[min(92%,22rem)] -translate-x-1/2 rounded-2xl border-2 px-4 py-2 text-sm font-bold shadow-md sm:text-base ${error ? "border-rose-300 bg-rose-50 text-rose-700" : "border-emerald-300 bg-emerald-50 text-emerald-700"}`} aria-live="polite"><span>{bubbleText}</span><span className={`absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 ${error ? "border-rose-300 bg-rose-50" : "border-emerald-300 bg-emerald-50"}`} /></div>}
        <div className={`mx-auto grid h-40 w-40 place-items-center rounded-full bg-white text-[8rem] leading-none shadow-inner transition sm:h-48 sm:w-48 sm:text-[9rem] ${feeding ? "animate-bounce" : ""}`} aria-label="Герой игры">{games[sound].hero}</div>
        <h2 className="mt-2 text-xl font-black">Накорми героя звуком <span className="text-sky-600">{sound}</span></h2><p className="mt-1 text-lg font-bold">Произнеси слово вслух и выбери угощение.</p>
      </div>
      <button type="button" onClick={() => restart()} className="mb-3 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 font-bold text-sky-800"><RotateCcw size={18}/>Начать заново</button>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{cards.map((card, index) => { const state = picked[`${index}-${card.word}`]; return <button key={`${round}-${index}-${card.word}`} type="button" onClick={() => choose(card, index)} disabled={state === "correct"} className={`min-h-24 rounded-xl border-2 p-1 text-center transition sm:min-h-32 sm:rounded-2xl sm:p-2 ${state === "correct" ? "border-slate-400 bg-slate-300 text-slate-500 grayscale opacity-60" : state === "wrong" ? "border-rose-400 bg-rose-50" : "border-sky-200 bg-white hover:-translate-y-1 hover:border-sky-400"}`}><span className="block text-4xl sm:text-5xl">{card.icon}</span><span className="mt-1 block text-xs font-bold sm:text-sm">{card.word}</span></button>; })}</div>
    </section>
  );
}
