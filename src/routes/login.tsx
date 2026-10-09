import { createFileRoute } from '@tanstack/react-router';
import { LoginPage } from '@/components/ams/pages';
export const Route = createFileRoute('/login')({
 head: () => ({meta:[{title:'Workspace Login — ASTITVA AMS'},{name:'description',content:'Find guidance on accessing your organization’s ASTITVA AMS workspace.'},{property:'og:title',content:'Workspace Login — ASTITVA AMS'},{property:'og:description',content:'Find guidance on accessing your organization’s ASTITVA AMS workspace.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: LoginPage,
});
