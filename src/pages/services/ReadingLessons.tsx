import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import readingImage from "@/assets/reading-lessons.jpg";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ReadingLessons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Обучение чтению с логопедом | Светлана Коновалова</title>
        <meta name="description" content="Обучение чтению без стресса: от звука к слогу и осмысленному тексту. Занятия с логопедом в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/obuchenie-chteniyu" />
        <meta property="og:title" content="Обучение чтению с логопедом | Светлана Коновалова" />
        <meta property="og:description" content="Обучение чтению без стресса: от звука к слогу и осмысленному тексту. Занятия с логопедом в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/obuchenie-chteniyu" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Обучение чтению
              </h1>
              <p className="text-xl text-muted-foreground">
                Запуск чтения без стресса
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={readingImage} 
                alt="Ребёнок радостно читает книгу за столом в уютной комнате с развивающими материалами" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Обучение чтению — это важный этап в развитии ребёнка, который требует внимания, терпения и правильного подхода.
                Моя задача — помочь ребёнку начать читать осознанно, с интересом и без напряжения.
                Я создаю условия, при которых чтение становится естественным и радостным процессом.
              </p>
            </div>
          </div>
        </section>

        {/* Difficulties */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              С какими трудностями обращаются
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              На консультацию часто приходят родители, которые замечают, что ребёнок:
            </p>
            <ul className="space-y-4">
              {[
                "путает буквы и звуки, не запоминает алфавит;",
                "читает по слогам, но не понимает смысл прочитанного;",
                "быстро теряет интерес или устаёт;",
                "испытывает тревогу и избегает занятий чтением."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground mt-6">
              Иногда причиной является не лень, а неподготовленность определённых функций — фонематического слуха, внимания и зрительного восприятия.
            </p>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Как проходит работа
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Я начинаю с диагностики речевого и когнитивного развития, чтобы понять, на каком этапе находится ребёнок.
              Затем подбираю индивидуальную программу, в которую входят:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "развитие слухового восприятия и понимания звуков;",
                "игры на внимание, память и логическое мышление;",
                "постепенное знакомство с буквами и звуками через движение, образы и ассоциации;",
                "упражнения для плавного перехода от слогов к словам и предложениям."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              Все занятия проходят в игровой форме, без давления и принуждения.
            </p>
          </div>
        </section>

        {/* Why Important */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Почему важно учить читать без стресса
            </h2>
            <p className="text-lg text-muted-foreground">
              Если обучение проходит мягко и в темпе ребёнка, формируется положительное отношение к чтению, а не страх перед книгой.
              Такой подход помогает развить не только навык чтения, но и уверенность в собственных силах.
            </p>
          </div>
        </section>

        {/* Format */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Формат занятий
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Я провожу занятия:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "очно — в Москве;",
                "онлайн — через удобные видеоплатформы, с интерактивными карточками и визуальными материалами."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              Онлайн-формат позволяет проводить занятия в привычной, спокойной обстановке, что особенно важно для детей, испытывающих трудности с концентрацией.
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Результат
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              После курса обучения чтению ребёнок:
            </p>
            <ul className="space-y-4">
              {[
                "уверенно распознаёт и соединяет буквы в слова;",
                "понимает смысл прочитанного;",
                "читает с интересом и радостью;",
                "становится более внимательным и уверенным."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Personal Approach */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Индивидуальный подход и поддержка
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Каждый ребёнок осваивает чтение в своём темпе.
              Я подстраиваю программу под уровень и особенности ребёнка, чтобы обучение было комфортным и результативным.
              Моя цель — не просто научить читать, а помочь полюбить книги и почувствовать радость от первых самостоятельных открытий.
            </p>
            <p className="text-lg text-muted-foreground">
              Если вы замечаете, что ребёнку сложно начать читать, приглашаю на бесплатную диагностику.
              Мы вместе определим, с чего начать, и сделаем первые шаги к лёгкому и осознанному чтению.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Запишитесь на бесплатную диагностику
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8">
                <Link to="/contacts">Записаться на консультацию</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8">
                <Link to="/services">Все Занятия</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Часто задаваемые вопросы об обучении чтению
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base">
                  С какого возраста можно начинать обучение чтению?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Начинать знакомство с буквами можно с 4–5 лет, если ребёнок проявляет интерес к звукам и играм со словами. Полноценное обучение чтению лучше начинать, когда сформированы внимание, память и фонематический слух — обычно в 5–6 лет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base">
                  Что значит «запуск чтения без стресса»?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Это подход, при котором обучение проходит мягко, в темпе ребёнка, без давления и принуждения. Задача — создать позитивное отношение к чтению, чтобы книга ассоциировалась с удовольствием и успехом, а не со страхом ошибки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base">
                  Почему ребёнок не может выучить буквы или путает звуки?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Причины могут быть разными: недостаточно развит фонематический слух, внимание или зрительное восприятие. Иногда ребёнку трудно различать звуки на слух или соотносить их с буквами. В этом случае важно начать с речевых и слуховых упражнений.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base">
                  Как логопед помогает при обучении чтению?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Логопед оценивает уровень речевого и когнитивного развития, определяет, готов ли ребёнок к чтению, и устраняет причины трудностей. В программу входят развитие фонематического слуха, артикуляции, внимания, а также игровые упражнения для освоения звуков и слогов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base">
                  Чем отличается обучение чтению у логопеда от домашних занятий?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Занятия у специалиста строятся поэтапно и с учётом нейропсихологических особенностей ребёнка. Логопед не просто учит складывать буквы, а формирует понимание смысла, плавность и осознанность чтения. Домашние занятия часто сводятся к механическому повторению.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-base">
                  Какие методы используются в обучении чтению?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Применяются игровые методики: упражнения на развитие слухового восприятия и памяти; ассоциативные игры с буквами и звуками; чтение через движение и визуальные образы; переход от слогов к словам и предложениям; логопедические и нейропсихологические упражнения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-base">
                  Почему важно учить читать осознанно, а не «по слогам»?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Если ребёнок механически соединяет слоги, но не понимает смысл, чтение быстро становится утомительным. Осознанное чтение развивает мышление, речь и внимание, делает процесс живым и интересным.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-base">
                  Можно ли обучать чтению онлайн?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Да, онлайн-занятия по обучению чтению проходят с использованием интерактивных карточек, визуальных и звуковых материалов. Формат особенно удобен для детей, которым тяжело сосредоточиться в группе или которые стесняются.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left text-base">
                  Сколько времени нужно, чтобы ребёнок начал читать?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Средний курс обучения длится 2–3 месяца, при условии регулярных занятий и домашней практики. Однако всё индивидуально: у одних детей навык формируется быстро, другим требуется больше времени для автоматизации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left text-base">
                  Как понять, что ребёнок готов к обучению чтению?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Признаки готовности: ребёнок различает звуки в словах, умеет концентрироваться, запоминает последовательности, проявляет интерес к буквам и книгам. Если этих признаков нет, стоит начать с игр на развитие внимания, памяти и речи.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left text-base">
                  Что делать, если ребёнок не хочет читать?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Не стоит заставлять. Лучше выбрать книги по интересам, читать вместе, использовать игры, комиксы и карточки. Цель — вернуть интерес и снизить тревожность, чтобы чтение воспринималось как удовольствие.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left text-base">
                  Помогает ли обучение чтению детям с речевыми нарушениями?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Да, логопедическая программа особенно эффективна для детей с нарушениями звукопроизношения или слабым фонематическим слухом. Упражнения укрепляют артикуляцию, слуховое восприятие и уверенность в собственных силах.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left text-base">
                  Как обучение чтению связано с письмом?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Эти навыки развиваются параллельно. Освоение букв и звуков подготавливает руку к письму, а понимание структуры слова помогает ребёнку писать грамотно и без ошибок.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left text-base">
                  Какую роль играют родители в процессе обучения чтению?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Родители поддерживают интерес к книгам, создают спокойную атмосферу, помогают выполнять игровые задания и поощряют даже маленькие успехи. Главное — не критиковать и не торопить ребёнка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left text-base">
                  Что делать, если ребёнок быстро утомляется при чтении?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Следует сократить время занятий, делать частые паузы и чередовать упражнения. Помогают дыхательные и двигательные игры, которые снимают напряжение и восстанавливают концентрацию.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReadingLessons;
