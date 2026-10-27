import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import stutteringImage from "@/assets/stuttering-therapy.jpg";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StutteringTherapy = () => {
  const difficulties = [
    "ребёнок «спотыкается» в начале фраз, повторяет первые звуки или слоги;",
    "напряжение лица и губ во время речи;",
    "страх говорить в новой обстановке или перед незнакомыми людьми;",
    "у взрослых — ускоренный темп речи, невозможность контролировать дыхание, чувство паники при выступлении."
  ];

  const methodsInclude = [
    "дыхательные и расслабляющие упражнения;",
    "тренировку ритма и плавности речи;",
    "логопедический и нейропсихологический подход;",
    "элементы миофункциональной коррекции для снятия мышечных зажимов."
  ];

  const formats = [
    "очно (в Москве);",
    "онлайн, в комфортной домашней обстановке."
  ];

  const results = [
    "речь становится более плавной и уверенной;",
    "снижается страх и напряжение при разговоре;",
    "нормализуется дыхание и ритм речи;",
    "появляется внутреннее спокойствие и контроль над голосом."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Коррекция заикания у детей и взрослых | Светлана Коновалова</title>
        <meta name="description" content="Работа с заиканием: дыхание, темп речи и уверенность в общении. Занятия с логопедом в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/zaikanie-korrektsiya-rechi" />
        <meta property="og:title" content="Коррекция заикания у детей и взрослых | Светлана Коновалова" />
        <meta property="og:description" content="Работа с заиканием: дыхание, темп речи и уверенность в общении. Занятия с логопедом в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/zaikanie-korrektsiya-rechi" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Заикание у детей и взрослых
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Индивидуальные и групповые занятия
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={stutteringImage} 
                alt="Ребенок на онлайн-занятии по коррекции заикания" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Заикание — одно из самых распространённых речевых нарушений, которое может проявляться как у детей, так и у взрослых. Оно мешает свободно выражать мысли, вызывает напряжение и неуверенность в общении.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Я помогаю своим ученикам восстановить плавность речи, снять внутренние зажимы и вернуть радость от общения.
              </p>
            </div>

            {/* Difficulties Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                С какими трудностями обращаются
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                На консультации ко мне приходят родители и взрослые клиенты с разными проявлениями заикания:
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
                Причины заикания могут быть разные — от стрессов и эмоциональных перегрузок до особенностей дыхания и артикуляции. Поэтому важно подобрать подход индивидуально.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Как проходит работа
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Я начинаю с бесплатной диагностики речи, где оцениваю степень заикания, дыхание и эмоциональное состояние.
                На основе этого создаю персональную программу занятий, которая может включать:
              </p>
              <ul className="space-y-3 mb-6">
                {methodsInclude.map((method, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{method}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                Работа строится постепенно — от коротких слов и фраз к естественной, уверенной речи.
              </p>
            </div>

            {/* Format Section */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Формат занятий
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Занятия проходят индивидуально или в мини-группах, в зависимости от целей и возраста ученика.
                Формат может быть:
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
                Групповые занятия помогают преодолеть страх речи в коллективе, а индивидуальные — сосредоточиться на личных особенностях темпа и дыхания.
              </p>
            </div>

            {/* Results Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Результат
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                После курса занятий:
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
                Индивидуальный подход и поддержка
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Каждый случай заикания уникален, и важно не просто устранить симптомы, а вернуть уверенность в общении.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Я всегда создаю доброжелательную атмосферу, где ученик чувствует себя спокойно и свободно.
              </p>
              <p className="text-lg leading-relaxed">
                Главная цель — помочь говорить легко, без страха и с удовольствием.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed mb-6">
                Если вы замечаете, что ребёнок заикается или хотите улучшить собственную речь, приглашаю на бесплатную онлайн-диагностику.
                Мы вместе определим причины, составим план работы и сделаем первые шаги к плавной и уверенной речи.
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
                Часто задаваемые вопросы о заикании у детей и взрослых
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что такое заикание?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Заикание — это нарушение плавности речи, при котором возникают непроизвольные остановки, повторения звуков или слогов и напряжение артикуляционных мышц. Оно может сопровождаться чувством страха речи, неловкости и внутреннего напряжения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    В каком возрасте чаще всего проявляется заикание?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Наиболее часто заикание возникает в возрасте 3–6 лет, в период активного речевого развития. У подростков и взрослых оно встречается реже, но может сохраняться, если не было своевременной коррекции.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    Какие причины заикания известны современной логопедии?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Причины могут быть комплексными: эмоциональные травмы и стресс; нарушения дыхания и координации речи; наследственная предрасположенность; особенности работы нервной системы; перенесённые инфекции и родовые травмы. Часто заикание имеет смешанную природу — и физиологическую, и психологическую.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    Как отличить заикание от возрастных запинок речи у ребёнка?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Если ребёнок иногда повторяет слова без напряжения, но сохраняет ритм и спокойствие, это временное явление. При заикании же наблюдаются спазмы, мышечное напряжение, страх речи и постоянные повторения — в этом случае нужно обратиться к логопеду.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли полностью избавиться от заикания?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, при системной работе и комплексном подходе. Современные методы коррекции заикания позволяют восстановить плавность речи и снять речевое напряжение. Успех зависит от регулярности занятий, мотивации и участия специалиста.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Как проходит диагностика при заикании?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Логопед оценивает степень и форму заикания, дыхание, артикуляцию, темпо-ритмическую организацию речи, а также эмоциональное состояние. На основе диагностики составляется индивидуальная программа коррекции.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Какие методы применяются при коррекции заикания?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Используются: дыхательные и расслабляющие упражнения; тренировка плавности и ритма речи; миофункциональная коррекция для снятия мышечных зажимов; психотерапевтические и нейропсихологические подходы; групповая логопсихокоррекция.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Чем отличаются занятия для детей и взрослых?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    С детьми используется игровой формат, с элементами дыхательных и речевых игр. Со взрослыми работа направлена на осознанность речи, контроль дыхания и снятие страха общения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли заниматься онлайн?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, логопедические занятия онлайн по коррекции заикания эффективны при регулярной обратной связи. Через видеосвязь специалист контролирует дыхание, артикуляцию и темп речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Помогают ли групповые занятия при заикании?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, групповые занятия полезны для тренировки общения, преодоления страха речи и закрепления уверенности в коллективе. Они часто сочетаются с индивидуальными сессиями.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Сколько длится курс коррекции заикания?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Средняя продолжительность — от 2 до 4 месяцев при регулярных занятиях. Однако длительность зависит от формы заикания, возраста и эмоционального состояния человека.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли заниматься самостоятельно дома?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Домашние упражнения обязательны, но только под руководством логопеда. Специалист подбирает дыхательные и речевые задания, чтобы они дополняли курс и не усиливали спазмы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left text-base">
                    Каковы первые признаки улучшения?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Постепенно уменьшаются запинки, нормализуется дыхание, снижается тревожность при речи, появляется плавность и уверенность в голосе.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left text-base">
                    Помогает ли логопедическая работа при заикании, связанном со стрессом?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, комплексный подход с участием логопеда и психолога помогает снять эмоциональное напряжение, восстановить контроль над речью и вернуть уверенность при общении.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли предотвратить заикание у ребёнка?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, профилактика включает спокойную речевую среду, медленный темп общения, отсутствие спешки и давления. Важно не исправлять ребёнка резко и не заставлять повторять слова под стрессом.
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

export default StutteringTherapy;
