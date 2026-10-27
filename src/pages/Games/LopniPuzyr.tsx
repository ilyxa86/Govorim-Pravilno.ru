import GamePageShell from "@/components/games/GamePageShell";
import LopniPuzyrGame from "@/components/games/LopniPuzyrGame";

export default function LopniPuzyr() {
  return (
    <GamePageShell title="Лопни пузырь" description="Игра на автоматизацию звуков: выбирай правильные слова и лопай пузыри." path="/games/lopni-puzyr">
      <LopniPuzyrGame />
    </GamePageShell>
  );
}
