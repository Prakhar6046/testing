import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__case_studies_v_version_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  ALTER TABLE "case_studies" ADD COLUMN "industry" "enum_case_studies_industry";
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_industry" "enum__case_studies_v_version_industry";
  ALTER TABLE "case_studies" DROP COLUMN "resource_type";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_resource_type";
  DROP TYPE "public"."enum_case_studies_resource_type";
  DROP TYPE "public"."enum__case_studies_v_version_resource_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_resource_type" AS ENUM('blog', 'case-study', 'e-book', 'info-sheet', 'press-release', 'white-paper', 'video');
  CREATE TYPE "public"."enum__case_studies_v_version_resource_type" AS ENUM('blog', 'case-study', 'e-book', 'info-sheet', 'press-release', 'white-paper', 'video');
  ALTER TABLE "case_studies" ADD COLUMN "resource_type" "enum_case_studies_resource_type" DEFAULT 'case-study';
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_resource_type" "enum__case_studies_v_version_resource_type" DEFAULT 'case-study';
  ALTER TABLE "case_studies" DROP COLUMN "industry";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_industry";
  DROP TYPE "public"."enum_case_studies_industry";
  DROP TYPE "public"."enum__case_studies_v_version_industry";`)
}
