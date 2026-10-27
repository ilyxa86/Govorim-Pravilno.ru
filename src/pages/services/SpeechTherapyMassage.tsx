import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import massageImage from "@/assets/logopedicheskiy-massazh.jpg";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SpeechTherapyMassage = () => {
  const difficulties = [
    "звуки не ставятся даже после длительных занятий;",
    "речь смазанная, нечеткая, с нарушением артикуляции;",
    "наблюдается слабость или чрезмерное напряжение мышц лица;",
    "ребёнок быстро устаёт при разговоре;",
    "после неврологических состояний требуется восстановление речевой моторики."
  ];

  const workProcess = [
    "расслабляются мышцы губ, языка и щёк;",
    "улучшается кровообращение и чувствительность;",
    "повышается точность и координация движений."
  ];

  const formats = [
    "очно — в кабинете в Москве;",
    "в сочетании с логопедическими занятиями для комплексного результата."
  ];

  const results = [
    "мышцы лица становятся гибкими и активными;",
    "улучшается произношение и звукопроизношение;",
    "исчезают зажимы и усталость при речи;",
    "появляется лёгкость и уверенность в голосе."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Логопедический массаж | Светлана Коновалова</title>
        <meta name="description" content="Логопедический массаж для нормализации тонуса мышц артикуляционного аппарата. Занятия в Москве." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/logopedicheskiy-massazh" />
        <meta property="og:title" content="Логопедический массаж | Светлана Коновалова" />
        <meta property="og:description" content="Логопедический массаж для нормализации тонуса мышц артикуляционного аппарата. Занятия в Москве." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/logopedicheskiy-massazh" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Логопедический массаж
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Массаж мышц для чёткой артикуляции
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={massageImage} 
                alt="Логопедический массаж - массаж мышц для чёткой артикуляции" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Логопедический массаж помогает снять напряжение и активизировать мышцы, которые участвуют в произношении звуков.
                Эта мягкая и точная работа улучшает артикуляцию, дыхание и подвижность языка, губ и щёк.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Я применяю разные техники, чтобы помочь детям и взрослым говорить свободно и без зажимов.
              </p>
            </div>

            {/* Difficulties Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                С какими трудностями обращаются
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                На консультацию приходят, если:
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
                Логопедический массаж особенно полезен при дизартрии, спастичности, заикании и задержке речевого развития.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Как проходит работа
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Сначала я провожу диагностику состояния мышц артикуляционного аппарата.
                Затем подбираю подходящую технику — ручной, зондовый или вибрационный массаж.
                Во время процедуры:
              </p>
              <ul className="space-y-3 mb-6">
                {workProcess.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                Процесс проходит в спокойной, безопасной атмосфере, с учётом возраста и чувствительности ученика.
              </p>
            </div>

            {/* Why Important Section */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Почему это важно
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Даже самые эффективные упражнения не дадут результат, если мышцы напряжены или слабы.
              </p>
              <p className="text-lg leading-relaxed">
                Массаж подготавливает артикуляционный аппарат к работе, ускоряет постановку звуков и делает речь более чёткой и естественной.
              </p>
            </div>

            {/* Format Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Формат занятий
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Я провожу логопедический массаж:
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
                Для детей сеанс проходит в игровой форме, чтобы сохранялась позитивная мотивация.
              </p>
            </div>

            {/* Results Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Результат
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                После курса массажа:
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
                Каждый человек реагирует по-разному, поэтому я подбираю технику и интенсивность мягко и точно, без боли и дискомфорта.
              </p>
              <p className="text-lg leading-relaxed">
                Главная цель — помочь речи звучать свободно и красиво, а артикуляции стать естественной и точной.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed mb-6">
                Если вы замечаете у ребёнка или у себя трудности с произношением или напряжение в лице, приглашаю на бесплатную диагностику.
                Мы определим, нужна ли массажная поддержка и как улучшить работу артикуляционного аппарата.
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
                Часто задаваемые вопросы о логопедическом массаже
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что такое логопедический массаж?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Логопедический массаж — это специальная методика воздействия на мышцы артикуляционного аппарата (язык, губы, щёки, лицо), направленная на улучшение их тонуса, подвижности и координации. Он помогает подготовить мышцы к правильному произнесению звуков и улучшает качество речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    В каких случаях назначается логопедический массаж?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Показания включают дизартрию, спастичность, заикание, задержку речевого развития, нарушение звукопроизношения, слабость или перенапряжение мышц лица, последствия неврологических нарушений. Также массаж применяют при смазанной речи и трудностях с артикуляцией после ортодонтического лечения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    Какие виды логопедического массажа существуют?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Выделяют три основных метода: ручной массаж — воздействие пальцами и кистями специалиста; зондовый массаж — использование специальных логопедических инструментов; вибрационный массаж — применение мягких вибраций для стимуляции мышц. Выбор техники зависит от состояния пациента и целей коррекции.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    Как проходит процедура логопедического массажа?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Сначала проводится диагностика состояния мышц. Затем логопед мягко воздействует на определённые зоны лица и рта, чередуя расслабляющие и активизирующие приёмы. Процедура безболезненна и длится обычно 10–20 минут.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли делать логопедический массаж детям?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, методика подходит детям с раннего возраста. Массаж проводится в игровой форме, с учётом индивидуальных особенностей ребёнка и степени речевого развития.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Как долго длится курс массажа?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Обычно курс включает от 8 до 15 сеансов, по 2–3 раза в неделю. Количество процедур зависит от выраженности речевого нарушения и реакции мышц на стимуляцию.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Какие результаты даёт логопедический массаж?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    После курса нормализуется тонус мышц, улучшается артикуляция, звуки становятся чётче, исчезает напряжение в лице и повышается выразительность речи. Также улучшается дыхание и общая моторная координация.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Есть ли противопоказания к логопедическому массажу?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, противопоказания включают острые воспалительные процессы в полости рта, кожные заболевания лица, повышенную температуру, эпилепсию и некоторые неврологические состояния. Решение о проведении массажа принимает специалист после осмотра.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Помогает ли логопедический массаж при заикании?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, он снижает мышечное напряжение, улучшает дыхание и плавность речи, что особенно важно при спастических формах заикания. В сочетании с другими логопедическими методами массаж повышает эффективность терапии.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли сочетать логопедический массаж с обычными занятиями?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Рекомендуется проводить массаж в комплексе с логопедическими занятиями. Он подготавливает мышцы к артикуляционным упражнениям, ускоряет постановку звуков и закрепляет результат.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Безопасен ли логопедический массаж для взрослых?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, при соблюдении техники он полностью безопасен. Взрослым массаж помогает снять зажимы, улучшить дикцию и восстановить речь после стрессов или неврологических нарушений.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли выполнять логопедический массаж дома?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Только после консультации с логопедом. Специалист может показать родителям базовые приёмы для поддерживающего массажа, но самостоятельное выполнение без обучения не рекомендуется.
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

export default SpeechTherapyMassage;
