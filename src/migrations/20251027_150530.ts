import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_form_settings"
    ADD COLUMN IF NOT EXISTS "recaptcha_enabled" boolean DEFAULT true,
    ADD COLUMN IF NOT EXISTS "recaptcha_site_key" varchar,
    ADD COLUMN IF NOT EXISTS "recaptcha_secret_key" varchar,
    ADD COLUMN IF NOT EXISTS "recaptcha_score_threshold" numeric DEFAULT 0.5;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_form_settings"
    DROP COLUMN IF EXISTS "recaptcha_enabled",
    DROP COLUMN IF EXISTS "recaptcha_site_key",
    DROP COLUMN IF EXISTS "recaptcha_secret_key",
    DROP COLUMN IF EXISTS "recaptcha_score_threshold";
  `)
}
