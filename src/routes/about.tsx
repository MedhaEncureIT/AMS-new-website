import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/ams/pages';
export const Route = createFileRoute('/about')({
 head: () => ({meta:[{title:'About Us — ASTITVA AMS'},{name:'description',content:'Learn about the connected asset intelligence approach behind ASTITVA AMS.'},{property:'og:title',content:'About Us — ASTITVA AMS'},{property:'og:description',content:'Learn about the connected asset intelligence approach behind ASTITVA AMS.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: AboutPage,
});
