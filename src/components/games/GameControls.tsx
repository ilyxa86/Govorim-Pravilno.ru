import { Volume2, VolumeX } from "lucide-react";
import { Position, Sound, sounds } from "./gameData";

type Props = {
  sound: Sound;
  onSoundChange: (sound: Sound) => void;
  soundEnabled: boolean;
  onSoundEnabledChange: (enabled: boolean) => void;
  position?: Position;
  onPositionChange?: (position: Position) => void;
  timer?: number;
  timeLeft?: number;
  timerRunning?: boolean;
  onTimerChange?: (seconds: number) => void;
};

function formatCountdown(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function timerLabel(seconds: number) {
  if (seconds === 30) return "30 с";
  return `${seconds / 60} мин`;
}

export default function GameControls({ sound, onSoundChange, soundEnabled, onSoundEnabledChange, position, onPositionChange, timer, timeLeft, timerRunning = false, onTimerChange }: Props) {
  return (
    <div className="mt-4 space-y-3 rounded-2xl border border-sky-200 bg-white/90 p-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <fieldset className="min-w-0 flex-1">
          <legend className="mb-2 text-sm font-bold text-sky-900">Выбери звук</legend>
          <div className="flex flex-wrap items-center gap-2">
            {sounds.map((item) => (
              <button key={item} type="button" onClick={() => onSoundChange(item)} aria-pressed={sound === item}
                className={`grid h-11 w-11 place-items-center rounded-full border-2 text-lg font-bold transition ${sound === item ? "border-sky-500 bg-sky-500 text-white shadow-md" : "border-sky-200 bg-white text-sky-700 hover:border-sky-400"}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="shrink-0 border-l border-sky-200 pl-3 text-center">
          <span className="mb-2 block text-xs font-bold text-slate-600">Озвучивание</span>
          <button type="button" onClick={() => onSoundEnabledChange(!soundEnabled)} aria-label={soundEnabled ? "Выключить озвучивание" : "Включить озвучивание"} aria-pressed={soundEnabled}
            className={`mx-auto grid h-12 w-12 place-items-center rounded-full border-2 transition ${soundEnabled ? "border-sky-500 bg-sky-500 text-white shadow-sm" : "border-slate-400 bg-slate-200 text-slate-600"}`}>
            {soundEnabled ? <Volume2 size={25} /> : <VolumeX size={25} />}
          </button>
        </div>
      </div>

      {position && onPositionChange && (
        <div className="flex w-fit rounded-full border-2 border-sky-200 bg-sky-50 p-1 text-sm font-bold">
          <button type="button" onClick={() => onPositionChange("start")} className={`rounded-full px-3 py-2 ${position === "start" ? "bg-sky-500 text-white" : "text-sky-800"}`}>В начале</button>
          <button type="button" onClick={() => onPositionChange("inside")} className={`rounded-full px-3 py-2 ${position === "inside" ? "bg-sky-500 text-white" : "text-sky-800"}`}>В слове</button>
        </div>
      )}

      {timer !== undefined && onTimerChange && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-sky-200 pt-3">
          <div>
            <p className="text-sm font-bold text-sky-900">Таймер</p>
            <p className="text-xs text-muted-foreground">Начнётся сразу после выбора</p>
          </div>
          <div className="flex items-center gap-1.5" aria-label="Выбор таймера">
            {[30, 60, 120, 180].map((seconds) => {
              const selected = timer === seconds;
              const label = selected && timerRunning && timeLeft !== undefined ? formatCountdown(timeLeft) : timerLabel(seconds);
              return (
                <button key={seconds} type="button" onClick={() => onTimerChange(seconds)} aria-pressed={selected}
                  aria-label={`${timerLabel(seconds)} — выбрать и запустить таймер`}
                  className={`grid h-12 w-12 place-items-center rounded-full border-2 text-xs font-bold leading-tight tabular-nums transition ${selected ? "border-amber-500 bg-amber-400 text-slate-900 shadow-md" : "border-sky-200 bg-white text-sky-800 hover:border-sky-400"}`}>
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
