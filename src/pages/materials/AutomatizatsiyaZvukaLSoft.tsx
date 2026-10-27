import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import DownloadMaterial from "@/components/materials/DownloadMaterial";

import coverImg from "@/assets/materials/l-soft/cover.png";
import image1 from "@/assets/materials/l-soft/image1.jpg";
import image2 from "@/assets/materials/l-soft/image2.jpg";
import image3 from "@/assets/materials/l-soft/image3.jpg";
import image4 from "@/assets/materials/l-soft/image4.jpg";
import image5 from "@/assets/materials/l-soft/image5.jpg";
import image6 from "@/assets/materials/l-soft/image6.jpg";
import image7 from "@/assets/materials/l-soft/image7.jpg";


const AutomatizatsiyaZvukaLSoft = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Автоматизация звука Ль | Логопед Светлана Коновалова</title>
        <meta name="description" content="Упражнения для автоматизации звука Ль: слоги, слова, предложения, скороговорки и иллюстрации для логопедических занятий." />
        <link rel="canonical" href="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-l-myagkiy" />
        <meta property="og:title" content="Автоматизация звука Ль — логопед Светлана Коновалова" />
        <meta property="og:description" content="Упражнения для автоматизации звука Ль: слоги, слова, предложения, скороговорки." />
        <meta property="og:url" content="https://govorim-pravilno.ru/materials/avtomatizatsiya-zvuka-l-myagkiy" />
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
              Автоматизация звука <span className="text-primary">Ль</span>
            </h1>

            <DownloadMaterial sound="Ль" file="avtomatizatsiya-zvuka-l-myagkiy.pdf" />

            <img src={coverImg} alt="Автоматизация звука Ль — иллюстрация" className="w-full rounded-xl shadow-lg mb-8" loading="eager" />

            {/* Рекомендации */}
            <div className="bg-muted/50 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Рекомендации по работе:</h2>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed list-disc pl-5">
                <li><strong>Следите за артикуляцией:</strong> Губы растянуты в улыбке. Передняя часть языка касается бугорков за верхними зубами (альвеолы), но не упирается в зубы (и тем более не выходит между зубами).</li>
                <li>Рекомендуется заниматься ежедневно по 10–15 минут, переходя от простых слогов к сложным предложениям.</li>
                <li>Чередуем чтение или произношение за взрослым, если ребёнок ещё не читает, работай по картинкам.</li>
                <li>Находим слова со звуком [Ль], учимся составлять предложения, а затем и целый рассказ.</li>
                <li>Произнося (читая) слоги и слова, утрировано тянем звук [Ль].</li>
              </ul>
            </div>

            {/* Закрытые слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Закрытые слоги</h2>
            <p className="font-bold text-lg mb-6">АЛЬ — ОЛЬ — УЛЬ — ЫЛЬ — ИЛЬ — ЕЛЬ — ЁЛЬ — ЮЛЬ — ЯЛЬ</p>

            {/* Открытые слоги */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Открытые слоги</h2>
            <p className="font-bold text-lg mb-3">ЛЯ — ЛЁ — ЛЮ — ЛИ — ЛЕ</p>
            <p className="font-bold mb-1">ЛЯ-ЛЯ-ЛЯ &nbsp; ЛЕ-ЛЕ-ЛЕ &nbsp; ЛЮ-ЛЮ-ЛЮ &nbsp; ЛЯ-ЛЁ-ЛЮ-ЛИ</p>
            <p className="font-bold mb-6">ЛИ-ЛИ-ЛИ &nbsp; ЛЁ-ЛЁ-ЛЁ &nbsp; ЛИ-ЛИ-ЛИ &nbsp; ЛЕ-ЛЯ-ЛЁ-ЛЮ</p>

            {/* Слоги между гласными */}
            <h3 className="text-xl font-bold mb-3">Слоги, где звук Ль находится между гласными</h3>
            <div className="space-y-1 text-muted-foreground mb-6">
              <p>АЛЯ — АЛЕ — АЛИ — АЛЁ — АЛЮ</p>
              <p>ИЛЯ — ИЛЕ — ИЛИ — ИЛЁ — ИЛЮ</p>
              <p>ЫЛЯ — ЫЛЕ — ЫЛИ — ЫЛЁ — ЫЛЮ</p>
              <p>ОЛЯ — ОЛЕ — ОЛИ — ОЛЁ — ОЛЮ</p>
              <p>УЛЯ — УЛЕ — УЛИ — УЛЁ — УЛЮ</p>
            </div>
            <p className="text-muted-foreground italic mb-6">Перейдите к словам со звуком [Ль] в начале и в конце слова, а затем опять вернитесь к слогам.</p>

            {/* Сложные сочетания */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Сложные сочетания (стечения согласных)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-center border-collapse">
                <tbody>
                  <tr><td className="border border-border p-2 font-bold">ТЛЯ</td><td className="border border-border p-2 font-bold">ТЛЁ</td><td className="border border-border p-2 font-bold">ТЛЮ</td><td className="border border-border p-2 font-bold">ТЛИ</td><td className="border border-border p-2 font-bold">ТЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ДЛЯ</td><td className="border border-border p-2 font-bold">ДЛЁ</td><td className="border border-border p-2 font-bold">ДЛЮ</td><td className="border border-border p-2 font-bold">ДЛИ</td><td className="border border-border p-2 font-bold">ДЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ПЛЯ</td><td className="border border-border p-2 font-bold">ПЛЁ</td><td className="border border-border p-2 font-bold">ПЛЮ</td><td className="border border-border p-2 font-bold">ПЛИ</td><td className="border border-border p-2 font-bold">ПЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">КЛЯ</td><td className="border border-border p-2 font-bold">КЛЁ</td><td className="border border-border p-2 font-bold">КЛЮ</td><td className="border border-border p-2 font-bold">КЛИ</td><td className="border border-border p-2 font-bold">КЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ГЛЯ</td><td className="border border-border p-2 font-bold">ГЛЁ</td><td className="border border-border p-2 font-bold">ГЛЮ</td><td className="border border-border p-2 font-bold">ГЛИ</td><td className="border border-border p-2 font-bold">ГЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">СЛЯ</td><td className="border border-border p-2 font-bold">СЛЁ</td><td className="border border-border p-2 font-bold">СЛЮ</td><td className="border border-border p-2 font-bold">СЛИ</td><td className="border border-border p-2 font-bold">СЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ЗЛЯ</td><td className="border border-border p-2 font-bold">ЗЛЁ</td><td className="border border-border p-2 font-bold">ЗЛЮ</td><td className="border border-border p-2 font-bold">ЗЛИ</td><td className="border border-border p-2 font-bold">ЗЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ФЛЯ</td><td className="border border-border p-2 font-bold">ФЛЁ</td><td className="border border-border p-2 font-bold">ФЛЮ</td><td className="border border-border p-2 font-bold">ФЛИ</td><td className="border border-border p-2 font-bold">ФЛЕ</td></tr>
                  <tr><td className="border border-border p-2 font-bold">ВЛЯ</td><td className="border border-border p-2 font-bold">ВЛЁ</td><td className="border border-border p-2 font-bold">ВЛЮ</td><td className="border border-border p-2 font-bold">ВЛИ</td><td className="border border-border p-2 font-bold">ВЛЕ</td></tr>
                </tbody>
              </table>
            </div>

            {/* Image 1 - Растения/ягоды */}
            <img src={image1} alt="Растения и ягоды — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Что нарисовано на листе в первом ряду? Во втором. Повторяем обобщающие понятия: растения, ягоды.</p>

            {/* Image 2 - Птицы */}
            <img src={image2} alt="Птицы — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Назови птиц (павлин, лебедь, цапля, пеликан, зелёный попугай, колибри), составь предложения (павлин распустил красивый хвост), придумай небольшой рассказ. Каких птиц ты ещё знаешь?</p>

            {/* Звук Ль в начале слова */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Звук Ль в начале слова</h2>
            <p className="text-muted-foreground mb-6">Лямка, лягушка, лёд, лён, лётчик, Лёша, Лёня, Лёва, люк, люди, лютик, Люда, Люба, липа, лист, лимон, лиса, лицо, лифт, Лида, Лиза, лес, лев, лето, лейка, лепка, лента, лебедь, Лена, лепестки, лестница, лисёнок, львёнок, лебедёнок.</p>
            <p className="text-muted-foreground italic mb-6">Учимся правильно называть детёнышей животных. Понятие домашние и дикие животные.</p>

            {/* Звук Ль в середине */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Звук [Ль] в середине</h2>
            <p className="text-muted-foreground mb-6">Поляна, коляска, колено, малина, калина, долина, улитка, билеты, пелёнка, гулять, пилить, делить, олень, тюлень, колесо, пылесос, самолёт, мотылёк, Полина, Галина, Коля, Валя, Виталик, Илья, Емеля, Юля, велик, великан, пеликан, улица, оливки, кулич, улей, телёнок, пелёнка, салют, полюс, малютка, колючий, уголёк.</p>

            {/* Звук Ль в конце */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Звук [Ль] в конце</h2>
            <p className="text-muted-foreground mb-6">Соль, моль, боль, ноль, уголь, фасоль, цель, щель, ель, мель, кисель, шмель, пыль, быль, бутыль, тюль, июль, медаль, педаль, эмаль, сталь, фестиваль, куль.</p>

            {/* Сложные стечения */}
            <h3 className="text-xl font-bold mb-3">Сложные стечения:</h3>
            <p className="text-muted-foreground mb-6">Петля, длина, пляска, плёнка, капля, плюшка, плита, плеть, блюдо, блеск, блины, наблюдать, зяблик, клякса, клёв, клёст, наклейка, клюв, клюшка, клик, клей, клетка, слякоть, слёзы, след, слюда, слива, сливки, слепок, глина, глянец, кегли, Глеб, шляпа, шлем, шлюпка, шлёпанцы, вафли, туфли, хлебница, флейта, фляга, флюгер, вафли, туфля, дельфин, бельчонок, львёнок, козлёнок, злить, вливать, влюблённый, мыльный, пыльца, туфелька, кульки, Альпы, альпинист, альбом.</p>

            {/* Image 3 */}
            <img src={image3} alt="Сложные стечения — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />

            {/* Image 4 */}
            <img src={image4} alt="Капли и лилии — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Кого ты видишь на картинке? Придумай рассказ. Используй слова: капли, лилии, листья, лебедь, цапля, пеликан, лягушки.</p>

            {/* Слова с двумя звуками Ль */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Слова с двумя звуками [Ль]</h2>
            <p className="text-muted-foreground mb-6">Лилия, гуляли, летели, лили, лепили, лечили, линяли, белили, поливали, клевали, лилипут, люлька, мультфильм, любили, болельщик, Галилей, Лёля, Ляля.</p>
            <p className="text-muted-foreground italic mb-6">Придумай словосочетания с данными словами. Составь предложения.</p>

            {/* Image 5 */}
            <img src={image5} alt="Лето в лесу — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Что собирает Лена? Что в корзине у Лёни? Кто наблюдает за детьми? Какое время года? Назовите слова со звуком Ль (земляника, лето, лисички, оленята, лиса, лягушка, улитки, мотыльки, листья). Придумай небольшой рассказ по картинке.</p>

            {/* Словосочетания */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Словосочетания</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground mb-6">
              <p>Лесная поляна</p><p>Клейкая лента</p>
              <p>Лимонный кисель</p><p>Лёгкое блюдо</p>
              <p>Зелёный лист</p><p>Маленький мальчик</p>
              <p>Маленькая лягушка</p><p>Железный люк</p>
              <p>Любимые тюльпаны</p><p>Львиные следы</p>
              <p>Детская коляска</p><p>Летний ливень</p>
              <p>Солёная фасоль</p><p>Сильная метель</p>
              <p>Блестящий самолёт</p><p>Блики на стекле</p>
              <p>Медленные улитки</p><p>Липовая аллея</p>
              <p>Лютики на поляне</p><p>Лягушка на лисичке</p>
              <p>Туфелька на лестнице</p><p>Люпины и лилии</p>
              <p>Беленький козлёнок</p><p>Удивительный хамелеон</p>
              <p>Тюлень на льдине</p><p>Апельсиновая долька</p>
              <p>Лёгкие мотыльки</p><p>Железный ключ</p>
            </div>
            <p className="text-muted-foreground italic mb-6">Составь предложения с данными словосочетаниями.</p>

            {/* Image 6 */}
            <img src={image6} alt="Мальвина — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Составь предложения со словами: Мальвина, пудель, земляника, сливки, бублики, малина, шмель, лягушки, тюльпаны, ключик, улитка, поляна, лес, туфелька, медаль. Придумай рассказ.</p>

            {/* Предложения */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Предложения</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Оля и Коля гуляли на лесной поляне.</p>
              <p>На липе маленькие липкие листики.</p>
              <p>Лиса с лисятами мелькнули в кустах.</p>
              <p>Лена купила в магазине кислую фасоль и лимон.</p>
              <p>Осенью я любуюсь листопадом.</p>
              <p>Люда полила в саду нежные лилии и лютики.</p>
              <p>Бельчата тихо сидели в дупле клёна.</p>
              <p>Маленькая улитка ползла по листу малины.</p>
              <p>Большие шмели летали над цветочной поляной.</p>
              <p>Летом в лесу мы искали землянику.</p>
              <p>Юля любила носить льняную шляпу.</p>
              <p>Мы пили клюквенный кисель и ели суфле.</p>
              <p>Лев лениво лежал в тени большой ели.</p>
              <p>Коля нашёл в песке блестящую медаль.</p>
              <p>Лёня и Лена катались на лифте.</p>
            </div>

            {/* Скороговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Скороговорки</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Полили ли лилию? Видили ли Лидию? Полили лилию. Видели Лидию.</p>
              <p>Люда леечку взяла и тюльпаны полила.</p>
              <p>Лилии полили ли, иль увяли лилии?</p>
              <p>Любит Лёня лилии. Любит Лиля кливии. Кливии и лилии любят, чтоб полили их.</p>
              <p>Мы не ели и не пили! Мы лепили и лепили — вот вам лев, а вот телёнок, дельфинёнок и котёнок.</p>
              <p>Еле-еле Лена ела, есть от лени не хотела.</p>
            </div>

            {/* Image 7 - Золушка */}
            <img src={image7} alt="Золушка — звук Ль" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
            <p className="text-muted-foreground italic mb-8 text-sm">Вспомни сказку про Золушку. Как она потеряла свою хрустальную туфельку? Расскажи что ты видишь на картинке. Используй слова: лилии, хрустальная туфелька, лестница, фиолетовое платье.</p>

            {/* Чистоговорки */}
            <h2 className="text-2xl font-bold mt-10 mb-4">Чистоговорки</h2>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p>Ля-ля-ля — зелёные поля.</p>
              <p>Ли-ли-ли — липы мы нашли.</p>
              <p>Ле-ле-ле — лейка на столе.</p>
              <p>Лю-лю-лю — малину я люблю.</p>
              <p>Лё-лё-лё — говорю алё.</p>
              <p>Аль-аль-аль — прикрути педаль.</p>
              <p>Иль-иль-иль — на улице высокий шпиль.</p>
              <p>Оль-оль-оль — мы купили соль.</p>
              <p>Уль-уль-уль — положи конфеты в куль.</p>
              <p>Ель-ель-ель — наливай кисель.</p>
              <p>Или-или-или — лилии лепили.</p>
              <p>Еле-еле-еле — убежать сумели.</p>
              <p>Оле-оле-оле — Оле, Коле, Поле.</p>
              <p>Ыли-ыли-ыли — мы лимоны мыли.</p>
              <p>Лин-лин-лин — лебединый клин.</p>
              <p>Лён-лён-лён — поспевает лён.</p>
              <p>Алька-алька-алька — под ногами галька.</p>
              <p>Улька-улька-улька — укатилась шпулька.</p>
              <p>Ольку-ольку-ольку — мы танцуем польку.</p>
              <p>Ульки-ульки-ульки — висят везде сосульки.</p>
              <p>Апля-апля-апля — на болоте цапля.</p>
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

export default AutomatizatsiyaZvukaLSoft;
