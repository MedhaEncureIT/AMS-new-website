import { createFileRoute } from '@tanstack/react-router';
import { WhyPage } from '@/components/ams/pages';
export const Route = createFileRoute('/why-astitva')({
 head: () => ({meta:[{title:'Why Astitva — ASTITVA AMS'},{name:'description',content:'Discover the value of connected records, accountability and asset visibility.'},{property:'og:title',content:'Why Astitva — ASTITVA AMS'},{property:'og:description',content:'Discover the value of connected records, accountability and asset visibility.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: WhyPage,
});
