import { createFileRoute } from '@tanstack/react-router';
import { ResourcesPage } from '@/components/ams/pages';
export const Route = createFileRoute('/resources')({
 head: () => ({meta:[{title:'Resources & FAQs — ASTITVA AMS'},{name:'description',content:'Practical guides and answers for better asset-management decisions.'},{property:'og:title',content:'Resources & FAQs — ASTITVA AMS'},{property:'og:description',content:'Practical guides and answers for better asset-management decisions.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: ResourcesPage,
});
