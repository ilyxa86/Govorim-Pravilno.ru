import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleServiceCard from "@/components/SimpleServiceCard";
import VerticalReviewsMarquee from "@/components/VerticalReviewsMarquee";
import BlogCard from "@/components/BlogCard";
import FAQ from "@/components/FAQ";
import heroImage from "@/assets/svetlana-hero.jpg";
import onlineProcessImage from "@/assets/online-process.png";

import { blogPosts } from "@/data/blogPosts";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";
import type { ClientCode } from "@/components/InteractiveWorldMap";
import klientkaOtzyvAvatar from "@/assets/reviews/otzyv-klientka.jpg";
import studentkaZhurfakaAvatar from "@/assets/reviews/otzyv-studentka-zhurfaka.png";
import specialistWhoAmI from "@/assets/specialist-who-am-i.png";
import automationCategoryImage from "@/assets/materials/categories/automation-sounds.png";
import interactiveGamesCategoryImage from "@/assets/materials/categories/interactive-games.png";
import { MessageCircle, BookOpen, Brain, Users, Mic, GraduationCap, Award, Calendar, Target, Heart, User, Hand, Activity, MessageSquare, MapPin, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import PhilosophyCard from "@/components/PhilosophyCard";
const Index = () => {
  const allServices = [
  // Речь и произношение
  {
    icon: MessageCircle,
    title: "Постановка и коррекция звукопроизношения",
    description: "Коррекция звуков у детей и взрослых.",
    bgColor: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
    category: "speech",
    link: "/services/postanovka-i-korrektsiya-zvukoproiznosheniya"
  }, {
    icon: Brain,
    title: "Миофункциональная коррекция",
    description: "Правильное жевание, глотание и дыхание.",
    bgColor: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400",
    category: "speech",
    link: "/services/miofunktsionalnaya-korrektsiya-rechi"
  }, {
    icon: Hand,
    title: "Логопедический массаж",
    description: "Массаж мышц для чёткой артикуляции.",
    bgColor: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400",
    category: "speech",
    link: "/services/logopedicheskiy-massazh"
  },
  // Нарушения речи
  {
    icon: Users,
    title: "Заикание у детей и взрослых",
    description: "Индивидуальные и групповые занятия.",
    bgColor: "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400",
    category: "disorders",
    link: "/services/zaikanie-korrektsiya-rechi"
  },
  // Обучение и развитие
  {
    icon: GraduationCap,
    title: "Подготовка к школе",
    description: "Комплексная подготовка к учебе.",
    bgColor: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
    category: "learning",
    link: "/services/podgotovka-k-shkole"
  }, {
    icon: BookOpen,
    title: "Обучение чтению",
    description: "Запуск чтения без стресса.",
    bgColor: "bg-teal-100 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400",
    category: "learning",
    link: "/services/obuchenie-chteniyu"
  }, {
    icon: MessageSquare,
    title: "Развитие речи",
    description: "Словарь, грамматика и связная речь.",
    bgColor: "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400",
    category: "learning",
    link: "/services/razvitie-rechi"
  }, {
    icon: Activity,
    title: "Развивающие методики",
    description: "Игровые упражнения для речи.",
    bgColor: "bg-lime-100 dark:bg-lime-950/30 text-lime-600 dark:text-lime-400",
    category: "learning",
    link: "/services/igrovye-uprazhneniya-dlya-rechi"
  }];
  const testimonials = [{
    author: "Мила",
    date: "26 октября 2025",
    category: "Миофункциональная коррекция",
    text: "Очень хороший человек и специалист",
    rating: 5
  }, {
    author: "Маргарита",
    date: "14 октября 2025",
    category: "Развивающие методики",
    text: "В целом встреча прошла хорошо, Светлана рассказала, какие проблемы у нас она видит.",
    rating: 5
  }, {
    author: "Елена",
    date: "13 октября 2025",
    category: "Постановка звуков",
    text: "Грамотный специалист.",
    rating: 5
  }, {
    author: "Юлия Валентиновна",
    date: "15 сентября 2025",
    category: "Постановка звуков",
    text: "Замечательный специалист. Звук Р поставили за пару занятий. Дала отличные советы и рекомендации по миокоррекции.",
    rating: 5
  }, {
    author: "Наталья",
    date: "11 сентября 2025",
    category: "Логопедия",
    text: "Спасибо Светлане Геннадьевне, очень грамотных специалист, все звуки исправлены, поставлены, так же занимались подготовкой к школе, чтением, постановкой руки к письму",
    rating: 5
  }, {
    author: "Анна",
    date: "7 сентября 2025",
    category: "Логопедия",
    text: "Была проведена грамотная консультация.",
    rating: 5
  }, {
    author: "Роман",
    date: "20 августа 2025",
    category: "Логопедия",
    text: "Хороший специалист, пришел после операции над уздечкой. За пару занятий поставили букву Р, а после и остальные звуки. Благодаря Светлане могу теперь выговорить шипящие и букву Р",
    rating: 5
  }, {
    author: "Вадим",
    date: "6 июня 2025",
    category: "Логопедия для взрослых",
    text: "Звук Р поставлен за 1 занятие",
    rating: 5
  }, {
    author: "Мария",
    date: "28 мая 2025",
    category: "Миофункциональная коррекция",
    text: "Светлана оперативно помогла мне с моей проблемой и дала рекомендации. Без лишней информации, все по делу. Очень рада, что попался настоящий «профи», рекомендую вам данного специалиста!",
    rating: 5
  }, {
    author: "Елизавета",
    date: "28 мая 2025",
    category: "Логопедия для взрослых",
    text: "Специалист быстро выявил проблему, дал рекомендации по улучшениям произношения моих проблемных шипящих звуков.",
    rating: 5
  }, {
    author: "Сергей",
    date: "5 мая 2025",
    category: "Заикание",
    text: "Отличный репетитор. Очень помог. Всем советую",
    rating: 5
  }, {
    author: "Viktoria",
    date: "30 марта 2025",
    category: "Логопедия / Заикание",
    text: "Выбрала специалиста с целью избавиться от заикания Светлана грамотно все объяснила, рассказала про заикание Светлана сделала со своей стороны все возможное, помогла с решением проблемы Специалист очень понравился, знает хорошо свое дело, рекомендую точно!!",
    rating: 5
  }, {
    author: "Мария",
    date: "24 марта 2025",
    category: "Логопедия для взрослых",
    text: "Отличный специалист. Очень помогла супругу исправить букву \"р\" в словах. Рекомендуем от души.",
    rating: 5
  }, {
    author: "Татьяна Валерьевна",
    date: "5 марта 2025",
    category: "Логопедия",
    text: "Светлана Геннадьевна очень знающий специалист, который постоянно повышает свою квалификацию. Она работает с детьми и взрослыми; приятна в общении. У нас с ней занимался сын 7 лет – раз в неделю в течение нескольки месяцев, очно и онлайн. Мы остались очень довольны результатом. Звуки, над которыми работали, быстро «встали на место». Сейчас временно прекратили работу, т. к. сын проходит ортодонтическое лечение, но через год вернемся к занятиям. От всей души рекомендую Светлану Геннадьевну!",
    rating: 5
  }, {
    author: "Екатерина",
    date: "4 марта 2025",
    category: "Логопедия для взрослых",
    text: "Очень хороший специалист, поставила мне буквы Л и Р, рекомендую",
    rating: 5
  }, {
    author: "Мария",
    date: "16 февраля 2025",
    category: "Миофункциональная коррекция",
    text: "Светлана все подробно объяснила, как и над чем нужно работать, для полного исправления речи.",
    rating: 5
  }, {
    author: "Павел",
    date: "10 января 2025",
    category: "Заикание / Логопедия-дефектология",
    text: "Рекомендую Светлану Геннадьевну в проблемах речи у взрослых и психологических проблем из-за этого. Долго искал такого специалиста. Очень понравились занятия, в особенности групповые. Там мы тренировали полученные навыки на индивидуальных занятиях, как бы на публике, в жизни... После занятий происходит большое улучшение в речи. Которое закрепляется самостоятельными занятиями.",
    rating: 5
  }, {
    author: "Тимур",
    date: "9 января 2025",
    category: "Логопедия для взрослых",
    text: "Светлана внимательно разобралась в нюансам моего вопроса. Уточнила цели, предложила план работы. все устроило - доволен. спасибо.",
    rating: 5
  }, {
    author: "Юлия",
    date: "7 декабря 2024",
    category: "Логопедия",
    text: "Я считаю,что Светлана Геннадьевна уникальный специалист. Занятия были не просто отработаны на постановку звуков(а у нас были серьезные проблемы), они были очень разнообразны и познавательны в том числе и для меня. Сюда входило много межполушарных упражнений, гимнастика,логика и тому подобное Мы очень довольны результатом и хотим ей выразить большую благодарность, потому что даже сейчас пойдя в первый класс, я вижу,что ребенку гораздо легче сориентироваться во многом. Однозначно рекомендую ее всегда своим знакомым и тут уважаемые родители!",
    rating: 5
  }, {
    author: "Элла",
    date: "6 декабря 2024",
    category: "Логопедия",
    text: "Прекрасный профессионал, за одно занятие получила ценную информацию и рекомендации",
    rating: 5
  }, {
    author: "Валентин Ким",
    date: "16 ноября 2024",
    category: "Постановка звуков / Логопедия для взрослых",
    text: "По совету Светланы сделал операцию на уздечку языка. После неё получилось легко поставить одноударное р. В настоящий момент уже продолжаю работу с ортодонтом по исправлению прикуса. После исправления прикуса собираюсь ещё раз обратиться к Светлане для проверки речи.",
    rating: 5
  }, {
    author: "Андрей",
    date: "30 октября 2024",
    category: "Логопедия",
    text: "Попросил о помощи у Светланы с произношением звука Р. До нее обращался к другим логопедам с переменным успехом. Очень доволен, что довел свой Р до нормативного уровня. Могу рекомендовать Светлану как логопеда, который умеет работать со взрослыми и может предложить упражнения подходящие клиенту.",
    rating: 5
  }, {
    author: "Светлана",
    date: "25 октября 2024",
    category: "Логопедия",
    text: "Закончили работу со Светланой Геннадьевной. Прекрасный специалист, уже на первой консультации Светлана Геннадьевна правильно определила истинную причину проблем с произношением буквы Р (ребёнку 8 лет). Получили рекомендации обратиться к ортодонту и продолжить работу уже с ним. Спасибо, Светлана Геннадьевна!",
    rating: 5
  }, {
    author: "Вадим",
    date: "16 сентября 2024",
    category: "Заикание",
    text: "Индивидуальный подход эффективная методика",
    rating: 5
  }, {
    author: "Мария",
    date: "30 июля 2024",
    category: "Миофункциональная коррекция",
    text: "Прекрасный специалист! Исправила проблему с инфантильным глотанием у восьмилетней дочери достаточно быстро и деликатно. Ребёнок остался доволен общением, а мы - результатом.",
    rating: 5
  }, {
    author: "Светлана",
    date: "30 июля 2024",
    category: "Миофункциональная коррекция",
    text: "Светлана отличный специалист! Приезжала всегда вовремя. С первой же встречи нашла подход у ребёнку. У ребёнка после работы со Светланой наблюдается положительная динамика!",
    rating: 5
  }, {
    author: "Букреев Дмитрий Александрович",
    date: "22 июля 2024",
    category: "Заикание / Логопедия-дефектология",
    text: "Начали работать со Светланой над моим заиканием. Светлана - очень хороший специалист и человек, каждое занятие проходило очень интересно и комплексно. Хочу отдельно отметить вовлечённость в процесс и результат занятий, Светлана даёт все необходимые техники и обратную связь, всегда на связи и готова ответить на все вопросы. Моя речь стала заметно лучше, теперь, я, могу лучше контролировать запинки и ступоры. Конечно, работы ещё непочатый край, но, я, определённо, вижу улучшения и сдвиги. Светлана, также, отличный психолог, что, несомненно, помогает и необходимо в работе над заиканием, поскольку речь зависит от многих психологических факторов, страхов и ограничений. Помимо заикания, мы работали над такими звуками, как Р и Л, которые у меня хромали. И эти звуки мы успешно отработали и исправили в большей степени, за что я очень благодарен. Я преподаватель иностранных языков, и Светлана мне очень помогла со звуком Л и в английском, потому что, как оказалось, я и там неидеально произносил этот звук. Я очень доволен специалистом, всем советую!",
    rating: 5
  }, {
    author: "Ольга",
    date: "23 мая 2024",
    category: "Логопедический массаж",
    text: "Светлана Геннадьевна очень хороший специалист. С поставленной задачей справилась на отлично ( отработка сложных звуков, чистота речи). С первых минут нашла подход к ребёнку и удерживала внимание. Пробует различные подходы и методики, даёт ценные рекомендации. Работала с нами очно и он-лайн-одинаково интересно. Благодарю за проделанную работу! Рекомендую!",
    rating: 5
  }, {
    author: "Феликс",
    date: "7 мая 2024",
    category: "Логопедия для взрослых",
    text: "Педагог очень грамотная, все доходчиво объясняла, наконец-то я научился выговаривать букву Л. Меня все устроило. Очень нравились занятия, если что обращусь ещё.",
    rating: 5
  }, {
    author: "Анна Дементьева",
    date: "4 мая 2024",
    category: "Логопедия",
    text: "Светлана Генадьевна работала с дочкой около 6 месяцев. Дочери 5 с копейками было на тот момент. За этого время поставила все звуки недостающие. Р, л, шипящие, немного читать начали.Всегда могли договориться о переносе или каком то компромиссе. У меня еще есть дети и бывали накладки. Учитель всегда шла на встречу . Рекомендую логопеда однозначно.",
    rating: 5
  }, {
    author: "Елена",
    date: "18 февраля 2024",
    category: "Постановка звуков / Логопедия для взрослых",
    text: "Спасибо Светлане Геннадьевне за ее труд. Работали над шипящими, всегда подбирался интересный материал, разные способы проработки. Осталось окончательно привыкнуть к новой речи)",
    rating: 5
  }, {
    author: "Александр",
    date: "14 февраля 2024",
    category: "Логопедия для взрослых",
    text: "Всё понравилось! Спасибо большое! Рекомендую",
    rating: 5
  }, {
    author: "Татьяна",
    date: "28 января 2024",
    category: "Логопедия для взрослых",
    text: "Специалист очень вежливый , работу выполнила на 5 баллов Букву р мы сделали за несколько занятий С эмоциональной стороны очень отзывчивая Рекомендую ей дальнейших успехов",
    rating: 5
  }, {
    author: "Алина",
    date: "15 января 2024",
    category: "Логопедия для взрослых",
    text: "Работала со Светланой Геннадьевной на постановкой звука. Специалист очень доброжелательный, внимательный, пунктуальный. Все доходчиво объясняла. Буду рекомендовать. Благодарю!",
    rating: 5
  }];
  const philosophyPrinciples = [{
    icon: Heart,
    title: "Тёплая и безопасная атмосфера",
    description: "Без давления — только поддержка и уверенность. В доверии речь раскрывается естественно.",
    iconBgColor: "bg-orange-100 dark:bg-orange-950/30",
    iconColor: "text-orange-500"
  }, {
    icon: Brain,
    title: "Комплексный взгляд: речь + психология + тело",
    description: "Соединяю логопедию и психологию: работаю с дыханием, мышцами, эмоциями и внутренним состоянием.",
    iconBgColor: "bg-emerald-100 dark:bg-emerald-950/30",
    iconColor: "text-emerald-500"
  }, {
    icon: User,
    title: "Индивидуальная программа для каждого",
    description: "Подбираю упражнения, подход и темп под каждого ученика.",
    iconBgColor: "bg-amber-100 dark:bg-amber-950/30",
    iconColor: "text-amber-500"
  }, {
    icon: Target,
    title: "Практический результат и уверенность в речи",
    description: "Речь становится чистой, живой и уверенной — в любой ситуации.",
    iconBgColor: "bg-blue-100 dark:bg-blue-950/30",
    iconColor: "text-blue-500"
  }];
  const childReviews = [{
    author: "Татьяна Валерьевна",
    date: "5 марта 2025",
    text: "У нас с ней занимался сын 7 лет... Мы остались очень довольны результатом. Звуки, над которыми работали, быстро «встали на место»."
  }, {
    author: "Анна",
    date: "9 февраля 2022",
    text: "Светлана Геннадьевна нам очень нравится как профессионал, находит контакт с ребенком. Ребенок с удовольствием занимается, положительная динамика есть! Рекомендую!"
  }, {
    author: "Роман",
    date: "10 января 2023",
    text: "Очень понравился логопед, грамотная, вежливая и к сыну нашла подход быстро. Очень рад, что нашли такого педагога."
  }, {
    author: "Юлия",
    date: "20 июля 2021",
    text: "Обратились за помощью для постановки звука Р ребёнку 4 года. Светлана Геннадьевна сразу нашла подход к нашей дочери, увлекла занятиями и уже через 3 занятия появился прогресс и сдвиги в произношении. Очень довольны и рекомендуем."
  }];
  // blogPosts werden automatisch chronologisch sortiert (neueste zuerst)
  // aus der zentralen Datenquelle in src/data/blogPosts.ts
  
  const [blogPage, setBlogPage] = useState(0);
  const [activeCountry, setActiveCountry] = useState<ClientCode | null>(null);
  const postsPerPage = 3;
  const homeBlogPosts = blogPosts.slice(0, 15);
  const totalPages = Math.ceil(homeBlogPosts.length / postsPerPage);
  const visiblePosts = homeBlogPosts.slice(blogPage * postsPerPage, (blogPage + 1) * postsPerPage);
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Логопед Светлана Коновалова — Москва и онлайн | 25+ лет опыта</title>
        <meta name="description" content="Профессиональный логопед с опытом 25+ лет. Коррекция звукопроизношения, миофункциональная терапия, заикание, подготовка к школе. Онлайн и офлайн в Москве." />
        <link rel="canonical" href="https://govorim-pravilno.ru/" />
        <meta property="og:title" content="Логопед Светлана Коновалова — Москва и онлайн" />
        <meta property="og:description" content="Профессиональная логопедическая помощь детям и взрослым. Опыт более 25 лет." />
        <meta property="og:url" content="https://govorim-pravilno.ru/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="glavnaya" className="relative scroll-mt-20 px-4 py-8 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-6 md:gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className="mb-3 max-w-full text-2xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">Светлана Коновалова — логопед и клинический психолог в Москве





              </h1>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base md:mb-8 md:text-lg">
                  Коррекция звукопроизношения, миофункциональная терапия, помощь при заикании, развитие речи и навыков чтения.
Занятия для детей и взрослых — очно в Москве и онлайн  Индивидуальный подход и заметный результат.




                </p>
                <div className="mb-5 grid grid-cols-2 gap-2 md:mb-6 md:gap-4">
                  <div className="flex flex-col items-center gap-1 rounded-lg bg-card p-2 text-center shadow-sm sm:flex-row sm:gap-3 sm:p-4 sm:text-left">
                    <Calendar className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                        25+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        лет опыта
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 rounded-lg bg-card p-2 text-center shadow-sm sm:flex-row sm:gap-3 sm:p-4 sm:text-left">
                    <Award className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                        4.88
                      </div>
                      <div className="text-xs text-muted-foreground">
                        рейтинг из 5 (profi.ru)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 rounded-lg bg-card p-2 text-center shadow-sm sm:flex-row sm:gap-3 sm:p-4 sm:text-left">
                    <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                        97%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        довольных клиентов
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 rounded-lg bg-card p-2 text-center shadow-sm sm:flex-row sm:gap-3 sm:p-4 sm:text-left">
                    <Users className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                        &gt;1000
                      </div>
                      <div className="text-xs text-muted-foreground">
                        клиентов
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-foreground md:text-2xl">Записаться на консультацию</h3>
                <div className="flex items-start justify-center gap-4 md:gap-6" aria-label="Записаться через мессенджер">
                  {[
                    { label: "WhatsApp", href: "https://wa.me/79263124468?text=Здравствуйте!%20Меня%20интересуют%20логопедические%20занятия", icon: <MessageCircle className="h-5 w-5" />, color: "bg-[#25D366] hover:bg-[#128C7E]" },
                    { label: "Telegram", href: "https://t.me/SvetlanaKonovalova?text=Здравствуйте!%20Хочу%20записаться%20на%20занятия%20по%20логопедии", icon: <span className="text-lg font-bold">➤</span>, color: "bg-[#0088cc] hover:bg-[#006699]" },
                    { label: "Max", href: "https://max.ru/u/f9LHodD0cOK6OXFOQiljprVhTlskiWc41VrMfqYcyVqVtN3VQQQexkqnivg", icon: <MessageCircle className="h-5 w-5" />, color: "bg-[#168de2] hover:bg-[#1276c0]" },
                  ].map(({ label, href, icon, color }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} aria-label={`Написать в ${label}`} className="flex flex-col items-center gap-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground">
                      <span className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-sm transition hover:-translate-y-0.5 ${color}`}>{icon}</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative order-1 self-start rounded-2xl lg:order-2 md:rounded-3xl">
                <img 
                  src={heroImage} 
                  alt="Светлана Коновалова - логопед и клинический психолог с 25+ летним опытом" 
                  width="483"
                  height="605"
                  loading="eager"
                  fetchPriority="high"
                  className="h-auto w-full rounded-2xl shadow-2xl md:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section id="obo-mne" className="scroll-mt-20 py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 max-w-full">
              <span className="line-through text-muted-foreground">Поставить букву &quot;Р&quot;</span> <span className="text-primary">→</span> Повысить уверенность в речи
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex flex-col items-center gap-4">
                <img src={specialistWhoAmI} alt="Логопед Светлана Коновалова — онлайн-консультация" width="605" height="517" className="w-full max-w-md h-auto rounded-2xl shadow-lg" loading="lazy" />
              </div>

              <div className="space-y-6 text-center">
                <p className="text-base md:text-lg leading-relaxed text-foreground italic">
                  Я вижу работу с речью глубже, чем просто коррекцию звуков. Как логопед и клинический психолог, я помогаю не только произносить правильно, но и чувствовать себя уверенно, спокойно и свободно в общении.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground italic">
                  Из 25-летнего опыта работы с клиентами знаю: когда человек принимает свой голос и снимает внутреннее напряжение, речь становится естественной, живой и выразительной.
                </p>

                <div className="pt-4 flex justify-center">
                  <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full border-primary/40 px-6 font-semibold">
                    <Link to="/about">Узнать больше обо мне</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 md:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 max-w-full">
              Мой <span className="text-primary">подход к работе</span>
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              Четыре принципа, на которых строится каждая консультация и каждое занятие — с ребёнком или взрослым.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {philosophyPrinciples.map((principle, index) => <PhilosophyCard key={index} {...principle} />)}
            </div>
          </div>
        </section>


        {/* Quick orientation */}
        <section aria-labelledby="audience-title" className="border-y bg-card px-4 py-6 md:py-10">
          <div className="container mx-auto max-w-6xl">
            <h2 id="audience-title" className="mb-4 text-center text-lg font-bold md:mb-6 md:text-2xl">
              Помощь для детей, подростков и взрослых
            </h2>
            <div className="grid gap-2 min-[420px]:grid-cols-3 sm:gap-3">
              {[
                { icon: Users, title: "Детям", text: "Звуки, речь, чтение и подготовка к школе" },
                { icon: GraduationCap, title: "Подросткам", text: "Чёткая речь и уверенность в общении" },
                { icon: User, title: "Взрослым", text: "Произношение, дикция и миофункциональная коррекция" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col items-center rounded-2xl border bg-background p-3 text-center shadow-sm sm:p-5">
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-3 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mb-1 font-semibold">{title}</h3>
                  <p className="text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="uslugi" className="scroll-mt-20 py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 max-w-full">
              Чем я <span className="text-primary">помогаю</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {allServices.map((service, index) => <SimpleServiceCard key={index} icon={service.icon} title={service.title} bgColor={service.bgColor} link={service.link} />)}
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full border-primary/40 px-6 font-semibold">
                <Link to="/services">Подробнее о занятиях</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Review from a parent */}
        <section id="otzyvy" className="scroll-mt-20 border-y border-sky-200/70 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 px-4 py-8 dark:border-sky-900/50 dark:from-sky-950/20 dark:via-blue-950/20 dark:to-sky-950/20 md:py-12">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-6 text-center">
              <span className="inline-flex rounded-full bg-sky-600 px-4 py-1.5 text-sm font-semibold text-white">
                Дети и родители
              </span>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-950/75 dark:text-sky-100/75">
                Родители рассказывают, как занятия помогают детям говорить яснее, увереннее и с удовольствием общаться.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {childReviews.map((review) => (
                <article key={`${review.author}-${review.date}`} className="flex h-full flex-col items-center px-2 py-3 text-center sm:px-4">
                  <div className="mb-3 flex justify-center" aria-label="5 из 5 звёзд">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm font-medium leading-relaxed text-foreground">
                    “{review.text}”
                  </blockquote>
                  <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured stories from adult students */}
        <section className="border-b border-orange-200/70 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 px-4 py-12 dark:border-orange-900/50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-amber-950/20 md:py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 text-center md:mb-10">
              <span className="mb-4 inline-flex rounded-full bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white">
                Взрослые ученики
              </span>
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
                Истории моих <span className="text-primary">взрослых учеников</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-orange-950/75 dark:text-orange-100/75 sm:text-base">
                Истории учеников, которые решили улучшить произношение и дикцию и почувствовать больше уверенности в своей речи.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <article className="flex flex-col rounded-2xl border border-orange-200 bg-card p-6 text-center shadow-sm dark:border-orange-900/60 md:p-8">
                <div className="mb-5 flex justify-center">
                  <img src={klientkaOtzyvAvatar} alt="Ольга Пак — история взрослой ученицы" className="h-40 w-40 rounded-xl object-cover shadow-lg md:h-56 md:w-56" />
                </div>
                <blockquote className="mb-4 flex-1 text-sm font-medium italic leading-relaxed text-foreground md:text-base">
                  «[...] С 15ти лет я мучилась от боли в голове и шее. Устала от них дико. Но здесь же был и страх, что а вдруг не поможет. Сейчас я в восторге от эффекта. Поэтому, конечно, я Светлану очень благодарю за внимательность и вообще за такие знания. Всех специалистов, которые углубляют свои знания. Не работают на поверхности — только поставить звуки, а смотрят глубже, смотрят на проблему шире, развиваются в этом направлении. [...]»
                </blockquote>
                <p className="text-sm text-muted-foreground md:text-base">— Ольга Пак · Миофункциональная коррекция</p>
              </article>

              <article className="flex flex-col rounded-2xl border border-orange-200 bg-card p-6 text-center shadow-sm dark:border-orange-900/60 md:p-8">
                <div className="mb-5 flex justify-center">
                  <img src={studentkaZhurfakaAvatar} alt="История студентки факультета журналистики" className="h-40 w-40 rounded-xl object-cover shadow-lg md:h-56 md:w-56" />
                </div>
                <blockquote className="mb-4 flex-1 text-sm font-medium italic leading-relaxed text-foreground md:text-base">
                  «После операции по коррекции уздечки необходимо было разрабатывать язык и ставить звуки, самый критичный Р, но еще и Ш, М, Н. Приступили к занятиям на третий день после операции. Светлана Геннадьевна сразу дала рекомендации какие купить приспособления для занятий. Занимались 2-3 раза в неделю на протяжении 2-х месяцев. Результат хороший, раскатистость Р немного слышно, но речь стала гораздо четче. Учусь на журфаке и педагоги заметили результат!»
                </blockquote>
                <p className="text-sm text-muted-foreground md:text-base">— Студентка журфака · Постановка звуков</p>
              </article>
            </div>
          </div>
        </section>

        {/* Client Geography Map */}
        <section className="py-12 md:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
              Мои клиенты <span className="text-primary">из разных уголков мира</span>
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              Онлайн-формат позволяет работать с русскоговорящими соотечественниками из любой точки планеты.
            </p>
            
            <div className="relative bg-background/50 rounded-2xl p-4 md:p-8 shadow-lg">
              <InteractiveWorldMap activeCode={activeCountry} onActiveCodeChange={setActiveCountry} />
              
              <div className="mt-8 md:mt-12">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                  {["Россия", "Германия", "Норвегия", "Швеция", "Франция", "Англия", "США", "Нидерланды", "Сингапур", "ОАЭ", "Черногория"].map((country, index, array) => <div key={country} className="flex items-center gap-3 md:gap-6">
                      <button type="button" onMouseEnter={() => setActiveCountry(({ Россия: "RUS", Германия: "DEU", Норвегия: "NOR", Швеция: "SWE", Франция: "FRA", Англия: "GBR", США: "USA", Нидерланды: "NLD", Сингапур: "SGP", ОАЭ: "ARE", Черногория: "MNE" } as Record<string, ClientCode>)[country])} onMouseLeave={() => setActiveCountry(null)} onFocus={() => setActiveCountry(({ Россия: "RUS", Германия: "DEU", Норвегия: "NOR", Швеция: "SWE", Франция: "FRA", Англия: "GBR", США: "USA", Нидерланды: "NLD", Сингапур: "SGP", ОАЭ: "ARE", Черногория: "MNE" } as Record<string, ClientCode>)[country])} onBlur={() => setActiveCountry(null)} className={`flex items-center gap-2 text-xs transition-all duration-200 md:text-sm ${activeCountry === ({ Россия: "RUS", Германия: "DEU", Норвегия: "NOR", Швеция: "SWE", Франция: "FRA", Англия: "GBR", США: "USA", Нидерланды: "NLD", Сингапур: "SGP", ОАЭ: "ARE", Черногория: "MNE" } as Record<string, ClientCode>)[country] ? "scale-105 font-bold text-primary" : "font-medium text-foreground"}`}>
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{country}</span>
                      </button>
                      {index < array.length - 1 && <div className="hidden sm:block w-px h-6 bg-border"></div>}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Online Speech Therapy Process */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
              Как проходит <span className="text-primary">онлайн-логопедия</span>
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
              Онлайн-логопедия проходит так же, как очные занятия: мы видим и слышим друг друга, выполняем упражнения, разбираем ошибки и отслеживаем прогресс
            </p>
            
            <div className="overflow-hidden rounded-2xl bg-background shadow-lg">
              <img
                src={onlineProcessImage}
                alt="Как проходит онлайн-логопедия: от диагностики до улучшения речи"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>

            {/* Reviews Marquee */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-12 md:mt-16 mb-8 md:mb-10">
              Отзывы
            </h3>
            <VerticalReviewsMarquee testimonials={testimonials} />

            <div className="mt-8 flex justify-center text-center md:mt-12">
              <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full border-primary/40 px-6 font-semibold">
                <Link to="/reviews">Все отзывы и фотогалерея моих занятий</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Materials overview */}
        <section id="materialy" className="scroll-mt-20 bg-muted/30 px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                Материалы для <span className="text-primary">занятий дома</span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Выберите готовые упражнения для автоматизации звуков или откройте бесплатные интерактивные игры на внимание, память и фонематический слух.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Интерактивные игры",
                  text: "Бесплатные игры для детей: «Лопни пузырь», «Поймай звук» и другие задания для фонематического слуха, памяти и речи. Озвучивание можно включить или отключить.",
                  image: interactiveGamesCategoryImage,
                  alt: "Интерактивные логопедические игры для детей",
                  link: "/materials/interaktivnye-igry",
                },
                {
                  title: "Автоматизация звуков",
                  text: "Упражнения для закрепления звуков Ж, Л, Ль, Р, Рь и Ш в слогах, словах, фразах и скороговорках.",
                  image: automationCategoryImage,
                  alt: "Материалы для автоматизации звуков русской речи",
                  link: "/materials/avtomatizatsiya-zvuka",
                },
              ].map((item) => (
                <Link key={item.title} to={item.link} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="grid h-full sm:grid-cols-[42%_1fr]">
                    <div className="aspect-video overflow-hidden sm:aspect-auto">
                      <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">{item.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/40 px-6 font-semibold text-primary transition-colors group-hover:bg-primary/5">Открыть раздел →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 text-center">
              <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full border-primary/40 px-6 font-semibold">
                <Link to="/materials">Больше материалов в разделе «Занятия и материалы» →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section id="blog" className="scroll-mt-20 py-12 md:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Полезные статьи
            </h2>
            
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                {visiblePosts.map(post => (
                  <div key={post.slug}>
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" onClick={() => setBlogPage((page) => Math.max(0, page - 1))} disabled={blogPage === 0} className="h-11 w-11 rounded-full" aria-label="Предыдущие статьи">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">{blogPage + 1} / {totalPages}</span>
                <Button variant="outline" size="icon" onClick={() => setBlogPage((page) => Math.min(totalPages - 1, page + 1))} disabled={blogPage === totalPages - 1} className="h-11 w-11 rounded-full" aria-label="Следующие статьи">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full border-primary/40 px-6 font-semibold">
                <Link to="/blog">Все статьи</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="kontakty" className="scroll-mt-20 px-4 py-8 md:py-16">
          <div className="container mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-5 text-center shadow-sm md:p-10">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Обсудим вашу задачу?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Расскажите, что вызывает трудности. Я помогу выбрать подходящий формат занятий — очно в Москве или онлайн.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button asChild size="lg" className="min-h-14 px-10 text-base shadow-sm">
                <Link to="/contacts">Запись и стоимость</Link>
              </Button>

              <div className="flex items-center justify-center gap-3" aria-label="Написать в мессенджере">
                <a
                  href="https://wa.me/79263124468?text=Здравствуйте!%20Меня%20интересуют%20логопедические%20занятия"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в WhatsApp"
                  title="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>

                <a
                  href="https://t.me/SvetlanaKonovalova?text=Здравствуйте!%20Хочу%20записаться%20на%20занятия%20по%20логопедии"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в Telegram"
                  title="Telegram"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#0088cc] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0088cc] focus-visible:ring-offset-2"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>

                <a
                  href="https://max.ru/u/f9LHodD0cOK6OXFOQiljprVhTlskiWc41VrMfqYcyVqVtN3VQQQexkqnivg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в Max"
                  title="Max"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#168de2] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168de2] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </div>;
};
export default Index;
