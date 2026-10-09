import { createFileRoute } from '@tanstack/react-router';
import { PlatformPage } from '@/components/ams/pages';
export const Route = createFileRoute('/platform/')({
 head: () => ({meta:[{title:'Platform — ASTITVA AMS'},{name:'description',content:'One connected platform for asset tracking, ownership, locations and lifecycle management.'},{property:'og:title',content:'Platform — ASTITVA AMS'},{property:'og:description',content:'One connected platform for asset tracking, ownership, locations and lifecycle management.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: PlatformPage,
});
