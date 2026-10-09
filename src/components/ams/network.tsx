import { Box, Users, MapPin, Building2, Database, Truck, FileText, Wrench, ShieldCheck } from 'lucide-react';
import { useId } from 'react';
import brandIcon from '@/assets/astitva-icon.png.asset.json';

export function AssetNetwork({ ecosystem = false, mode = 'assets' }: { ecosystem?: boolean; mode?: 'assets' | 'workflow' | 'organization' }) {
  const id = useId().replace(/:/g, '');
  const nodes = mode === 'workflow'
    ? [{ label: 'Register', Icon: Box }, { label: 'Assign', Icon: Users }, { label: 'Track', Icon: MapPin }, { label: 'Maintain', Icon: Wrench }, { label: 'Audit', Icon: ShieldCheck }, { label: 'Report', Icon: FileText }]
    : mode === 'organization'
    ? [{ label: 'Offices', Icon: Building2 }, { label: 'Teams', Icon: Users }, { label: 'Sites', Icon: MapPin }, { label: 'Vendors', Icon: Truck }, { label: 'Records', Icon: FileText }, { label: 'Insights', Icon: Database }]
    : ecosystem
    ? [{ label: 'Employee', Icon: Users }, { label: 'Department', Icon: Building2 }, { label: 'Location', Icon: MapPin }, { label: 'Vendor', Icon: Truck }, { label: 'Documents', Icon: FileText }, { label: 'Maintenance', Icon: Wrench }, { label: 'Audit', Icon: ShieldCheck }]
    : [{ label: 'Assets', Icon: Box }, { label: 'Locations', Icon: MapPin }, { label: 'Departments', Icon: Building2 }, { label: 'Data', Icon: Database }, { label: 'Vendors', Icon: Truck }, { label: 'People', Icon: Users }];
  return <div className={`asset-network ${ecosystem ? 'ecosystem-network' : ''}`}>
    <svg viewBox="0 0 620 530" role="img" aria-label={mode === 'workflow' ? 'Radial asset workflow connecting registration, assignment, tracking, maintenance, audit and reports' : mode === 'organization' ? 'Radial organization network connecting offices, teams, sites, vendors, records and insights' : ecosystem ? 'An asset connected to employees, departments, locations, vendors, documents, maintenance and audits' : 'ASTITVA AMS connects assets, people, locations, departments, vendors and data'}>
      <defs>
        <radialGradient id={`${id}-glow`}><stop offset="0" stopColor="var(--network-glow)" stopOpacity=".6"/><stop offset="1" stopColor="var(--network-glow)" stopOpacity="0"/></radialGradient>
        <linearGradient id={`${id}-core`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--primary)"/><stop offset="1" stopColor="var(--navy)"/></linearGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="7" stdDeviation="10" floodColor="var(--primary)" floodOpacity=".15"/></filter>
      </defs>
      <circle cx="310" cy="260" r="238" fill={`url(#${id}-glow)`}/>
      <g className="orbit-ring"><circle cx="310" cy="260" r="190" fill="none" stroke="var(--network-line)" strokeWidth="1"/><circle cx="310" cy="260" r="228" fill="none" stroke="var(--network-line)" strokeWidth="1" strokeDasharray="3 8"/><circle cx="310" cy="70" r="3" fill="var(--accent)"/><circle cx="310" cy="450" r="3" fill="var(--primary)"/></g>
      <circle cx="310" cy="260" r="130" fill="none" stroke="var(--network-line)" strokeDasharray="4 6"/>
      {nodes.map(({ label, Icon }, i) => {
        const angle = -Math.PI / 2 + i * (2 * Math.PI / nodes.length);
        const x = 310 + 196 * Math.cos(angle), y = 260 + 185 * Math.sin(angle);
        const d = `M310 260 Q${310 + Math.cos(angle + .5) * 95} ${260 + Math.sin(angle + .5) * 95} ${x} ${y}`;
        return <g key={label}>
          <path d={d} stroke="var(--network-line-strong)" strokeWidth="1.3" fill="none"/>
          <path d={d} stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" fill="none" pathLength="100" strokeDasharray="3 97" className={`data-pulse pulse-${i}`}/>
          <g className={`network-node node-${i}`}><rect x={x - 57} y={y - 37} width="114" height="78" rx="10" fill="var(--surface)" stroke="var(--border)" filter={`url(#${id}-shadow)`}/><rect x={x - 15} y={y - 25} width="30" height="30" rx="7" fill="var(--secondary)"/><Icon x={x - 9} y={y - 19} width="18" height="18" stroke="var(--primary)" strokeWidth="1.6"/><text x={x} y={y + 25} textAnchor="middle" fill="var(--foreground)" fontSize="12" fontWeight="600">{label}</text><circle cx={x + 46} cy={y - 27} r="2.5" fill="var(--accent)"/></g>
        </g>;
      })}
      <circle cx="310" cy="260" r="83" fill="var(--primary)" opacity=".045" className="core-halo"/><circle cx="310" cy="260" r="68" fill={`url(#${id}-core)`} filter={`url(#${id}-shadow)`}/>
      {ecosystem ? <Box x="294" y="220" width="32" height="32" stroke="var(--primary-foreground)" strokeWidth="1.5"/> : <><circle cx="310" cy="235" r="23" fill="var(--surface)"/><image href={brandIcon.url} x="290" y="215" width="40" height="40" preserveAspectRatio="xMidYMid meet"/></>}
      <text x="310" y="276" textAnchor="middle" fill="var(--primary-foreground)" fontWeight="750" fontSize={ecosystem ? '19' : '15'}>{ecosystem ? 'Asset' : 'ASTITVA AMS'}</text><text x="310" y="294" textAnchor="middle" fill="var(--core-muted)" fontSize="8" letterSpacing="1.6">{ecosystem ? 'ONE SOURCE OF TRUTH' : 'CONNECTED INTELLIGENCE'}</text>
    </svg>
    {!ecosystem && <div className="network-caption"><span className="status-dot"/> ONE ECOSYSTEM. COMPLETE VISIBILITY.</div>}
  </div>;
}
