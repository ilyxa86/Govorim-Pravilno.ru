import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [showMoreLeft, setShowMoreLeft] = useState(false);
  const [showMoreRight, setShowMoreRight] = useState(false);

  const leftColumnFaqs = [
    {
      question: "Как понять, подойдут ли моему ребёнку онлайн-занятия с логопедом?",
      answer: "Во время бесплатной диагностики я онлайн провожу первичное обследование речи ребёнка, определяю уровень развития и подбираю индивидуальную программу. Мы вместе решаем, что нужнее — постановка звуков, развитие речи, обучение чтению или подготовка к школе. Формат логопед онлайн отлично подходит большинству детей с 4–5 лет: он удобен, доступен и не уступает очным занятиям."
    },
    {
      question: "С какими нарушениями речи помогает онлайн консультация логопеда?",
      answer: "Онлайн-логопедия эффективна при дислалии, дизартрии, нарушениях письма и чтения, а также при заикании у детей и взрослых. Я также провожу миофункциональную коррекцию — работу с дыханием, языком, мышцами лица и глотанием. Исключение составляют только случаи, когда ребёнку необходим логопедический массаж или он ещё слишком мал для онлайн-формата."
    },
    {
      question: "Как обычно проходит занятие с логопедом онлайн?",
      answer: "Каждое занятие я провожу в игровой форме. Мы используем сказочных персонажей, интерактивные задания и презентации, чтобы ребёнку было интересно и легко удерживать внимание. Программу я всегда адаптирую под конкретные цели — будь то развитие речи, улучшение дикции или коррекция звукопроизношения."
    },
    {
      question: "Что нужно подготовить для логопедических занятий онлайн?",
      answer: "Для комфортных онлайн-занятий нужен компьютер или ноутбук с камерой и стабильный интернет. Я провожу занятия через Zoom или Skype. Всё просто: вы подключаетесь в назначенное время — и мы начинаем работу."
    },
    {
      question: "Нужно ли родителям присутствовать на занятии с логопедом онлайн?",
      answer: "На первых встречах я рекомендую родителям присутствовать, чтобы помочь ребёнку адаптироваться. Позже малыш занимается самостоятельно, а после урока я всегда рассказываю о результатах, даю рекомендации и домашние задания. Это помогает родителям понимать динамику и поддерживать ребёнка дома."
    },
    {
      question: "Можно ли взрослым заниматься с логопедом онлайн?",
      answer: "Да, я работаю и со взрослыми. Часто это постановка звука «Р», улучшение дикции, сценическая речь и уверенность в публичных выступлениях. Онлайн-формат особенно удобен для тех, кто много работает или путешествует. Благодаря моему опыту как логопеда и клинического психолога, я помогаю клиентам не только улучшить речь, но и избавиться от внутренних зажимов и тревожности."
    },
    {
      question: "Какой график логопедических занятий обычно нужен для результата?",
      answer: "Первые положительные изменения обычно видны уже через 6–8 занятий. Всё зависит от регулярности и выполнения домашних упражнений. При коррекции заикания или постановке сложных звуков я составляю индивидуальный график, чтобы результат был устойчивым и комфортным."
    },
    {
      question: "Можно ли совмещать занятия с логопедом онлайн и очно?",
      answer: "Да, такой формат я часто рекомендую. Основные занятия мы проводим онлайн, а очные встречи используем для миофункциональной коррекции или уточнения звукопроизношения. Это удобно для семей с плотным графиком и подходит даже тем, кто живёт в другом городе или за рубежом."
    },
    {
      question: "Что делать, если ребёнку сложно заниматься онлайн и он стесняется камеры или быстро отвлекается?",
      answer: "Это частая ситуация, и я знаю, как с ней работать. Я использую короткие игровые упражнения, динамичные задания и мягкие поощрения. Уже через несколько встреч ребёнок чувствует себя уверенно, начинает активно участвовать и с удовольствием ждёт следующего урока."
    },
    {
      question: "Можно ли поставить звук «Р» за одно занятие с логопедом?",
      answer: "Да, в некоторых случаях это возможно. У меня уже был опыт, когда звук «Р» удавалось вызвать и поставить за одну сессию. Однако важно понимать, что после этого требуется регулярная тренировка — без автоматизации в слогах, словах и речи звук может быстро «исчезнуть»."
    },
  ];

  const rightColumnFaqs = [
    {
      question: "Сколько обычно длится одно занятие с логопедом?",
      answer: "Обычно одно занятие длится 40–60 минут. Этого времени достаточно, чтобы поработать над речевыми задачами и при этом не перегрузить ребёнка или взрослого."
    },
    {
      question: "С чего лучше начать, с логопедической диагностики или сразу с занятий?",
      answer: "Первым шагом всегда является диагностика. Она помогает определить уровень речи, основные трудности и выбрать оптимальное направление работы: звукопроизношение, развитие речи, чтение или другое."
    },
    {
      question: "Нужны ли домашние задания между занятиями с логопедом?",
      answer: "Да, домашняя практика играет важную роль. Даже короткие упражнения по 5–10 минут в день помогают быстрее закрепить результат и сделать его устойчивым."
    },
    {
      question: "Через сколько занятий с логопедом обычно видны первые результаты?",
      answer: "У многих учеников первые изменения заметны уже через несколько занятий. Однако скорость прогресса зависит от сложности задачи, регулярности занятий и индивидуальных особенностей."
    },
    {
      question: "Подходят ли логопедические занятия детям, которым трудно усидеть на месте?",
      answer: "Да. Занятия строятся с учётом возраста и особенностей внимания: используются игровые элементы, смена активности и короткие задания, чтобы ребёнку было комфортно."
    },
    {
      question: "Можно ли снова начать занятия, если раньше опыт с логопедом был неудачным?",
      answer: "Да. Неудачный опыт не означает, что логопедическая помощь не подходит. Часто результат зависит от методики, подхода и контакта между специалистом и учеником."
    },
    {
      question: "Насколько важна регулярность логопедических занятий и что будет при пропусках?",
      answer: "Регулярность очень важна. При длительных перерывах навык может не закрепляться или частично теряться, поэтому лучше придерживаться стабильного графика."
    },
    {
      question: "Чем отличаются логопедические занятия для детей и для взрослых?",
      answer: "С детьми работа чаще проходит в игровой форме, а со взрослыми — более осознанно, с объяснением механизмов речи, дыхания и артикуляции. Цели и подача материала адаптируются под возраст."
    },
    {
      question: "Можно ли совмещать занятия с логопедом со школой и кружками?",
      answer: "Да, логопедические занятия хорошо сочетаются с детским садом, школой и дополнительными кружками. Главное — соблюдать баланс, чтобы не перегружать ребёнка."
    },
    {
      question: "Что важнее, регулярность занятий или качество работы и домашняя практика?",
      answer: "Качество всегда важнее. Грамотно выстроенные занятия и понятные рекомендации для самостоятельной практики дают лучший результат, чем частые, но несистемные встречи."
    },
  ];

  // Mobile: show 5 initially, rest on expand
  const visibleLeftFaqs = showMoreLeft ? leftColumnFaqs : leftColumnFaqs.slice(0, 5);
  const visibleRightFaqs = showMoreRight ? rightColumnFaqs : rightColumnFaqs.slice(0, 5);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Часто задаваемые вопросы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          родителей и взрослых учеников
        </p>
        
        {/* Desktop: Two columns with all FAQs */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`left-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`right-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Mobile: Single column with expand buttons */}
        <div className="md:hidden space-y-6">
          {/* First set of 5 FAQs */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleLeftFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`mobile-left-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showMoreLeft && (
            <Button 
              variant="ghost" 
              onClick={() => setShowMoreLeft(true)}
              className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80"
            >
              <span>ещё</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          )}

          {/* Second set of 5 FAQs */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleRightFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`mobile-right-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showMoreRight && (
            <Button 
              variant="ghost" 
              onClick={() => setShowMoreRight(true)}
              className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80"
            >
              <span>ещё</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="min-h-[56px] px-8">
            <Link to="/contacts">Записаться на<br className="sm:hidden" /> бесплатную консультацию</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
