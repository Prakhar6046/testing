import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_type" AS ENUM('case-study', 'blog', 'industies', 'e-book', 'info-sheet', 'press-release', 'whitepapers', 'video');
  CREATE TYPE "public"."enum__case_studies_v_version_type" AS ENUM('case-study', 'blog', 'industies', 'e-book', 'info-sheet', 'press-release', 'whitepapers', 'video');
  ALTER TABLE "case_studies" ADD COLUMN "type" "enum_case_studies_type";
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_type" "enum__case_studies_v_version_type";
  ALTER TABLE "pages_blocks_resources" DROP COLUMN "limit";
  ALTER TABLE "_pages_v_blocks_resources" DROP COLUMN "limit";
  ALTER TABLE "services_blocks_resources" DROP COLUMN "limit";
  ALTER TABLE "_services_v_blocks_resources" DROP COLUMN "limit";
  ALTER TABLE "case_studies_blocks_resources" DROP COLUMN "limit";
  ALTER TABLE "_case_studies_v_blocks_resources" DROP COLUMN "limit";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "_pages_v_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "services_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "_services_v_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "case_studies_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "_case_studies_v_blocks_resources" ADD COLUMN "limit" numeric DEFAULT 9;
  ALTER TABLE "case_studies" DROP COLUMN "type";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_type";
  DROP TYPE "public"."enum_case_studies_type";
  DROP TYPE "public"."enum__case_studies_v_version_type";`)
}
