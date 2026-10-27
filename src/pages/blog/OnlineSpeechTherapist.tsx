import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import heroImage from "@/assets/blog/online-speech-therapist-hero.jpg";
import infographicImage from "@/assets/blog/online-speech-therapist-infographic.jpg";

const OnlineSpeechTherapist = () => {
  const faqItems = [
    {
      question: "Может ли двухлетний ребенок высидеть занятие перед компьютером?",
      answer: "Ему и не нужно сидеть неподвижно. Мы работаем короткими блоками по 5–7 минут, перемежая их активными играми, где ребенок двигается по комнате, выполняя мои задания."
    },
    {
      question: "В чем заключается роль родителей на онлайн-занятии?",
      answer: "Вы — мои руки и главные помощники. Я показываю через экран, что нужно делать, а вы направляете малыша, помогаете ему тактильно и создаете ситуацию успеха прямо у вас дома."
    },
    {
      question: "Сколько времени обычно занимает запуск речи онлайн?",
      answer: "Это индивидуальный процесс. У некоторых детей первые осознанные звукоподражания появляются через 2 недели, другим требуется несколько месяцев системной работы."
    },
    {
      question: "Как проходят занятия, если ребенок вообще не смотрит в экран?",
      answer: "В таком случае я перехожу в формат родительского коучинга. Я обучаю вас специальным приемам и играм, которые вы проводите с ребенком самостоятельно, а я корректирую процесс."
    },
    {
      question: "Какие игрушки и материалы нужно подготовить для урока?",
      answer: "Обычно это то, что уже есть у вас: мячики, мыльные пузыри, молоточек, одинаковые предметы 2-х цветов для выкладывания звуковых дорожек, любимые машинки или куклы, а также крупы, пластилин или обычная вода. Список я даю заранее."
    },
    {
      question: "Есть ли разница в эффективности между очным приемом и онлайн-занятием?",
      answer: "При запуске речи онлайн-эффективность часто выше, так как ребенок находится в знакомой обстановке, чувствует себя в безопасности и быстрее идет на контакт. А также от того, что родителям тут точно нужно будет включаться, а не сидеть в роли зрителя, как часто бывает при очном приёме."
    },
    {
      question: "Что такое родительский коучинг в логопедии?",
      answer: "Это формат, в котором я передаю вам экспертные знания и учу вас быть логопедом для своего ребенка 24/7, встраивая упражнения в обычные бытовые дела."
    },
    {
      question: "Нужно ли делать артикуляционную гимнастику с малышом 2 лет?",
      answer: "В этом возрасте мы не делаем скучные упражнения. Мы учимся кривляться, дуть на перышки и «лакать молоко», превращая гимнастику в веселое баловство."
    },
    {
      question: "Как понять, что выбранный онлайн-логопед подходит моему ребенку?",
      answer: "Если после первой встречи у вас есть понимание причин молчания и четкий план действий, а ребенок проявил хотя бы мимолетный интерес к игре — вы на верном пути."
    },
    {
      question: "Поможет ли онлайн-логопед, если у ребенка подозревают не просто ЗРР, а алалию?",
      answer: "Да, специалист-дефектолог при работе онлайн выстраивает комплексную систему стимуляции коры головного мозга, что необходимо при таких сложных диагнозах, как алалия."
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
    "headline": "Как выбрать детского логопеда онлайн для запуска речи у малыша",
    "description": "Выбор детского логопеда онлайн для запуска речи — это поиск специалиста, владеющего методиками игровой терапии и коучинга для родителей.",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова",
      "jobTitle": "Логопед"
    },
    "datePublished": "2026-01-18",
    "publisher": {
      "@type": "Organization",
      "name": "govorim-pravilno.ru"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Как выбрать детского логопеда онлайн для запуска речи | Логопед Светлана Коновалова</title>
        <meta name="description" content="Выбор детского логопеда онлайн для запуска речи. Игровые методики, родительский коучинг и работа с «молчунами» 2–3 лет по видеосвязи." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/online-speech-therapist" />
        <meta property="og:title" content="Как выбрать детского логопеда онлайн для запуска речи" />
        <meta property="og:description" content="Работа с «молчунами» по видеосвязи: игровые методики и родительский коучинг." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/online-speech-therapist" />
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
                <span>18 января 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Как выбрать детского логопеда онлайн для запуска речи у малыша?
              </h1>
            </div>

            <img 
              src={heroImage} 
              alt="Как выбрать детского логопеда онлайн для запуска речи у малыша"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Выбор детского логопеда онлайн для запуска речи</strong> — это поиск специалиста, владеющего методиками игровой терапии и коучинга для родителей, способного дистанционно выстроить среду, стимулирующую речевую активность ребенка через экран и взаимодействие внутри семьи.
              </p>

              <p className="text-muted-foreground mb-6">
                В моей частной практике я часто слышу от мам: «Мой малыш в 2 года молчит, но разве онлайн-занятия помогут такому крохе? Он же не будет сидеть у экрана!». Я прекрасно понимаю эти сомнения. Когда ребенок не говорит, каждый потерянный месяц кажется катастрофой, а формат видеосвязи — чем-то абстрактным. На самом деле, работа с «молчунами» 2–3 лет — это одно из самых востребованных направлений в моей работе. Секрет успеха здесь не в том, чтобы заставить ребенка смотреть в монитор, а в том, чтобы превратить занятие в захватывающую игру, где главным помощником становлюсь я, а главным проводником — вы, родители.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Работа с «молчунами» по видеосвязи: миф или реальность?</h2>
              <p className="text-muted-foreground mb-6">
                Многие родители удивляются, узнав, что для запуска речи у малышей 2–3 лет мне не обязательно находиться в одной комнате с ребенком. Современная логопедия позволяет эффективно работать дистанционно, используя правильные методики.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Игровые методики как основа</h2>
              <p className="text-muted-foreground mb-4">
                В моих классах я использую приемы, которые задействуют все органы чувств:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Сенсорные игры:</strong> мы вместе с вами готовим крупы, воду или тесто, чтобы через мелкую моторику «разбудить» речевые центры.</li>
                <li><strong>Визуальный фокус:</strong> я использую ярких персонажей-помощников и анимированные презентации, которые вызывают у ребенка эмоциональный отклик и желание подражать звукам.</li>
                <li><strong>Музыкальная стимуляция:</strong> короткие песенки и ритмические упражнения отлично работают на появление первых слогов.</li>
              </ul>

              <img 
                src={infographicImage} 
                alt="Игровые методики для запуска речи у малышей"
                className="w-full rounded-xl shadow-lg my-8"
              />

              <h2 className="text-2xl font-bold mt-8 mb-4">Когда пора бить тревогу (ЗРР)</h2>
              <p className="text-muted-foreground mb-6">
                Задержка речевого развития (ЗРР) — это состояние, которое требует внимания, если к 2 годам у ребенка нет простой фразы, а в 2.5–3 года словарный запас минимален. Не стоит ждать «кризиса трех лет» или надеяться, что малыш заговорит сам после поездки на море. В моей практике я вижу, что чем раньше начнется коррекция, тем легче ребенку будет социализироваться в будущем.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ваш путь к первым словам малыша</h2>
              <p className="text-muted-foreground mb-6">
                Запуск речи — это всегда командная работа. Моя задача как специалиста — дать вам четкий алгоритм, инструменты и эмоциональный заряд, а ваша — внедрить эти маленькие хитрости в повседневную жизнь. Поверьте, когда ваш «молчун» впервые скажет «дай» или «мама» осознанно, это станет нашей общей большой победой. Сделайте первый шаг к полноценному общению вашего ребенка уже сегодня.
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
        
        <RelatedArticlesCarousel currentSlug="online-speech-therapist" />
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineSpeechTherapist;
