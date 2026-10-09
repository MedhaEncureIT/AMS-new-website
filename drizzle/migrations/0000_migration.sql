CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL DEFAULT 'demo',
  name text NOT NULL,
  email text NOT NULL,
  organization text NOT NULL,
  phone text,
  asset_count text,
  requirements text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;