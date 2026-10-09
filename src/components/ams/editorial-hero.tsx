import type { ReactNode } from 'react';
import { ChartNoAxesCombined, ShieldCheck } from 'lucide-react';
import { heroImages, type HeroSubject } from './hero-images';

export function EditorialHero({ eyebrow, title, description, subject = 'home', home = false, children }: {
  eyebrow: string; title: ReactNode; description: string; subject?: HeroSubject; home?: boolean; children?: ReactNode;
}) {
  const primary = heroImages[subject];
  return <section className={`editorial-hero editorial-subject-${subject} ${home ? 'editorial-hero-home' : 'page-intro'}`}>
    <div className="container editorial-hero-grid">
      <div className="editorial-hero-copy">
        <div className="editorial-hero-eyebrow"><span />{eyebrow}</div>
        <h1>{title}</h1>
        <p className="editorial-hero-description">{description}</p>
        {children}
        <div className="editorial-hero-trust"><ShieldCheck size={18} aria-hidden="true"/><span>{home ? 'Built for enterprises, institutions, government and growing businesses.' : 'ASTITVA AMS · ASSET INTELLIGENCE PLATFORM'}</span></div>
      </div>
      <div className="editorial-hero-media">
        <div className="editorial-image-main"><img src={primary.src} alt={primary.alt} width={1536} height={1024} fetchPriority="high"/></div>
        <div className="editorial-image-secondary"><img src={primary.src} alt="" width={758} height={502} loading="lazy"/><div className="editorial-secondary-caption"><ChartNoAxesCombined size={25} aria-hidden="true"/><span>Connected intelligence</span></div></div>
        <div className="editorial-image-detail"><img src={primary.src} alt="" width={758} height={502} loading="lazy"/></div>
        <div className="editorial-data-point"><span>ONE PLATFORM</span><strong>Assets. People.<br/>Locations.</strong><p>Connected, not scattered.</p></div>
      </div>
    </div>
  </section>;
}