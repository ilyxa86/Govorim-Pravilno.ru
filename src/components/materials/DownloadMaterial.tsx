import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type DownloadMaterialProps = {
  sound: string;
  file: string;
};

export default function DownloadMaterial({ sound, file }: DownloadMaterialProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-sky-950">Материал для занятий дома</p>
        <p className="mt-1 text-sm text-muted-foreground">Скачайте упражнения для автоматизации звука {sound} в формате PDF.</p>
      </div>
      <Button asChild className="shrink-0">
        <a href={`/downloads/avtomatizatsiya/${file}`} download>
          <Download className="mr-2 h-4 w-4" />
          Скачать PDF
        </a>
      </Button>
    </div>
  );
}
