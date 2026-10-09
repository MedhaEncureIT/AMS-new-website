import home from '@/assets/intro-home.jpg';
import platform from '@/assets/intro-platform.jpg';
import modules from '@/assets/intro-modules.jpg';
import solutions from '@/assets/intro-solutions.jpg';
import why from '@/assets/intro-why.jpg';
import about from '@/assets/about-astitva-team.jpg';
import resources from '@/assets/intro-resources.jpg';
import contact from '@/assets/intro-contact.jpg';
import demo from '@/assets/intro-demo.jpg';
import login from '@/assets/intro-login.jpg';
import privacy from '@/assets/intro-privacy.jpg';
import terms from '@/assets/intro-terms.jpg';

export const heroImages = {
  home: { src: home, alt: 'Indian engineer inspecting machinery on a modern factory floor' },
  platform: { src: platform, alt: 'Operations specialists monitoring equipment across connected locations' },
  modules: { src: modules, alt: 'Technician scanning an asset tag in an organized IT equipment store' },
  solutions: { src: solutions, alt: 'Students working with equipment in an Indian engineering laboratory' },
  why: { src: why, alt: 'Facilities managers verifying equipment records together on a tablet' },
  about: { src: about, alt: 'Indian operations colleagues reviewing laptops and equipment together in a modern office' },
  resources: { src: resources, alt: 'Professional reviewing equipment documentation and taking notes' },
  contact: { src: contact, alt: 'Customer relations specialist ready to discuss business requirements' },
  demo: { src: demo, alt: 'Product specialist demonstrating asset-management workflows to clients' },
  login: { src: login, alt: 'IT administrator at an enterprise operations workstation' },
  privacy: { src: privacy, alt: 'Security professional using controlled access to enterprise server equipment' },
  terms: { src: terms, alt: 'Business colleagues reviewing an agreement at an office desk' },
};
export type HeroSubject = keyof typeof heroImages;