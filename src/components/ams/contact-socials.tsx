import { useState, type SVGProps } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { contactDetails } from './contact-details';

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}><path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.6A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.5 7.4c-.5 0-1.3.7-1.3 1.8 0 2.5 3.2 5.7 5.8 6.1 1.1.2 2.1-.5 2.4-1.3l-2.3-1.2-.9 1c-1.3-.5-2.6-1.7-3.1-3l.9-.9-1-2.5Z"/></svg>;
}

const whatsappNumber = contactDetails.phone.replace(/\D/g, '');
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Astitva AMS, I would like to know more about your asset-management platform.')}`;
const whatsappLabel = `WhatsApp — chat with Astitva on ${contactDetails.phone}`;

const channels = [
  { name: 'LinkedIn', Icon: Linkedin, href: null },
  { name: 'Twitter', Icon: Twitter, href: null },
  { name: 'Facebook', Icon: Facebook, href: null },
  { name: 'Instagram', Icon: Instagram, href: null },
  { name: 'YouTube', Icon: Youtube, href: null },
  { name: 'WhatsApp', Icon: WhatsAppIcon, href: whatsappHref },
];

export function ContactSocials() {
  const [selected, setSelected] = useState<string | null>(null);
  return <>
    <nav className="contact-social-dock" aria-labelledby="contact-social-title" aria-describedby="contact-social-note">
      <h2 className="contact-social-title" id="contact-social-title">Follow Astitva AMS</h2>
      <p className="contact-social-note" id="contact-social-note">WhatsApp chat is live — other channels coming soon</p>
      <ul className="contact-social-list">
        {channels.map(({ name, Icon, href }) => <li key={name}>{href ? <Button asChild size="icon" variant="outline" className="contact-social whatsapp-social" aria-label={whatsappLabel} title={whatsappLabel}><a href={href} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" focusable="false"/><span className="social-tooltip" aria-hidden="true">{name}</span></a></Button> : <Button type="button" size="icon" variant="outline" className="contact-social" aria-label={`${name} — official channel not connected yet`} title={`${name} — official channel not connected yet`} onClick={() => setSelected(name)}><Icon aria-hidden="true" focusable="false"/><span className="social-tooltip" aria-hidden="true">{name}</span></Button>}</li>)}
      </ul>
    </nav>
    <div className="contact-social-spacer" aria-hidden="true" />
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="contact-channel-dialog">
        <DialogTitle>{selected}</DialogTitle>
        <DialogDescription>This official channel isn’t connected yet. Please send your enquiry through the contact form.</DialogDescription>
        <Button asChild onClick={() => setSelected(null)}><Link to="/contact">Send an enquiry</Link></Button>
      </DialogContent>
    </Dialog>
  </>;
}
