import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { enquirySchema } from '@/components/ams/enquiry-schema';

const input = enquirySchema.extend({ kind: z.enum(['demo', 'contact']) });

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => input.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('enquiries').insert({
      kind: data.kind,
      name: data.Name,
      email: data.Email,
      organization: data.Organization,
      phone: data.Phone || null,
      asset_count: data['Asset count'] || null,
      requirements: data.Requirements || null,
    });
    if (error) {
      console.error('enquiry insert failed', error);
      throw new Error('We could not save your enquiry. Please try again.');
    }
    return { ok: true };
  });
