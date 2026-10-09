import { createFileRoute } from '@tanstack/react-router';
import { SolutionsPage } from '@/components/ams/pages';
export const Route = createFileRoute('/solutions')({
 head: () => ({meta:[{title:'Industry Solutions — ASTITVA AMS'},{name:'description',content:'Asset intelligence for government, enterprises, institutions and growing organizations.'},{property:'og:title',content:'Industry Solutions — ASTITVA AMS'},{property:'og:description',content:'Asset intelligence for government, enterprises, institutions and growing organizations.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: SolutionsPage,
});
