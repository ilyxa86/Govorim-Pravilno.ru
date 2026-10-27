import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroImage from "@/assets/speech-development.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SpeechDevelopment = () => {
  const difficulties = [
    "ребёнок говорит короткими, неполными фразами",
    "путает окончания слов, времена или предлоги",
    "испытывает трудности с пересказом и построением рассказов",
    "словарный запас ограничен, речь однообразна",
    "взрослому нужно развить выразительность и логичность речи"
  ];

  const workProcess = [
    "игры и упражнения на расширение словаря",
    "грамматические тренировки через речь и движение",
    "развитие навыков пересказа, логики и последовательности",
    "задания на развитие памяти, внимания и слухового восприятия"
  ];

  const formats = [
    "очно — в Москве",
    "онлайн — с использованием интерактивных карточек и речевых игр"
  ];

  const results = [
    "речь становится связной и выразительной",
    "словарный запас увеличивается",
    "грамматические ошибки постепенно исчезают",
    "ребёнок или взрослый говорит уверенно и свободно"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Развитие речи у детей и взрослых | Светлана Коновалова</title>
        <meta name="description" content="Развитие речи: словарный запас, связная речь и уверенность в общении. Занятия с логопедом в Москве и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services/razvitie-rechi" />
        <meta property="og:title" content="Развитие речи у детей и взрослых | Светлана Коновалова" />
        <meta property="og:description" content="Развитие речи: словарный запас, связная речь и уверенность в общении. Занятия с логопедом в Москве и онлайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://govorim-pravilno.ru/services/razvitie-rechi" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Развитие речи
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Словарь, грамматика и связная речь
            </p>

            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Развитие речи - Словарь, грамматика и связная речь" 
                className="w-full h-96 object-contain"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Развитие речи — это основа успешного обучения, общения и уверенности в себе.
                Я помогаю детям и взрослым обогатить словарный запас, улучшить грамматику и научиться строить связные высказывания, чтобы речь звучала ясно, логично и красиво.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">С какими трудностями обращаются</h2>
              <p className="mb-4">На консультацию приходят родители и взрослые ученики, если:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {difficulties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Такие особенности встречаются при задержке речевого развития, после билингвизма, а также у детей с хорошим интеллектом, но слабой речевой активностью.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Как проходит работа</h2>
              <p className="mb-4">
                Работа начинается с диагностики речевого уровня — я определяю, какие функции требуют внимания: словарь, грамматика, звукопроизношение, структура фразы.
                После этого подбираю индивидуальную программу, которая включает:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {workProcess.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Все занятия проходят в лёгкой, игровой форме, где ребёнок учится говорить правильно — без скуки и напряжения.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему важно развивать речь</h2>
              <p className="mb-6">
                Хорошо развитая речь — это не только грамотность, но и уверенность в общении.
                Ребёнку с богатым словарём легче выражать эмоции, понимать тексты и обучаться в школе.
                А взрослому — проще выступать, убеждать и выстраивать коммуникацию.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Формат занятий</h2>
              <p className="mb-4">Я провожу занятия:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {formats.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-6">
                Онлайн-занятия удобны, если вы хотите заниматься из дома, не теряя эффективности.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Результат</h2>
              <p className="mb-4">После курса развития речи:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {results.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Индивидуальный подход и поддержка</h2>
              <p className="mb-6">
                Каждый ученик уникален — у кого-то трудности со словарём, у кого-то с грамматикой или связностью речи.
                Я создаю программу, которая учитывает возраст, уровень развития и цели.
                Главное — сделать процесс интересным и результативным, чтобы речь раскрывалась естественно.
              </p>
              <p className="mb-6">
                Если вы замечаете, что ребёнок говорит мало, с ошибками или не может выразить мысль, приглашаю на бесплатную диагностику речи.
                Мы вместе определим, что мешает развитию речи, и составим план эффективной коррекции.
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
                Часто задаваемые вопросы о развитии речи
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base">
                    Что включает в себя развитие речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Развитие речи охватывает обогащение словаря, формирование грамматически правильных конструкций и умение строить связные, логичные высказывания. Оно помогает ребёнку и взрослому говорить ясно, последовательно и выразительно.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base">
                    С какого возраста стоит начинать развивать речь у ребёнка?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Активное развитие речи начинается с 1,5–2 лет, когда появляются первые слова. Уже в этом возрасте важно говорить с ребёнком, читать, играть в речевые игры. Целенаправленные логопедические занятия обычно рекомендуются с 3–4 лет.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base">
                    Какие признаки говорят о том, что ребёнку нужно помочь с речью?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Ребёнок говорит короткими фразами или молчит; путает окончания, времена, предлоги; затрудняется пересказать сказку или рассказать о событии; использует ограниченный словарь, речь однообразна; наблюдается задержка речевого развития или билингвизм замедляет активную речь.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base">
                    Почему важно развивать связную речь?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Связная речь формирует мышление, помогает ребёнку выражать мысли, понимать тексты и логично строить рассказы. У взрослых она улучшает коммуникативные навыки, делает речь убедительной и уверенной.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base">
                    Как логопед помогает при развитии речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Логопед проводит диагностику речевого уровня — определяет, какие функции требуют внимания: словарь, грамматика, звукопроизношение, структура фразы. Затем подбирает индивидуальную программу, включающую речевые игры, упражнения и развитие логики речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base">
                    Какие методы используются на занятиях?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Применяются игровые и речевые методики: упражнения на расширение словаря; грамматические тренировки через речь и движение; развитие пересказа, логики и последовательности; игры на внимание, память и слуховое восприятие; упражнения на связность и выразительность речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли развивать речь дома?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, при регулярной практике. Родители могут читать вместе с ребёнком, обсуждать картинки, задавать вопросы «почему?», «что потом?». Важно говорить правильно, не торопить и поощрять речевую активность.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-base">
                    Как проходят логопедические занятия по развитию речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Занятия проходят индивидуально, в игровой форме. Используются карточки, предметные картинки, логопедические игры, упражнения на артикуляцию и грамматику. Возможен очный и онлайн-формат.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-base">
                    Можно ли развивать речь онлайн?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, онлайн-занятия по развитию речи эффективны при регулярной обратной связи. Через видеосвязь логопед показывает упражнения, использует интерактивные материалы и следит за правильностью речи.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-base">
                    Сколько длится курс развития речи?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Обычно курс занимает 1–3 месяца при регулярных занятиях 1–2 раза в неделю. Продолжительность зависит от исходного уровня речи, возраста и частоты занятий.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left text-base">
                    Что делать, если у ребёнка речь развивается медленно, но интеллект в норме?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Это нередко встречается. Часто причина — недостаточная речевая практика или особенности восприятия звуков. Помогают игровые упражнения, логопедическая стимуляция и развитие фонематического слуха.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left text-base">
                    Помогает ли развитие речи взрослым?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Да, логопедическая работа полезна не только детям. У взрослых развитие речи повышает выразительность, улучшает дикцию, структуру высказываний и уверенность при общении или публичных выступлениях.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left text-base">
                    Почему у билингвальных детей задерживается речь?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    При двуязычии мозг дольше разделяет звуковые системы. Это временное явление, если есть постоянная речевая практика на обоих языках. Главное — не торопить ребёнка и говорить грамотно и последовательно.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left text-base">
                    Что делать, если ребёнок путает окончания и грамматические формы?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Нужно играть в словесные игры, где ребёнок подбирает окончания, изменяет слова, строит фразы по картинкам. Постепенно он начнёт использовать грамматические формы автоматически.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left text-base">
                    Как понять, что развитие речи идёт успешно?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Речь становится более развернутой и связной, словарь расширяется, грамматические ошибки уменьшаются, ребёнок активно рассказывает и задаёт вопросы — это признаки успешного речевого прогресса.
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

export default SpeechDevelopment;
