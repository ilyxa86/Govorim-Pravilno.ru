import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import GameControls from "./GameControls";
import { allWords, shuffle, Sound, speakRussian, wordBanks, WordItem } from "./gameData";

type RoundItem = WordItem & { correct: boolean };

export default function PoimaiZvukGame() {
  const [sound, setSound] = useState<Sound>("Р");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [message, setMessage] = useState("Реши: поймать слово или пропустить?");
  const [answerState, setAnswerState] = useState<"idle" | "good" | "bad">("idle");

  const deck = useMemo<RoundItem[]>(() => {
    const target = shuffle([...wordBanks[sound].start, ...wordBanks[sound].inside]).slice(0, 6).map((item) => ({ ...item, correct: true }));
    const letter = sound.toLowerCase();
    const distractors = shuffle(Array.from(new Map(allWords.filter((item) => !item.word.includes(letter)).map((item) => [item.word, item])).values())).slice(0, 6).map((item) => ({ ...item, correct: false }));
    return shuffle([...target, ...distractors]);
  }, [sound, seed]);
  const current = deck[index];
  const finished = index >= deck.length;

  const restart = (nextSound = sound) => { window.speechSynthesis?.cancel(); setSound(nextSound); setIndex(0); setScore(0); setErrors(0); setSeed((value) => value + 1); setAnswerState("idle"); setMessage("Реши: поймать слово или пропустить?"); };

  const answer = (catchWord: boolean) => {
    if (!current || answerState !== "idle") return;
    speakRussian(current.word, soundEnabled);
    const right = catchWord === current.correct;
    setAnswerState(right ? "good" : "bad");
    if (right) { setScore((value) => value + 1); setMessage(catchWord ? `Поймано! В слове есть звук ${sound}.` : "Верно, это слово можно пропустить."); }
    else { setErrors((value) => value + 1); setMessage(current.correct ? `Нужно поймать: в слове есть звук ${sound}.` : `Пропусти: в этом слове нет звука ${sound}.`); }
    window.setTimeout(() => { setIndex((value) => value + 1); setAnswerState("idle"); setMessage("Реши: поймать слово или пропустить?"); }, 750);
  };

  return (
    <section className="rounded-3xl border-2 border-sky-200 bg-sky-50/70 p-3 shadow-sm sm:p-5" aria-labelledby="catch-title">
      <header className="text-center sm:text-left"><h1 id="catch-title" className="text-2xl font-bold md:text-4xl">Поймай звук</h1><p className="mx-auto mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:text-base">Рассмотри картинку и слово. Если слышишь выбранный звук, нажми «Поймать». Если звука нет — пропусти карточку. Короткие раунды тренируют слуховое внимание без перегрузки.</p></header>
      <GameControls sound={sound} onSoundChange={(value) => restart(value)} soundEnabled={soundEnabled} onSoundEnabledChange={(value) => { setSoundEnabled(value); if (!value) window.speechSynthesis?.cancel(); }} />
      <div className="my-2 flex items-center justify-between gap-2"><button type="button" onClick={() => restart()} className="inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 text-sm font-bold text-sky-800"><RotateCcw size={17}/>Заново</button><div className="flex gap-2 text-sm font-bold"><span className="rounded-full bg-white px-3 py-2 text-sky-800">{Math.min(index + 1, 12)}/12</span><span className="rounded-full bg-emerald-100 px-3 py-2 text-emerald-800">✓ {score}</span></div></div>
      <div className={`min-h-6 text-center text-sm font-bold sm:text-base ${answerState === "bad" ? "text-rose-600" : "text-emerald-700"}`} aria-live="polite">{message}</div>
      <div className="mt-2 grid min-h-[330px] place-items-center overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-b from-sky-200 to-sky-50 p-3 shadow-inner sm:min-h-[390px]">
        {!finished && current ? <div className={`w-full max-w-sm rounded-3xl border-4 bg-white p-5 text-center shadow-xl transition duration-300 sm:p-7 ${answerState === "good" ? "scale-105 border-emerald-400" : answerState === "bad" ? "border-rose-400" : "border-sky-200"}`}><p className="text-xs font-bold uppercase tracking-wider text-sky-700">Есть ли звук «{sound}»?</p><div className="my-4 text-7xl sm:text-8xl">{current.icon}</div><p className="text-2xl font-extrabold text-slate-800 sm:text-3xl">{current.word}</p><div className="mt-5 grid grid-cols-2 gap-3"><button type="button" onClick={() => answer(false)} disabled={answerState !== "idle"} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-slate-100 font-bold text-slate-700 transition hover:bg-slate-200 active:scale-95"><X size={22}/>Пропустить</button><button type="button" onClick={() => answer(true)} disabled={answerState !== "idle"} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-sky-500 font-bold text-white shadow-md transition hover:bg-sky-600 active:scale-95"><Check size={22}/>Поймать</button></div></div> : <div className="text-center"><div className="text-6xl">🌟</div><p className="mt-2 text-2xl font-bold text-sky-900">Раунд завершён!</p><p className="mt-1 text-muted-foreground">Правильных ответов: {score} из 12</p><button type="button" onClick={() => restart()} className="mt-4 rounded-full bg-sky-500 px-6 py-3 font-bold text-white shadow-md">Играть ещё раз</button></div>}
      </div>
    </section>
  );
}
