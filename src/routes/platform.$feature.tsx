import { createFileRoute, notFound } from '@tanstack/react-router';
import { features } from '@/components/ams/data';
import { PlatformFeature } from '@/components/ams/platform-feature';

export const Route = createFileRoute('/platform/$feature')({
  beforeLoad: ({ params }) => { if (!features.some(item => item.slug === params.feature)) throw notFound(); },
  head: ({ params }) => {
    const feature = features.find(item => item.slug === params.feature);
    const title = feature ? `${feature.title} — ASTITVA AMS` : 'Platform tool unavailable — ASTITVA AMS';
    const description = feature?.detail ?? 'Explore the connected ASTITVA AMS platform.';
    return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
  },
  component: FeaturePage,
});
function FeaturePage() { const { feature } = Route.useParams(); return <PlatformFeature slug={feature} />; }