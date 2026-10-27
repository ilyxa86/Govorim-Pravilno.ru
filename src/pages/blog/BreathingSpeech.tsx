import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import heroImage from "@/assets/blog/breathing-speech-hero.jpg";
import infographicImage from "@/assets/blog/breathing-speech-infographic.jpg";

const BreathingSpeech = () => {
  const faqItems = [
    {
      question: "Можно ли исправить речевое дыхание взрослому человеку?",
      answer: "Да, дыхательная система очень пластична. Взрослым даже проще заниматься, так как они могут осознанно контролировать работу диафрагмы и мышц пресса."
    },
    {
      question: "Почему во время упражнений кружится голова?",
      answer: "Это происходит из-за гипервентиляции — резкого притока кислорода. Если это случилось, просто сделайте паузу, посидите спокойно и подышите в обычном ритме."
    },
    {
      question: "Сколько времени нужно тренироваться, чтобы увидеть результат?",
      answer: "При ежедневных занятиях по 5-7 минут первые изменения в качестве голоса и длине фразы заметны уже через 2-3 недели."
    },
    {
      question: "Связано ли неправильное дыхание с заиканием?",
      answer: "Часто да. Нарушение речевого цикла «вдох-выдох» является одним из механизмов заикания, поэтому работа над дыханием всегда входит в программу коррекции."
    },
    {
      question: "Помогает ли пение развить речевой выдох?",
      answer: "Безусловно. Пение — это лучшая естественная тренировка для удлинения выдоха и укрепления голосового аппарата."
    },
    {
      question: "Нужно ли вдыхать через нос или через рот во время речи?",
      answer: "В идеале вдох в речи должен быть комбинированным, но акцент делается на быстрый добор воздуха через рот, так как это происходит физиологически быстрее."
    },
    {
      question: "Как понять, что я дышу правильно (животом)?",
      answer: "Лягте на спину и положите книгу на живот. При вдохе книга должна подниматься, а при выдохе — опускаться. Грудная клетка при этом должна оставаться почти неподвижной."
    },
    {
      question: "Влияет ли осанка на дыхание?",
      answer: "Прямым образом. Если вы сутулитесь, объем легких ограничивается, а диафрагма оказывается зажатой, что делает полноценный речевой выдох невозможным."
    },
    {
      question: "С какого возраста можно делать дыхательную гимнастику с ребенком?",
      answer: "Простейшие игровые упражнения (дутье на перышко, мыльные пузыри) можно начинать уже с 1.5–2 лет."
    },
    {
      question: "Помогают ли занятия на духовых инструментах речи?",
      answer: "Да, игра на флейте, дудочке или губной гармошке — это отличный способ укрепить речевой выдох и мышцы артикуляционного аппарата."
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
    "headline": "Роль дыхания в красивой речи: упражнения для взрослых и детей",
    "description": "Речевое дыхание — способность производить короткий вдох и рационально расходовать воздух на выдохе для чистого и плавного голоса.",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова",
      "jobTitle": "Логопед"
    },
    "datePublished": "2026-01-23",
    "publisher": {
      "@type": "Organization",
      "name": "govorim-pravilno.ru"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Роль дыхания в красивой речи: упражнения для взрослых и детей | Светлана Коновалова</title>
        <meta name="description" content="Речевое дыхание: почему оно важно для красивого голоса. Практические упражнения для взрослых и детей от логопеда." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/breathing-speech" />
        <meta property="og:title" content="Роль дыхания в красивой речи: упражнения для взрослых и детей" />
        <meta property="og:description" content="Как правильное дыхание влияет на качество речи и голоса. Практические упражнения." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/breathing-speech" />
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
                <span>23 января 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Роль дыхания в красивой речи: упражнения для взрослых и детей
              </h1>
            </div>

            <img 
              src={heroImage} 
              alt="Роль дыхания в красивой речи — упражнения для взрослых и детей"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Речевое дыхание</strong> — это способность человека в процессе высказывания своевременно производить короткий глубокий вдох и рационально расходовать воздух на выдохе, что является энергетической базой для чистого, звучного и плавного голоса.
              </p>

              <p className="text-muted-foreground mb-6">
                Замечали ли вы, как иногда к концу длинной фразы голос начинает «угасать», становится тихим или даже прерывистым? Или, может быть, ваш ребенок торопится выговорить всё на одном вдохе, из-за чего слова комкаются, а дикция становится невнятной? Это типичные признаки того, что речевой выдох организован неправильно.
              </p>

              <p className="text-muted-foreground mb-6">
                В моей практике я часто сталкиваюсь с тем, что люди недооценивают важность «фундамента» речи. Мы можем долго работать над звуками «Р» или «Ш», но если у человека нет опоры на дыхание, речь всё равно будет звучать неуверенно. Правильное дыхание — это не только про логопедию, это про ваше самочувствие, уверенность в себе и умение удерживать внимание слушателя.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему дыхание в жизни и в речи — это разные вещи</h2>
              <p className="text-muted-foreground mb-4">
                Обычное физиологическое дыхание происходит автоматически: вдох и выдох примерно равны по продолжительности, а пауза между ними минимальна. В речи же всё меняется. Нам нужен быстрый, практически незаметный вдох через нос или рот и очень длинный, контролируемый выдох.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Сила звука:</strong> Чем мощнее и стабильнее струя воздуха, тем четче вибрируют голосовые связки.</li>
                <li><strong>Логические паузы:</strong> Только правильное распределение воздуха позволяет делать паузы там, где они нужны по смыслу, а не там, где закончился кислород.</li>
                <li><strong>Темп и ритм:</strong> Неправильный выдох заставляет нас ускоряться, «захлебываться» словами, что ведет к тахилалии (ускоренной речи) или даже запинкам, напоминающим заикание.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Взгляд в историю и культуру</h2>
              <p className="text-muted-foreground mb-6">
                Интересно, что еще в Древней Греции ораторы уделяли тренировке легких огромное внимание. Демосфен, как гласят легенды, тренировал дыхание, поднимаясь в гору и декламируя стихи. В восточных культурах дыхательные практики (пранаямы) всегда считались ключом не только к здоровью, но и к управлению своим эмоциональным состоянием через голос. В своей работе я объединяю классические логопедические приемы с элементами дыхательной гимнастики, чтобы достичь максимального эффекта.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Практические упражнения для дома</h2>
              <p className="text-muted-foreground mb-6">
                Я рекомендую начинать занятия с простых техник, которые занимают не более 5-10 минут в день. Главное правило — не переутомляться, чтобы не возникло легкое головокружение от избытка кислорода.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Для детей (в игровой форме)</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>«Цветочный магазин»:</strong> Представьте, что вы зашли в магазин. Сделайте глубокий вдох и на выдохе плавно произнесите: «Ах, какой аромат».</li>
                <li><strong>«Свеча»:</strong> Держите перед собой воображаемую или настоящую свечу. Нужно дуть на пламя так, чтобы оно отклонилось, но не погасло. Это тренирует длинную, ровную струю воздуха.</li>
                <li><strong>«Фокус»:</strong> Положите кусочек ватки на кончик носа. Нужно высунуть язык «чашечкой» и с силой дунуть вверх, чтобы ватка взлетела.</li>
              </ul>

              <img 
                src={infographicImage} 
                alt="Дыхательные упражнения для красивой речи"
                className="w-full rounded-xl shadow-lg my-8"
              />

              <h3 className="text-xl font-bold mt-6 mb-3">Для взрослых</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>«Счет на выдохе»:</strong> Сделайте глубокий вдох животом. На выдохе начинайте считать: «Один, два, три...» до тех пор, пока воздух не закончится. Записывайте свои результаты, чтобы видеть прогресс.</li>
                <li><strong>«Глухая согласная»:</strong> Сделайте вдох и на выдохе произносите звук «С-с-с...» максимально долго и ровно. Струя должна быть тонкой и холодной.</li>
                <li><strong>«Диафрагмальный толчок»:</strong> Положите руку на живот. Сделайте резкий выдох, как будто вы сдуваете пылинку, при этом живот должен активно «подпрыгнуть» внутрь.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Когда стоит обратиться за помощью</h2>
              <p className="text-muted-foreground mb-4">
                Самостоятельные тренировки полезны для профилактики и общего развития голоса. Однако бывают ситуации, когда без консультации специалиста не обойтись:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>У ребенка постоянно открыт рот (ротовое дыхание).</li>
                <li>Голос всегда звучит сипло или слишком тихо.</li>
                <li>Появляются судорожные вдохи посреди слова.</li>
                <li>Дыхание сопровождается подъемом плеч и напряжением шеи.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Путь к уверенному звучанию</h2>
              <p className="text-muted-foreground mb-6">
                Красивая речь начинается не с языка, а с легких. Научившись управлять своим дыханием, вы получите мощный инструмент для публичных выступлений, деловых переговоров и просто гармоничного общения. Помните, что голос — это ваша визитная карточка, и он заслуживает того, чтобы звучать надежно.
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
        
        <RelatedArticlesCarousel currentSlug="breathing-speech" />
      </main>
      
      <Footer />
    </div>
  );
};

export default BreathingSpeech;
