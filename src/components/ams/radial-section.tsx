import { AssetNetwork } from './network';
import { DemoButton } from './site-shell';

export function RadialSection({ mode = 'workflow' }: { mode?: 'workflow' | 'organization' }) {
  const workflow = mode === 'workflow';
  return <section className="section radial-section"><div className="container two-column"><div>
    <span className="eyebrow">{workflow ? 'A CONNECTED WORKFLOW' : 'ACROSS YOUR ORGANIZATION'}</span>
    <h2>{workflow ? 'Every action connects to the same asset.' : 'Many locations. One shared view.'}</h2>
    <p>{workflow ? 'From a laptop’s first registration to its next handover, keep the people, movements and maintenance history together. Your teams work from the same record, not separate registers.' : 'The equipment at your plant, the laptops in your branch office and the records at head office belong to one organization. Bring them together without losing the context of each site.'}</p>
    <DemoButton />
  </div><AssetNetwork mode={mode} /></div></section>;
}