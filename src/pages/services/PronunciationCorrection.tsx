import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import pronunciationImage from "@/assets/pronunciation-correction.jpg";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PronunciationCorrection = () => {
  const difficulties = [
    "ребёнок не выговаривает звук «Р», «Л», «Ш», «Ж»;",
    "после ношения брекетов или нарушения прикуса появились искажения речи;",
    "мягкие, смазанные звуки, шепелявость;",
    "у взрослых — акцент, зажатость речи, последствия длительных речевых привычек."
  ];

  const diagnosticSteps = [
    "определяю, какие звуки нуждаются в коррекции;",
    "оцениваю дыхание, артикуляцию, движение языка и губ;",
    "подбираю индивидуальный план занятий."
  ];

  const formats = [
    "очно (в Москве);",
    "онлайн, через удобные видеоплатформы — формат, который особенно подходит для подростков и взрослых."
  ];

  const results = [
    "звуки становятся чёткими и естественными;",
    "речь звучит красиво и уверенно;",
    "исчезают ошибки в устной и письменной речи;",
    "повышается самооценка и комфорт в общении."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Постановка и коррекция звукопроизношения | Светлана Коновалова</title>
        <meta name="description" content="Постановка звуков Р, Л, Ш, Ж и коррекция звукопроизношения у детей и взрослых. Очно в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/postanovka-i-korrektsiya-zvukoproiznosheniya" />
        <meta property="og:title" content="Постановка и коррекция звукопроизношения | Светлана Коновалова" />
        <meta property="og:description" content="Постановка звуков Р, Л, Ш, Ж и коррекция звукопроизношения у детей и взрослых. Очно в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/postanovka-i-korrektsiya-zvukoproiznosheniya" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Постановка и коррекция звукопроизношения
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                У детей и взрослых
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={pronunciationImage} 
                alt="Логопед работает над коррекцией звукопроизношения с зеркалом" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Чёткое и правильное произношение звуков — это основа красивой и понятной речи. Когда ребёнок или взрослый неправильно произносит звуки, шепелявит или заменяет одни звуки другими, страдает не только качество речи, но и уверенность в себе.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Я помогаю детям и взрослым выработать правильное произношение, восстановить чистоту речи и научиться говорить свободно и уверенно — в любой ситуации.
              </p>
            </div>

            {/* Difficulties Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                С какими трудностями обращаются
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                На консультации ко мне приходят родители и взрослые клиенты с самыми разными запросами:
              </p>
              <ul className="space-y-3 mb-6">
                {difficulties.map((difficulty, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{difficulty}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                Нарушения звукопроизношения встречаются не только у малышей. Всё чаще ко мне обращаются подростки и взрослые, которые хотят улучшить дикцию, устранить дефекты или просто научиться говорить более чётко и уверенно.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Как проходит работа
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Моя работа начинается с бесплатной диагностики речи.
                На ней я провожу первичное обследование:
              </p>
              <ul className="space-y-3 mb-6">
                {diagnosticSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mb-6">
                Далее мы пошагово отрабатываем каждый звук — сначала изолированно, затем в слогах, словах и фразах. Я использую современные логопедические методики, элементы миофункциональной терапии и игровые приёмы, чтобы процесс был интересным и эффективным.
              </p>
              <p className="text-lg leading-relaxed">
                Для взрослых занятия строятся по-другому: больше внимания уделяется осознанности, дикции и гибкости артикуляции. Это помогает устранить зажимы, исправить звукопроизношение и сделать речь выразительной и естественной.
              </p>
            </div>

            {/* Why Important Section */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Почему важно заниматься своевременно
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Чем раньше начинается коррекция звукопроизношения, тем быстрее мозг перестраивается на правильные речевые модели.
              </p>
              <p className="text-lg leading-relaxed">
                Если дефекты произношения остаются без внимания, ребёнку может быть сложно овладеть чтением и письмом, а взрослому — чувствовать себя уверенно при общении, публичных выступлениях или собеседованиях.
              </p>
            </div>

            {/* Format Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Формат занятий
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Я провожу занятия:
              </p>
              <ul className="space-y-3 mb-6">
                {formats.map((format, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{format}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                В дистанционном формате эффективность ничуть не ниже: я демонстрирую упражнения, контролирую артикуляцию и даю пошаговые рекомендации для самостоятельной практики между встречами.
              </p>
            </div>

            {/* Results Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Результат
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                После курса постановки и коррекции звукопроизношения:
              </p>
              <ul className="space-y-3">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Individual Approach Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Индивидуальный подход и забота
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Каждый человек уникален — у кого-то трудности связаны с моторикой, у кого-то с дыханием или слуховым восприятием. Поэтому я всегда строю занятия индивидуально, чтобы результат был не просто временным, а устойчивым.
              </p>
              <p className="text-lg leading-relaxed">
                Мне важно, чтобы каждый мой ученик — ребёнок или взрослый — почувствовал радость от того, что может говорить красиво и свободно.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed mb-6">
                Если вы замечаете, что ребёнок не выговаривает звуки, или хотите сами улучшить свою речь, — приглашаю вас на бесплатную онлайн-диагностику.
                Мы вместе разберём причину, составим план коррекции и сделаем первые шаги к чистому и уверенно звучащему голосу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8">
                  <Link to="/contacts">Записаться на диагностику</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8">
                  <Link to="/services">Все Занятия</Link>
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Часто задаваемые вопросы о постановке и коррекции звукопроизношения
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что такое постановка и коррекция звукопроизношения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Постановка звуков — это процесс обучения правильному произнесению тех звуков, которые отсутствуют или произносятся искажённо. Коррекция звукопроизношения включает не только артикуляционные упражнения, но и развитие слухового восприятия, дыхания, моторики и речевого ритма.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    Когда стоит обращаться к логопеду для коррекции звуков?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Если ребёнок в возрасте 4–5 лет заменяет, пропускает или искажает звуки, стоит пройти логопедическую диагностику. У взрослых обращение актуально при акценте, дефектах дикции, зажимах речи или последствиях ортодонтического лечения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    Почему дети неправильно произносят звуки?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Причины могут быть разными: несформированная артикуляционная моторика (язык, губы, щёки); нарушения дыхания или прикуса; слабый фонематический слух (не различаются похожие звуки); особенности строения органов артикуляции; подражание неправильной речи окружающих.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    С какого возраста можно начинать постановку звуков?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Оптимальный возраст — 4–5 лет, когда артикуляционный аппарат уже достаточно сформирован. Однако отдельные упражнения можно начинать раньше — в форме игры, направленной на развитие дыхания и подвижности языка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Как проходит процесс постановки звука?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Работа проходит поэтапно: Диагностика — определение нарушений, состояния артикуляции и дыхания. Постановка — логопед помогает «услышать» и воспроизвести правильный звук. Автоматизация — звук закрепляется в слогах, словах, предложениях и спонтанной речи. Дифференциация — различение сходных звуков (например, «С» и «Ш»).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Какие методы используются при коррекции звукопроизношения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Артикуляционная гимнастика; дыхательные упражнения; фонематический тренинг (развитие слухового различения); миофункциональная коррекция (работа с языком, дыханием, глотанием); игровые методы и речевые тренажёры.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Сколько длится курс коррекции звукопроизношения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Продолжительность зависит от сложности нарушения, возраста и регулярности занятий. В среднем курс занимает от 8 до 20 занятий, при условии ежедневной короткой практики дома.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли заниматься онлайн?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, современные технологии позволяют эффективно проводить логопедические занятия онлайн. Через видеосвязь логопед демонстрирует упражнения, контролирует артикуляцию и даёт рекомендации для самостоятельной практики.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Поможет ли коррекция взрослым?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, постановка звуков у взрослых применяется для улучшения дикции, устранения акцента, коррекции последствий брекетов или зажимов. Работа строится более осознанно: внимание уделяется дыханию, голосу, интонации и уверенному звучанию речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Что будет, если не исправлять нарушения звукопроизношения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Без коррекции могут развиться вторичные трудности: ошибки при чтении и письме (у детей); неуверенность при общении, страх публичных выступлений (у взрослых); повышенная утомляемость речевого аппарата. Чем раньше начинается работа, тем проще и быстрее достигается результат.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Безопасны ли логопедические упражнения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, при правильном выполнении они полностью безопасны. Логопед подбирает упражнения с учётом возраста, здоровья и состояния артикуляционного аппарата.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли закрепить результат самостоятельно?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, домашняя практика обязательна. Логопед даёт индивидуальные упражнения для ежедневного повторения — 5–10 минут в день. Это ускоряет автоматизацию и делает результат устойчивым.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left text-base">
                    Какие звуки чаще всего требуют постановки?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Наиболее часто нарушаются звуки «Р», «Л», «Ш», «Ж», «С», «З» и свистящие/шипящие группы. У некоторых людей страдают также мягкие варианты этих звуков или сонорные сочетания.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PronunciationCorrection;
