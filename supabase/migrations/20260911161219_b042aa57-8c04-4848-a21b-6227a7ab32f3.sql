CREATE TABLE public.seo_domain_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  checked_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL,
  failure_count integer NOT NULL DEFAULT 0,
  checks jsonb NOT NULL DEFAULT '[]'::jsonb
);

GRANT SELECT ON public.seo_domain_checks TO authenticated;
GRANT ALL ON public.seo_domain_checks TO service_role;

ALTER TABLE public.seo_domain_checks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view domain checks"
ON public.seo_domain_checks
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX seo_domain_checks_checked_at_idx ON public.seo_domain_checks (checked_at DESC);