import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "searchable" boolean DEFAULT true;
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_searchable" boolean DEFAULT true;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "searchable";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_searchable";`)
}
