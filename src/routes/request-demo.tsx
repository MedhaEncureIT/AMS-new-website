import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useDemoModal } from '@/components/ams/demo-modal';
export const Route = createFileRoute('/request-demo')({
 head: () => ({meta:[{title:'Request a Demo — ASTITVA AMS'},{name:'description',content:'Prepare a personalized asset-management demo enquiry for your organization.'},{property:'og:title',content:'Request a Demo — ASTITVA AMS'},{property:'og:description',content:'Prepare a personalized asset-management demo enquiry for your organization.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: DemoRedirect,
});

function DemoRedirect(){const navigate=useNavigate();const showDemo=useDemoModal();useEffect(()=>{void navigate({to:'/',replace:true}).then(showDemo)},[navigate,showDemo]);return null;}
