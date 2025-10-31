import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_c_c_l_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_c_c_l_aprnce" AS ENUM('default', 'outline');
  ALTER TABLE "case_studies_categories" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_case_studies_categories";
  CREATE TYPE "public"."enum_case_studies_categories" AS ENUM('fedramp', 'compliance', 'cybersecurity', 'risk-management', 'it-governance', 'cloud-computing', 'data-analytics', 'corporate', 'culture', 'privacy', 'threat-detection');
  ALTER TABLE "case_studies_categories" ALTER COLUMN "value" SET DATA TYPE "public"."enum_case_studies_categories" USING "value"::"public"."enum_case_studies_categories";
  ALTER TABLE "_case_studies_v_version_categories" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum__case_studies_v_version_categories";
  CREATE TYPE "public"."enum__case_studies_v_version_categories" AS ENUM('fedramp', 'compliance', 'cybersecurity', 'risk-management', 'it-governance', 'cloud-computing', 'data-analytics', 'corporate', 'culture', 'privacy', 'threat-detection');
  ALTER TABLE "_case_studies_v_version_categories" ALTER COLUMN "value" SET DATA TYPE "public"."enum__case_studies_v_version_categories" USING "value"::"public"."enum__case_studies_v_version_categories";
  ALTER TABLE "case_studies" ALTER COLUMN "type" SET DEFAULT 'case-study';
  ALTER TABLE "_case_studies_v" ALTER COLUMN "version_type" SET DEFAULT 'case-study';
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum_pages_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum_pages_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum__pages_v_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum__pages_v_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum_services_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum_services_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum__services_v_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum__services_v_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum_case_studies_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum_case_studies_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "image_icon_id" integer;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "image_main_id" integer;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_label" varchar;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_type" "enum__case_studies_v_blocks_case_study_cn_content_c_c_l_type" DEFAULT 'reference';
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_new_tab" boolean;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_url" varchar;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_label" varchar;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "c_c_l_aprnce" "enum__case_studies_v_blocks_case_study_cn_content_c_c_l_aprnce" DEFAULT 'default';
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD CONSTRAINT "pages_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD CONSTRAINT "pages_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD CONSTRAINT "_pages_v_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD CONSTRAINT "_pages_v_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD CONSTRAINT "services_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD CONSTRAINT "services_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD CONSTRAINT "_services_v_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD CONSTRAINT "_services_v_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD CONSTRAINT "case_studies_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD CONSTRAINT "case_studies_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD CONSTRAINT "_case_studies_v_blocks_case_study_cn_content_image_icon_id_media_id_fk" FOREIGN KEY ("image_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD CONSTRAINT "_case_studies_v_blocks_case_study_cn_content_image_main_id_media_id_fk" FOREIGN KEY ("image_main_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_case_study_cn_content_image_icon_idx" ON "pages_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "pages_blocks_case_study_cn_content_image_main_idx" ON "pages_blocks_case_study_cn_content" USING btree ("image_main_id");
  CREATE INDEX "_pages_v_blocks_case_study_cn_content_image_icon_idx" ON "_pages_v_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "_pages_v_blocks_case_study_cn_content_image_main_idx" ON "_pages_v_blocks_case_study_cn_content" USING btree ("image_main_id");
  CREATE INDEX "services_blocks_case_study_cn_content_image_icon_idx" ON "services_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "services_blocks_case_study_cn_content_image_main_idx" ON "services_blocks_case_study_cn_content" USING btree ("image_main_id");
  CREATE INDEX "_services_v_blocks_case_study_cn_content_image_icon_idx" ON "_services_v_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "_services_v_blocks_case_study_cn_content_image_main_idx" ON "_services_v_blocks_case_study_cn_content" USING btree ("image_main_id");
  CREATE INDEX "case_studies_blocks_case_study_cn_content_image_icon_idx" ON "case_studies_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "case_studies_blocks_case_study_cn_content_image_main_idx" ON "case_studies_blocks_case_study_cn_content" USING btree ("image_main_id");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_content_image_icon_idx" ON "_case_studies_v_blocks_case_study_cn_content" USING btree ("image_icon_id");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_content_image_main_idx" ON "_case_studies_v_blocks_case_study_cn_content" USING btree ("image_main_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_case_study_cn_content" DROP CONSTRAINT "pages_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP CONSTRAINT "pages_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP CONSTRAINT "_pages_v_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP CONSTRAINT "_pages_v_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "services_blocks_case_study_cn_content" DROP CONSTRAINT "services_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "services_blocks_case_study_cn_content" DROP CONSTRAINT "services_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP CONSTRAINT "_services_v_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP CONSTRAINT "_services_v_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP CONSTRAINT "case_studies_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP CONSTRAINT "case_studies_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP CONSTRAINT "_case_studies_v_blocks_case_study_cn_content_image_icon_id_media_id_fk";
  
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP CONSTRAINT "_case_studies_v_blocks_case_study_cn_content_image_main_id_media_id_fk";
  
  ALTER TABLE "case_studies_categories" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_case_studies_categories";
  CREATE TYPE "public"."enum_case_studies_categories" AS ENUM('case-study', 'cybersecurity', 'risk-management', 'compliance', 'privacy', 'threat-detection', 'whitepaper', 'culture', 'cloud-computing', 'data-analytics', 'blogs');
  ALTER TABLE "case_studies_categories" ALTER COLUMN "value" SET DATA TYPE "public"."enum_case_studies_categories" USING "value"::"public"."enum_case_studies_categories";
  ALTER TABLE "_case_studies_v_version_categories" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum__case_studies_v_version_categories";
  CREATE TYPE "public"."enum__case_studies_v_version_categories" AS ENUM('case-study', 'cybersecurity', 'risk-management', 'compliance', 'privacy', 'threat-detection', 'whitepaper', 'culture', 'cloud-computing', 'data-analytics', 'blogs');
  ALTER TABLE "_case_studies_v_version_categories" ALTER COLUMN "value" SET DATA TYPE "public"."enum__case_studies_v_version_categories" USING "value"::"public"."enum__case_studies_v_version_categories";
  DROP INDEX "pages_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "pages_blocks_case_study_cn_content_image_main_idx";
  DROP INDEX "_pages_v_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "_pages_v_blocks_case_study_cn_content_image_main_idx";
  DROP INDEX "services_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "services_blocks_case_study_cn_content_image_main_idx";
  DROP INDEX "_services_v_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "_services_v_blocks_case_study_cn_content_image_main_idx";
  DROP INDEX "case_studies_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "case_studies_blocks_case_study_cn_content_image_main_idx";
  DROP INDEX "_case_studies_v_blocks_case_study_cn_content_image_icon_idx";
  DROP INDEX "_case_studies_v_blocks_case_study_cn_content_image_main_idx";
  ALTER TABLE "case_studies" ALTER COLUMN "type" DROP DEFAULT;
  ALTER TABLE "_case_studies_v" ALTER COLUMN "version_type" DROP DEFAULT;
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "image_icon_id";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "image_main_id";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_label";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_type";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_new_tab";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_url";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_label";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "c_c_l_aprnce";
  DROP TYPE "public"."enum_pages_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum_pages_blocks_case_study_cn_content_c_c_l_aprnce";
  DROP TYPE "public"."enum__pages_v_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum__pages_v_blocks_case_study_cn_content_c_c_l_aprnce";
  DROP TYPE "public"."enum_services_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum_services_blocks_case_study_cn_content_c_c_l_aprnce";
  DROP TYPE "public"."enum__services_v_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum__services_v_blocks_case_study_cn_content_c_c_l_aprnce";
  DROP TYPE "public"."enum_case_studies_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum_case_studies_blocks_case_study_cn_content_c_c_l_aprnce";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_c_c_l_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_c_c_l_aprnce";`)
}
