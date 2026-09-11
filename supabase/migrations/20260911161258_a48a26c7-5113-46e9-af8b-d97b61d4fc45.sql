CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

SELECT cron.unschedule('seo-domain-guard-daily')
WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'seo-domain-guard-daily');

SELECT cron.schedule(
  'seo-domain-guard-daily',
  '0 7 * * *',
  $$
  SELECT net.http_post(
    url := 'https://qlkdpdgrexcxeqoksguq.supabase.co/functions/v1/seo-domain-guard',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"source": "cron"}'::jsonb
  ) AS request_id;
  $$
);