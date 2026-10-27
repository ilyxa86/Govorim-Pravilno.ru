import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroImage from "@/assets/developmental-methods.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DevelopmentalMethods = () => {
  const difficulties = [
    "не хочет заниматься «по книжке» или быстро теряет внимание",
    "говорит мало, делает ошибки или не может связно пересказывать",
    "путает звуки и слоги, затрудняется при чтении и письме",
    "стесняется говорить при других",
    "нуждается в мягком и мотивирующем подходе к развитию речи"
  ];

  const workProcess = [
    "артикуляционные игры для тренировки языка и губ",
    "дыхательные упражнения в форме забавных заданий",
    "логопедические настольные игры для расширения словаря",
    "упражнения на внимание и память через движение и музыку",
    "ролевые игры для формирования диалогов и уверенности"
  ];

  const formats = [
    "очно — в Москве, в уютном кабинете с игровыми материалами",
    "онлайн — с использованием интерактивных игр, карточек и движений"
  ];

  const results = [
    "ребёнок начинает говорить активнее и увереннее",
    "речь становится выразительной и эмоциональной",
    "увеличивается словарный запас и внимание к звукам",
    "появляется интерес к общению и обучению"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Игровые упражнения для развития речи | Светлана Коновалова</title>
        <meta name="description" content="Игровые методики и упражнения для развития речи у детей. Занятия с логопедом в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/igrovye-uprazhneniya-dlya-rechi" />
        <meta property="og:title" content="Игровые упражнения для развития речи | Светлана Коновалова" />
        <meta property="og:description" content="Игровые методики и упражнения для развития речи у детей. Занятия с логопедом в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/igrovye-uprazhneniya-dlya-rechi" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Развивающие методики
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Игровые упражнения для речи
            </p>

            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Развивающие методики - Игровые упражнения для речи" 
                className="w-full h-96 object-contain"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Игровые методики — это эффективный и естественный способ развивать речь у детей.
                Через игру ребёнок учится слушать, понимать, повторять и выражать свои мысли свободно и с удовольствием.
                Я использую современные логопедические и нейропсихологические приёмы, чтобы обучение проходило интересно и результативно.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">С какими трудностями обращаются</h2>
              <p className="mb-4">Родители часто приходят, если ребёнок:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {difficulties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Игровые упражнения помогают включить речь естественно — через движение, эмоции и положительные впечатления.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Как проходит работа</h2>
              <p className="mb-4">
                Каждое занятие строится вокруг игры и активности.
                Я подбираю методики с учётом возраста и уровня развития ребёнка:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {workProcess.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Всё происходит в тёплой и дружелюбной атмосфере, где ребёнок не боится ошибаться.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему игра работает</h2>
              <p className="mb-6">
                Во время игры ребёнок чувствует радость, а значит — активно вовлекается в процесс.
                Это ускоряет формирование нейронных связей, развитие внимания, памяти и речи.
                Игровые методики помогают закрепить навыки, полученные на логопедических занятиях, и сделать речь естественной частью общения.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Формат занятий</h2>
              <p className="mb-4">Я провожу занятия:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {formats.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Даже через экран ребёнок активно включается в процесс — ведь каждая игра вызывает интерес и эмоции.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Результат</h2>
              <p className="mb-4">После курса игровых занятий:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {results.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Индивидуальный подход и забота</h2>
              <p className="mb-6">
                Я создаю атмосферу, где ребёнок развивается через радость и игру.
                Каждое занятие адаптируется под его интересы, чтобы обучение было лёгким и вдохновляющим.
                Главная цель — помочь ребёнку говорить свободно, естественно и с удовольствием.
              </p>
              <p className="mb-6">
                Если вы хотите, чтобы ребёнок развивал речь без давления, приглашаю на бесплатную диагностику.
                Мы подберём подходящие игры и методики, чтобы сделать речь сильной и живой.
              </p>
            </div>

            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8">
                <Link to="/contacts">Записаться на консультацию</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8">
                <Link to="/services">Все Занятия</Link>
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Часто задаваемые вопросы о развивающих методиках и игровых упражнениях для речи
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что такое развивающие игровые методики для речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Развивающие методики — это система логопедических и нейропсихологических игр, направленных на формирование речи, внимания, памяти и моторики. Через игру ребёнок осваивает язык естественно, без стресса и принуждения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    Почему игры эффективны для развития речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Во время игры активизируются эмоции, движение и мышление. Это улучшает работу памяти и внимания, формирует новые нейронные связи и помогает быстрее закрепить речевые навыки. Игровая форма снимает напряжение и делает обучение лёгким и увлекательным.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    С какого возраста можно начинать речевые игры?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Игры для развития речи можно вводить уже с 1,5–2 лет — в форме простых подражаний, песенок, движений. Полноценные игровые упражнения логопедического характера подходят детям от 3 лет и старше.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    Какие виды игровых упражнений используются в логопедии?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Артикуляционные игры — тренируют подвижность языка и губ; дыхательные игры — развивают дыхание и голос; игры на фонематический слух — помогают различать звуки; игры на словарь и грамматику — обогащают речь; ролевые и сюжетные игры — формируют связную речь и уверенность в общении.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли развивать речь через онлайн-игры?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, онлайн-игры для развития речи дают отличный результат при правильной организации. Через видеосвязь логопед использует интерактивные карточки, мультимедийные задания и речевые тренажёры, которые удерживают внимание ребёнка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Чем отличаются игровые методики от традиционных занятий по логопедии?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Традиционные занятия опираются на повторение и упражнения, а игровые методики используют движение, эмоции и сюжеты. Ребёнок не «выполняет задание», а участвует в интересной деятельности, в ходе которой развивается речь.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Как игры помогают детям с задержкой речевого развития?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Для таких детей речевые игры особенно полезны: они активизируют внимание, побуждают к общению и создают позитивную мотивацию. Игровая форма помогает включить речь даже у детей, которые раньше избегали говорить.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли использовать игры дома без логопеда?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, родители могут применять простые речевые игры дома: описывать предметы, искать слова на букву, играть в рифмы, придумывать истории. Главное — делать это в доброжелательной, весёлой атмосфере.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Как проходят игровые занятия у логопеда?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Каждое занятие строится вокруг одной или нескольких игр. Используются карточки, игрушки, дыхательные упражнения, артикуляционные тренажёры и элементы движения. Цель — развивать речь через эмоции и действия, а не через скучные повторы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Сколько длится курс игровых занятий?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Обычно курс состоит из 10–15 встреч, по 30–40 минут. Эффект становится заметен уже через несколько занятий: ребёнок начинает говорить активнее, лучше слушает и выражает мысли.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Подходят ли игровые методики взрослым?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, игровые подходы применяются и со взрослыми — особенно при восстановлении речи после стрессов, неврологических нарушений или при работе над дикцией. Игровой формат помогает расслабиться и быстрее освоить новые речевые навыки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Как понять, что ребёнку полезны именно игровые методики?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Если ребёнок теряет интерес к «учебным» занятиям, не усидчив или стесняется, — игровой подход помогает вернуть внимание и мотивацию. Через эмоции и движение речь включается естественно и без давления.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left text-base">
                    Какие результаты дают игровые упражнения для речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    После курса занятий: речь становится выразительной и связной; расширяется словарный запас; укрепляется артикуляция и дыхание; повышается уверенность в общении; развивается память, внимание и логическое мышление.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left text-base">
                    Нужно ли подбирать игры по возрасту?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Обязательно. Для малышей подойдут короткие подражательные игры и рифмовки, для дошкольников — настольные и сюжетные игры, а для школьников — речевые квесты и упражнения на грамматику. Возрастная адаптация делает процесс эффективным и безопасным.
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

export default DevelopmentalMethods;
