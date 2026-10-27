/**
 * WICHTIG: Blog-Artikel werden automatisch chronologisch sortiert (neueste zuerst).
 * Das Datum bestimmt die Reihenfolge auf allen Seiten (Blog, Hauptseite).
 * 
 * Format für Datum: "DD.MM.YYYY" oder ISO-Format "YYYY-MM-DD"
 * Anzeige-Format: "D месяц YYYY" (z.B. "11 января 2026")
 */

import stutteringAdultsImage from "@/assets/blog/stuttering-adults-hero.jpg";
import uzdechkaImage from "@/assets/blog/uzdechka-yazyka.jpg";
import speechDevImage from "@/assets/blog/speech-development-tips-hero.jpg";
import myofunctionalImage from "@/assets/blog/myofunctional-basics-hero.jpg";
import schoolReadinessImage from "@/assets/blog/school-readiness-hero.jpg";
import svistyashchieImage from "@/assets/blog/svistyashchie-zvuki-hero.jpg";
import parasigmatizmImage from "@/assets/blog/parasigmatizm-hero.jpg";
import mezhzubnoeImage from "@/assets/blog/mezhzubnoe-proiznoshenie-hero.jpg";
import gorlovoeRImage from "@/assets/blog/gorlovoe-r-hero.jpg";
import speechGamesRoadImage from "@/assets/blog/speech-games-road-hero.jpg";
import readingDifficultiesImage from "@/assets/blog/reading-difficulties-hero.jpg";
import bilingualReadingImage from "@/assets/blog/bilingual-reading-hero.jpg";
import onlineSpeechTherapistImage from "@/assets/blog/online-speech-therapist-hero.jpg";
import vyborLogopedaOnlineImage from "@/assets/blog/vybor-logopeda-online-hero.jpg";
import otkrytyyRotImage from "@/assets/blog/otkrytyy-rot-hero.jpg";
import slurredSpeechImage from "@/assets/blog/slurred-speech-hero.jpg";
import russianForExpatsImage from "@/assets/blog/russian-for-expats-hero.jpg";
import myofunctionalTongueImage from "@/assets/blog/myofunctional-tongue-hero.jpg";
import schoolChecklistImage from "@/assets/blog/school-checklist-hero.jpg";
import breathingSpeechImage from "@/assets/blog/breathing-speech-hero.jpg";
import frenulumSurgeryImage from "@/assets/blog/frenulum-surgery-hero.jpg";
import speechBiteImage from "@/assets/blog/speech-bite-hero.jpg";
import teachReadingImage from "@/assets/blog/teach-reading-hero.jpg";
import onlineLogopediaImage from "@/assets/blog/online-logopedia-hero.jpg";
import mouthBreathingImage from "@/assets/blog/mouth-breathing-hero.jpg";
import bilingualBrainImage from "@/assets/blog/bilingual-brain-hero.jpg";
import stutteringChildrenImage from "@/assets/blog/stuttering-children-hero.jpg";
import stutteringPsychologyImage from "@/assets/blog/stuttering-psychology-hero.jpg";
import rSoundAdultsImage from "@/assets/blog/r-sound-adults-hero.jpg";
import onlineLogopedia2Image from "@/assets/blog/online-logopedia-2-hero.jpg";
import postureMouthImage from "@/assets/blog/posture-mouth-hero.jpg";
import childNotSpeakingImage from "@/assets/blog/child-not-speaking-hero.jpg";
import snoringSpeechImage from "@/assets/blog/snoring-speech-hero.jpg";
import mouthBreathingDangerImage from "@/assets/blog/mouth-breathing-danger-hero.jpg";
import speechPyramidImage from "@/assets/blog/speech-pyramid-hero.jpg";
import stutteringOvercomingImage from "@/assets/blog/stuttering-overcoming-hero.jpg";
import bracesMyofunctionalImage from "@/assets/blog/braces-myofunctional-hero.jpg";
import chewingCorrectlyImage from "@/assets/blog/chewing-correctly-hero.jpg";
import infantileSwallowingImage from "@/assets/blog/infantile-swallowing-hero.jpg";
import playActivityImage from "@/assets/blog/play-activity-hero.jpg";
import swallowingEndingsImage from "@/assets/blog/swallowing-endings-hero.jpg";
import logopedNeSpravlyaetsyaImage from "@/assets/blog/logoped-ne-spravlyaetsya-hero.jpg";
import soskaVredImage from "@/assets/blog/soska-vred-hero.jpg";
import breketyRechImage from "@/assets/blog/brekety-rech-hero.jpg";
import adenoidyImage from "@/assets/blog/adenoidy-hero.jpg";
import fitnesYazykaImage from "@/assets/blog/fitnes-yazyka-hero.jpg";
import hrapRazbitostImage from "@/assets/blog/hrap-razbitost-hero.jpg";
import yazykZubyImage from "@/assets/blog/yazyk-zuby-hero.jpg";
import yazykMezhduZubamiImage from "@/assets/blog/yazyk-mezhdu-zubami-hero.jpg";
import vyborLogopedaShkolaImage from "@/assets/blog/vybor-logopeda-shkola-hero.jpg";
import infantilnyyGlotokImage from "@/assets/blog/infantilnyy-glotok-hero.jpg";
import mioterapiyaNeEffektivnaImage from "@/assets/blog/miterapiya-ne-rabotaet-hero.jpg";
import rasshchelinaGubyImage from "@/assets/blog/rasshchelina-guby-hero.jpg";
import rotovoeDyhanieCheklistImage from "@/assets/blog/rotovoe-dyhanie-cheklist-hero.jpg";
import { importedBlogPosts, importedArticleImages } from "@/data/importedArticles";

