import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

// Lazy load all routes for better code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));

const Reviews = lazy(() => import("./pages/Reviews"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Materials = lazy(() => import("./pages/Materials"));
const VideoMaterials = lazy(() => import("./pages/VideoMaterials"));
const AutomatizatsiyaZvukaZh = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaZh"));
const AutomatizatsiyaZvukaL = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaL"));
const AutomatizatsiyaZvukaLSoft = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaLSoft"));
const AutomatizatsiyaZvukaR = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaR"));
const AutomatizatsiyaZvukaRSoft = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaRSoft"));
const AutomatizatsiyaZvukaSh = lazy(() => import("./pages/materials/AutomatizatsiyaZvukaSh"));
const AutomatizatsiyaZvuka = lazy(() => import("./pages/materials/AutomatizatsiyaZvuka"));
const InteractiveGames = lazy(() => import("./pages/InteractiveGames"));
const PokormiGeroya = lazy(() => import("./pages/materials/PokormiGeroya"));
const NaydiZvuk = lazy(() => import("./pages/materials/NaydiZvuk"));
const NaydiParu = lazy(() => import("./pages/materials/NaydiParu"));
const ChtoSpryatalos = lazy(() => import("./pages/materials/ChtoSpryatalos"));
const LishnyayaKartinka = lazy(() => import("./pages/materials/LishnyayaKartinka"));
const SoberiSlovo = lazy(() => import("./pages/materials/SoberiSlovo"));
const LopniPuzyr = lazy(() => import("./pages/Games/LopniPuzyr"));
const PoimaiZvuk = lazy(() => import("./pages/Games/PoimaiZvuk"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MyofunctionalCorrection = lazy(() => import("./pages/services/MyofunctionalCorrection"));
const PronunciationCorrection = lazy(() => import("./pages/services/PronunciationCorrection"));
const StutteringTherapy = lazy(() => import("./pages/services/StutteringTherapy"));
const SchoolPreparation = lazy(() => import("./pages/services/SchoolPreparation"));
const ReadingLessons = lazy(() => import("./pages/services/ReadingLessons"));
const SpeechTherapyMassage = lazy(() => import("./pages/services/SpeechTherapyMassage"));
const SpeechDevelopment = lazy(() => import("./pages/services/SpeechDevelopment"));
const DevelopmentalMethods = lazy(() => import("./pages/services/DevelopmentalMethods"));
const SpeechDevelopmentTips = lazy(() => import("./pages/blog/SpeechDevelopmentTips"));
const MyofunctionalBasics = lazy(() => import("./pages/blog/MyofunctionalBasics"));
const SchoolReadiness = lazy(() => import("./pages/blog/SchoolReadiness"));
const UzdechkaYazyka = lazy(() => import("./pages/blog/UzdechkaYazyka"));
const StutteringAdults = lazy(() => import("./pages/blog/StutteringAdults"));
const SvistyashchieZvuki = lazy(() => import("./pages/blog/SvistyashchieZvuki"));
const Parasigmatizm = lazy(() => import("./pages/blog/Parasigmatizm"));
const MezhzubnoeProiznoshenie = lazy(() => import("./pages/blog/MezhzubnoeProiznoshenie"));
const GorlovoeR = lazy(() => import("./pages/blog/GorlovoeR"));
const SpeechGamesRoad = lazy(() => import("./pages/blog/SpeechGamesRoad"));
const ReadingDifficulties = lazy(() => import("./pages/blog/ReadingDifficulties"));
const BilingualReading = lazy(() => import("./pages/blog/BilingualReading"));
const OnlineSpeechTherapist = lazy(() => import("./pages/blog/OnlineSpeechTherapist"));
const VyborLogopedaOnline = lazy(() => import("./pages/blog/VyborLogopedaOnline"));
const OtkrytyyRot = lazy(() => import("./pages/blog/OtkrytyyRot"));
const SlurredSpeech = lazy(() => import("./pages/blog/SlurredSpeech"));
const RussianForExpats = lazy(() => import("./pages/blog/RussianForExpats"));
const MyofunctionalTongue = lazy(() => import("./pages/blog/MyofunctionalTongue"));
const SchoolChecklist = lazy(() => import("./pages/blog/SchoolChecklist"));
const BreathingSpeech = lazy(() => import("./pages/blog/BreathingSpeech"));
const FrenulumSurgery = lazy(() => import("./pages/blog/FrenulumSurgery"));
const SpeechBite = lazy(() => import("./pages/blog/SpeechBite"));
const TeachReading = lazy(() => import("./pages/blog/TeachReading"));
const OnlineLogopedia = lazy(() => import("./pages/blog/OnlineLogopedia"));
const MouthBreathing = lazy(() => import("./pages/blog/MouthBreathing"));
const BilingualBrain = lazy(() => import("./pages/blog/BilingualBrain"));
const StutteringChildren = lazy(() => import("./pages/blog/StutteringChildren"));
const StutteringPsychology = lazy(() => import("./pages/blog/StutteringPsychology"));
const RSoundAdults = lazy(() => import("./pages/blog/RSoundAdults"));
const OnlineLogopedia2 = lazy(() => import("./pages/blog/OnlineLogopedia2"));
const PostureMouth = lazy(() => import("./pages/blog/PostureMouth"));
const ChildNotSpeaking = lazy(() => import("./pages/blog/ChildNotSpeaking"));
const SnoringSpeech = lazy(() => import("./pages/blog/SnoringSpeech"));
const MouthBreathingDanger = lazy(() => import("./pages/blog/MouthBreathingDanger"));
const SpeechPyramid = lazy(() => import("./pages/blog/SpeechPyramid"));
const StutteringOvercoming = lazy(() => import("./pages/blog/StutteringOvercoming"));
const BracesMyofunctional = lazy(() => import("./pages/blog/BracesMyofunctional"));
const ChewingCorrectly = lazy(() => import("./pages/blog/ChewingCorrectly"));
const InfantileSwallowing = lazy(() => import("./pages/blog/InfantileSwallowing"));
const PlayActivity = lazy(() => import("./pages/blog/PlayActivity"));
const SwallowingEndings = lazy(() => import("./pages/blog/SwallowingEndings"));
const LogopedNeSpravlyaetsya = lazy(() => import("./pages/blog/LogopedNeSpravlyaetsya"));
const SoskaVred = lazy(() => import("./pages/blog/SoskaVred"));
const BreketyRech = lazy(() => import("./pages/blog/BreketyRech"));
const AdenoidyRotovoeDyhanie = lazy(() => import("./pages/blog/AdenoidyRotovoeDyhanie"));
const FitnesYazyka = lazy(() => import("./pages/blog/FitnesYazyka"));
const HrapRazbitost = lazy(() => import("./pages/blog/HrapRazbitost"));
const YazykZuby = lazy(() => import("./pages/blog/YazykZuby"));
const YazykMezhduZubami = lazy(() => import("./pages/blog/YazykMezhduZubami"));
const VyborLogopedaShkola = lazy(() => import("./pages/blog/VyborLogopedaShkola"));
const InfantilnyyGlotok = lazy(() => import("./pages/blog/InfantilnyyGlotok"));
const MioterapiyaNeEffektivna = lazy(() => import("./pages/blog/MioterapiyaNeEffektivna"));
const RasshchelinaGuby = lazy(() => import("./pages/blog/RasshchelinaGuby"));
const RebenokSpitSOtkrytymRtom = lazy(() => import("./pages/blog/RebenokSpitSOtkrytymRtom"));
const ImportedArticle = lazy(() => import("./pages/blog/ImportedArticle"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Загрузка...</div></div>}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/miofunktsionalnaya-korrektsiya-rechi" element={<MyofunctionalCorrection />} />
            <Route path="/services/postanovka-i-korrektsiya-zvukoproiznosheniya" element={<PronunciationCorrection />} />
            <Route path="/services/zaikanie-korrektsiya-rechi" element={<StutteringTherapy />} />
            <Route path="/services/podgotovka-k-shkole" element={<SchoolPreparation />} />
            <Route path="/services/obuchenie-chteniyu" element={<ReadingLessons />} />
            <Route path="/services/logopedicheskiy-massazh" element={<SpeechTherapyMassage />} />
            <Route path="/services/razvitie-rechi" element={<SpeechDevelopment />} />
            <Route path="/services/igrovye-uprazhneniya-dlya-rechi" element={<DevelopmentalMethods />} />
            
            <Route path="/materials" element={<Materials />} />
            <Route path="/materials/video" element={<VideoMaterials />} />
            <Route path="/materials/avtomatizatsiya-zvuka-zh" element={<AutomatizatsiyaZvukaZh />} />
            <Route path="/materials/avtomatizatsiya-zvuka-l" element={<AutomatizatsiyaZvukaL />} />
            <Route path="/materials/avtomatizatsiya-zvuka-l-myagkiy" element={<AutomatizatsiyaZvukaLSoft />} />
            <Route path="/materials/avtomatizatsiya-zvuka-r" element={<AutomatizatsiyaZvukaR />} />
            <Route path="/materials/avtomatizatsiya-zvuka-r-myagkiy" element={<AutomatizatsiyaZvukaRSoft />} />
            <Route path="/materials/avtomatizatsiya-zvuka-sh" element={<AutomatizatsiyaZvukaSh />} />
            <Route path="/materials/avtomatizatsiya-zvuka" element={<AutomatizatsiyaZvuka />} />
            <Route path="/materials/interaktivnye-igry" element={<InteractiveGames />} />
            <Route path="/materials/interaktivnye-igry/pokormi-geroya" element={<PokormiGeroya />} />
            <Route path="/materials/interaktivnye-igry/naydi-zvuk" element={<NaydiZvuk />} />
            <Route path="/materials/interaktivnye-igry/naydi-paru" element={<NaydiParu />} />
            <Route path="/materials/interaktivnye-igry/chto-spryatalos" element={<ChtoSpryatalos />} />
            <Route path="/materials/interaktivnye-igry/lishnyaya-kartinka" element={<LishnyayaKartinka />} />
            <Route path="/materials/interaktivnye-igry/soberi-slovo" element={<SoberiSlovo />} />
            <Route path="/games/lopni-puzyr" element={<LopniPuzyr />} />
            <Route path="/games/poimai-zvuk" element={<PoimaiZvuk />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-index" element={<BlogIndex />} />
            <Route path="/blog/speech-development-tips" element={<SpeechDevelopmentTips />} />
            <Route path="/blog/myofunctional-basics" element={<MyofunctionalBasics />} />
            <Route path="/blog/school-readiness" element={<SchoolReadiness />} />
            <Route path="/blog/uzdechka-yazyka-5-priznakov" element={<UzdechkaYazyka />} />
            <Route path="/blog/zaikanie-u-vzroslyh" element={<StutteringAdults />} />
            <Route path="/blog/svistyashchie-zvuki" element={<SvistyashchieZvuki />} />
            <Route path="/blog/parasigmatizm" element={<Parasigmatizm />} />
            <Route path="/blog/mezhzubnoe-proiznoshenie" element={<MezhzubnoeProiznoshenie />} />
            <Route path="/blog/gorlovoe-r" element={<GorlovoeR />} />
            <Route path="/blog/speech-games-road" element={<SpeechGamesRoad />} />
            <Route path="/blog/reading-difficulties" element={<ReadingDifficulties />} />
            <Route path="/blog/bilingual-reading" element={<BilingualReading />} />
            <Route path="/blog/vybor-logopeda-online" element={<VyborLogopedaOnline />} />
            <Route path="/blog/otkrytyy-rot-oshibki-roditeley" element={<OtkrytyyRot />} />
            <Route path="/blog/online-speech-therapist" element={<OnlineSpeechTherapist />} />
            <Route path="/blog/slurred-speech" element={<SlurredSpeech />} />
            <Route path="/blog/russian-for-expats" element={<RussianForExpats />} />
            <Route path="/blog/myofunctional-tongue" element={<MyofunctionalTongue />} />
            <Route path="/blog/school-checklist" element={<SchoolChecklist />} />
            <Route path="/blog/breathing-speech" element={<BreathingSpeech />} />
            <Route path="/blog/frenulum-surgery" element={<FrenulumSurgery />} />
            <Route path="/blog/speech-bite" element={<SpeechBite />} />
            <Route path="/blog/teach-reading" element={<TeachReading />} />
            <Route path="/blog/online-logopedia" element={<OnlineLogopedia />} />
            <Route path="/blog/mouth-breathing" element={<MouthBreathing />} />
            <Route path="/blog/bilingual-brain" element={<BilingualBrain />} />
            <Route path="/blog/stuttering-children" element={<StutteringChildren />} />
            <Route path="/blog/stuttering-psychology" element={<StutteringPsychology />} />
            <Route path="/blog/r-sound-adults" element={<RSoundAdults />} />
            <Route path="/blog/online-logopedia-2" element={<OnlineLogopedia2 />} />
            <Route path="/blog/posture-mouth" element={<PostureMouth />} />
            <Route path="/blog/child-not-speaking" element={<ChildNotSpeaking />} />
            <Route path="/blog/snoring-speech" element={<SnoringSpeech />} />
            <Route path="/blog/mouth-breathing-danger" element={<MouthBreathingDanger />} />
            <Route path="/blog/speech-pyramid" element={<SpeechPyramid />} />
            <Route path="/blog/stuttering-overcoming" element={<StutteringOvercoming />} />
            <Route path="/blog/braces-myofunctional" element={<BracesMyofunctional />} />
            <Route path="/blog/chewing-correctly" element={<ChewingCorrectly />} />
            <Route path="/blog/infantile-swallowing" element={<InfantileSwallowing />} />
            <Route path="/blog/play-activity" element={<PlayActivity />} />
            <Route path="/blog/swallowing-endings" element={<SwallowingEndings />} />
            <Route path="/blog/logoped-ne-spravlyaetsya" element={<LogopedNeSpravlyaetsya />} />
            <Route path="/blog/soska-vred-posle-dvuh-let" element={<SoskaVred />} />
            <Route path="/blog/brekety-i-rech-lifehacks" element={<BreketyRech />} />
            <Route path="/blog/adenoidy-i-rotovoe-dyhanie" element={<AdenoidyRotovoeDyhanie />} />
            <Route path="/blog/fitnes-dlya-yazyka" element={<FitnesYazyka />} />
            <Route path="/blog/hrap-i-razbitost" element={<HrapRazbitost />} />
            <Route path="/blog/yazyk-i-zuby-prikus" element={<YazykZuby />} />
            <Route path="/blog/yazyk-mezhdu-zubami" element={<YazykMezhduZubami />} />
            <Route path="/blog/vybor-logopeda-dlya-shkoly" element={<VyborLogopedaShkola />} />
            <Route path="/blog/infantilnyy-glotok" element={<InfantilnyyGlotok />} />
            <Route path="/blog/kogda-mioterapiya-ne-effektivna" element={<MioterapiyaNeEffektivna />} />
            <Route path="/blog/rasshchelina-guby-i-neba" element={<RasshchelinaGuby />} />
            <Route path="/blog/rebenok-spit-s-otkrytym-rtom" element={<RebenokSpitSOtkrytymRtom />} />
            <Route path="/blog/:slug" element={<ImportedArticle />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
