import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "subtitle";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_subtitle";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_subtitle" varchar;`)
}
