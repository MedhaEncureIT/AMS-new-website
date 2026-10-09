import { Link } from '@tanstack/react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { features } from './data';
import { featureDetails } from './feature-details';
import { EditorialHero } from './editorial-hero';
import { AssetNetwork } from './network';
import { CTA, DemoButton, SiteShell } from './site-shell';

export function PlatformFeature({ slug }: { slug: string }) {
  const feature = features.find(item => item.slug === slug);
  const detail = featureDetails[slug];
  if (!feature || !detail) return null;
  return <SiteShell>
    <EditorialHero subject={detail.subject} eyebrow="THE ASTITVA AMS PLATFORM" title={feature.title} description={detail.intro}>
      <div className="hero-actions"><DemoButton /><Button asChild variant="outline" size="lg"><Link to="/platform"><ArrowLeft />All platform tools</Link></Button></div>
    </EditorialHero>
    <section className="section"><div className="container two-column"><div>
      <span className="eyebrow">BUILT FOR EVERYDAY OPERATIONS</span><h2>{feature.description}</h2><p className="feature-page-intro">{feature.detail}</p>
      <div className="feature-workflows">{detail.steps.map(step => <div key={step.title}><Check aria-hidden="true"/><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
    </div><AssetNetwork mode={slug === 'location-management' || slug === 'user-ownership' ? 'organization' : 'workflow'} /></div></section>
    <section className="section feature-example"><div className="container editorial"><span className="eyebrow">IN PRACTICE</span><h2>A familiar workflow. A clearer record.</h2><p>{detail.example}</p></div></section>
    <section className="section"><div className="container"><span className="eyebrow">CONNECTED TOOLS</span><h2>Explore the rest of the platform.</h2><div className="related-features">{features.filter(item => item.slug !== slug).map(item => <Button asChild variant="outline" key={item.slug}><Link to="/platform/$feature" params={{feature:item.slug}}><item.Icon />{item.title}</Link></Button>)}</div></div></section>
    <CTA />
  </SiteShell>;
}