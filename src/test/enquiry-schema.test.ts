import { describe, it, expect } from 'vitest';
import { enquirySchema } from '@/components/ams/enquiry-schema';
const valid = {Name:' Demo Reviewer ',Email:'reviewer@example.com',Organization:'Example Organization',Phone:'+91 98765 43210','Asset count':'500–2,000',Requirements:'Track our assets'};
describe('Demo enquiry validation',()=>{
 it('accepts valid details and trims names',()=>{const result=enquirySchema.parse(valid);expect(result.Name).toBe('Demo Reviewer')});
 it('rejects blank required fields and invalid email',()=>{expect(enquirySchema.safeParse({...valid,Name:'  ',Email:'invalid',Organization:''}).success).toBe(false)});
 it('rejects invalid phone numbers and oversized messages',()=>{expect(enquirySchema.safeParse({...valid,Phone:'call me'}).success).toBe(false);expect(enquirySchema.safeParse({...valid,Requirements:'a'.repeat(2001)}).success).toBe(false)});
 it('accepts blank optional details',()=>{expect(enquirySchema.safeParse({...valid,Phone:'',Requirements:'','Asset count':''}).success).toBe(true)});
 it('rejects unknown asset ranges',()=>{expect(enquirySchema.safeParse({...valid,'Asset count':'injected'}).success).toBe(false)});
});