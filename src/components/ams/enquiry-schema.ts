import { z } from 'zod';

export const enquirySchema = z.object({
  Name: z.string().trim().min(2, 'Enter your full name (at least 2 characters).').max(100, 'Use no more than 100 characters.'),
  Email: z.string().trim().email('Enter a valid work email address.').max(255, 'Use no more than 255 characters.'),
  Organization: z.string().trim().min(2, 'Enter your organization name.').max(150, 'Use no more than 150 characters.'),
  Phone: z.string().trim().max(25, 'Use no more than 25 characters.').refine(v => !v || /^[+\d\s().-]+$/.test(v) && v.replace(/\D/g, '').length >= 7 && v.replace(/\D/g, '').length <= 15, 'Enter a valid phone number with 7–15 digits.'),
  'Asset count': z.enum(['', 'Under 500', '500–2,000', '2,000–10,000', '10,000+']),
  Requirements: z.string().trim().max(2000, 'Keep your message under 2,000 characters.'),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;