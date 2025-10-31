import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP COLUMN "industry";
  ALTER TABLE "_case_studies_v" DROP COLUMN "version_industry";
  DROP TYPE "public"."enum_case_studies_industry";
  DROP TYPE "public"."enum__case_studies_v_version_industry";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__case_studies_v_version_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  ALTER TABLE "case_studies" ADD COLUMN "industry" "enum_case_studies_industry";
  ALTER TABLE "_case_studies_v" ADD COLUMN "version_industry" "enum__case_studies_v_version_industry";`)
}
