import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_form_settings" ADD COLUMN "recaptcha_enabled" boolean DEFAULT true;
  ALTER TABLE "contact_form_settings" ADD COLUMN "recaptcha_site_key" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "recaptcha_secret_key" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "recaptcha_score_threshold" numeric DEFAULT 0.5;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_form_settings" DROP COLUMN "recaptcha_enabled";
  ALTER TABLE "contact_form_settings" DROP COLUMN "recaptcha_site_key";
  ALTER TABLE "contact_form_settings" DROP COLUMN "recaptcha_secret_key";
  ALTER TABLE "contact_form_settings" DROP COLUMN "recaptcha_score_threshold";`)
}