export type BlogCategory =
  | "Развитие речи"
  | "Заикание"
  | "Звукопроизношение"
  | "Миофункциональная коррекция"
  | "Подготовка к школе"
  | "Русский язык за рубежом";

export const blogCategories: BlogCategory[] = [
  "Развитие речи",
  "Заикание",
  "Звукопроизношение",
  "Миофункциональная коррекция",
  "Подготовка к школе",
  "Русский язык за рубежом"
];

export const categoryColors: Record<BlogCategory, string> = {
  "Развитие речи": "bg-blue-500/60",
  "Заикание": "bg-emerald-500/60",
  "Звукопроизношение": "bg-orange-500/60",
  "Миофункциональная коррекция": "bg-violet-500/60",
  "Подготовка к школе": "bg-amber-500/60",
  "Русский язык за рубежом": "bg-rose-500/60"
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;        // Anzeige-Datum (z.B. "11 января 2026")
  sortDate: string;    // ISO-Datum für Sortierung (YYYY-MM-DD)
  category: BlogCategory;
}

// Unsortierte Liste aller Blogartikel
const blogPostsUnsorted: BlogPost[] = [
  ...importedBlogPosts.map((post) => ({
    ...post,
    image: importedArticleImages[post.image as keyof typeof importedArticleImages]
  })) as BlogPost[],
  {
    slug: "rebenok-spit-s-otkrytym-rtom",
    title: "Как понять, что ребёнок спит с открытым ртом: чек-лист для родителей",
    excerpt: "Пять утренних признаков ротового дыхания во сне и причины, по которым их важно не игнорировать.",
    image: rotovoeDyhanieCheklistImage,
    date: "31 июля 2026",
    sortDate: "2026-07-31",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "vybor-logopeda-dlya-shkoly",
    title: "Как выбрать логопеда для подготовки к школе в Москве?",
    excerpt: "Фонематический слух, зрительно-пространственный гнозис и профилактика дисграфии: на что смотреть при выборе логопеда и какие нейро-игры работают дома.",
    image: vyborLogopedaShkolaImage,
    date: "22 июля 2026",
    sortDate: "2026-07-22",
    category: "Подготовка к школе"
  },
  {
    slug: "infantilnyy-glotok",
    title: "Инфантильный тип глотания — это следствие, а не причина",
    excerpt: "Как язык деформирует прикус и лицо изнутри, почему инфантильный глоток сохраняется и какие упражнения помогают переучить мышцы.",
    image: infantilnyyGlotokImage,
    date: "24 июля 2026",
    sortDate: "2026-07-24",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "kogda-mioterapiya-ne-effektivna",
    title: "Когда миотерапия не эффективна?",
    excerpt: "Медицинские препятствия, нерегулярная практика, мягкая пища и низкая вовлеченность семьи — четыре причины, по которым миотерапия не даёт результата.",
    image: mioterapiyaNeEffektivnaImage,
    date: "26 июля 2026",
    sortDate: "2026-07-26",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "rasshchelina-guby-i-neba",
    title: "Заячья губа и волчья пасть: как команда врачей сегодня творит чудеса, возвращая красивую улыбку",
    excerpt: "Расщелина губы и неба: этапы работы хирурга, ортодонта и логопеда, упражнения для мягкого неба и устранение носового оттенка речи.",
    image: rasshchelinaGubyImage,
    date: "29 июля 2026",
    sortDate: "2026-07-29",
    category: "Звукопроизношение"
  },
  {
    slug: "fitnes-dlya-yazyka",
    title: "Фитнес для языка: зачем взрослым артикуляционная гимнастика перед ортодонтом",
    excerpt: "Миофункциональная терапия перед брекетами: тренировка языка восстанавливает глотание, дыхание и предотвращает рецидив прикуса.",
    image: fitnesYazykaImage,
    date: "22 апреля 2026",
    sortDate: "2026-04-22",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "hrap-i-razbitost",
    title: "Храп и вечная разбитость. Как упражнениями можно помочь себе",
    excerpt: "Миофункциональная гимнастика для языка и мягкого нёба укрепляет дыхательные пути, устраняет храп и возвращает здоровый сон.",
    image: hrapRazbitostImage,
    date: "22 апреля 2026",
    sortDate: "2026-04-22",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "yazyk-i-zuby-prikus",
    title: "Относили брекеты, а зубы снова разъехались? Виноват ваш язык",
    excerpt: "Почему случается рецидив после брекетов: инфантильное глотание, низкое положение языка и миофункциональная терапия для стабильного результата.",
    image: yazykZubyImage,
    date: "22 апреля 2026",
    sortDate: "2026-04-22",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "yazyk-mezhdu-zubami",
    title: "Язык между зубами: почему «ползут» звуки и прикус",
    excerpt: "Межзубное положение языка искажает свистящие звуки и формирует открытый прикус. Причины, симптомы и упражнения для коррекции.",
    image: yazykMezhduZubamiImage,
    date: "22 апреля 2026",
    sortDate: "2026-04-22",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "soska-vred-posle-dvuh-let",
    title: "Соска после двух лет обойдется вам в сотни тысяч рублей у ортодонта. И вот почему",
    excerpt: "Длительное сосание пустышки или пальца после двух лет деформирует кости черепа, прикус и нёбо, делая чистое звукопроизношение почти невозможным.",
    image: soskaVredImage,
    date: "21 апреля 2026",
    sortDate: "2026-04-21",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "brekety-i-rech-lifehacks",
    title: "Поставили брекеты или пластинку, и речь стала невнятной? Логопедические лайфхаки для быстрой адаптации",
    excerpt: "Как восстановить чёткую дикцию после установки брекетов, элайнеров или нёбного расширителя. 5 рабочих лайфхаков от логопеда.",
    image: breketyRechImage,
    date: "21 апреля 2026",
    sortDate: "2026-04-21",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "adenoidy-i-rotovoe-dyhanie",
    title: "Аденоиды и ротовое дыхание",
    excerpt: "Как разрастание аденоидов запускает ротовое дыхание, деформирует лицо ребёнка и влияет на речь. Миофункциональная стратегия восстановления.",
    image: adenoidyImage,
    date: "21 апреля 2026",
    sortDate: "2026-04-21",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "logoped-ne-spravlyaetsya",
    title: "Логопед не справляется. Звуки не исправляются, речь остаётся смазанной...",
    excerpt: "Почему занятия с логопедом не дают результата. Роль миофункциональных нарушений, ротового дыхания и слабых мышц в смазанной речи.",
    image: logopedNeSpravlyaetsyaImage,
    date: "20 апреля 2026",
    sortDate: "2026-04-20",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "swallowing-endings",
    title: "Глотает окончания и «съедает» слова: причины и решения",
    excerpt: "Проглатывание окончаний и скомканная речь — нарушение темпо-ритмической организации. Причины, диагностика и упражнения от логопеда.",
    image: swallowingEndingsImage,
    date: "24 марта 2026",
    sortDate: "2026-03-24",
    category: "Развитие речи"
  },
  {
    slug: "play-activity",
    title: "Ведущий вид деятельности для детей дошкольного возраста",
    excerpt: "Почему сюжетно-ролевая игра — главная деятельность дошкольника. Как игра развивает речь, мышление и готовит к школе.",
    image: playActivityImage,
    date: "20 марта 2026",
    sortDate: "2026-03-20",
    category: "Развитие речи"
  },
  {
    slug: "chewing-correctly",
    title: "Жуёт ли ваш ребёнок правильно? А как жуёте вы?",
    excerpt: "Правильное жевание — фундамент для развития костей лицевого скелета, формирования прикуса и чистого произношения звуков.",
    image: chewingCorrectlyImage,
    date: "10 февраля 2026",
    sortDate: "2026-02-10",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "infantile-swallowing",
    title: "Почему брекеты не помогут без логопеда? Роль инфантильного глотания в рецидивах",
    excerpt: "Почему после брекетов зубы снова кривятся. Роль инфантильного глотания, миофункциональная коррекция и совместная работа ортодонта и логопеда.",
    image: infantileSwallowingImage,
    date: "10 февраля 2026",
    sortDate: "2026-02-10",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "speech-pyramid",
    title: "Что нужно для того, чтобы у ребёнка была хорошая речь, навыки чтения и письма?",
    excerpt: "Пирамида развития речи: от крупной моторики к чтению и письму. Почему важно начинать с тела, а не с прописей.",
    image: speechPyramidImage,
    date: "4 февраля 2026",
    sortDate: "2026-02-04",
    category: "Развитие речи"
  },
  {
    slug: "stuttering-overcoming",
    title: "Заикание у взрослых: как преодолеть страх речи и психологические барьеры",
    excerpt: "Как преодолеть заикание у взрослых: логофобия, техники дыхания и психологическая коррекция. Комплексный подход логопеда.",
    image: stutteringOvercomingImage,
    date: "4 февраля 2026",
    sortDate: "2026-02-04",
    category: "Заикание"
  },
  {
    slug: "braces-myofunctional",
    title: "Почему брекеты не работают без логопеда? Роль мышц в ортодонтии",
    excerpt: "Ортодонтическое лечение без миофункциональной коррекции приводит к рецидиву. Почему язык сильнее брекетов.",
    image: bracesMyofunctionalImage,
    date: "4 февраля 2026",
    sortDate: "2026-02-04",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "child-not-speaking",
    title: "«Он всё понимает, но молчит»: почему ребёнок не говорит",
    excerpt: "Почему ребёнок понимает речь, но молчит. Причины задержки экспрессивной речи, игровые техники запуска речи и советы логопеда.",
    image: childNotSpeakingImage,
    date: "30 января 2026",
    sortDate: "2026-01-30",
    category: "Развитие речи"
  },
  {
    slug: "snoring-speech",
    title: "Ночной сон и речь: почему после храпа ребёнок хуже говорит",
    excerpt: "Как качество ночного сна влияет на речевое развитие ребёнка. Связь храпа, гипоксии и проблем с дикцией.",
    image: snoringSpeechImage,
    date: "30 января 2026",
    sortDate: "2026-01-30",
    category: "Развитие речи"
  },
  {
    slug: "mouth-breathing-danger",
    title: "Чем опасно ротовое дыхание?",
    excerpt: "Почему ротовое дыхание опасно для здоровья: деформация лица, гипоксия, проблемы с речью и прикусом.",
    image: mouthBreathingDangerImage,
    date: "30 января 2026",
    sortDate: "2026-01-30",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "stuttering-psychology",
    title: "Заикание и психология: почему упражнений на дыхание бывает недостаточно?",
    excerpt: "Почему заикание не лечится только дыханием. Логофобия, психологические зажимы и комплексный подход к коррекции.",
    image: stutteringPsychologyImage,
    date: "27 января 2026",
    sortDate: "2026-01-27",
    category: "Заикание"
  },
  {
    slug: "r-sound-adults",
    title: "Как поставить звук «Р» взрослому: реально ли это после 30 лет?",
    excerpt: "Исправление картавости у взрослых: реально ли поставить звук Р после 30? Этапы работы, упражнения и когда нужен логопед.",
    image: rSoundAdultsImage,
    date: "27 января 2026",
    sortDate: "2026-01-27",
    category: "Звукопроизношение"
  },
  {
    slug: "online-logopedia-2",
    title: "Онлайн-логопедия: мифы, реальность и секреты эффективности",
    excerpt: "Как эффективно проводить логопедические занятия онлайн. Развеиваем мифы и делимся секретами успешной дистанционной работы.",
    image: onlineLogopedia2Image,
    date: "27 января 2026",
    sortDate: "2026-01-27",
    category: "Развитие речи"
  },
  {
    slug: "posture-mouth",
    title: "Осанка, шея и открытый рот: неожиданная связка",
    excerpt: "Почему ребенок дышит ртом и сутулится. Связь осанки, положения шеи и открытого рта. Упражнения для восстановления баланса.",
    image: postureMouthImage,
    date: "27 января 2026",
    sortDate: "2026-01-27",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "stuttering-children",
    title: "Заикание у детей: когда это «возрастные запинки», а когда пора к логопеду?",
    excerpt: "Как отличить физиологические запинки от истинного заикания. Признаки, причины и рекомендации логопеда.",
    image: stutteringChildrenImage,
    date: "29 января 2026",
    sortDate: "2026-01-29",
    category: "Заикание"
  },
  {
    slug: "bilingual-brain",
    title: "Билингвальный мозг: нейропсихологические преимущества двуязычного воспитания",
    excerpt: "Как билингвизм развивает когнитивные способности ребёнка и укрепляет нейронные связи.",
    image: bilingualBrainImage,
    date: "28 января 2026",
    sortDate: "2026-01-28",
    category: "Русский язык за рубежом"
  },
  {
    slug: "mouth-breathing",
    title: "Ротовое дыхание у ребёнка: 10 признаков, которые легко пропустить",
    excerpt: "Скрытые признаки ротового дыхания и как они влияют на речь, прикус и развитие ребёнка.",
    image: mouthBreathingImage,
    date: "27 января 2026",
    sortDate: "2026-01-27",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "online-logopedia",
    title: "Онлайн-логопедия: мифы, реальность и секреты эффективности",
    excerpt: "Как эффективно проводить логопедические занятия онлайн. Развеиваем мифы и делимся секретами.",
    image: onlineLogopediaImage,
    date: "26 января 2026",
    sortDate: "2026-01-26",
    category: "Развитие речи"
  },
  {
    slug: "teach-reading",
    title: "Как научить ребёнка читать и не отбить охоту к знаниям?",
    excerpt: "Как правильно учить ребёнка читать: развитие фонематического слуха, игровой подход и типичные ошибки родителей.",
    image: teachReadingImage,
    date: "23 января 2026",
    sortDate: "2026-01-23",
    category: "Подготовка к школе"
  },
  {
    slug: "speech-bite",
    title: "Речь и прикус: связь, о которой мало говорят",
    excerpt: "Как неправильный прикус влияет на звукопроизношение и почему логопед и ортодонт должны работать в паре.",
    image: speechBiteImage,
    date: "25 января 2026",
    sortDate: "2026-01-25",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "frenulum-surgery",
    title: "Пластика уздечки: что делать дальше? Подготовка и реабилитация",
    excerpt: "Как подготовить ребёнка к пластике уздечки языка или губы. Реабилитация после операции и упражнения.",
    image: frenulumSurgeryImage,
    date: "24 января 2026",
    sortDate: "2026-01-24",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "breathing-speech",
    title: "Роль дыхания в красивой речи: упражнения для взрослых и детей",
    excerpt: "Как правильное дыхание влияет на голос и дикцию. Дыхательные упражнения для развития речи.",
    image: breathingSpeechImage,
    date: "23 января 2026",
    sortDate: "2026-01-23",
    category: "Развитие речи"
  },
  {
    slug: "school-checklist",
    title: "Чек-лист: готов ли ваш ребёнок к школе с точки зрения логопеда",
    excerpt: "Полный чек-лист речевой готовности к школе. Что должен уметь ребёнок перед первым классом.",
    image: schoolChecklistImage,
    date: "22 января 2026",
    sortDate: "2026-01-22",
    category: "Подготовка к школе"
  },
  {
    slug: "myofunctional-tongue",
    title: "Миофункциональная терапия: почему язык — это «дирижёр» вашего лица",
    excerpt: "Как положение языка влияет на овал лица, прикус и осанку. Миофункциональная терапия для коррекции дыхания и эстетики.",
    image: myofunctionalTongueImage,
    date: "21 января 2026",
    sortDate: "2026-01-21",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "russian-for-expats",
    title: "Логопедия для экспатов: как сохранить русский язык у детей за границей",
    excerpt: "Как сохранить русский язык у детей за границей. Логопедия для экспатов и билингвов: коррекция речи онлайн.",
    image: russianForExpatsImage,
    date: "20 января 2026",
    sortDate: "2026-01-20",
    category: "Русский язык за рубежом"
  },
  {
    slug: "vybor-logopeda-online",
    title: "Как выбрать хорошего логопеда онлайн и не потратить деньги впустую?",
    excerpt: "Пошаговый гид по выбору онлайн-логопеда: образование, «красные флаги», пробное занятие и роль родителей.",
    image: vyborLogopedaOnlineImage,
    date: "15 июля 2026",
    sortDate: "2026-07-15",
    category: "Развитие речи"
  },
  {
    slug: "otkrytyy-rot-oshibki-roditeley",
    title: "Почему «просто закрой рот» не работает: ошибки родителей",
    excerpt: "Ротовое дыхание у ребенка: почему одергивания не помогают и какие игровые упражнения действительно укрепляют мышцы.",
    image: otkrytyyRotImage,
    date: "16 июля 2026",
    sortDate: "2026-07-16",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "slurred-speech",
    title: "«Каша во рту»: как исправить нечёткую дикцию эксперту и руководителю",
    excerpt: "Как исправить нечёткую дикцию взрослому. Причины «каши во рту», практические упражнения и методы коррекции речи.",
    image: slurredSpeechImage,
    date: "19 января 2026",
    sortDate: "2026-01-19",
    category: "Звукопроизношение"
  },
  {
    slug: "online-speech-therapist",
    title: "Как выбрать детского логопеда онлайн для запуска речи у малыша",
    excerpt: "Выбор детского логопеда онлайн для запуска речи. Игровые методики, родительский коучинг и работа с «молчунами» 2–3 лет.",
    image: onlineSpeechTherapistImage,
    date: "18 января 2026",
    sortDate: "2026-01-18",
    category: "Развитие речи"
  },
  {
    slug: "bilingual-reading",
    title: "Чтение на двух языках: когда начинать и не запутается ли ребенок?",
    excerpt: "Билингвальное чтение: когда начинать обучение чтению на двух языках, как избежать путаницы в буквах. Советы логопеда для детей-билингвов.",
    image: bilingualReadingImage,
    date: "6 января 2026",
    sortDate: "2026-01-06",
    category: "Русский язык за рубежом"
  },
  {
    slug: "reading-difficulties",
    title: "Почему чтение даётся с трудом — и правда ли дело в лени?",
    excerpt: "Трудности с чтением и дислексия: почему ребенок не хочет читать и что с этим делать. Современные методы коррекции.",
    image: readingDifficultiesImage,
    date: "5 января 2026",
    sortDate: "2026-01-05",
    category: "Подготовка к школе"
  },
  {
    slug: "speech-games-road",
    title: "5 игр для развития речи по дороге в детский сад",
    excerpt: "Речевые игры для развития речи ребенка, в которые можно играть по дороге в детский сад. Практические советы логопеда.",
    image: speechGamesRoadImage,
    date: "4 января 2026",
    sortDate: "2026-01-04",
    category: "Развитие речи"
  },
  {
    slug: "mezhzubnoe-proiznoshenie",
    title: "Межзубное произношение: почему шепелявость не стоит считать милой",
    excerpt: "Почему межзубное произношение — это не милая особенность, а логопедическая проблема. Как шепелявость влияет на прикус и когда нужно обращаться к специалисту.",
    image: mezhzubnoeImage,
    date: "15 января 2026",
    sortDate: "2026-01-15",
    category: "Звукопроизношение"
  },
  {
    slug: "gorlovoe-r",
    title: "Миф о «французском» Р: почему горловое произношение — это дефект",
    excerpt: "Горловое произношение звука Р — это не аристократичная особенность, а речевой дефект. Как исправить картавость у детей и взрослых.",
    image: gorlovoeRImage,
    date: "15 января 2026",
    sortDate: "2026-01-15",
    category: "Звукопроизношение"
  },
  {
    slug: "myofunctional-basics",
    title: "Миофункциональная терапия: что это и кому нужна?",
    excerpt: "Миофункциональная терапия (МФТ) — междисциплинарное направление на стыке логопедии, ортодонтии и остеопатии. Как она помогает исправить прикус, улучшить речь и дыхание.",
    image: myofunctionalImage,
    date: "11 января 2026",
    sortDate: "2026-01-11",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "speech-development-tips",
    title: "5 советов для развития речи у детей",
    excerpt: "Практические советы логопеда для развития речи ребенка: крупная моторика, артикуляционная гимнастика, фонематический слух и сенсорное обогащение.",
    image: speechDevImage,
    date: "10 января 2026",
    sortDate: "2026-01-10",
    category: "Развитие речи"
  },
  {
    slug: "zaikanie-u-vzroslyh",
    title: "Заикание у взрослых: причины, проявления и опоры в работе",
    excerpt: "Разбираемся в механизмах заикания у взрослых: понятные причины и современные методы коррекции. Что можно делать самостоятельно и когда нужен специалист.",
    image: stutteringAdultsImage,
    date: "9 января 2026",
    sortDate: "2026-01-09",
    category: "Заикание"
  },
  {
    slug: "uzdechka-yazyka-5-priznakov",
    title: "5 признаков того, что уздечку языка НЕ нужно подрезать",
    excerpt: "Мнение эксперта с 20-летним стажем: как понять, нужна ли операция на уздечку языка или можно обойтись упражнениями.",
    image: uzdechkaImage,
    date: "9 января 2026",
    sortDate: "2026-01-09",
    category: "Миофункциональная коррекция"
  },
  {
    slug: "school-readiness",
    title: "Готов ли ваш ребенок к школе?",
    excerpt: "Речевая готовность к школе — это сформированный уровень развития всех сторон устной речи ребенка. Как определить готовность и что делать, если есть пробелы.",
    image: schoolReadinessImage,
    date: "12 января 2026",
    sortDate: "2026-01-12",
    category: "Подготовка к школе"
  },
  {
    slug: "svistyashchie-zvuki",
    title: "Свистящие звуки (С, З, Ц): строим «Заборчик» и учимся дуть холодным воздухом",
    excerpt: "Как правильно ставить свистящие звуки С, З, Ц у детей: артикуляционная гимнастика, постановка дыхания и советы логопеда.",
    image: svistyashchieImage,
    date: "8 января 2026",
    sortDate: "2026-01-08",
    category: "Звукопроизношение"
  },
  {
    slug: "parasigmatizm",
    title: "Почему он говорит «Лыба» вместо «Рыба»? Парасигматизм и замены звуков",
    excerpt: "Почему ребенок заменяет звуки: парасигматизм, параротацизм и другие виды замен. Причины, проявления и методы коррекции.",
    image: parasigmatizmImage,
    date: "7 января 2026",
    sortDate: "2026-01-07",
    category: "Звукопроизношение"
  }
];

/**
 * Automatisch chronologisch sortierte Blogartikel (neueste zuerst).
 * Diese exportierte Liste wird auf allen Seiten verwendet.
 */
export const blogPosts = [...blogPostsUnsorted].sort(
  (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
);

/**
 * Gibt die neuesten N Blogartikel zurück.
 */
export const getLatestPosts = (count: number): BlogPost[] => {
  return blogPosts.slice(0, count);
};
