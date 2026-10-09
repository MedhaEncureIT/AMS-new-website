import { createFileRoute } from '@tanstack/react-router';
import { ModulesPage } from '@/components/ams/pages';
export const Route = createFileRoute('/modules')({
 head: () => ({meta:[{title:'Asset Management Modules — ASTITVA AMS'},{name:'description',content:'Explore tracking, lifecycle, locations, ownership, audit and reporting modules.'},{property:'og:title',content:'Asset Management Modules — ASTITVA AMS'},{property:'og:description',content:'Explore tracking, lifecycle, locations, ownership, audit and reporting modules.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: ModulesPage,
});
