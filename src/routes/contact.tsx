import { createFileRoute } from '@tanstack/react-router';
import { EnquiryPage } from '@/components/ams/pages';
export const Route = createFileRoute('/contact')({
 head: () => ({meta:[{title:'Contact — ASTITVA AMS'},{name:'description',content:'Prepare an enquiry about your asset-management requirements.'},{property:'og:title',content:'Contact — ASTITVA AMS'},{property:'og:description',content:'Prepare an enquiry about your asset-management requirements.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: () => <EnquiryPage contact/>,
});
