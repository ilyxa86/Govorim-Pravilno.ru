import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import heroImage from "@/assets/blog/myofunctional-basics-hero.jpg";
import infographicImage from "@/assets/blog/myofunctional-basics-infographic.jpg";

const MyofunctionalBasics = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Миофункциональная терапия: что это и кому нужна?",
    "description": "Миофункциональная терапия (МФТ) — междисциплинарное направление на стыке логопедии, ортодонтии и остеопатии. Узнайте, как она помогает исправить прикус, улучшить речь и дыхание.",
    "image": "https://govorim-pravilno.ru/assets/blog/myofunctional-basics-hero.jpg",
    "datePublished": "2026-01-11",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Логопед Светлана Коновалова"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Миофункциональная терапия: что это и кому нужна? | Светлана Коновалова</title>
        <meta name="description" content="Миофункциональная терапия (МФТ) — междисциплинарное направление на стыке логопедии, ортодонтии и остеопатии. Узнайте, как она помогает исправить прикус, улучшить речь и дыхание." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/myofunctional-basics" />
        <meta property="og:title" content="Миофункциональная терапия: что это и кому нужна?" />
        <meta property="og:description" content="Миофункциональная терапия — скрытый ключ к ровным зубам и чистой речи. Мнение эксперта с 20-летним стажем." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/myofunctional-basics" />
        <meta property="og:image" content="https://govorim-pravilno.ru/assets/blog/myofunctional-basics-hero.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к блогу
              </Link>
            </Button>
            
            <div className="flex items-center text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime="2026-01-11">11 января 2026</time>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Миофункциональная терапия: что это и кому нужна?
            </h1>
            
            <img 
              src={heroImage} 
              alt="Миофункциональная терапия — скрытый ключ к ровным зубам и чистой речи" 
              className="w-full rounded-lg mb-8 aspect-video object-cover"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-lg text-muted-foreground mb-6">
                Миофункциональная терапия (МФТ) — это междисциплинарное направление на стыке логопедии, ортодонтии и остеопатии, которое занимается восстановлением правильной работы мышц лица и ротовой полости. Метод работает не с симптомами, а с первопричиной нарушений: он учит язык занимать физиологически верное положение (на нёбе), восстанавливает носовое дыхание и перестраивает тип глотания с инфантильного на взрослый.
              </p>
              
              <p>
                За годы практики я провела сотни консультаций и часто сталкиваюсь с одной и той же историей. Родители годами водят ребенка к логопеду, ставят звуки, но они «слетают» или искажаются через месяц. Другая частая боль — подросток два года носил брекеты, мучился, снял их, а через полгода зубы снова «поехали».
              </p>
              
              <p>
                Это вызывает отчаяние и ощущение бега по кругу. Но важно понять: это не вина ребенка и не всегда ошибка врача. Просто мы пытаемся ремонтировать «фасад» (зубы и звуки), когда «фундамент» (мышцы языка и челюсти) работает неправильно.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему мышцы «ленятся» и к чему это приводит</h2>
              <p>
                Наш язык — это мощнейший «естественный ортодонт». В норме он должен 24 часа в сутки покоиться на нёбе, за верхними зубами. Именно язык изнутри давит на верхнюю челюсть, расширяя ее и создавая пространство для ровного зубного ряда.
              </p>
              <p>
                Если язык лежит внизу, а рот приоткрыт, происходит следующее:
              </p>
              <ul className="list-disc list-inside space-y-2 my-6">
                <li>Верхняя челюсть сужается, зубам становится тесно.</li>
                <li>Нижняя челюсть смещается назад.</li>
                <li>Лицо вытягивается вниз (формируется так называемый «аденоидный тип лица»).</li>
                <li>Нарушается осанка, голова выдвигается вперед.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Главные враги миофункционального равновесия:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Ротовое дыхание</strong> (из-за аденоидов или привычки).</li>
                <li><strong>Короткая уздечка языка</strong> (язык физически не может подняться наверх).</li>
                <li><strong>Долгое сосание соски или пальца</strong> (закрепляет инфантильный тип глотания).</li>
                <li><strong>Питание только мягкой пищей</strong> (ленивое жевание).</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Чек-лист: кому необходима коррекция</h2>
              <p>
                Внимательно понаблюдайте за собой или своим ребенком. Если вы отметите 2-3 пункта из списка ниже — это повод обратиться к миофункциональному терапевту.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">У детей:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Рот постоянно приоткрыт.</strong> Даже когда ребенок смотрит мультики или рисует.</li>
                <li><strong>Слышное дыхание.</strong> Сопение днем или храп ночью.</li>
                <li><strong>Нарушение жевания.</strong> Ребенок жует долго, лениво, запивает еду водой, отказывается от мяса или твердых яблок.</li>
                <li><strong>Межзубное произношение.</strong> Язык «вылезает» между зубами при звуках С, З, Ц, Т, Д, Н, Л.</li>
                <li><strong>Ортодонтические проблемы.</strong> Скученность зубов, открытый прикус.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">У взрослых:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Боли в челюстном суставе (ВНЧС).</strong> Щелчки или хруст при открывании рта.</li>
                <li><strong>Бруксизм.</strong> Скрежет зубами во сне, стираемость эмали.</li>
                <li><strong>Хроническое напряжение.</strong> Боли в шее, плечах, частые головные боли.</li>
                <li><strong>Подготовка к протезированию.</strong> Чтобы импланты стояли долго и надежно.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Как проходит терапия: современные методы</h2>
              <p>
                Многие ошибочно думают, что МФТ — это просто «покривляться перед зеркалом». На самом деле это системная работа, сравнимая со спортивными тренировками. В Москве мы работаем в плотной связке с ортодонтами, но прелесть метода в том, что он эффективен и в онлайн-формате, так как 90% успеха зависит от домашних тренировок.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Процесс восстановления состоит из трех этапов:</h3>
              <ol className="list-decimal list-inside space-y-4 my-6">
                <li>
                  <strong>Диагностика.</strong>
                  <p className="ml-6 mt-2">Мы оцениваем, как вы жуёте, дышите, глотаете, где лежит язык в покое.</p>
                </li>
                <li>
                  <strong>Активная работа.</strong>
                  <p className="ml-6 mt-2">Используются специальные аппараты (миофункциональные трейнеры, вестибулярные пластинки) и комплексы упражнений (миогимнастика). Мы учим язык «приклеиваться» к нёбу.</p>
                </li>
                <li>
                  <strong>Автоматизация.</strong>
                  <p className="ml-6 mt-2">Самое сложное — перенести навык в жизнь. Нужно научиться держать «Точку покоя» (язык на нёбе, губы сомкнуты, зубы разомкнуты) бессознательно, во время сна или работы.</p>
                </li>
              </ol>

              <img 
                src={infographicImage} 
                alt="Миофункциональная терапия — инфографика" 
                className="w-full rounded-lg my-8 aspect-video object-cover"
              />

              <h2 className="text-2xl font-bold mt-8 mb-4">Что можно делать самостоятельно, а где нужен специалист</h2>
              <p>
                В интернете много роликов с упражнениями для языка. Можно ли навредить? Да.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Самостоятельная работа:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Можно делать общую артикуляционную гимнастику («Лошадка», «Грибок», «Часики») для профилактики у малышей.</li>
                <li>Полезно давать грызть твердую морковь и яблоки.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Когда нужен специалист:</h3>
              <p>
                Если есть дисфункция (например, язык толкает зубы). Неправильно подобранные упражнения могут усилить спазм мышц, которые и так перенапряжены, и не включить те, что слабые.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Что делать дальше?</h2>
              <p>
                Если вы узнали в описании ситуацию своего ребенка или свою собственную, не ждите, что проблема «перерастет» сама собой. Неправильные паттерны дыхания и глотания с годами только сильнее деформируют лицо и зубной ряд. Своевременная коррекция — это инвестиция, которая сэкономит вам годы ношения брекетов и деньги на стоматологов в будущем.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Частые вопросы</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">С какого возраста можно начинать занятия?</h3>
                  <p>Оптимальный старт — 4–5 лет, когда ребенок уже может осознанно выполнять инструкции. Однако элементы терапии (массаж, контроль дыхания) мы вводим и раньше. Верхней планки нет: переучить мышцы можно и в 30, и в 50 лет.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Как долго длится лечение?</h3>
                  <p>Это марафон, а не спринт. Перестройка мышечной памяти и нейронных связей занимает в среднем от 6 до 12 месяцев регулярных занятий. Первые стойкие результаты видны через 3 месяца.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Почему просто брекетов недостаточно?</h3>
                  <p>Брекеты выравнивают зубы механически. Но если причина кривизны — мощное давление языка или щек, то после снятия брекетов мышцы снова сдвинут зубы на старое место. МФТ устраняет причину, а брекеты — следствие.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Это больно?</h3>
                  <p>Нет. Вы можете чувствовать мышечную усталость (как в ногах после приседаний), но острой боли быть не должно.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link to="/contacts">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </article>

        <RelatedArticlesCarousel currentSlug="myofunctional-basics" />
      </main>
      
      <Footer />
    </div>
  );
};

export default MyofunctionalBasics;
