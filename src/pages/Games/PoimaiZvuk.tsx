import GamePageShell from "@/components/games/GamePageShell";
import PoimaiZvukGame from "@/components/games/PoimaiZvukGame";

export default function PoimaiZvuk() {
  return (
    <GamePageShell title="Поймай звук" description="Игра на развитие фонематического слуха: выбери слово с нужным звуком." path="/games/poimai-zvuk">
      <PoimaiZvukGame />
    </GamePageShell>
  );
}
