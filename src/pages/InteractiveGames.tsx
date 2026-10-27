import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const games = [
  ["🐻", "Покорми героя", "Выбирай картинки со звуком и помогай доброму герою найти подходящие слова.", "/materials/interaktivnye-igry/pokormi-geroya"],
  ["🔎", "Найди звук", "Ищи все слова, в которых встречается выбранный звук. Игра помогает тренировать фонематический слух и внимание.", "/materials/interaktivnye-igry/naydi-zvuk"],
  ["🧠", "Найди пару", "Запоминай карточки, открывай их по две и находи одинаковые картинки, развивая память и речевое внимание.", "/materials/interaktivnye-igry/naydi-paru"],
  ["🪄", "Что спряталось?", "Открывай изображение постепенно, угадывай предмет и называй слово с выбранным звуком.", "/materials/interaktivnye-igry/chto-spryatalos"],
  ["🧺", "Лишняя картинка", "Находи предмет, который не подходит к остальным, и объясняй свой выбор полным предложением.", "/materials/interaktivnye-igry/lishnyaya-kartinka"],
  ["🚂", "Собери слово", "Ставь слоги в правильном порядке и собирай слова, состоящие минимум из двух слогов.", "/materials/interaktivnye-igry/soberi-slovo"],
  ["🫧", "Лопни пузырь", "Выбери звук Р, Л, Ш, С или Ж и лопай только те пузыри, в словах которых действительно встречается выбранный звук.", "/games/lopni-puzyr"],
  ["🎯", "Поймай звук", "Посмотри на несколько вариантов, услышь или прочитай слова и выбери то, в котором есть нужный звук. За правильные ответы начисляются очки.", "/games/poimai-zvuk"],
];

export default function InteractiveGames() {
  return <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-background">
    <Helmet><title>Интерактивные логопедические игры для детей</title><meta name="description" content="Бесплатные интерактивные логопедические игры для детей: звуки, слова, память, внимание и развитие речи онлайн." /><link rel="canonical" href="https://govorim-pravilno.ru/materials/interaktivnye-igry" /></Helmet>
    <Header /><Breadcrumbs />
    <main className="flex-grow px-3 py-6 sm:px-4 md:py-10"><div className="container mx-auto max-w-5xl">
      <section className="mb-8 text-center"><h1 className="text-3xl font-bold tracking-tight md:text-5xl">Интерактивные логопедические игры</h1><p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Бесплатные игры для детей, которые помогают развивать фонематический слух, речь, память и внимание. Выберите задание — слова можно озвучивать или оставить без звука.</p><p className="mx-auto mt-4 max-w-3xl rounded-2xl border border-sky-200 bg-white/70 px-4 py-3 text-sm leading-relaxed text-sky-900 md:text-base"><strong>Рекомендуем играть на компьютере или планшете.</strong> Большой экран облегчает восприятие заданий, помогает ребёнку лучше сосредоточиться и повышает эффективность занятий.</p></section>
      <div className="space-y-4">{games.map(([icon, title, text, slug]) => <Link key={slug} to={slug} className="group flex flex-col gap-4 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md sm:flex-row sm:items-center sm:p-5"><div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-sky-100 text-5xl" aria-hidden="true">{icon}</div><div className="min-w-0 flex-1"><h2 className="text-xl font-bold group-hover:text-primary">{title}</h2><p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p></div><span className="shrink-0 rounded-full border border-primary/40 px-5 py-3 text-center font-semibold text-primary transition group-hover:bg-primary/5">Играть →</span></Link>)}</div>
    </div></main><Footer />
  </div>;
}
