-- Diagnostic: Check which services_overview related tables exist
-- Run this in Supabase SQL Editor to see what's there

SELECT
    table_name,
    table_type
FROM information_schema.tables
WHERE table_schema = 'public'
  AND (
    table_name LIKE '%services_overview%'
    OR table_name LIKE '%consulting%'
    OR table_name LIKE '%remediation%'
  )
ORDER BY table_name;
