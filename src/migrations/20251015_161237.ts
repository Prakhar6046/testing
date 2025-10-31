import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "date_published" timestamp(3) with time zone;
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_subtitle" varchar;
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_date_published" timestamp(3) with time zone;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "subtitle";
  ALTER TABLE "case_studies" DROP COLUMN "date_published";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_subtitle";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_date_published";`)
}
