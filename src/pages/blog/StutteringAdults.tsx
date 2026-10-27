import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import heroImage from "@/assets/blog/stuttering-adults-hero.jpg";
import infographicImage from "@/assets/blog/stuttering-adults-infographic.jpg";

const StutteringAdults = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Заикание у взрослых: причины, проявления и опоры в работе",
    "description": "Разбираемся в механизмах заикания у взрослых: причины, проявления, современные методы коррекции. Что можно делать самостоятельно и когда нужен специалист.",
    "image": "https://govorim-pravilno.ru/assets/blog/stuttering-adults-hero.jpg",
    "datePublished": "2026-01-09",
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
        <title>Заикание у взрослых: причины, проявления и опоры в работе | Светлана Коновалова</title>
        <meta name="description" content="Заикание у взрослых: механизмы, причины, современные методы коррекции. Что можно делать самостоятельно и когда нужен специалист — мнение логопеда с 20-летним стажем." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog/zaikanie-u-vzroslyh" />
        <meta property="og:title" content="Заикание у взрослых: причины, проявления и опоры в работе" />
        <meta property="og:description" content="Разбираемся в механизмах заикания у взрослых: причины, проявления, современные методы коррекции." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog/zaikanie-u-vzroslyh" />
        <meta property="og:image" content="https://govorim-pravilno.ru/assets/blog/stuttering-adults-hero.jpg" />
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
              <time dateTime="2026-01-09">9 января 2026</time>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Заикание у взрослых: причины, проявления и опоры в работе
            </h1>
            
            <img 
              src={heroImage} 
              alt="Заикание у взрослых: опоры и решения" 
              className="w-full rounded-lg mb-8 aspect-video object-cover"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-lg text-muted-foreground mb-6">
                Во взрослом возрасте заикание нередко переживается острее: «это мешает работе», «меня будут оценивать». Я часто вижу, как запинки усиливаются в значимых ситуациях — на звонках, при знакомстве, на совещаниях — и постепенно влияют на уверенность.
              </p>
              
              <p>
                Разобраться важно, потому что заикание у взрослых имеет понятные механизмы и поддаётся системной коррекции.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Что важно понимать о теме</h2>
              <p>
                Заикание — это нарушение плавности речи: повторы, удлинения звуков, блоки. Часто ключевой механизм связан с запуском речи: дыхание, голос и артикуляция включаются с избыточным напряжением. Возникает круг «ожидание → тревога → зажим → усиление блоков».
              </p>
              <p>
                Причины бывают разными: незавершённое детское заикание, усиление на фоне хронического стресса и усталости, иногда — после болезни или травмы. Поэтому ценна диагностика: она задаёт правильные цели и темп.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">С какими проявлениями сталкиваются чаще всего</h2>
              <ul className="list-disc list-inside space-y-2 my-6">
                <li>блоки на первых звуках и «не могу начать»;</li>
                <li>повторения слогов, удлинения звуков;</li>
                <li>ощущение нехватки воздуха, зажим в горле;</li>
                <li>усиление при спешке, усталости, по телефону, при выступлениях;</li>
                <li>избегание «опасных» слов и ситуаций.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Современные подходы и методы работы</h2>
              <p>
                В работе обычно сочетаются техники управляемой плавности (мягкий старт, пауза, темп), координация дыхания и голоса, снижение мышечного напряжения и перенос навыков в реальные диалоги. Отдельная часть — уменьшение избегания и речевой тревоги.
              </p>
              <p>
                Занятия возможны в Москве и онлайн: для многих решают регулярность и практика в повседневных задачах.
              </p>

              <img 
                src={infographicImage} 
                alt="Взрослое заикание: путь к свободной речи — инфографика" 
                className="w-full rounded-lg my-8 aspect-video object-cover"
              />

              <h2 className="text-2xl font-bold mt-8 mb-4">Что можно делать самостоятельно, а где нужен специалист</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Самостоятельная работа:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Стабилизация базы:</strong> сон, нагрузку, более медленный темп.</li>
                <li><strong>Пауза перед стартом:</strong> речь «на выдохе».</li>
                <li><strong>Дневник триггеров:</strong> где заикание усиливается и что снижает напряжение.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Когда нужен специалист:</h3>
              <p>
                К специалисту стоит обратиться, если блоки частые, растёт страх речи, появляется стойкое избегание или если заикание возникло резко во взрослом возрасте.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Почему важно не откладывать внимание к теме</h2>
              <p>
                Если долго жить с заиканием без поддержки, избегание расширяется: меньше звонков, меньше инициативы, меньше контактов. Напряжение закрепляется как привычка, и речь всё чаще воспринимается как «опасная зона».
              </p>
              <p>
                Своевременная работа помогает разорвать этот круг и вернуть управляемость речевому старту.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Важный шаг</h2>
              <p>
                Если долго жить с проблемой без поддержки, зона комфорта сужается. Своевременная работа помогает вернуть вам голос.
              </p>
              <p>
                Если вам нужно индивидуально обсудить ситуацию, провести диагностику и понять следующий шаг, вы можете обратиться за профессиональной помощью прямо здесь.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Частые вопросы</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">Может ли заикание начаться во взрослом возрасте?</h3>
                  <p>Да, иногда оно появляется или резко усиливается после стресса, болезни или травмы.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Почему по телефону заикание сильнее?</h3>
                  <p>Меньше опор и больше контроля, поэтому растёт напряжение.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Это только психологическая проблема?</h3>
                  <p>Нет. Важны и речевая координация, и эмоциональная регуляция.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Помогают ли дыхательные упражнения?</h3>
                  <p>Да, если они связаны с речью: важен запуск фразы на выдохе.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Нужно ли продавливать слово через блок?</h3>
                  <p>Чаще это усиливает спазм; эффективнее пауза и мягкий перезапуск.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Сколько длится коррекция?</h3>
                  <p>Зависит от формы и избегания; решают регулярность и перенос в реальные ситуации.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Можно ли избавиться полностью?</h3>
                  <p>У некоторых — почти полностью, у многих — устойчивый контроль и свободное общение.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">С чего начать прямо сейчас?</h3>
                  <p>С замедления темпа, паузы перед стартом и наблюдения за триггерами.</p>
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
        
        <RelatedArticlesCarousel currentSlug="zaikanie-u-vzroslyh" />
      </main>
      
      <Footer />
    </div>
  );
};

export default StutteringAdults;
