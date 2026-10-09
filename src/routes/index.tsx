import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EditorialHero } from '@/components/ams/editorial-hero';
import { SiteShell, DemoButton, CTA } from '@/components/ams/site-shell';
import { TrustStrip, ProblemSection, FeaturesSection, LifecycleSection, EcosystemSection, SolutionsSection, WhySection, DashboardSection, SecuritySection } from '@/components/ams/sections';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'ASTITVA AMS — Connected Asset Intelligence'},{name:'description',content:'Complete visibility, better control and smarter assets. Connect your assets, people, locations and lifecycle with ASTITVA AMS.'},{property:'og:title',content:'ASTITVA AMS — Connected Asset Intelligence'},{property:'og:description',content:'One connected ecosystem for every asset. Discover the enterprise asset management platform.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Index,
});
function Index(){return <SiteShell><EditorialHero home eyebrow="SMART ASSET MANAGEMENT" title={<>Complete Visibility.<br/>Better Control.<br/><span>Smarter Assets.</span></>} description="Manage every asset, location, movement and lifecycle from one intelligent platform built for modern organizations."><div className="hero-actions"><DemoButton/><Button asChild size="lg" variant="outline"><Link to="/platform">Explore Platform<ArrowRight size={16}/></Link></Button></div></EditorialHero><TrustStrip/><ProblemSection/><FeaturesSection/><LifecycleSection/><EcosystemSection/><SolutionsSection/><WhySection/><DashboardSection/><SecuritySection/><CTA/></SiteShell>}
