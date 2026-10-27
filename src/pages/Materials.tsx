import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import automationCategoryImage from "@/assets/materials/categories/automation-sounds.png";
import interactiveGamesCategoryImage from "@/assets/materials/categories/interactive-games.png";
import videoCategoryImage from "@/assets/materials/categories/video-materials.png";

const materials = [{
  title: "Автоматизация звука",
  excerpt: "Упражнения для постановки и закрепления звуков Ж, Л, Ль, Р, Рь и Ш: слоги, слова, фразы, скороговорки и задания с картинками.",
  image: automationCategoryImage,
  slug: "avtomatizatsiya-zvuka",
}];

const Materials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Занятия и материалы | Логопед Светлана Коновалова</title>
        <meta
          name="description"
          content="Упражнения и материалы для логопедических занятий. Статьи и пособия для домашней работы."
        />
        <link rel="canonical" href="https://govorim-pravilno.ru/materials" />
        <meta property="og:title" content="Занятия и материалы — логопед Светлана Коновалова" />
        <meta property="og:description" content="Упражнения и материалы для логопедических занятий." />
        <meta property="og:url" content="https://govorim-pravilno.ru/materials" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Занятия и <span className="text-primary">материалы</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Упражнения и пособия для логопедических занятий дома.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <Link to="/materials/interaktivnye-igry" className="block">
                <Card className="group h-full overflow-hidden border-primary/30 bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-full flex-col sm:flex-row">
                    <div className="aspect-video overflow-hidden sm:aspect-auto sm:min-h-48 sm:w-1/3"><img src={interactiveGamesCategoryImage} alt="Интерактивные логопедические игры для детей" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
                    <div className="flex flex-1 flex-col justify-center">
                      <CardHeader className="p-4 pb-2 md:p-6 md:pb-2"><h3 className="text-base font-semibold transition-colors group-hover:text-primary md:text-xl">Интерактивные игры</h3></CardHeader>
                      <CardContent className="p-4 pt-0 md:p-6 md:pt-0"><p className="mb-3 text-sm text-muted-foreground md:text-base">Бесплатные игры для детей, которые помогают развивать фонематический слух, речь, память и внимание. Выберите задание — слова можно озвучивать или оставить без звука.</p><span className="text-sm font-medium text-primary">Открыть раздел →</span></CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
              {materials.map((item) => (
                
                <Link key={item.slug} to={`/materials/${item.slug}`} className="block">
                  <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full">
                    <div className="flex h-full flex-col sm:flex-row">
                      <div className="aspect-video overflow-hidden sm:w-1/3 sm:aspect-auto">
                        <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <CardHeader className="p-4 pb-2 md:p-6 md:pb-2"><h3 className="text-base font-semibold transition-colors group-hover:text-primary md:text-xl">{item.title}</h3></CardHeader>
                        <CardContent className="p-4 pt-0 md:p-6 md:pt-0"><p className="mb-3 text-sm text-muted-foreground md:text-base">{item.excerpt}</p><span className="text-sm font-medium text-primary">Открыть раздел →</span></CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
              <Link to="/materials/video" className="block">
                <Card className="group h-full overflow-hidden border-sky-200 bg-sky-50/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-full flex-col sm:flex-row">
                    <div className="aspect-video overflow-hidden sm:aspect-auto sm:min-h-48 sm:w-1/3"><img src={videoCategoryImage} alt="Видео Светланы для занятий по развитию речи" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
                    <div className="flex flex-1 flex-col justify-center"><CardHeader className="p-4 pb-2 md:p-6 md:pb-2"><h3 className="text-base font-semibold transition-colors group-hover:text-primary md:text-xl">Видео Светланы</h3></CardHeader><CardContent className="p-4 pt-0 md:p-6 md:pt-0"><p className="mb-3 text-sm text-muted-foreground md:text-base">Логоритмика и речевые игры Светланы Коноваловой для занятий дома.</p><span className="text-sm font-medium text-primary">Смотреть видео →</span></CardContent></div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Materials;
