import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import DownloadMaterial from "@/components/materials/DownloadMaterial";

import coverImg from "@/assets/materials/l/cover.png";
import image1 from "@/assets/materials/l/image1.jpg";
import image2 from "@/assets/materials/l/image2.jpg";
import image3 from "@/assets/materials/l/image3.jpg";
import image4 from "@/assets/materials/l/image4.jpg";
import image5 from "@/assets/materials/l/image5.jpg";
import image6 from "@/assets/materials/l/image6.jpg";
import image7 from "@/assets/materials/l/image7.jpg";


const AutomatizatsiyaZvukaL = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Автоматизация звука Л | Логопед Светлана Коновалова</title>
        <meta name="description" content="Упражнения для автоматизации звука Л: слоги, слова, предложения, скороговорки и иллюстрации для логопедических занятий." />
        <link rel="canonical" href="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-l" />
        <meta property="og:title" content="Автоматизация звука Л — логопед Светлана Коновалова" />
        <meta property="og:description" content="Упражнения для автоматизации звука Л: слоги, слова, предложения, скороговорки." />
        <meta property="og:url" content="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-l" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/materials">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к материалам
              </Button>
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Автоматизация звука <span className="text-primary">Л</span>
            </h1>

            <DownloadMaterial sound="Л" file="avtomatizatsiya-zvuka-l.pdf" />

            <img src={coverImg} alt="Автоматизация звука Л — иллюстрация" className="w-full rounded-xl shadow-lg mb-8" loading="eager" />

            {/* Рекомендации */}
            <div className="bg-muted/50 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Как работать с материалом:</h2>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed list-disc pl-5">
                <li><strong>Следите за артикуляцией:</strong> кончик языка поднят и прижимается к основанию верхних зубов, но не упирается в зубы (и тем более не выходит между зубами). Губы в улыбке.</li>
                <li><strong>Соблюдайте последовательность:</strong> не переходите к словам, пока не отработаны слоги, и не переходите к предложениям без уверенного произношения отдельных слов.</li>
                <li><strong>Занимайтесь регулярно:</strong> по 10–15 минут 1–2 раза в день.</li>
                <li><strong>Произносите</strong> слоги (слова) четко, слегка утрируя звук [Л].</li>
              </ul>
            </div>

            {/* Закрытые слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Закрытые слоги</h2>
            <p className="font-bold text-lg mb-1">АЛ — ОЛ — УЛ — ЫЛ — ЭЛ</p>
            <p className="font-bold text-lg mb-6">ЯЛ — ЁЛ — ЮЛ — ЕЛ — ИЛ</p>

            <h3 className="text-xl font-bold mb-3">Звук Л в конце слова:</h3>
            <p className="text-muted-foreground mb-6">Бал, мал, зал, вал, стол, пол, кол, укол, узел, футбол, пенал, бокал, канал, вокзал, финал, металл, оскал, стул, гул, аул, мыл, был, упал, устал, сокол, футбол, дятел.</p>

            {/* Открытые слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Открытые слоги</h2>
            <p className="font-bold text-lg mb-6">ЛА — ЛО — ЛУ — ЛЫ — ЛЭ</p>

            <h3 className="text-xl font-bold mb-3">Звук [Л] в начале слова:</h3>
            <p className="text-muted-foreground mb-6">Лак, лама, лампа, лапа, ладья, лакей, лапша, лодка, лопата, лото, локоть, ложь, лоб, лось, лопух, лук, луна, лужа, лупа, лужайка, лукошко, лыжи, лыко, лыжник.</p>

            {/* Интервокальные слоги */}
            <h3 className="text-xl font-bold mb-3">Автоматизация звука [Л] в интервокальных слогах</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-center border-collapse">
                <tbody>
                  <tr><td className="border border-border p-2 font-bold">АЛА</td><td className="border border-border p-2 font-bold">АЛО</td><td className="border border-border p-2 font-bold">АЛЫ</td><td className="border border-border p-2 font-bold">АЛУ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">УЛА</td><td className="border border-border p-2 font-bold">УЛО</td><td className="border border-border p-2 font-bold">УЛЫ</td><td className="border border-border p-2 font-bold">УЛУ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ОЛА</td><td className="border border-border p-2 font-bold">ОЛО</td><td className="border border-border p-2 font-bold">ОЛЫ</td><td className="border border-border p-2 font-bold">ОЛУ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ЫЛА</td><td className="border border-border p-2 font-bold">ЫЛО</td><td className="border border-border p-2 font-bold">ЫЛЫ</td><td className="border border-border p-2 font-bold">ЫЛУ</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-3">Звук [Л] в середине слова:</h3>
            <p className="text-muted-foreground mb-6">Акула, пчела, школа, юла, пила, зола, пастила, халат, салат, алфавит, калач, чулан, палата, болото, молоток, колобок, потолок, холод, голод, солома, скалы, каналы, волы, столы, голы, малыш, палуба, голуби, тулуп, Золушка, шалун.</p>

            {/* Image 1 - Назови предметы */}
            <img src={image1} alt="Назови предметы — звук Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Назови предметы. Используйте предлоги: на, за, около, между.</p>

            {/* Сложные сочетания */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Сложные сочетания (стечения согласных)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-center border-collapse">
                <tbody>
                  <tr><td className="border border-border p-2 font-bold">ГЛА</td><td className="border border-border p-2 font-bold">ГЛО</td><td className="border border-border p-2 font-bold">ГЛУ</td><td className="border border-border p-2 font-bold">ГЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">КЛА</td><td className="border border-border p-2 font-bold">КЛО</td><td className="border border-border p-2 font-bold">КЛУ</td><td className="border border-border p-2 font-bold">КЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">СЛА</td><td className="border border-border p-2 font-bold">СЛО</td><td className="border border-border p-2 font-bold">СЛУ</td><td className="border border-border p-2 font-bold">СЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ЗЛА</td><td className="border border-border p-2 font-bold">ЗЛО</td><td className="border border-border p-2 font-bold">ЗЛУ</td><td className="border border-border p-2 font-bold">ЗЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ХЛА</td><td className="border border-border p-2 font-bold">ХЛО</td><td className="border border-border p-2 font-bold">ХЛУ</td><td className="border border-border p-2 font-bold">ХЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ПЛА</td><td className="border border-border p-2 font-bold">ПЛО</td><td className="border border-border p-2 font-bold">ПЛУ</td><td className="border border-border p-2 font-bold">ПЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">БЛА</td><td className="border border-border p-2 font-bold">БЛО</td><td className="border border-border p-2 font-bold">БЛУ</td><td className="border border-border p-2 font-bold">БЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ФЛА</td><td className="border border-border p-2 font-bold">ФЛО</td><td className="border border-border p-2 font-bold">ФЛУ</td><td className="border border-border p-2 font-bold">ФЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ВЛА</td><td className="border border-border p-2 font-bold">ВЛО</td><td className="border border-border p-2 font-bold">ВЛУ</td><td className="border border-border p-2 font-bold">ВЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ШЛА</td><td className="border border-border p-2 font-bold">ШЛО</td><td className="border border-border p-2 font-bold">ШЛУ</td><td className="border border-border p-2 font-bold">ШЛЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ЖЛА</td><td className="border border-border p-2 font-bold">ЖЛО</td><td className="border border-border p-2 font-bold">ЖЛУ</td><td className="border border-border p-2 font-bold">ЖЛЫ</td></tr>
                </tbody>
              </table>
            </div>

            <p className="font-bold text-lg mb-1">ТЛА – ТЛО – ТЛУ – ТЛЫ</p>
            <p className="font-bold text-lg mb-1">ДЛА – ДЛО – ДЛУ – ДЛЫ</p>
            <p className="font-bold text-lg mb-6">МЛА – МЛО – МЛУ – МЛЫ</p>

            {/* Image 2 */}
            <img src={image2} alt="Перечисли слова со звуком Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Перечисли слова со звуком [Л] (луна, лодка, ласточки, лошадь, вёсла). Составь предложения.</p>

            {/* Слова со стечением согласных */}
            <h3 className="text-xl font-bold mb-3">Слова со стечением согласных:</h3>
            <p className="text-muted-foreground mb-3">Клад, класс, свёкла, закладка, кукла, клоп, клоун, стекло, клумба, клубок, клубника, клык, клыкастый, мотоцикл.</p>
            <p className="text-muted-foreground mb-3">Глаз, гладь, гладить, гласный, игла, помогла, глобус, глоток, глохнуть, Глория, глушь, глупость, глубокий, иглу, заглушить, глыба, иглы, углы.</p>
            <p className="text-muted-foreground mb-6">Слава, слайд, сластёна, слабый, слалом, слон, слово, сложный, сломать.</p>

            {/* Image 3 - Полки */}
            <img src={image3} alt="Словарные слова — звук Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />

            <h3 className="text-xl font-bold mb-3">Словарные слова:</h3>
            <p className="text-muted-foreground mb-3">Слух, слушать, слуга, случай, заслуга, подслушать, слышно, послы, ослы.</p>
            <p className="text-muted-foreground mb-3">Злата, злаки, возлагать, злость, злодей, злопамятный, зловещий, узлы.</p>
            <p className="text-muted-foreground mb-3">Хлам, охлаждать, хлопок, хохлома, хлопушка, хлопоты, хлыст, хлынуть.</p>
            <p className="text-muted-foreground mb-3">Платок, пламя, планета, платье, плавать, пламя, плод, плотина, плошка, площадь, плуг, плут, Плутон, плутать, плыть, заплыв, уплыть.</p>
            <p className="text-muted-foreground mb-3">Бланк, благо, облако, обладать, благодарить, блок, блоха, блокнот, яблоко, блузка, блуждать, заблудился, каблук.</p>
            <p className="text-muted-foreground mb-3">Флаг, фланель, фламинго, флакон, флоксы, флот, Влад, влажный, владения.</p>
            <p className="text-muted-foreground mb-6">Шла, шланг, вошла, нашла, пошла, шлагбаум.</p>

            <h3 className="text-xl font-bold mb-3">Вопросы:</h3>
            <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
              <li>Назови предметы на полках.</li>
              <li>Кто стоит между слоном и белкой?</li>
              <li>Что лежит между платком и блокнотом?</li>
              <li>На какой полке стоит глобус?</li>
            </ul>

            {/* Насыщенные слова */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Насыщенные слова</h2>
            <p className="text-muted-foreground italic mb-3">Список слов, где звук встречается дважды.</p>
            <p className="text-muted-foreground mb-6">Колокол, ледокол, Лола, Владислав, гладиолус, летала, полола, молола, лаяла, ломала, уплыла, уколола, вложила, ловила, ладила, ласкала, улыбнулась, поцеловала, колокола, плавал, гладил, молчал, делал, скалолаз.</p>

            {/* Image 4 */}
            <img src={image4} alt="Назови слова со звуком Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Назови слова со звуком [Л]. Кто стоит в воде? Кто плывёт? Что держит в руках водолаз? Составь предложения, используя слова: фламинго, акула, слон, молния, водолаз, ласты. Придумай рассказ.</p>

            {/* Словосочетания */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Словосочетания</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground mb-6">
              <p>Спелое яблоко</p><p>Белое облако</p>
              <p>Холодный пол</p><p>Ловкая белка</p>
              <p>Жёлтая лампа</p><p>Золотая игла</p>
              <p>Милая кукла</p><p>Умный клоун</p>
              <p>Глубокий колодец</p><p>Голодный волк</p>
              <p>Кислый салат</p><p>Тёплая улыбка</p>
              <p>Волшебная палочка</p><p>Белые флоксы</p>
              <p>Весёлый бал</p><p>Алый гладиолус</p>
              <p>Толстый каблук</p><p>Сладкие хлопья</p>
              <p>Смелый солдат</p><p>Полный флакон</p>
              <p>Послушный малыш</p><p>Глубокий котлован</p>
              <p>Сладкое повидло</p>
            </div>
            <p className="text-muted-foreground italic mb-6">Придумай с данными словосочетаниями предложения.</p>

            {/* Image 5 */}
            <img src={image5} alt="Лесные животные — звук Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Кого ты видишь в лесу? Где сидит белка? Что делает лось? Что хочет достать вторая белка? Составь предложения, используя слова: белка, дятел, волк, лось, яблоня, яблоки, ёлка, колокольчики. Придумай рассказ.</p>

            {/* Предложения */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Предложения</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Алла мыла куклу Лушу.</p>
              <p>Володя поймал во сне белую акулу.</p>
              <p>Слава купил в магазине лото и лук.</p>
              <p>Белка ловко скакала по высокой ёлке.</p>
              <p>Мама купила Ладе новое голубое платье.</p>
              <p>Жёлтая луна светила в окно.</p>
              <p>На нижней полке стояла лампа.</p>
              <p>Мила помогала маме мыть пол.</p>
              <p>Пчела долго летала около золотого подсолнуха.</p>
              <p>Павел мыл мылом стол, стул и полки.</p>
              <p>Лодка медленно плыла по тихим волнам.</p>
              <p>Михаил чинил сломанный стул на кухне.</p>
              <p>Алла положила овощной салат в пиалу.</p>
              <p>Золушка поехала на бал в шёлковом платье.</p>
              <p>Лука с аппетитом ел спелое яблоко.</p>
            </div>

            {/* Image 6 */}
            <img src={image6} alt="Золушка — звук Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Золушка приехала на бал. Что с ней случилось? Расскажи что ты видишь на картинке. Используй слова: бал, платье, ландыши, луна, белые лошади, локоны, голубое.</p>

            {/* Скороговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Скороговорки</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Мама мыла Милу мылом, Мила мыло не любила.</p>
              <p>Около кола — колокола.</p>
              <p>Мал, да удал.</p>
              <p>Наш Полкан попал в капкан.</p>
              <p>Вол попал в логово волка.</p>
              <p>Ёлка, ёлка, ёлочка — зелёная иголочка.</p>
              <p>У ёлки иголки колки.</p>
              <p>У клуба на клумбе клубок.</p>
              <p>Веник пол подметал, веник очень устал. Он чихнул, он зевнул и тихонько лёг под стул.</p>
              <p>Были галчата в гостях у волчат. Были волчата в гостях у галчат. Нынче волчата галдят как галчата, и, как волчата, галчата молчат.</p>
              <p>Михаил играл в футбол и забил в ворота гол.</p>
              <p>Колпак на колпаке, под колпаком колпак.</p>
              <p>Галдела галка на ёлке.</p>
              <p>Лола искала булавку, булавка упала под лавку.</p>
              <p>Лунной ночью лунный кот песни лунные поёт.</p>
            </div>

            {/* Пословицы и поговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Пословицы и поговорки</h2>
            <p className="text-muted-foreground italic mb-4">Объясняем своими словами как вы понимаете пословицу или поговорку, тренируем произношение звука [Л] в спонтанной речи. Задание для школьников.</p>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Обвёл вокруг пальца.</p>
              <p>По делам и воздаётся.</p>
              <p>Улыбка — душа лица.</p>
              <p>Искать иголку в стоге сена.</p>
              <p>Это ещё на воде вилами писано.</p>
              <p>Шила в мешке не утаишь.</p>
              <p>Делу время, а потехе час.</p>
              <p>Не всё то золото, что блестит.</p>
              <p>Ложка дёгтя портит бочку мёда.</p>
              <p>Лучше поздно, чем никогда.</p>
              <p>Кто ясно мыслит, тот ясно излагает.</p>
              <p>Глядит лисой, а пахнет волком.</p>
              <p>Под лежачий камень вода не течёт.</p>
              <p>Глаза бояться, а руки делают.</p>
              <p>У семи нянек, дитя без глаза.</p>
              <p>Яблочко от яблоньки недалеко падает.</p>
              <p>Не умеешь золотом шить, тогда молотом бей.</p>
              <p>Если бы молодость знала, а старость могла.</p>
              <p>Сделал дело — гуляй смело.</p>
              <p>Где смелость, там и победа.</p>
              <p>Где нет знаний, там нет и смелости.</p>
              <p>Важна смелость, да нужна и умелость.</p>
            </div>

            {/* Image 7 */}
            <img src={image7} alt="Скалолаз — звук Л" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Расскажи что ты видишь на картинке. Используй слова со звуком [Л] (скалы, скалолаз, лодка, водолаз, облака, волны).</p>

            {/* Монофоны */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Монофоны</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Лада лелеет любовь к лету.</p>
              <p>Люба любит лыжи.</p>
              <p>Леонид ломает ломом лёд.</p>
              <p>Лола, Лана, Луша, любуются лагуной.</p>
              <p>Любопытная Лайка ласково лизнула лоб Луши.</p>
              <p>Луноликая Лора любезничала ловко с Леоном.</p>
              <p>Легкомысленный ловелас и льстец Леон, ласкал локоны лучезарной Лады.</p>
              <p>Леди Лондона любовались лучиками луны на лепестках лиловой лаванды.</p>
              <p>Льёт летний ливень, летают ласточки, Лола ловка ловит лещей, любуется лебедями, лилиями и люпинами.</p>
              <p>Лесник лечил лапу лайки, лакировал лавку, ловил лосят, ласкал лабрадора Ломарика, ловко лущил лещину.</p>
            </div>


            {/* CTA */}
            <div className="bg-primary/5 rounded-xl p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Нужна помощь с постановкой звука?</h2>
              <p className="text-muted-foreground mb-6">Запишитесь на консультацию — подберу индивидуальную программу для вашего ребёнка.</p>
              <Link to="/contacts">
                <Button size="lg" className="rounded-full">
                  Записаться на консультацию
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AutomatizatsiyaZvukaL;
