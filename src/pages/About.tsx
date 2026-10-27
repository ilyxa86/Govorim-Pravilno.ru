import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CertificatesDialog from "@/components/CertificatesDialog";
import specialistPhoto from "@/assets/specialist-photo-new.jpg";
import specialistOnlinePhoto from "@/assets/specialist-about-online.png";
import offlineWork from "@/assets/offline-work.jpg";
import onlineWork from "@/assets/online-work.jpg";
import confidenceCycle from "@/assets/confidence-cycle.png";
import clientWorldMap from "@/assets/client-world-map.jpg";
import { Smile, Baby, Volume2, MessageSquare, MessageCircle, GraduationCap, MapPin, Video, Hand, AlertCircle, FileText, BookOpen, Zap, Activity, HeartHandshake, Award, Brain, Heart, Stethoscope, Mic, Network, Shield, Lightbulb, Target, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// Certificate imports
import certificate1 from "@/assets/certificates/certificate-new-4.jpg";
import certificate2 from "@/assets/certificates/certificate-new-13.jpg";
import certificate3 from "@/assets/certificates/certificate-new-2.jpg";
import certificate4 from "@/assets/certificates/certificate-new-8.jpg";
import certificate5 from "@/assets/certificates/certificate-new-11.jpg";
import certificate6 from "@/assets/certificates/certificate-new-17.jpg";
import certificate7 from "@/assets/certificates/certificate-new-1.jpg";
import certificate8 from "@/assets/certificates/certificate-new-7.jpg";
import certificate9 from "@/assets/certificates/certificate-new-10.jpg";
import certificate10 from "@/assets/certificates/certificate-new-16.jpg";
import certificate11 from "@/assets/certificates/certificate-new-3.jpg";
import certificate12 from "@/assets/certificates/certificate-new-5.jpg";
import certificate13 from "@/assets/certificates/certificate-new-6.jpg";
import certificate14 from "@/assets/certificates/certificate-new-9.jpg";
import certificate15 from "@/assets/certificates/certificate-new-12.jpg";
import certificate16 from "@/assets/certificates/certificate-new-14.jpg";
import certificate17 from "@/assets/certificates/certificate-new-15.jpg";
import certificate18 from "@/assets/certificates/certificate-new-18.jpg";

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const certificates = [
    { src: certificate1, alt: "Сертификат МИО ПРО - Коррекция глоссо-постурального синдрома" },
    { src: certificate2, alt: "Сертификат МИО ПРО - Коррекция глоссо-постурального синдрома (модуль 2)" },
    { src: certificate3, alt: "Сертификат участия - Заикание: симптоматика, современные методы коррекции" },
    { src: certificate4, alt: "Сертификат участия - Психокоррекция здоровья" },
    { src: certificate5, alt: "Сертификат участия - Психокоррекция здоровья (практикум)" },
    { src: certificate6, alt: "Сертификат дополнительного образования - Терапия тревожных расстройств" },
    { src: certificate7, alt: "Удостоверение - Комплексное преодоление заикания" },
    { src: certificate8, alt: "Удостоверение - Соматопсихология и психокатализ" },
    { src: certificate9, alt: "Удостоверение - Комплексное преодоление заикания" },
    { src: certificate10, alt: "Удостоверение - Соматопсихология и психокатализ (центр Андрея Ермошина)" },
    { src: certificate11, alt: "Диплом - Профессиональная переподготовка по клинической психологии" },
    { src: certificate12, alt: "Диплом - Актуальные вопросы миофункциональной коррекции" },
    { src: certificate13, alt: "Диплом - Профессиональная переподготовка учитель-логопед (дизартрия)" },
    { src: certificate14, alt: "Диплом - Профессиональная переподготовка учитель-логопед" },
    { src: certificate15, alt: "Диплом - Профессиональная переподготовка по клинической психологии и реабилитации" },
    { src: certificate16, alt: "Диплом - Коррекция глоссо-постурального синдрома" },
    { src: certificate17, alt: "Диплом - Дефектология. Логопедия (профессиональная переподготовка)" },
    { src: certificate18, alt: "Диплом - Педагогика и психология (дошкольная)" }
  ];

  const baseEducation = [
    { year: "2015–2016", institution: "Московский социально-гуманитарный институт", specialty: "Учитель-логопед", icon: MessageCircle },
    { year: "2011–2013", institution: "Институт психотерапии и клинической психологии", specialty: "Клинический психолог", icon: Stethoscope },
    { year: "2002–2006", institution: "Московский гештальт-институт", specialty: "Гештальт-терапия", icon: Heart },
    { year: "1988–1990", institution: "Горьковский ГПИ", specialty: "Практический психолог", icon: Brain },
    { year: "1986–1990", institution: "Горьковский государственный педагогический институт им. М. Горького", specialty: "Педагогика и психология", icon: BookOpen }
  ];

  const certifications = [
    { year: "2025", course: "Заикание и современные методы", organization: "«Логопед-профи»", icon: Sparkles },
    { year: "2025", course: "Актуальные вопросы миофункции", organization: "МДАМФТ", icon: FileText },
    { year: "2025", course: "Миофункциональная коррекция у взрослых", organization: "ЦМКиР «МиоФоКс»", icon: Users },
    { year: "2024", course: "Глоссо-постуральный синдром", organization: "Курс Васильевой В.", icon: Target },
    { year: "2024", course: "Функциональная терапия", organization: "«Логопед плюс»", icon: Stethoscope },
    { year: "2023", course: "Авторский подход к заиканию", organization: "ИПКП", icon: Lightbulb },
    { year: "2023", course: "Заикание", organization: "Центр патологии речи", icon: MessageSquare },
    { year: "2021–2022", course: "Соматопсихология", organization: "Центр Психокатализа", icon: Activity },
    { year: "2018", course: "Работа с травмой", organization: "«Дефектология ПРОФ»", icon: Shield },
    { year: "2015–2021", course: "Интегральное нейропрограммирование", organization: "ИНП", icon: Network },
    { year: "2015", course: "Психокоррекция", organization: "Институт инновационных психотехнологий", icon: Zap },
    { year: "2014", course: "Дизартрия", organization: "«Логопед Мастер»", icon: Mic }
  ];

  const areas = [
    { icon: Smile, text: "Неправильное положение языка" },
    { icon: Baby, text: "Инфантильный тип глотания" },
    { icon: Volume2, text: "Постановка звуков" },
    { icon: MessageSquare, text: "Заикание" },
    { icon: MessageCircle, text: "Развитие речи" },
    { icon: GraduationCap, text: "Подготовка к школе" },
    { icon: Hand, text: "Логопедический массаж" },
    { icon: AlertCircle, text: "Алалия" },
    { icon: FileText, text: "Коррекция нарушений устной и письменной речи" },
    { icon: BookOpen, text: "Обучение чтению" },
    { icon: Zap, text: "ЗРР (задержка речевого развития)" },
    { icon: Activity, text: "Развивающие методики" },
    { icon: HeartHandshake, text: "Коррекционная педагогика" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>О специалисте — Светлана Коновалова | Логопед с опытом 25+ лет</title>
        <meta name="description" content="Логопед и клинический психолог с опытом более 25 лет. Специалист по миофункциональной коррекции, постановке звуков, заиканию. Москва и онлайн." />
        <link rel="canonical" href="https://govorim-pravilno.ru/about" />
        <meta property="og:title" content="О специалисте — Светлана Коновалова" />
        <meta property="og:description" content="Логопед и клинический психолог с опытом более 25 лет. Комплексный подход к развитию речи." />
        <meta property="og:url" content="https://govorim-pravilno.ru/about" />
      </Helmet>
      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Обо мне
            </h1>

            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center mb-8">
                  <img src={specialistOnlinePhoto} alt="Светлана Коновалова - онлайн занятия логопеда" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" />
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg leading-relaxed mb-4">
                    Здравствуйте! Меня зовут <strong>Светлана Геннадьевна Коновалова</strong>, я — логопед, клинический психолог и специалист по миофункциональной коррекции с более чем 25-летним опытом работы с детьми и взрослыми.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Мой профессиональный путь начался ещё в 1990-е годы, когда я окончила Горьковский педагогический институт им. М. Горького по специальности педагогика и психология дошкольного возраста. Позже я получила квалификацию практического психолога, а затем — клинического психолога в Институте психотерапии и клинической психологии. Уже тогда я поняла, что логопедия и психология тесно связаны: за многими речевыми нарушениями стоят не только артикуляционные, но и эмоциональные, поведенческие и психофизиологические причины.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Именно поэтому в своей работе я уделяю большое внимание внутреннему состоянию человека — ведь, например, при заикании важно не только корректировать речь, но и снижать тревожность, страх сцены, внутреннее напряжение. Благодаря психологическому образованию я могу видеть проблему комплексно и помогать клиенту быстрее и мягче достигать результата.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mt-8 mb-4">Мой опыт</h2>
                  <p className="text-lg leading-relaxed mb-6">За годы практики я работала в детских садах, школах и частных коррекционных центрах, вела индивидуальные и групповые занятия. С 2009 года активно консультирую как репетитор-логопед, а с 2014 года сотрудничаю с онлайн-платформами, такими как <a href="https://profi.ru/profile/KonovalovaSG/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Profi.ru</a> и <a href="https://ivanovo.repetitors.info/repetitor/p/KonovalovaSG/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Repetitors.info</a>, где провела сотни занятий с детьми и взрослыми из разных городов и стран.</p>
                  
                  <div className="flex justify-center my-8">
                    <img src={clientWorldMap} alt="География клиентов по всему миру" className="w-full max-w-4xl rounded-lg" />
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    Постепенно офлайн-практика переросла в онлайн-формат: оказалось, что дистанционные занятия ничуть не уступают очным, а в некоторых случаях даже удобнее для клиента. В России я начала проводить логопедические занятия с детьми и взрослыми из разных городов — Казани, Новосибирска, Уфы, Пензы, Воронежа, Хабаровска и других. Со временем ко мне стали обращаться новые ученики из-за рубежа — взрослые русскоговорящие соотечественники и родители детей из билингвальных семей, где русский язык сочетается с другими языками и иногда приводит к трудностям в речи. Я работала с соотечественниками из Нидерландов, Сингапура, ОАЭ, Черногории и других стран. Сегодня я успешно провожу не только очные занятия в Москве, но и онлайн-занятия по Skype и Zoom, помогая ученикам любого возраста — от дошкольников до взрослых специалистов — улучшать речь, дикцию и уверенность в себе.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Обучение и развитие</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Я убеждена, что хороший логопед должен постоянно учиться и обновлять свои знания. Именно поэтому регулярно прохожу повышение квалификации и изучаю современные методы коррекции речи. Среди последних курсов и программ, которые я закончила:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                    <li>Центр патологии речи и нейрореабилитации — «Комплексное преодоление заикания» (2023 г.);</li>
                    <li>АНО ДПО «Логопед плюс» — курс «Функциональная терапия в работе логопеда» (2024 г.);</li>
                    <li>МиоФоКс — обучение «Миофункциональная коррекция у взрослых: лёгкое преодоление парафункции языка» (2025 г.);</li>
                    <li>Институт инновационных психотехнологий — программы по соматопсихологии, психокатализу и интегральному нейропрограммированию, помогающие глубже понимать взаимосвязь тела, эмоций и речи.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6">
                    Эти знания позволяют мне использовать интегративный подход — сочетание логопедических техник, дыхательных и миофункциональных упражнений с мягкими психологическими инструментами. Такой метод помогает эффективнее решать даже сложные случаи — от дизартрии и дислалии до логоневрозов и заикания.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Мои форматы работы</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="group">
                      <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src={offlineWork} alt="Офлайн занятия с детьми в кабинете логопеда" className="w-full h-[32rem] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-5 h-5" />
                              <h3 className="text-xl font-bold">Офлайн занятия</h3>
                            </div>
                            <p className="text-sm">Москва и область</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Индивидуальные и групповые занятия на выезде — у вас дома, в привычной и комфортной обстановке.
                      </p>
                    </div>

                    <div className="group">
                      <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src={onlineWork} alt="Онлайн консультации по Zoom и Skype" className="w-full h-[32rem] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <div className="flex items-center gap-2 mb-2">
                              <Video className="w-5 h-5" />
                              <h3 className="text-xl font-bold">Онлайн занятия</h3>
                            </div>
                            <p className="text-sm">Zoom, Skype, видеосвязь</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Эффективные онлайн-занятия для детей и взрослых из любой точки мира.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Мои принципы работы</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    На каждом занятии я стремлюсь создать тёплую, доброжелательную атмосферу, где ребёнок или взрослый чувствует поддержку, безопасность и интерес. В работе с детьми я использую игровые методы и интерактивные упражнения, а со взрослыми — осознанные дыхательные, телесные и речевые практики, направленные на уверенное владение голосом и дикцией.
                  </p>
                  
                  <div className="flex justify-center my-8">
                    <img src={confidenceCycle} alt="Цикл уверенности в речи" className="max-w-md w-full rounded-lg shadow-lg" />
                  </div>

                  <p className="text-lg leading-relaxed mb-8">
                    Моя цель — не просто научить говорить правильно, а помочь человеку полюбить свой голос, избавиться от страха общения и почувствовать радость от свободной, живой речи.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education Section - Моё Образование */}
            <section id="education" className="mb-12">
              <div className="max-w-4xl mx-auto mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Моё Образование</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ниже представлены этапы моего профессионального пути, повышения квалификации и сертификаты.
                </p>
              </div>

              {/* Base Education - Timeline Style */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Базовое образование</h3>
                </div>

                <div className="relative">
                  {/* Timeline vertical line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>

                  <div className="space-y-12">
                    {baseEducation.map((edu, index) => (
                      <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content Card */}
                        <div className="flex-1 md:w-[calc(50%-2rem)]">
                          <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                  <edu.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-col gap-2">
                                    <span className="text-sm text-muted-foreground font-medium">
                                      {edu.year}
                                    </span>
                                    <CardTitle className="text-xl">{edu.specialty}</CardTitle>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pl-[4.5rem]">
                              <p className="text-muted-foreground">{edu.institution}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>

                        {/* Spacer for alternating layout */}
                        <div className="flex-1 md:w-[calc(50%-2rem)] hidden md:block"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-bold">Повышение квалификации</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <cert.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h4 className="font-semibold text-lg leading-tight">
                                {cert.course}
                              </h4>
                              <span className="text-sm text-muted-foreground font-medium flex-shrink-0">
                                {cert.year}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {cert.organization}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certificates Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">Документы и сертификаты</h3>
                </div>

                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                      {certificates.map((cert, index) => (
                        <div key={index} className="flex-[0_0_280px] min-w-0">
                          <CertificatesDialog src={cert.src} alt={cert.alt} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contacts">Записаться на<br className="sm:hidden" /> бесплатную консультацию</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;