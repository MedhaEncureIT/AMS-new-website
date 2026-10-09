import type { HeroSubject } from './hero-images';

export const featureDetails: Record<string, { subject: HeroSubject; intro: string; steps: { title: string; text: string }[]; example: string }> = {
  'asset-tracking': {
    subject: 'modules', intro: 'Find the right asset record without chasing spreadsheets across branches.',
    steps: [{ title: 'Register and identify', text: 'Give each asset a unique ID and connect its category, acquisition details and tag to one record.' }, { title: 'Follow every movement', text: 'Record transfers between locations with dates and responsible people, so the latest location has a clear history.' }, { title: 'Check current status', text: 'Distinguish available, assigned and maintenance assets before issuing equipment or planning a purchase.' }],
    example: 'A laptop moves from Mumbai head office to a colleague in Pune. Its asset record keeps the handover, location and current custodian together.',
  },
  'asset-lifecycle': {
    subject: 'platform', intro: 'Keep acquisition, everyday use and retirement in one continuous history.',
    steps: [{ title: 'Begin with acquisition', text: 'Capture procurement details, supporting documents and the first registration.' }, { title: 'Maintain the working history', text: 'Connect assignments, maintenance visits and transfers to the same asset, rather than starting a new record each time.' }, { title: 'Close the loop', text: 'Record retirement and its supporting details so the register reflects what is still in service.' }],
    example: 'A machine at your factory receives several repairs before retirement. The complete history helps operations and finance review its journey together.',
  },
  'location-management': {
    subject: 'solutions', intro: 'Know which site, building and department each asset belongs to.',
    steps: [{ title: 'Organize your locations', text: 'Structure records around the branches, buildings and departments your teams actually use.' }, { title: 'Record transfers clearly', text: 'Keep the origin, destination and responsible person with each movement.' }, { title: 'Review site inventory', text: 'Compare assets across locations and investigate missing or incorrectly assigned equipment.' }],
    example: 'Lab equipment moves between two campus departments. Both teams can refer to the updated location and the recorded handover.',
  },
  'user-ownership': {
    subject: 'about', intro: 'Make responsibility clear from issue to return.',
    steps: [{ title: 'Assign a custodian', text: 'Link issued equipment to the employee or team responsible for it.' }, { title: 'Keep handovers accountable', text: 'Record changes in ownership with a dated history instead of relying on informal emails.' }, { title: 'Review outstanding assets', text: 'Check assignments when colleagues change departments, move locations or return equipment.' }],
    example: 'When a colleague changes departments, IT can review their assigned laptop and accessories before completing the handover.',
  },
  'audit-compliance': {
    subject: 'why', intro: 'Prepare for verification with consistent records and traceable updates.',
    steps: [{ title: 'Define the audit scope', text: 'Identify the locations and asset categories to verify against a baseline register.' }, { title: 'Record discrepancies', text: 'Separate missing assets, incorrect locations and unrecorded transfers for review.' }, { title: 'Resolve with a history', text: 'Keep attributable, dated corrections so the next reviewer can understand what changed.' }],
    example: 'Before a district-office inventory check, reviewers compare equipment against the register and document exceptions for follow-up.',
  },
  'reports-insights': {
    subject: 'resources', intro: 'Look beyond counts to understand how assets are used across your organization.',
    steps: [{ title: 'Compare inventory', text: 'Review assigned, available and maintenance assets by category and location.' }, { title: 'Spot recurring needs', text: 'Use lifecycle and maintenance history to identify equipment that needs closer attention.' }, { title: 'Share a consistent view', text: 'Bring the same asset information into discussions between IT, facilities and finance.' }],
    example: 'A branch requests more laptops. Reviewing available inventory at nearby offices gives the team a starting point before discussing a new purchase.',
  },
};