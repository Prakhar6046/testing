import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "read_time" numeric;
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_read_time" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "read_time";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_read_time";`)
}
