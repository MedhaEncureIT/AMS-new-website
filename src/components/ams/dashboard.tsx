import { useMemo, useState } from 'react';
import { Box, LayoutDashboard, MapPin, Users, BarChart3, Settings, Bell, Search, ArrowUpRight, CircleCheck, Wrench, ArrowRightLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brandLogo from '@/assets/astitva-logo.png.asset.json';
import { downloadCsv, type CsvCell } from '@/lib/dashboard-csv';

const months = ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
const categories = ['IT Equipment','Machinery','Furniture','Other'] as const;
const locations = ['Mumbai HQ','Pune Office','Bengaluru Office','Delhi Office'] as const;
type Category = typeof categories[number] | 'All';
type Loc = typeof locations[number] | 'All';
const ranges = { '30d': 1, '3m': 3, '6m': 6, '12m': 12 } as const;
type Range = keyof typeof ranges;

// Fictional sample matrix: assets per category per location
const base: Record<string, number[]> = {
  'IT Equipment': [2620, 1530, 1310, 535],
  Machinery: [1390, 880, 760, 340],
  Furniture: [920, 590, 500, 238],
  Other: [318, 186, 172, 197],
};
const monthly = [38, 42, 47, 40, 44, 52, 45, 59, 51, 72, 67, 89];
const activity = [
  { Icon: CircleCheck, title: 'Dell Latitude 5440 assigned', sub: 'Rahul Sharma · IT Department', cat: 'IT Equipment', loc: 'Mumbai HQ', days: 0 },
  { Icon: ArrowRightLeft, title: '12 office chairs transferred', sub: 'Mumbai HQ → Pune Office', cat: 'Furniture', loc: 'Pune Office', days: 1 },
  { Icon: Wrench, title: 'CNC lathe serviced', sub: 'Maintenance · Engineering', cat: 'Machinery', loc: 'Bengaluru Office', days: 9 },
  { Icon: Wrench, title: 'HP LaserJet Pro repaired', sub: 'Maintenance · IT Department', cat: 'IT Equipment', loc: 'Delhi Office', days: 21 },
  { Icon: CircleCheck, title: 'Forklift registered', sub: 'Warehouse · Operations', cat: 'Machinery', loc: 'Pune Office', days: 48 },
  { Icon: ArrowRightLeft, title: '40 monitors reallocated', sub: 'Delhi Office → Bengaluru Office', cat: 'IT Equipment', loc: 'Bengaluru Office', days: 75 },
  { Icon: CircleCheck, title: 'Conference tables audited', sub: 'Annual audit · Facilities', cat: 'Furniture', loc: 'Mumbai HQ', days: 130 },
  { Icon: Wrench, title: 'Generator inspection', sub: 'Utilities · Facilities', cat: 'Other', loc: 'Delhi Office', days: 220 },
];
const fmt = (n: number) => n.toLocaleString('en-IN');

export function DashboardPreview() {
  const [cat, setCat] = useState<Category>('All');
  const [loc, setLoc] = useState<Loc>('All');
  const [range, setRange] = useState<Range>('6m');

  const data = useMemo(() => {
    const li = loc === 'All' ? null : locations.indexOf(loc);
    const catTotals = categories.map(c => { const row = base[c] ?? []; return li === null ? row.reduce((a, b) => a + b, 0) : row[li] ?? 0; });
    const total = cat === 'All' ? catTotals.reduce((a, b) => a + b, 0) : catTotals[categories.indexOf(cat)] ?? 0;
    const locTotals = locations.map((_, i) => categories.reduce((s, c, ci) => (cat === 'All' || cat === c) ? s + (base[c]?.[i] ?? 0) : s, 0) * (loc === 'All' || loc === locations[i] ? 1 : 0));
    const share = total / categories.reduce((s, c) => s + (base[c] ?? []).reduce((a, b) => a + b, 0), 0);
    const n = ranges[range];
    const bars = range === '30d' ? [18, 22, 15, 27].map((v, i) => ({ label: `W${i + 1}`, v: Math.round(v * share * 3) })) : monthly.slice(-n).map((v, i) => ({ label: months[12 - n + i] ?? '', v: Math.round(v * share * 10) }));
    const maxDays = n * 30;
    const log = activity.filter(a => a.days <= maxDays && (cat === 'All' || a.cat === cat) && (loc === 'All' || a.loc === loc));
    return { catTotals, total, locTotals, bars, log };
  }, [cat, loc, range]);

  const sum = data.catTotals.reduce((a, b) => a + b, 0) || 1;
  const maxBar = Math.max(...data.bars.map(b => b.v), 1);
  const maxLoc = Math.max(...data.locTotals, 1);
  const rangeLabel = range === '30d' ? 'Last 30 days' : `Last ${ranges[range]} months`;
  const categoryValue = (i: number) => cat === 'All' || categories[i] === cat ? data.catTotals[i] ?? 0 : 0;
  const categoryPercent = (i: number) => Math.round(categoryValue(i) / (data.total || 1) * 100);
  function exportData(kind: 'charts' | 'activity') {
    const filters = [cat, loc, rangeLabel, 'Fictional sample data'];
    const rows: CsvCell[][] = kind === 'charts'
      ? [['Chart', 'Label', 'Value', 'Percentage', 'Selected category', 'Selected location', 'Selected date range', 'Data source'],
          ...categories.flatMap((c, i) => cat === 'All' || cat === c ? [['Asset distribution (current snapshot)', c, categoryValue(i), categoryPercent(i), ...filters]] : []),
          ...data.bars.map(b => ['Assets registered (selected period)', b.label, b.v, '', ...filters]),
          ...locations.flatMap((l, i) => loc === 'All' || loc === l ? [['Location overview (current snapshot)', l, data.locTotals[i] ?? 0, '', ...filters]] : [])]
      : [['Activity', 'Details', 'Category', 'Location', 'Days ago', 'Selected category', 'Selected location', 'Selected date range', 'Data source'],
          ...data.log.map(a => [a.title, a.sub, a.cat, a.loc, a.days, ...filters])];
    downloadCsv(`astitva-ams-${kind}-${cat.toLowerCase().replaceAll(' ', '-')}-${loc.toLowerCase().replaceAll(' ', '-')}-${range}.csv`, rows);
  }
  const stats: [string, number, string][] = [['Total Assets', data.total, '100%'], ['Assigned Assets', Math.round(data.total * .788), '78.8%'], ['Available Assets', Math.round(data.total * .185), '18.5%'], ['Under Maintenance', Math.round(data.total * .026), '2.6%']];
  let acc = 0;
  const gradient = data.catTotals.map((v, i) => { const s = acc; acc += (cat === 'All' || categories[i] === cat ? v : 0); return `${["var(--primary)","var(--accent)","var(--violet)","var(--border)"][i]} ${(s / (cat === 'All' ? sum : data.total || 1)) * 100}% ${(acc / (cat === 'All' ? sum : data.total || 1)) * 100}%`; }).join(',');

  return <div className="dashboard-preview" aria-label="Fictional ASTITVA AMS dashboard with sample asset data">
    <aside className="dashboard-sidebar"><div className="dashboard-logo"><img src={brandLogo.url} alt="ASTITVA AMS" width={1000} height={296}/></div><small>WORKSPACE</small>{[{Icon:LayoutDashboard,label:'Overview'},{Icon:Box,label:'Assets'},{Icon:MapPin,label:'Locations'},{Icon:Users,label:'People'},{Icon:BarChart3,label:'Reports'}].map(({Icon,label},i)=><div className={`dash-nav ${i===0?'selected':''}`} key={label}><Icon size={15}/>{label}</div>)}<div className="dash-bottom"><Settings size={15}/> Settings</div></aside>
    <div className="dashboard-main">
      <div className="dash-top"><span>Organization overview</span><div><Search size={15}/><Bell size={15}/><span className="avatar">AK</span></div></div>
      <div className="dash-heading"><div><h3>Asset overview</h3><p>Across offices, stores and departments.</p></div><span className="sample-label">Sample workspace</span></div>
      <div className="dash-filters" role="group" aria-label="Dashboard filters">
        <label>Category<select value={cat} onChange={e => setCat(e.target.value as Category)}><option>All</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>Location<select value={loc} onChange={e => setLoc(e.target.value as Loc)}><option>All</option>{locations.map(l => <option key={l}>{l}</option>)}</select></label>
        <div className="dash-range" role="radiogroup" aria-label="Date range">{(Object.keys(ranges) as Range[]).map(r => <Button variant="ghost" type="button" key={r} role="radio" aria-checked={range === r} className={range === r ? 'active' : ''} onClick={() => setRange(r)}>{r === '30d' ? '30 days' : r === '3m' ? '3 months' : r === '6m' ? '6 months' : '12 months'}</Button>)}</div>
      </div>
      <div className="dash-exports"><Button variant="outline" size="sm" onClick={() => exportData('charts')}><Download size={14}/>Charts CSV</Button><Button variant="outline" size="sm" onClick={() => exportData('activity')}><Download size={14}/>Activity CSV</Button></div>
      <div className="dash-stats">{stats.map(([label, value, detail]) => <div key={label}><span>{label}</span><strong>{fmt(value)}</strong><small><ArrowUpRight size={11}/>{detail} <span>of filtered assets</span></small></div>)}</div>
      <div className="dash-chart-row">
        <div className="dash-panel"><h4>Asset Distribution <span>By category</span></h4><div className="distribution"><div className="donut" style={{ background: `conic-gradient(${gradient})` }}><div><strong>{fmt(data.total)}</strong><span>Total assets</span></div></div><ul>{categories.map((c, i) => <li key={c} className={cat !== 'All' && cat !== c ? 'dimmed' : ''}><i className={`category-dot category-${i}`}/>{c}<b>{categoryPercent(i)}%</b></li>)}</ul></div></div>
        <div className="dash-panel"><h4>Assets Registered <span>{range === '30d' ? 'Last 30 days' : `Last ${ranges[range]} months`}</span></h4><div className="bar-chart">{data.bars.map(b => <div key={b.label}><div className="bar live-bar" style={{ height: `${(b.v / maxBar) * 100}%` }} title={`${b.v} assets`}/><span>{b.label}</span></div>)}</div><div className="chart-legend"><i/>Assets registered <span>{fmt(data.bars.reduce((a, b) => a + b.v, 0))} in period</span></div></div>
      </div>
      <div className="dash-chart-row">
        <div className="dash-panel"><h4>Recent Activity <span>{data.log.length} events</span></h4>{data.log.length === 0 ? <p className="dash-empty">No activity matches these filters.</p> : data.log.map(({ Icon, title, sub, days }) => <div className="activity" key={title}><span className="activity-icon"><Icon size={14}/></span><div><b>{title}</b><small>{sub}</small></div><time>{days === 0 ? 'Today' : `${days}d ago`}</time></div>)}</div>
        <div className="dash-panel"><h4>Location Overview <span>{loc === 'All' ? '4 locations' : loc}</span></h4>{locations.map((l, i) => <div className={`location-row ${loc !== 'All' && loc !== l ? 'dimmed' : ''}`} key={l}><MapPin size={13}/><span>{l}</span><b>{fmt(data.locTotals[i] ?? 0)}</b><div className="location-meter live-meter" style={{ ['--w' as string]: `${((data.locTotals[i] ?? 0) / maxLoc) * 100}%` }}/></div>)}</div>
      </div>
    </div>
  </div>;
}
