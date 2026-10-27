import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import myofunctionalImage from "@/assets/myofunctional-therapy.jpg";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyofunctionalCorrection = () => {
  const symptoms = [
    "язык выдвигается между зубами при разговоре или глотании;",
    "ребёнок часто дышит ртом, особенно во сне;",
    "звукопроизношение смазанное, шепелявое;",
    "нарушен прикус, наблюдается слабость лицевых мышц;",
    "после брекетов или ортодонтического лечения изменилась артикуляция."
  ];

  const faqItems = [
    {
      question: "Что такое миофункциональная коррекция?",
      answer: "Миофункциональная коррекция — это направление логопедии, основанное на системе упражнений, которые нормализуют работу мышц языка, губ, щёк и лица. Цель терапии — восстановить правильные функции дыхания, глотания, жевания и артикуляции, от которых напрямую зависит чёткость речи и формирование прикуса."
    },
    {
      question: "В чём отличие миофункциональной коррекции от обычных логопедических занятий?",
      answer: "Традиционная логопедия фокусируется на звуковой стороне речи — постановке и автоматизации звуков. Миофункциональная коррекция устраняет первопричину нарушений — неправильную работу орофациальных мышц и дыхания. В результате логопедическая коррекция становится более устойчивой, а эффект сохраняется дольше."
    },
    {
      question: "Когда показана миофункциональная терапия?",
      answer: "Показаниями являются: дыхание через рот, особенно во сне; язык между зубами при разговоре или глотании; смазанное или шепелявое звукопроизношение; неправильный прикус, слабость лицевых мышц; последствия ношения брекетов, ортодонтического лечения; повышенная утомляемость речевого аппарата."
    },
    {
      question: "С какого возраста можно проводить миофункциональную коррекцию?",
      answer: "Начинать терапию можно с 4–5 лет, когда ребёнок способен осознанно выполнять простые инструкции. Однако миофункциональная терапия эффективна и для взрослых — мышцы лица и языка можно тренировать в любом возрасте."
    },
    {
      question: "Кто проводит миофункциональную коррекцию?",
      answer: "Занятия проводит логопед, прошедший дополнительное обучение по миофункциональной терапии. Иногда терапия проводится совместно с ортодонтом, отоларингологом или физиотерапевтом, если имеются сопутствующие проблемы (например, нарушенное носовое дыхание или деформация прикуса)."
    },
    {
      question: "Как проходит диагностика перед началом занятий?",
      answer: "Специалист оценивает: тип дыхания (ротовое или носовое); положение языка в покое и при глотании; тонус и симметрию лицевых мышц; движение языка, губ и щёк; координацию артикуляции. На основе результатов подбирается индивидуальный комплекс упражнений."
    },
    {
      question: "Какие упражнения входят в миофункциональную терапию?",
      answer: "Программа может включать: дыхательные упражнения для перехода на носовое дыхание; артикуляционные тренировки для языка и губ; упражнения на глотание и жевание; работу с осанкой и расслаблением лицевых мышц; элементы нейромышечной координации. Все упражнения выполняются ежедневно, под контролем специалиста или дома по его рекомендациям."
    },
    {
      question: "Сколько длится курс терапии?",
      answer: "Продолжительность курса зависит от характера нарушений и регулярности занятий. Обычно заметные изменения наблюдаются через 8–12 недель. При тяжёлых нарушениях курс может длиться дольше, с последующим поддерживающим этапом."
    },
    {
      question: "Как миофункциональная коррекция влияет на речь?",
      answer: "Нормализуя положение языка и дыхание, терапия создаёт условия для правильной артикуляции. Звуки становятся чётче, речь — свободнее и естественнее. При сочетании с логопедическими занятиями эффект ускоряется."
    },
    {
      question: "Может ли миофункциональная терапия помочь при заикании или дизартрии?",
      answer: "Да. Хотя сама по себе терапия не устраняет заикание, она снижает мышечное напряжение, улучшает дыхание и артикуляцию, что способствует плавности речи. При дизартрии упражнения повышают тонус и координацию мышц, облегчая постановку звуков."
    },
    {
      question: "Безопасна ли миофункциональная коррекция?",
      answer: "Да, метод не имеет противопоказаний и безопасен при правильном выполнении. Однако при наличии неврологических или ортодонтических особенностей программу должен составлять специалист, чтобы избежать перенапряжения мышц."
    },
    {
      question: "Можно ли заниматься онлайн?",
      answer: "Да, современные технологии позволяют эффективно проводить диагностику и контроль выполнения упражнений дистанционно. Главное — регулярность и обратная связь со специалистом, особенно на первых этапах."
    },
    {
      question: "Какой результат даёт миофункциональная коррекция?",
      answer: "После курса терапии: дыхание становится свободным и физиологичным; язык занимает правильное положение; исчезает ротовое дыхание и напряжение лица; улучшается произношение и дикция; стабилизируется прикус и мимика становится симметричнее."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Миофункциональная коррекция речи — логопед Светлана Коновалова</title>
        <meta name="description" content="Миофункциональная коррекция: работа с языком, дыханием и прикусом. Занятия в Москве и онлайн у логопеда с опытом более 25 лет." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/miofunktsionalnaya-korrektsiya-rechi" />
        <meta property="og:title" content="Миофункциональная коррекция речи — логопед Светлана Коновалова" />
        <meta property="og:description" content="Миофункциональная коррекция: работа с языком, дыханием и прикусом. Занятия в Москве и онлайн у логопеда с опытом более 25 лет." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/miofunktsionalnaya-korrektsiya-rechi" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Миофункциональная коррекция
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Работа с языком, жеванием, глотанием и дыханием
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={myofunctionalImage} 
                alt="Девочка на занятии по миофункциональной коррекции" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Миофункциональная коррекция — это система упражнений, направленных на нормализацию работы мышц языка, губ и лица.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Эти мышцы участвуют не только в речи, но и в жевании, глотании и дыхании.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Я помогаю детям и взрослым сформировать правильные привычки, восстановить баланс и улучшить звучание речи.
              </p>
            </div>

            {/* When Needed Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                С какими трудностями обращаются
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Ко мне приходят родители и взрослые ученики, которые замечают:
              </p>
              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{symptom}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                Такие особенности часто становятся причиной нечеткой речи, неправильного дыхания и повышенной утомляемости.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Как проходит работа
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Работа начинается с диагностики миофункциональных нарушений, где я оцениваю дыхание, тонус мышц лица, положение языка и тип глотания.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Затем подбираю индивидуальный комплекс упражнений, который помогает:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>укрепить мышцы языка, щёк и губ;</li>
                <li>наладить носовое дыхание;</li>
                <li>сформировать правильное глотание и жевание;</li>
                <li>улучшить артикуляцию и качество звукопроизношения.</li>
              </ul>
              <p className="text-lg leading-relaxed mb-8">
                Занятия проходят в игровой и наглядной форме, чтобы ребёнку было интересно, а взрослому — понятно и эффективно.
              </p>
            </div>

            {/* Why Important Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Почему это важно
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Неправильные привычки дыхания и положения языка влияют не только на речь, но и на прикус, осанку и развитие лица. Миофункциональная терапия помогает устранить первопричину, а не только внешнее проявление, и закрепить результат логопедической работы.
              </p>
            </div>

            {/* Format Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Формат занятий
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Я провожу занятия:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>очно — в Москве;</li>
                <li>онлайн — формат, который удобен для семей и взрослых учеников.</li>
              </ul>
              <p className="text-lg leading-relaxed mb-8">
                В дистанционных встречах я подробно показываю упражнения, контролирую выполнение и даю задания для самостоятельной практики между занятиями.
              </p>
            </div>

            {/* Results Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Результат
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                После курса миофункциональной коррекции:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                <li>дыхание становится свободным и естественным;</li>
                <li>язык занимает правильное положение;</li>
                <li>звуки произносятся чётче;</li>
                <li>исчезают зажимы и напряжение в лице;</li>
                <li>улучшается осанка и выражение лица.</li>
              </ul>
            </div>

            {/* Individual Approach Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Индивидуальный подход и забота
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Каждый человек имеет свои особенности строения и привычки.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Я подбираю упражнения, которые подходят именно вашему случаю, чтобы результат был устойчивым и естественным.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Моя цель — чтобы речь звучала красиво, дыхание стало лёгким, а лицо — расслабленным и гармоничным.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed mb-6">
                Если вы замечаете трудности с дыханием, положением языка или произношением, приглашаю на бесплатную диагностику. Мы вместе определим причину и начнём путь к естественной и свободной речи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contacts">Записаться на диагностику</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/services">Все Занятия</Link>
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Часто задаваемые вопросы о миофункциональной коррекции
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MyofunctionalCorrection;
