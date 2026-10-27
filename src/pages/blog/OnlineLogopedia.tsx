import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import onlineLogopediaHero from "@/assets/blog/online-logopedia-hero.jpg";
import onlineLogopediaInfographic from "@/assets/blog/online-logopedia-infographic.jpg";
import onlineLogopediaCta from "@/assets/blog/online-logopedia-cta.jpg";

const OnlineLogopedia = () => {
  const faqItems = [
    {
      question: "С какого возраста можно начинать онлайн-занятия?",
      answer: "При необходимости можно начинать с 4–5 лет. В этом возрасте дети уже способны удерживать внимание на экране в течение 20–25 минут и выполнять инструкции логопеда."
    },
    {
      question: "Нужна ли помощь родителя во время урока?",
      answer: "Да, особенно на первых этапах. Я прошу родителей быть рядом, чтобы помочь с техническими моментами или направить внимание ребенка, если он отвлечется."
    },
    {
      question: "Какое оборудование необходимо для занятий?",
      answer: "Достаточно ноутбука или планшета со стабильным интернетом. Важно, чтобы была хорошая камера, так как мне нужно четко видеть артикуляцию ребенка."
    },
    {
      question: "Как можно поставить звук «Р» без личного присутствия?",
      answer: "Мы используем метод подражания и специальные игровые упражнения («Моторчик», «Грибок»). Я показываю макро-видео упражнений, и ребенок повторяет их под моим контролем."
    },
    {
      question: "Сколько длится одно онлайн-занятие?",
      answer: "В моей практике оптимальное время составляет 30 минут. Этого достаточно, чтобы выполнить артикуляционную гимнастику, поработать над звуками и не переутомить ребенка."
    },
    {
      question: "Можно ли исправить заикание онлайн?",
      answer: "Да, если родители активно включатся в работу. Заикание требует комплексного подхода, включающего дыхательные упражнения и психологическую поддержку."
    },
    {
      question: "Как проходит первая консультация?",
      answer: "На первой встрече я провожу диагностику: проверяю состояние звукопроизношения, фонематический слух и уровень развития связной речи, после чего составляю план работы."
    },
    {
      question: "Не вредно ли ребенку проводить время у экрана?",
      answer: "Занятие со специалистом — это активная работа, а не пассивный просмотр мультфильмов. 30 минут направленной деятельности не наносят вреда, а приносят пользу развитию."
    },
    {
      question: "Насколько онлайн-занятия дешевле очных?",
      answer: "Обычно стоимость сопоставима, так как вы оплачиваете экспертное время специалиста и индивидуальную программу, однако вы существенно экономите на транспортных расходах."
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
    "headline": "Онлайн-логопедия: мифы, реальность и секреты эффективности",
    "description": "Онлайн-логопедия — это современный формат коррекционной работы, который использует видеосвязь и цифровые инструменты для устранения речевых нарушений.",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова",
      "jobTitle": "Логопед"
    },
    "datePublished": "2026-01-26",
    "publisher": {
      "@type": "Organization",
      "name": "govorim-pravilno.ru"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Онлайн-логопедия: мифы, реальность и секреты эффективности | Логопед Светлана Коновалова</title>
        <meta name="description" content="Онлайн-логопедия — современный формат коррекционной работы. Узнайте, как эффективно проводить занятия через видеосвязь и развеять мифы об онлайн-формате." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/online-logopedia" />
        <meta property="og:title" content="Онлайн-логопедия: мифы и реальность" />
        <meta property="og:description" content="Узнайте секреты эффективных онлайн-занятий с логопедом." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/online-logopedia" />
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
                <span>26 января 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Онлайн-логопедия: мифы, реальность и секреты эффективности
              </h1>
            </div>

            <img 
              src={onlineLogopediaHero} 
              alt="Онлайн-логопедия — эффективные занятия через видеосвязь"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Онлайн-логопедия</strong> — это современный формат коррекционной работы, который использует видеосвязь и цифровые инструменты для устранения речевых нарушений, позволяя проводить полноценные занятия без привязки к конкретному кабинету или клинике.
              </p>

              <p className="text-muted-foreground mb-6">
                В моей частной практике я часто сталкиваюсь с настороженностью родителей: «Светлана Геннадьевна, разве можно через экран научить ребенка правильно рычать?» или «Как вы удержите внимание непоседы без личного контакта?». Понимаю эти опасения, ведь классическая школа десятилетиями строилась на тактильном контакте. Однако мой личный опыт перехода в онлайн показал, что современные технологии не просто заменяют очные встречи, а в чем-то даже превосходят их.
              </p>

              <p className="text-muted-foreground mb-6">
                Я вижу, как дети, находясь в привычной домашней обстановке, чувствуют себя спокойнее. Им не нужно тратить силы на адаптацию к новому кабинету или уставать в дороге. В своей работе я использую этот ресурс для достижения более быстрых результатов.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему онлайн-формат эффективен: взгляд изнутри</h2>
              <p className="text-muted-foreground mb-6">
                Эффективность дистанционной работы строится не на «волшебстве» интернета, а на четко выстроенной методике. В моих занятиях я опираюсь на несколько ключевых факторов:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Максимальная визуализация:</strong> Я использую максимум наглядного материала, который подобран под разный интерес и способствует расширению словарного запаса, кругозора, знаний о природе и бытовых вещах.</li>
                <li><strong>Вовлеченность родителей:</strong> На онлайн-сессиях родители часто присутствуют рядом. Я не просто занимаюсь с ребенком, я обучаю маму или папу правильно контролировать артикуляцию в повседневной жизни.</li>
                <li><strong>Отсутствие стресса:</strong> Дом — это безопасное пространство. Когда ребенок расслаблен, его артикуляционный аппарат работает пластичнее, а новые нейронные связи формируются быстрее.</li>
                <li><strong>Гибкость инструментов:</strong> Вместо бумажных картинок я использую видео, анимацию и специальные фильтры, которые помогают сфокусировать внимание ребенка на моей мимике и положении языка.</li>
              </ul>

              <img 
                src={onlineLogopediaInfographic} 
                alt="Факторы эффективности онлайн-логопедии"
                className="w-full rounded-xl shadow-lg my-8"
              />

              <h2 className="text-2xl font-bold mt-8 mb-4">Разрушаем главные мифы об онлайн-занятиях</h2>
              <p className="text-muted-foreground mb-6">
                Часто родители боятся, что без логопедического массажа или ручной постановки звуков ничего не получится. В моей практике я использую методы дистанционной постановки звуков, основанные на подражании и точных визуальных инструкциях. Оказывается, что большинство детей способны самостоятельно поставить язык в нужное положение, если логопед умеет правильно объяснить и показать движение.
              </p>
              <p className="text-muted-foreground mb-6">
                Миф о том, что онлайн подходит только для «легких» случаев, тоже не выдерживает критики. Я успешно работаю с дислалией, ФФН и даже некоторыми формами дизартрии. Главное — это индивидуальный план и готовность родителей стать моими «руками», если потребуется небольшая помощь в выполнении упражнений.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Когда стоит выбрать именно онлайн</h2>
              <p className="text-muted-foreground mb-4">
                В моей практике онлайн-формат становится спасением в следующих ситуациях:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Вы живете в регионе, где сложно найти узкопрофильного специалиста.</li>
                <li>Ребенок часто болеет, и очные визиты постоянно прерываются.</li>
                <li>Плотный график семьи не позволяет тратить 2–3 часа на дорогу.</li>
                <li>Ребенок — «цифровой уроженец», который лучше воспринимает информацию через гаджеты.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Путь к четкой и уверенной речи</h2>
              
              <img 
                src={onlineLogopediaCta} 
                alt="Онлайн-логопедия — путь к четкой речи"
                className="w-full rounded-xl shadow-lg my-8"
              />
              
              <p className="text-muted-foreground mb-6">
                Каждый дефект речи — это не приговор, а задача, которую я помогаю решить. Мой опыт подтверждает: расстояние не является преградой для красивой дикции. Главное — это системный подход, ваше желание помочь ребенку и профессионализм специалиста.
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
        
        <RelatedArticlesCarousel currentSlug="online-logopedia" />
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineLogopedia;
