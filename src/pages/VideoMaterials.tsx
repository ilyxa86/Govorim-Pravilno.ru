import { Helmet } from "react-helmet-async";
import { ExternalLink, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const channelUrl = "https://www.youtube.com/channel/UCbO2k-rMEUDIpHw6kDYvCfQ";
const videos = [
  ["Светлана Коновалова — Мы и белки, и собачки (быстрая версия)", "LDQYpOva9Kg", "Быстрая версия видео «Мы и белки, и собачки»."],
  ["Светлана Коновалова — Мы и белки, и собачки", "tMDNzADevac", "Основная версия видео «Мы и белки, и собачки»."],
  ["Светлана Коновалова — Ля-ля-ля-ля — на занятие пора", "ZKsV8v_qAFI", "Игровая речевая разминка для малышей."],
  ["Светлана Коновалова — Ручками похлопаем — хлоп-хлоп-хлоп!", "T7CXiCGI5i0", "Движение, ритм и речь в одном игровом упражнении."],
  ["Светлана Коновалова — Мячик мячик побежал", "rBMNMvX5FfA", "Игровое задание для внимания, темпа и речевой активности."],
];

export default function VideoMaterials() {
  return <div className="min-h-screen flex flex-col"><Helmet><title>Видео Светланы | Материалы и игры</title><meta name="description" content="Логопедические видео Светланы Коноваловой: логоритмика, речевые игры, артикуляция и развитие речи." /></Helmet><Header /><Breadcrumbs /><main className="flex-grow"><section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/20"><div className="container mx-auto max-w-5xl"><div className="max-w-3xl mb-10"><p className="text-primary font-semibold mb-3">Материалы и игры</p><h1 className="text-3xl md:text-5xl font-bold mb-4">Видео Светланы</h1><p className="text-muted-foreground text-lg">Логоритмические упражнения, речевые игры и практические материалы для занятий дома.</p></div><div className="space-y-5">{videos.map(([title,id,description])=><a key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all"><div className="relative aspect-video w-full shrink-0 bg-muted sm:aspect-auto sm:w-2/5"><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy" className="h-full w-full object-cover" /><span className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><Play className="h-5 w-5 fill-current" /></span></div><div className="flex flex-1 flex-col justify-center p-5 md:p-7"><h2 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors md:text-xl">{title}</h2><p className="text-muted-foreground mt-2">{description}</p><span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">Смотреть на YouTube <ExternalLink className="h-4 w-4" /></span></div></a>)}</div><div className="text-center mt-12"><a href={channelUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Все видео на YouTube <ExternalLink className="h-4 w-4" /></a></div></div></section></main><Footer /></div>;
}
