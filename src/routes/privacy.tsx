import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/ams/pages';
export const Route = createFileRoute('/privacy')({
 head: () => ({meta:[{title:'Privacy Information — ASTITVA AMS'},{name:'description',content:'Understand how information is handled in the ASTITVA AMS website preview.'},{property:'og:title',content:'Privacy Information — ASTITVA AMS'},{property:'og:description',content:'Understand how information is handled in the ASTITVA AMS website preview.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: LegalPage,
});
