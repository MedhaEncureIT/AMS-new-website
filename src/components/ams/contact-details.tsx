import { Clock, Mail, Phone } from 'lucide-react';

export const contactDetails = {
  email: 'contact@astitvaams.com',
  emailNote: 'Mention your organization name and what you would like help with, and we will point you to the right person.',
  phone: '+91 99709 97050',
  phoneHref: 'tel:+919970997050',
  phoneNote: 'Speak to our team during working hours, or ask for a call back at a time that suits you.',
  hours: [
    { days: 'Monday to Friday', time: '9:00 AM – 6:00 PM IST' },
    { days: 'Saturday and Sunday', time: 'Closed — leave an enquiry' },
  ],
  hoursNote: 'Outside these hours? Send an enquiry here and we will get back to you.',
};

export function ContactDetails() {
  return (
    <section className="section contact-channels-section" aria-labelledby="contact-channels-title">
      <div className="container">
        <div className="contact-channels-head">
          <span className="eyebrow">HOW TO REACH US</span>
          <h2 id="contact-channels-title">Email, call, or send an enquiry.</h2>
          <p>Choose whatever is easier for your team. Every message reaches the same Astitva desk, so you will not be sent around.</p>
        </div>
        <div className="contact-channels">
          <div className="contact-channel">
            <span className="contact-channel-mark" aria-hidden="true"><Mail size={18} /></span>
            <small>Email us</small>
            <a className="contact-channel-value" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <p>{contactDetails.emailNote}</p>
          </div>
          <div className="contact-channel">
            <span className="contact-channel-mark" aria-hidden="true"><Phone size={18} /></span>
            <small>Call us</small>
            <a className="contact-channel-value" href={contactDetails.phoneHref}>{contactDetails.phone}</a>
            <p>{contactDetails.phoneNote}</p>
          </div>
          <div className="contact-channel contact-channel-hours">
            <span className="contact-channel-mark" aria-hidden="true"><Clock size={18} /></span>
            <small>When we are around</small>
            <ul className="contact-hours">
              {contactDetails.hours.map(h => <li key={h.days}><span>{h.days}</span><b>{h.time}</b></li>)}
            </ul>
            <p>{contactDetails.hoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
