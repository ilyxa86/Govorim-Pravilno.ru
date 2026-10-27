import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import schoolPrepImage from "@/assets/school-preparation.jpg";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SchoolPreparation = () => {
  const difficulties = [
    "сосредоточиться и довести дело до конца;",
    "запоминать буквы, звуки и последовательности;",
    "правильно строить предложения и пересказывать;",
    "держать темп группы, быстро утомляется на занятиях;",
    "проявляет тревогу перед школой или новыми задачами."
  ];

  const programIncludes = [
    "развитие речи и мышления;",
    "тренировка внимания, памяти и координации;",
    "обучение чтению и письму в игровой форме;",
    "упражнения на пространственное восприятие и мелкую моторику."
  ];

  const formats = [
    "очно — в Москве;",
    "онлайн — формат, который особенно удобен для семей с плотным расписанием."
  ];

  const results = [
    "увереннее читает и пишет;",
    "понимает инструкции и может работать самостоятельно;",
    "говорит грамотно и связно;",
    "проявляет интерес к учёбе и веру в собственные силы."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Подготовка к школе с логопедом | Светлана Коновалова</title>
        <meta name="description" content="Подготовка к школе: фонематический слух, чтение, письмо и профилактика дисграфии. Занятия в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/podgotovka-k-shkole" />
        <meta property="og:title" content="Подготовка к школе с логопедом | Светлана Коновалова" />
        <meta property="og:description" content="Подготовка к школе: фонематический слух, чтение, письмо и профилактика дисграфии. Занятия в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/podgotovka-k-shkole" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Подготовка к школе
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Психологическая готовность, нейропсихологическая, речь, чтение, письмо
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={schoolPrepImage} 
                alt="Ребенок на занятии по подготовке к школе, изучает буквы и цифры" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Подготовка к школе — это не только умение читать и писать, но и готовность ребёнка воспринимать новую информацию, концентрироваться и уверенно общаться.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Я помогаю детям развить все важные навыки, чтобы адаптация к школе прошла спокойно и с интересом к обучению.
              </p>
            </div>

            {/* Difficulties Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                С какими трудностями обращаются
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                На консультации ко мне приходят родители, которые замечают, что ребёнку трудно:
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
                Иногда трудности не связаны с «ленью», а с тем, что ещё не развиты определённые функции — внимание, память, моторика, речевое восприятие.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Как проходит работа
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Я начинаю с диагностики готовности к школе: оцениваю речь, мышление, внимание, моторику и эмоциональное состояние.
                Затем подбираю индивидуальную программу, в которую входят:
              </p>
              <ul className="space-y-3 mb-6">
                {programIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                Все занятия проходят в тёплой, доброжелательной атмосфере, где ребёнок учится без стресса, через игру и позитивное взаимодействие.
              </p>
            </div>

            {/* Why Important Section */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Почему важно готовиться заранее
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Ребёнку, который психологически и речево готов к школе, легче понимать учителя, следить за заданием и взаимодействовать с одноклассниками.
              </p>
              <p className="text-lg leading-relaxed">
                Ранняя подготовка снижает тревожность, формирует уверенность и желание учиться.
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
                В онлайн-занятиях я использую интерактивные упражнения и визуальные материалы, чтобы ребёнку было интересно и понятно.
              </p>
            </div>

            {/* Results Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Результат
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                После курса подготовки ребёнок:
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
                Каждый ребёнок уникален, и моя задача — раскрыть его сильные стороны.
              </p>
              <p className="text-lg leading-relaxed">
                Я создаю программу, которая подходит именно вашему ребёнку и помогает развить внимание, речь, мышление и уверенность.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed mb-6">
                Если вы хотите, чтобы ребёнок шёл в школу с радостью, приглашаю на бесплатную диагностику готовности.
                Мы определим, какие навыки стоит укрепить, и создадим путь к успешному и спокойному началу обучения.
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
                Часто задаваемые вопросы о подготовке к школе
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что включает в себя подготовка к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Подготовка к школе — это развитие у ребёнка не только академических навыков (чтение, письмо, счёт), но и психологической, речевой и нейропсихологической готовности. Она помогает ребёнку концентрироваться, запоминать информацию, взаимодействовать с учителем и одноклассниками.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    С какого возраста стоит начинать подготовку к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Оптимально начинать занятия с 5–6 лет, когда ребёнок уже способен удерживать внимание 15–20 минут и проявляет интерес к буквам и цифрам. Однако элементы подготовки — развитие речи, памяти и моторики — можно вводить раньше, в игровой форме.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    Что такое психологическая готовность к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Это умение управлять своим поведением, выполнять задания по инструкции, доводить начатое до конца и взаимодействовать со взрослыми и сверстниками. Без сформированной психологической готовности даже ребёнок, умеющий читать и считать, может испытывать трудности в адаптации.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    Что такое речевая и логопедическая готовность к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Речевая готовность включает чёткое звукопроизношение, достаточный словарный запас и умение грамотно строить фразы. Логопедическая подготовка помогает устранить нарушения речи, развить слуховое восприятие, навык пересказа и фонематический слух — основу для чтения и письма.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Зачем нужна нейропсихологическая подготовка?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Нейропсихологическая готовность связана с развитием внимания, памяти, межполушарного взаимодействия и моторики. Такие упражнения помогают ребёнку лучше понимать инструкции, ориентироваться на листе бумаги, писать без лишнего напряжения и утомления.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Как проводится диагностика готовности к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Специалист оценивает: уровень речи и мышления; внимание, память, пространственное восприятие; моторику и координацию движений; эмоциональное состояние и мотивацию к обучению. По результатам диагностики составляется индивидуальная программа подготовки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Какие трудности чаще всего встречаются у детей перед школой?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Трудности с концентрацией внимания; быстрая утомляемость; слабое запоминание букв и звуков; трудности с пересказом и построением фраз; тревога перед новым коллективом.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Как проходят занятия по подготовке к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Занятия проводятся в игровой форме, с использованием карточек, движений и визуальных материалов. В программу входят развитие речи, внимания, памяти, мышления, обучение чтению и письму. Формат подбирается индивидуально — очно или онлайн.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли заниматься подготовкой к школе онлайн?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, онлайн-занятия по подготовке к школе не менее эффективны, чем очные. Через видеосвязь специалист демонстрирует упражнения, использует интерактивные материалы и даёт рекомендации родителям для домашних занятий.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Сколько длится курс подготовки к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    В среднем курс длится 2–3 месяца при регулярных занятиях 1–2 раза в неделю. Продолжительность зависит от уровня готовности и индивидуальных особенностей ребёнка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Как понять, что ребёнок готов к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Признаки готовности: ребёнок понимает инструкции и может работать самостоятельно; умеет слушать и концентрироваться; правильно произносит звуки и выражает мысли; проявляет интерес к обучению и верит в собственные силы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Что делать, если ребёнок боится школы или проявляет тревогу?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Важно обсудить с ребёнком, что школа — это не испытание, а интересное приключение. Помогают игры «в школу», совместное чтение книг о школьной жизни, постепенное привыкание к новому режиму. При выраженной тревоге стоит обратиться к психологу или нейропсихологу.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left text-base">
                    Какую роль играют родители в подготовке к школе?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Родители создают эмоциональный фон: хвалят, поддерживают, не сравнивают с другими. Они могут помогать выполнять игровые задания, закреплять материал дома и формировать у ребёнка уверенность и интерес к обучению.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left text-base">
                    Чем отличается индивидуальная подготовка от групповой?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Индивидуальные занятия позволяют учитывать особенности внимания, памяти и речи конкретного ребёнка. Групповые тренируют социальные навыки, умение работать в коллективе и следить за общим темпом. Оптимально сочетать оба формата.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left text-base">
                    Почему важно начинать подготовку заранее?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Заранее начатая работа снижает стресс, развивает уверенность, улучшает адаптацию и помогает ребёнку встретить первый школьный день с радостью, а не страхом.
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

export default SchoolPreparation;
