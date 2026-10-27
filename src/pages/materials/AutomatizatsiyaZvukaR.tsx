import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import DownloadMaterial from "@/components/materials/DownloadMaterial";

import coverImg from "@/assets/materials/r/cover.png";
import image1 from "@/assets/materials/r/image1.jpg";
import image2 from "@/assets/materials/r/image2.jpg";
import image3 from "@/assets/materials/r/image3.jpg";
import image4 from "@/assets/materials/r/image4.jpg";
import image5 from "@/assets/materials/r/image5.jpg";
import image6 from "@/assets/materials/r/image6.jpg";
import image7 from "@/assets/materials/r/image7.jpg";
import image8 from "@/assets/materials/r/image8.jpg";
import image9 from "@/assets/materials/r/image9.jpg";

const AutomatizatsiyaZvukaR = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Автоматизация звука Р | Логопед Светлана Коновалова</title>
        <meta name="description" content="Упражнения для автоматизации звука Р: слоги, слова, предложения, скороговорки и иллюстрации для логопедических занятий." />
        <link rel="canonical" href="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-r" />
        <meta property="og:title" content="Автоматизация звука Р — логопед Светлана Коновалова" />
        <meta property="og:description" content="Упражнения для автоматизации звука Р: слоги, слова, предложения, скороговорки." />
        <meta property="og:url" content="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-r" />
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
              Автоматизация звука <span className="text-primary">Р</span>
            </h1>

            <DownloadMaterial sound="Р" file="avtomatizatsiya-zvuka-r.pdf" />

            <img src={coverImg} alt="Автоматизация звука Р — иллюстрация" className="w-full rounded-xl shadow-lg mb-8" loading="eager" />

            {/* Рекомендации */}
            <div className="bg-muted/50 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Рекомендации по работе:</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">Этот материал предназначен для закрепления правильного произношения звука [Р] в речи. После того как звук был поставлен, его необходимо «автоматизировать» — довести до привычного, свободного употребления в речи.</p>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Занимайтесь ежедневно по 10–15 минут.</li>
                <li><strong>Следите за артикуляцией:</strong> рот приоткрыт, кончик языка поднят за верхние зубы и вибрирует, боковые края языка прижаты к коренным зубам.</li>
                <li>Начинайте с четкого проговаривания слогов, затем переходите к словам и фразам. Не торопитесь! Старайтесь утрировано выделять звук [Р] в слогах и в словах.</li>
                <li>На картинках находите и называйте слова со звуком [Р]. Составляйте предложения, а затем и небольшой рассказ.</li>
              </ul>
            </div>

            {/* Слоги с опорными звуками */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Слоги с опорными звуками (Т и Д)</h2>
            <p className="font-bold text-lg mb-1">ТРА — ТРО — ТРУ — ТРЫ — ТРЭ</p>
            <p className="font-bold text-lg mb-1">ДРА — ДРО — ДРУ — ДРЫ — ДРЭ</p>
            <p className="font-bold text-lg mb-1">АТР — ОТР — УТР — ЫТР — ЯТР — ЕТР — ЁТР — ЮТР</p>
            <p className="font-bold text-lg mb-6">АДР — ОДР — УДР — ЫДР — ЯДР — ЕДР — ЁДР — ЮДР</p>

            <h3 className="text-xl font-bold mb-3">Слова со стечением ТР, ДР:</h3>
            <p className="text-muted-foreground italic mb-3">Читайте слова четко, утрированно выделяя звук [Р]. Если ребенок еще не читает, взрослый произносит слово, а ребенок повторяет.</p>
            <p className="text-muted-foreground mb-6">Трава, трап, трасса, тетрадь, страус, стража, странник, страна, трос, тройка, тростник, трон, метро, матрос, тропики, стройный, труд, труба, трус, трубка, стружка, труженик, петрушка, отрывок, драка, драма, здравствуй, драйв, квадрат, хандра, пудра, эскадра, дрова, дробь, дрозд, дротик, дрожжи, ядро, бедро, ведро, мудрость, друг, дружба, подруга, дружный, надрыв, вдруг, метр, литр, театр, осётр, фетр, центр, литр, фильтр, Пётр, кадр, кедр, цилиндр, скафандр, олеандр.</p>

            {/* Чистоговорки ТР/ДР */}
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Тра-тра-тра — в детский сад идти с утра.</p>
              <p>Тра-тра-тра — мы танцуем до утра.</p>
              <p>Тро-тро-тро — едем с папой мы в метро.</p>
              <p>Тро-тро-тро — строим мы мосты хитро.</p>
              <p>Тру-тру-тру — завтра в лес мы поутру.</p>
              <p>Тру-тру-тру — я трубу сейчас протру.</p>
              <p>Тры-тры-тры — в сказках гномики хитры.</p>
              <p>Стра-стра-стра — мы сидели у костра.</p>
              <p>Стра-стра-стра — это новая страна.</p>
              <p>Стро-стро-стро — строим домик высоко.</p>
              <p>Стру-стру-стру — стружки я сейчас сотру.</p>
              <p>Стры-стры-стры — эти ножницы остры.</p>
              <p>Дра-дра-дра — у крыльца лежат дрова.</p>
              <p>Дро-дро-дро — дровосек несет ведро.</p>
              <p>Дро-дро-дро — дротик, дрозд, бедро.</p>
              <p>Дру-дру-дру — победили мы хандру.</p>
            </div>

            {/* Image 1 */}
            <img src={image1} alt="Назови слова со звуком Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Назови слова со звуком [Р]. Составь предложения.</p>

            {/* Обратные слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Обратные (закрытые) слоги</h2>
            <p className="font-bold text-lg mb-6">АР — ОР — УР — ЫР — ЭР — ИР — ЕР — ЁР — ЮР — ЯР</p>

            <h3 className="text-xl font-bold mb-3">Звук Р в конце слова:</h3>
            <p className="text-muted-foreground mb-6">Шар, пар, удар, самовар, комар, пожар, загар, двор, хор, забор, мотор, помидор, мухомор, топор, сыр, жир, мир, пир, тир, кефир, зефир, пассажир, командир, мундир, актёр, шофёр, ковёр, бобёр, костёр, ковёр, актёр, осётр, осмотр, Егор.</p>

            {/* Прямые слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Прямые (открытые) слоги</h2>
            <p className="font-bold text-lg mb-6">РА — РО — РУ — РЫ — РЭ</p>

            <h3 className="text-xl font-bold mb-3">Звук Р в начале слова:</h3>
            <p className="text-muted-foreground mb-6">Рак, рама, рано, радио, ракета, радуга, работа, раковина, рот, роза, робот, роща, родина, ролик, руки, руль, ручей, рубашка, рукавицы, рыба, рынок, рысь, рыбак, рыжик.</p>

            <h3 className="text-xl font-bold mb-3">Звук Р в середине слова (интервокальная позиция):</h3>
            <p className="text-muted-foreground mb-6">Гора, нора, пора, пара, фара, жара, детвора, гитара, корона, ворона, ворота, дорога, корова, сорока, перо, пирог, герой, горох, урок, мороз, народ, парус, кукуруза, кенгуру, ураган, барабан, топоры, комары.</p>

            {/* Image 2 - Полки */}
            <img src={image2} alt="Что стоит на полках — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Что стоит на полках в шкафу? Используйте предлоги около, между.</p>

            {/* Слоги со стечением согласных */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Слоги со стечением согласных</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-center border-collapse">
                <tbody>
                  <tr><td className="border border-border p-2 font-bold">ГРА</td><td className="border border-border p-2 font-bold">ГРО</td><td className="border border-border p-2 font-bold">ГРУ</td><td className="border border-border p-2 font-bold">ГРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">КРА</td><td className="border border-border p-2 font-bold">КРО</td><td className="border border-border p-2 font-bold">КРУ</td><td className="border border-border p-2 font-bold">КРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ВРА</td><td className="border border-border p-2 font-bold">ВРО</td><td className="border border-border p-2 font-bold">ВРУ</td><td className="border border-border p-2 font-bold">ВРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ФРА</td><td className="border border-border p-2 font-bold">ФРО</td><td className="border border-border p-2 font-bold">ФРУ</td><td className="border border-border p-2 font-bold">ФРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">БРА</td><td className="border border-border p-2 font-bold">БРО</td><td className="border border-border p-2 font-bold">БРУ</td><td className="border border-border p-2 font-bold">БРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ПРА</td><td className="border border-border p-2 font-bold">ПРО</td><td className="border border-border p-2 font-bold">ПРУ</td><td className="border border-border p-2 font-bold">ПРЫ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ХРА</td><td className="border border-border p-2 font-bold">ХРО</td><td className="border border-border p-2 font-bold">ХРУ</td><td className="border border-border p-2 font-bold">ХРЫ</td></tr>
                </tbody>
              </table>
            </div>

            <p className="font-bold text-lg mb-1">ШРА — ШРО — ШРУ — ШРЫ</p>
            <p className="font-bold text-lg mb-1">РЖА — РЖО — РЖУ — РЖЫ</p>
            <p className="font-bold text-lg mb-1">НРА — НРО — НРУ — НРЫ</p>
            <p className="font-bold text-lg mb-6">МРА — МРО — МРУ — МРЫ</p>

            {/* Image 3 - Животные на полках */}
            <img src={image3} alt="Животные на полках — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Кто стоит на верхней четвёртой полке? Кто на первой? На второй? На третьей? Повторяем обобщающие понятия (звери, птицы, морские животные, насекомые). Придумай словосочетания, отвечая на вопрос какой (какая)?</p>

            <h3 className="text-xl font-bold mb-3">Слова со стечением согласных:</h3>
            <p className="text-muted-foreground mb-6">Кран, краб, край, краска, крот, крошки, круг, кружка, крыша, крыса, крыльцо, грач, грат, гранат, грабли, градусник, грабитель, гром, гроза, грохот, грозный, груз, груша, группа, груздь, враг, врач, врун, вражда, вратарь, вручать, фрак, фрукт, Франция, цифра, брат, браслет, бранить, бровь, бродяга, брошка, брусника. Обруч, брынза, брызги, обрыв, правда, праздник, продукты, прогулка, простуда, продавец, простыня, провод, пруд, пружина, упругий, прыжок, прыгун, храм, храп, охрана, хрусталь, хромать, махровый, мрак, мрамор, нравы, нравиться, ржавчина, шрам.</p>

            {/* Image 4 - Хищные животные */}
            <img src={image4} alt="Хищные животные — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Назови хищных животных. Есть ли тут травоядные? Составь предложения. Придумай небольшой рассказ.</p>

            {/* Чистоговорки */}
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Гра-гра-гра — громкая у нас игра.</p>
              <p>Гро-гро-гро — громыхает далеко.</p>
              <p>Гру-гру-гру — груш я груду соберу.</p>
              <p>Кра-кра-кра — у нас вкусная икра.</p>
              <p>Кро-кро-кро — роет крот свое метро.</p>
              <p>Кру-кру-кру — кружку я свою несу.</p>
              <p>Кры-кры-кры — крыши строить мы должны.</p>
              <p>Бра-бра-бра — пожелаем всем добра.</p>
              <p>Бро-бро-бро — мы купили серебро.</p>
              <p>Бру-бру-бру — брусья я переберу.</p>
              <p>Бры-бры-бры — прибежали к нам бобры.</p>
              <p>Пра-пра-пра — мы уже не детвора.</p>
              <p>Про-про-про — просто выиграть в лото.</p>
              <p>Пру-пру-пру — мы купаемся в пруду.</p>
              <p>Пры-пры-пры — прыгают у нас шары.</p>
            </div>

            {/* Image 5 - Пират */}
            <img src={image5} alt="Пират — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Составь предложения со словами: пират, корабль, карта, коробка, ворона...</p>

            {/* Насыщенные слова */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Насыщенные слова</h2>
            <p className="text-muted-foreground italic mb-3">В этих словах звук [Р] встречается дважды. Произносите их медленно, контролируя каждый звук.</p>
            <p className="text-muted-foreground mb-6">Трактор, прорубь, рупор, мрамор, размер, фарфор, квартира, оркестр, профессор, маршрут, проворный, разговор, аэродром, бутерброд, разворот, литература, транспорт, прожарка, сортировка, прорыть, разбирать, разгар, распорядок, ярмарка, фермер, простор, термометр, оркестр, торшер, скороговорка.</p>

            {/* Image 6 - Карлсон */}
            <img src={image6} alt="Карлсон на крыше — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Кто сидит на крыше дома? Зачем пожарный поднимается по лестнице? Какие здесь птицы? Составь предложения, используя слова со звуком [Р]: (Карлсон, труба, шар, крыша, пропеллер, ворона, воробьи, пожарный). Придумай рассказ.</p>

            {/* Словосочетания */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Словосочетания</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground mb-6">
              <p>Красивая роза</p><p>Разноцветные краски</p>
              <p>Крутая гора</p><p>Быстрый гепард</p>
              <p>Морская рыба</p><p>Морская ракушка</p>
              <p>Верный друг</p><p>Двугорбый верблюд</p>
              <p>Громкий разговор</p><p>Трудная работа</p>
              <p>Красный трактор</p><p>Родная страна</p>
              <p>Нырнуть в прорубь</p><p>Красная смородина</p>
              <p>Красивый натюрморт</p><p>Черная ворона</p>
              <p>Воробьи на крыше</p><p>Острый топор</p>
              <p>Пиратский корабль</p><p>Игрушечная ракета</p>
              <p>Семиструнная гитара</p><p>Добрый брат</p>
              <p>Необитаемый остров</p><p>Серая крыса</p>
              <p>Широкий кругозор</p><p>Огромный арбуз</p>
              <p>Горный хрусталь</p><p>Морской порт</p>
              <p>Трудный маршрут</p><p>Быстрый ручей</p>
              <p>Сортировка товара</p><p>Круглый ковёр</p>
              <p>Грозный тигр</p>
            </div>
            <p className="text-muted-foreground italic mb-6">Придумай с данными словосочетаниями предложения.</p>

            {/* Image 7 */}
            <img src={image7} alt="Рома рисует — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Что рисует Рома? Какие предметы у Ромы в комнате со звуком [Р]? Составь предложения.</p>

            {/* Предложения */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Предложения</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>1. Рома рубит дрова топором.</p>
              <p>2. У Раи разноцветные шары.</p>
              <p>3. В траве сидит черный крот.</p>
              <p>4. Грузовик везёт тяжелый груз.</p>
              <p>5. Серая ворона сидит на крыше сарая.</p>
              <p>6. Мы собирали рыжики в сосновом бору.</p>
              <p>7. Старший брат играет на трубе.</p>
              <p>8. У Иры красивая розовая куртка и шарф.</p>
              <p>9. Рома собрал маме ромашки и поставил в хрустальную вазу.</p>
              <p>10. Чёрный крот роет глубокую нору в огороде.</p>
              <p>11. На рынке продают спелые фрукты и овощи.</p>
              <p>12. Троллейбус идет в парк по маршруту.</p>
              <p>13. Артём купил огромный торт на свой день рождения.</p>
              <p>14. Повар старательно готовит морскую рыбу на пару.</p>
              <p>15. Тигры, пантеры, леопарды и гепарды — быстрые и опасные хищники.</p>
            </div>

            {/* Image 8 - Пират на острове */}
            <img src={image8} alt="Пират на острове — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Что делает пират на острове? Придумай рассказ. Используй слова: пират, костёр, остров, морская звезда, краб, рыба, парусник, жара.</p>

            {/* Скороговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Скороговорки</h2>
            <p className="text-muted-foreground italic mb-3">Используйте данный материал по возрасту. Трудные скороговорки, монофоны, или задание объяснить смысл пословиц, не стоит применять с детьми.</p>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Во мраке раки шумят в драке.</p>
              <p>Кашевар кашу варил подваривал да недоваривал.</p>
              <p>Карл у Клары украл кораллы, а Клара у Карла украла кларнет.</p>
              <p>На дворе трава, на траве дрова. Не руби дрова на траве двора.</p>
              <p>Проворонила ворона воронёнка.</p>
              <p>Выдра в ведро от выдры нырнула.</p>
              <p>Все бобры для своих бобрят добры.</p>
              <p>Рысь на дереве сидит, очень грозно рысь рычит.</p>
              <p>В пруду у Поликарпа — два карася, два карпа.</p>
              <p>Два дровосека, два дроворуба, два дровокола отточили топоры.</p>
              <p>Топоры остры-то до поры, до поры остры топоры.</p>
              <p>Белые бараны били в барабаны, без разбора били — лбы себе разбили.</p>
              <p>Сорок сорок воровали горох, сорок ворон отогнали сорок.</p>
              <p>Рыла свинья, тупорыла, белорыла; полдвора рылом изрыла, вырыла, подрыла.</p>
            </div>

            {/* Скороговорки для взрослых */}
            <h3 className="text-xl font-bold mb-3">Скороговорки для взрослых</h3>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Скороговорун скоровыговорил, что все скороговорки не перескороговоришь, не выскороговоришь, позже убедился, что все скороговорки выговоришь, да перевыговоришь. И прыгают скороговорки, как караси на сковородке!</p>
              <p>Актёр театра, актёр театра... (повторить 4-6 раз)</p>
              <p>Рапортовал да не дорапортавал, дорапортовывал да зарапортовался.</p>
              <p>Оратора-демонстратора не пустили в транспорт с транспарантами.</p>
              <p>Оратор-демонстратор с транспарантами отправился в дорогу на экскаваторе.</p>
              <p>Пришёл Прокоп — кипит укроп, ушёл Прокоп — кипит укроп. Как при Прокопе кипит укроп, и так и без Прокопа кипит укроп.</p>
              <p>Променяла Прасковья карася на три пары полосатых поросят. Побежали поросята по росе, простудились поросята, да не все.</p>
              <p>В четверг четвёртого числа в четыре с четвертью часа лигурийский регулировщик регулировал в Лигурии...</p>
            </div>

            {/* Пословицы и поговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Пословицы и поговорки</h2>
            <p className="text-muted-foreground italic mb-4">Объясните своими словами как вы понимаете пословицу или поговорку. Тренируем произношение звука [Р] в спонтанной речи.</p>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Какой разум, такой и разговор.</p>
              <p>У страха глаза велики.</p>
              <p>Одна голова хорошо, а две лучше.</p>
              <p>Друзья познаются в беде.</p>
              <p>Не рой яму другому, сам в неё попадёшь.</p>
              <p>Лучше один раз увидеть, чем сто раз услышать.</p>
              <p>Если не видишь — взойди на гору, если не понимаешь — спроси у старшего.</p>
              <p>Семь раз отмерь — один отрежь.</p>
              <p>Землю красит солнце, а человека труд.</p>
              <p>Не бросай слов на ветер.</p>
              <p>Труд человека кормит, а лень портит.</p>
              <p>Без труда жить — только небо коптить.</p>
              <p>Терпение и труд всё перетрут.</p>
              <p>Назвался другом — помогай в беде.</p>
              <p>Делай другу добро, да себе без беды.</p>
              <p>Не тот друг, кто мёдом мажет, а тот кто правду в глаза скажет.</p>
              <p>Лучше честный враг, чем коварный друг.</p>
              <p>На каждый роток не накинешь платок.</p>
              <p>Не всё то правда, что много говорят.</p>
              <p>Одна врала, другая не разобрала, третья по-своему переврала.</p>
              <p>Береги платье с нову, а здоровье смолоду.</p>
              <p>Здоровье — первое богатство.</p>
              <p>Солнце, воздух и вода — лучшие доктора.</p>
              <p>Меньше еды — больше здоровья.</p>
              <p>Гречневая каша — матушка наша, ржаной хлебец — отец родной.</p>
            </div>

            {/* Монофоны */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Монофоны</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Раззадорился рассвет.</p>
              <p>Расплылись радостные рыбки.</p>
              <p>Раскинулась разноцветная радуга.</p>
              <p>Родионов Рома разносил розы, разбрасывал ромашки.</p>
              <p>Розовые розы, раскидистый розмарин раньше радовал Раю.</p>
              <p>Расстроенная Рублёва Рая, рыдая разбрасывала разные растения.</p>
              <p>Рыбаки рассортировали рыбу работая руками, раскидывая рычагами.</p>
              <p>Радостная Раиса рассмеялась, рассказывая родному Рудику роман.</p>
              <p>Розовощёкий, раздосадованный разногласиями Рома, разучивал рок.</p>
              <p>Русалка радовалась разноцветной радуге, радужным рыбам, ракам, разным ракушкам, разъехавшимся робким рыбакам.</p>
              <p>Рада разогрела рагу, разложила разносолы, разрезала рыбу, рулет, разлила рассол, раскидала розовые розы, разрисовала роскошный рассвет.</p>
              <p>Рокки разбежался, рыча раскидал разложенные ролики, ракетки, растоптал расцветающие рыжие ромашки, разжевал роллы, разбрызгал росу, рухнул в ручей.</p>
            </div>

            {/* Image 9 - Морское дно */}
            <img src={image9} alt="Морское дно — звук Р" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Морское дно. Расскажи о нём. Кого и что ты здесь видишь? Используй слова со звуком [Р]: тропические рыбы, рыба шар, морской конёк, рыба клоун, краб, морские звёзды, морской ёж, ракушки, водоросли, кораллы, корабль. Каких рыб ты ещё знаешь?</p>

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

export default AutomatizatsiyaZvukaR;
