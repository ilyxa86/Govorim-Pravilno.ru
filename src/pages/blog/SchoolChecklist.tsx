import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import heroImage from "@/assets/blog/school-checklist-hero.jpg";
import infographicImage from "@/assets/blog/school-checklist-infographic.jpg";

const SchoolChecklist = () => {
  const faqItems = [
    {
      question: "Обязательно ли исправлять «Р», если ребенку уже 7 лет, а он идет в школу?",
      answer: "Да, обязательно. Неправильное произношение звука часто ведет к его неправильному буквенному обозначению или психологическому дискомфорту ребенка при ответах у доски."
    },
    {
      question: "Может ли логопед помочь, если ребенок «зеркалит» буквы?",
      answer: "Безусловно. В моей практике это частый запрос. Мы работаем над пространственным ориентированием и зрительным гнозисом, чтобы ребенок перестал путать направления написания букв."
    },
    {
      question: "Сколько времени обычно занимает подготовка речи к школе?",
      answer: "Все индивидуально. Если нужно только «поставить» один звук — это может занять месяц. Если есть проблемы с фонематическим слухом и связной речью, лучше начинать за год до школы."
    },
    {
      question: "Нужно ли учить ребенка читать до школы, если есть проблемы со звуками?",
      answer: "Я рекомендую сначала разобраться с произношением и слуховым восприятием. Чтение с неправильно произносимыми звуками может закрепить речевые ошибки."
    },
    {
      question: "Как проверить фонематический слух дома за 5 минут?",
      answer: "Попросите ребенка повторить слоги-перевертыши: «па-ба-па», «та-да-та», «са-ша-са». Если ребенок ошибается или не слышит разницы, это повод для консультации."
    },
    {
      question: "Что делать, если ребенок переставляет слоги в длинных словах?",
      answer: "Это нарушение слоговой структуры. В классах мы используем специальные ритмические упражнения и прохлопывание каждого слога."
    },
    {
      question: "Влияет ли мелкая моторика на речевую готовность?",
      answer: "Прямая связь доказана научно. Дети с развитой моторикой быстрее осваивают сложные звуки и легче переходят к письму."
    },
    {
      question: "Нужно ли обращаться к логопеду, если ребенок просто «стесняется» говорить длинными предложениями?",
      answer: "За «стеснительностью» часто скрывается неумение грамматически правильно оформить мысль. Лучше проверить уровень развития связной речи у специалиста."
    },
    {
      question: "Можно ли исправить речевые нарушения онлайн?",
      answer: "Да, многие компоненты речевой готовности, такие как фонематический слух, грамматика и связная речь, успешно корректируются в дистанционном формате в ходе моих консультаций."
    },
    {
      question: "Зависит ли успех в письме от умения пересказывать?",
      answer: "Напрямую. Пересказ учит удерживать в памяти последовательность событий и слов, что критически важно при написании диктантов и изложений."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Чек-лист: готов ли ваш ребёнок к школе с точки зрения логопеда?",
    "description": "Готовность к школе с точки зрения логопеда — это сформированность всех компонентов речи для успешного освоения чтения и письма.",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова",
      "jobTitle": "Логопед"
    },
    "datePublished": "2026-01-22",
    "publisher": {
      "@type": "Organization",
      "name": "govorim-pravilno.ru"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Чек-лист: готов ли ваш ребёнок к школе с точки зрения логопеда | Светлана Коновалова</title>
        <meta name="description" content="Готовность к школе с точки зрения логопеда: звукопроизношение, фонематический слух, словарный запас. Практический чек-лист для родителей." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/school-checklist" />
        <meta property="og:title" content="Чек-лист: готов ли ваш ребёнок к школе с точки зрения логопеда?" />
        <meta property="og:description" content="Практический чек-лист речевой готовности к школе от логопеда с 20-летним стажем." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/school-checklist" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к блогу
              </Link>
            </Button>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>22 января 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Чек-лист: готов ли ваш ребёнок к школе с точки зрения логопеда?
              </h1>
            </div>

            <img 
              src={heroImage} 
              alt="Чек-лист готовности ребёнка к школе с точки зрения логопеда"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Готовность к школе с точки зрения логопеда</strong> — это сформированность всех компонентов речи, включая звукопроизношение, фонематический слух, словарный запас и грамматический строй, которая позволяет ребенку успешно осваивать навыки чтения и письма без риска развития дисграфии и дислексии.
              </p>

              <p className="text-muted-foreground mb-6">
                В моей частной практике я часто сталкиваюсь с тем, что родители оценивают готовность к школе только по умению ребенка читать или считать до ста. Однако, как специалист, я вижу скрытые «подводные камни»: ребенок может уметь читать, но при этом не различать на слух глухие и звонкие согласные, что в первом классе неизбежно превратится в бесконечные ошибки в тетрадях.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Звукопроизношение: норма к семи годам</h2>
              <p className="text-muted-foreground mb-4">
                К моменту поступления в школу (6,5–7 лет) ребенок должен полностью овладеть произношением всех звуков родного языка. Это база, без которой переход к письму становится мучительным.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Все звуки (включая сложные «Р», «Л», шипящие «Ш», «Ж», «Щ», «Ч») произносятся четко и правильно.</li>
                <li>Ребенок не заменяет звуки в бытовой речи (например, не говорит «лыба» вместо «рыба» или «сапка» вместо «шапка»).</li>
                <li>Отсутствует «каша во рту»: речь понятна даже постороннему человеку, а не только близким родственникам.</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Если к 6 годам звук «Р» так и не появился или произносится «горлом», ждать, что в школе всё «само исправится», — опасное заблуждение. В условиях школьной нагрузки на коррекцию звуков уходит в три раза больше времени.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Фонематические процессы: слышать и различать</h2>
              <p className="text-muted-foreground mb-4">
                Это умение анализировать звуковой состав слова. В своих занятиях я уделяю этому пункту особое внимание, так как именно здесь кроются причины будущей дисграфии.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Ребенок может выделить первый и последний звук в слове.</li>
                <li>Умеет определить последовательность звуков (например, в слове «КОТ»: К, О, Т).</li>
                <li>Различает на слух похожие звуки: Б-П, Д-Т, С-З, Ш-Ж.</li>
                <li>Может придумать слово на заданный звук.</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Если ребенок не может хлопнуть в ладоши, когда слышит звук «Ш» среди других звуков, он с большой вероятностью будет путать буквы на письме.
              </p>

              <img 
                src={infographicImage} 
                alt="Компоненты речевой готовности к школе"
                className="w-full rounded-xl shadow-lg my-8"
              />

              <h2 className="text-2xl font-bold mt-8 mb-4">Слоговая структура и словарь</h2>
              <p className="text-muted-foreground mb-4">
                Многие дети сейчас имеют «бедный» активный словарь, хотя пассивный может быть обширным. Для школы важно уметь правильно произносить длинные и сложные слова.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Безошибочное повторение слов сложной слоговой структуры:</strong> «экспертиза», «строительство», «велосипедист», «температура». Ребенок не должен переставлять слоги или пропускать их.</li>
                <li><strong>Умение образовывать новые слова:</strong> из дерева — деревянный, у лисы — лисий хвост.</li>
                <li><strong>Правильное использование предлогов:</strong> не только простых (в, на, под), но и сложных (из-за, из-под).</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Связная речь: умение мыслить и рассказывать</h2>
              <p className="text-muted-foreground mb-4">
                Школьная программа требует от ребенка умения пересказывать тексты и составлять рассказы по картинкам. Это высшая форма речевой деятельности.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Ребенок может самостоятельно составить рассказ по серии из 3–5 картинок, соблюдая логику событий.</li>
                <li>Пересказывает услышанный текст, выделяя главную мысль и не теряя нить повествования.</li>
                <li>Использует в речи сложные предложения с союзами «потому что», «который», «если».</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                В моей практике отсутствие навыка связного высказывания часто коррелирует с трудностями в понимании условий задач по математике.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Путь к уверенному старту в школе</h2>
              <p className="text-muted-foreground mb-6">
                Своевременная диагностика — это лучший подарок, который вы можете сделать своему ребенку перед первым классом. Речевые нарушения, не исправленные до школы, неизбежно переходят в письменную речь, снижая мотивацию к учебе и общую успеваемость.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Частые вопросы</h2>
              
              <div className="space-y-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-border pb-6">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="min-h-[56px] px-8">
                <Link to="/contacts">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </article>
        
        <RelatedArticlesCarousel currentSlug="school-checklist" />
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolChecklist;
