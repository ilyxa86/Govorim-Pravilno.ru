import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceExpertiseCard from "@/components/ServiceExpertiseCard";
import { MessageCircle, Brain, Users, GraduationCap, BookOpen, Hand, MessageSquare, Activity } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allServices = [
  // Речь и произношение
  {
    icon: MessageCircle,
    title: "Постановка и коррекция звукопроизношения",
    description: "Коррекция звуков у детей и взрослых.",
    bgColor: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
    category: "speech",
    link: "/services/postanovka-i-korrektsiya-zvukoproiznosheniya"
  }, {
    icon: Brain,
    title: "Миофункциональная коррекция",
    description: "Правильное жевание, глотание и дыхание.",
    bgColor: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400",
    category: "speech",
    link: "/services/miofunktsionalnaya-korrektsiya-rechi"
  }, {
    icon: Hand,
    title: "Логопедический массаж",
    description: "Массаж мышц для чёткой артикуляции.",
    bgColor: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400",
    category: "speech",
    link: "/services/logopedicheskiy-massazh"
  },
  // Нарушения речи
  {
    icon: Users,
    title: "Заикание у детей и взрослых",
    description: "Индивидуальные и групповые занятия.",
    bgColor: "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400",
    category: "disorders",
    link: "/services/zaikanie-korrektsiya-rechi"
  },
  // Обучение и развитие
  {
    icon: GraduationCap,
    title: "Подготовка к школе",
    description: "Комплексная подготовка к учебе.",
    bgColor: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
    category: "learning",
    link: "/services/podgotovka-k-shkole"
  }, {
    icon: BookOpen,
    title: "Обучение чтению",
    description: "Запуск чтения без стресса.",
    bgColor: "bg-teal-100 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400",
    category: "learning",
    link: "/services/obuchenie-chteniyu"
  }, {
    icon: MessageSquare,
    title: "Развитие речи",
    description: "Словарь, грамматика и связная речь.",
    bgColor: "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400",
    category: "learning",
    link: "/services/razvitie-rechi"
  }, {
    icon: Activity,
    title: "Развивающие методики",
    description: "Игровые упражнения для речи.",
    bgColor: "bg-lime-100 dark:bg-lime-950/30 text-lime-600 dark:text-lime-400",
    category: "learning",
    link: "/services/igrovye-uprazhneniya-dlya-rechi"
  }];
  const getFilteredServices = () => {
    if (selectedCategory === "all") return allServices;
    return allServices.filter(service => service.category === selectedCategory);
  };
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Услуги логопеда в Москве и онлайн | Светлана Коновалова</title>
        <meta name="description" content="Логопедические услуги для детей и взрослых: коррекция звуков, миофункциональная терапия, заикание, подготовка к школе, обучение чтению. Москва и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/services" />
        <meta property="og:title" content="Услуги логопеда в Москве и онлайн" />
        <meta property="og:description" content="Профессиональная помощь: коррекция звуков, миофункциональная терапия, заикание, подготовка к школе." />
        <meta property="og:url" content="https://govorim-pravilno.ru/services" />
      </Helmet>
      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Чем я <span className="text-primary">помогаю</span>
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
              Индивидуальная помощь детям и взрослым: речь, дыхание, артикуляция, чтение, подготовка к школе и уверенность в общении.
            </p>
            
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="inline-flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                  <TabsTrigger value="all" className="rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-card data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border/50 data-[state=inactive]:hover:border-primary/50">
                    Все направления
                  </TabsTrigger>
                  <TabsTrigger value="speech" className="rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-card data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border/50 data-[state=inactive]:hover:border-primary/50">
                    Речь и произношение
                  </TabsTrigger>
                  <TabsTrigger value="disorders" className="rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-card data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border/50 data-[state=inactive]:hover:border-primary/50">
                    Нарушения речи
                  </TabsTrigger>
                  <TabsTrigger value="learning" className="rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-card data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border/50 data-[state=inactive]:hover:border-primary/50">
                    Обучение и развитие
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={selectedCategory} className="mt-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {getFilteredServices().map((service, index) => <ServiceExpertiseCard key={index} {...service} />)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Запишитесь на бесплатную консультацию и узнайте, как я могу помочь вам или вашему ребёнку
            </p>
            <Button asChild size="lg" className="min-h-[56px] px-8">
              <Link to="/contacts">Записаться на<br className="sm:hidden" /> бесплатную консультацию</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;