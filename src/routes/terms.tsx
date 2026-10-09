import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/ams/pages';
export const Route = createFileRoute('/terms')({
 head: () => ({meta:[{title:'Terms of Service — ASTITVA AMS'},{name:'description',content:'Website preview information and service availability notes for ASTITVA AMS.'},{property:'og:title',content:'Terms of Service — ASTITVA AMS'},{property:'og:description',content:'Website preview information and service availability notes for ASTITVA AMS.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: () => <LegalPage terms/>,
});
