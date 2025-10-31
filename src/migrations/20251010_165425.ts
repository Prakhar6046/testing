import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_resource_type" AS ENUM('blog', 'case-study', 'e-book', 'info-sheet', 'press-release', 'white-paper', 'video');
  CREATE TYPE "public"."enum__case_studies_v_version_resource_type" AS ENUM('blog', 'case-study', 'e-book', 'info-sheet', 'press-release', 'white-paper', 'video');
  ALTER TABLE "case_studies" ADD COLUMN "resource_type" "enum_case_studies_resource_type" DEFAULT 'case-study';
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_resource_type" "enum__case_studies_v_version_resource_type" DEFAULT 'case-study';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "resource_type";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_resource_type";
  DROP TYPE "public"."enum_case_studies_resource_type";
  DROP TYPE "public"."enum__case_studies_v_version_resource_type";`)
}
