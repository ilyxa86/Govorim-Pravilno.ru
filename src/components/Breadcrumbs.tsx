import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  "/services": "Услуги",
  "/services/postanovka-i-korrektsiya-zvukoproiznosheniya": "Постановка и коррекция звукопроизношения",
  "/services/miofunktsionalnaya-korrektsiya-rechi": "Миофункциональная коррекция",
  "/services/logopedicheskiy-massazh": "Логопедический массаж",
  "/services/zaikanie-korrektsiya-rechi": "Заикание у детей и взрослых",
  "/services/podgotovka-k-shkole": "Подготовка к школе",
  "/services/obuchenie-chteniyu": "Обучение чтению",
  "/services/razvitie-rechi": "Развитие речи",
  "/services/igrovye-uprazhneniya-dlya-rechi": "Развивающие методики",
  "/materials": "Занятия и материалы",
  "/materials/avtomatizatsiya-zvuka-zh": "Автоматизация звука Ж",
  "/materials/avtomatizatsiya-zvuka-l": "Автоматизация звука Л",
  "/materials/avtomatizatsiya-zvuka-l-myagkiy": "Автоматизация звука Ль",
  "/materials/avtomatizatsiya-zvuka-r": "Автоматизация звука Р",
  "/materials/avtomatizatsiya-zvuka-r-myagkiy": "Автоматизация звука Рь",
  "/materials/avtomatizatsiya-zvuka-sh": "Автоматизация звука Ш",
  "/materials/interaktivnye-igry": "Интерактивные игры",
  "/blog": "Блог",
  "/blog/speech-development-tips": "5 советов для развития речи у детей",
  "/blog/myofunctional-basics": "Миофункциональная терапия",
  "/blog/school-readiness": "Готов ли ваш ребенок к школе?",
  "/blog/uzdechka-yazyka-5-priznakov": "5 признаков, что уздечку языка НЕ нужно подрезать",
  "/blog/mezhzubnoe-proiznoshenie": "Межзубное произношение",
  "/blog/gorlovoe-r": "Миф о «французском» Р",
  "/blog/speech-games-road": "5 игр для развития речи по дороге в сад",
  "/blog/reading-difficulties": "Почему чтение даётся с трудом",
  "/blog/bilingual-reading": "Чтение на двух языках",
  "/blog/vybor-logopeda-online": "Как выбрать хорошего логопеда онлайн",
  "/blog/vybor-logopeda-dlya-shkoly": "Логопед для подготовки к школе",
  "/blog/infantilnyy-glotok": "Инфантильный тип глотания",
  "/blog/kogda-mioterapiya-ne-effektivna": "Когда миотерапия не эффективна",
  "/blog/rasshchelina-guby-i-neba": "Расщелина губы и неба",
  "/blog/otkrytyy-rot-oshibki-roditeley": "Почему «просто закрой рот» не работает",
  "/blog/online-speech-therapist": "Как выбрать детского логопеда онлайн",
  "/blog/slurred-speech": "Каша во рту: как исправить дикцию",
  "/blog/russian-for-expats": "Логопедия для экспатов",
  "/blog/myofunctional-tongue": "Миофункциональная терапия: язык — дирижёр лица",
  "/blog/school-checklist": "Чек-лист готовности к школе",
  "/blog/breathing-speech": "Роль дыхания в красивой речи",
  "/blog/frenulum-surgery": "Пластика уздечки: подготовка и реабилитация",
  "/blog/speech-bite": "Речь и прикус: важная связь",
  "/blog/teach-reading": "Как научить ребёнка читать",
  "/blog/online-logopedia": "Онлайн-логопедия: мифы и реальность",
  "/blog/mouth-breathing": "Ротовое дыхание у ребёнка",
  "/blog/bilingual-brain": "Билингвальный мозг",
  "/blog/stuttering-children": "Заикание у детей",
  "/blog/stuttering-psychology": "Заикание и психология",
  "/blog/r-sound-adults": "Как поставить звук «Р» взрослому",
  "/blog/online-logopedia-2": "Онлайн-логопедия: мифы и реальность",
  "/blog/posture-mouth": "Осанка, шея и открытый рот",
  "/blog/logoped-ne-spravlyaetsya": "Логопед не справляется",
  "/blog/soska-vred-posle-dvuh-let": "Соска после двух лет: вред",
  "/blog/brekety-i-rech-lifehacks": "Брекеты и речь: лайфхаки адаптации",
  "/blog/adenoidy-i-rotovoe-dyhanie": "Аденоиды и ротовое дыхание",
  "/blog/fitnes-dlya-yazyka": "Фитнес для языка",
  "/blog/hrap-i-razbitost": "Храп и вечная разбитость",
  "/blog/yazyk-i-zuby-prikus": "Язык и зубы: исправляем прикус",
  "/blog/yazyk-mezhdu-zubami": "Язык между зубами",
  "/about": "Обо мне",
  "/contacts": "Контакты",
  
  "/reviews": "Отзывы",
  "/privacy": "Политика конфиденциальности",
  "/terms": "Пользовательское соглашение",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) return null;

  const breadcrumbs: BreadcrumbSegment[] = [
    { label: "Главная", path: "/" }
  ];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[currentPath] || segment;
    breadcrumbs.push({ label, path: currentPath });
  });

  // Generate BreadcrumbList JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": `https://govorim-pravilno.ru${crumb.path}`,
        "name": crumb.label
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <BreadcrumbItem key={crumb.path}>
                  {!isLast ? (
                    <>
                      <BreadcrumbLink asChild>
                        <Link to={crumb.path} className="flex items-center gap-1">
                          {index === 0 && <Home className="h-3.5 w-3.5" />}
                          <span>{crumb.label}</span>
                        </Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator>
                        <ChevronRight />
                      </BreadcrumbSeparator>
                    </>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Breadcrumbs;
