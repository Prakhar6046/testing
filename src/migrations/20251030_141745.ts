import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS"pages_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"pages_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"pages_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_pages_v_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_pages_v_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_pages_v_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"services_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"services_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"services_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_services_v_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_services_v_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_services_v_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"case_studies_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"case_studies_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"case_studies_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_case_studies_v_blocks_cmmc_svc_ovw_consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_case_studies_v_blocks_cmmc_svc_ovw_remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_case_studies_v_blocks_cmmc_svc_ovw" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE IF EXISTS  "consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "pages_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "timeline_items" CASCADE;
  DROP TABLE IF EXISTS  "pages_blocks_animated_timeline" CASCADE;
  DROP TABLE IF EXISTS  "_consulting_services_v" CASCADE;
  DROP TABLE IF EXISTS  "_remediation_services_v" CASCADE;
  DROP TABLE IF EXISTS  "_pages_v_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "_timeline_items_v" CASCADE;
  DROP TABLE IF EXISTS  "_pages_v_blocks_animated_timeline" CASCADE;
  DROP TABLE IF EXISTS  "services_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "services_blocks_animated_timeline" CASCADE;
  DROP TABLE IF EXISTS  "_services_v_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "_services_v_blocks_animated_timeline" CASCADE;
  DROP TABLE IF EXISTS  "case_studies_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "case_studies_blocks_animated_timeline" CASCADE;
  DROP TABLE IF EXISTS  "_case_studies_v_blocks_services_overview_2" CASCADE;
  DROP TABLE IF EXISTS  "_case_studies_v_blocks_animated_timeline" CASCADE;
  ALTER TABLE "pages_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cmmc_svc_ovw" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cmmc_svc_ovw" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cmmc_svc_ovw" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cmmc_svc_ovw" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cmmc_svc_ovw" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cmmc_svc_ovw" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "pages_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "pages_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_order_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_path_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_background_image_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_path_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_background_image_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "services_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "services_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "services_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "services_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_order_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_parent_id_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_path_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_background_image_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "_services_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "_services_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_order_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_path_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_background_image_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "case_studies_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "case_studies_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_order_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_path_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_background_image_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_path_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_background_image_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS"consulting_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"remediation_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"pages_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"phase" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS"pages_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_consulting_services_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_remediation_services_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_pages_v_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_timeline_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"phase" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_pages_v_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"services_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"services_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_services_v_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_services_v_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"case_studies_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"case_studies_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_case_studies_v_blocks_services_overview_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_section_heading" varchar DEFAULT 'How can we help?',
  	"left_section_description" varchar DEFAULT 'It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:',
  	"background_image_id" integer,
  	"consulting_heading" varchar DEFAULT 'CMMC Consulting',
  	"consulting_subheading" varchar DEFAULT 'WCG provides',
  	"remediation_heading" varchar DEFAULT 'CMMC Remediation',
  	"remediation_subheading" varchar DEFAULT 'WCG works with our clients to develop a Plan of Action customized to their organizations to:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS"_case_studies_v_blocks_animated_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'CMMC Timeline',
  	"auto_play" boolean DEFAULT true,
  	"auto_play_interval" numeric DEFAULT 3000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE IF EXISTS  "pages_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "pages_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "pages_blocks_cmmc_svc_ovw" CASCADE;
  DROP TABLE IF EXISTS  "_pages_v_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "_pages_v_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "_pages_v_blocks_cmmc_svc_ovw" CASCADE;
  DROP TABLE IF EXISTS  "services_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "services_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "services_blocks_cmmc_svc_ovw" CASCADE;
  DROP TABLE IF EXISTS  "_services_v_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "_services_v_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "_services_v_blocks_cmmc_svc_ovw" CASCADE;
  DROP TABLE IF EXISTS  "case_studies_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "case_studies_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "case_studies_blocks_cmmc_svc_ovw" CASCADE;
  DROP TABLE IF EXISTS  "_case_studies_v_blocks_cmmc_svc_ovw_consulting_services" CASCADE;
  DROP TABLE IF EXISTS  "_case_studies_v_blocks_cmmc_svc_ovw_remediation_services" CASCADE;
  DROP TABLE IF EXISTS  "_case_studies_v_blocks_cmmc_svc_ovw" CASCADE;
  ALTER TABLE "consulting_services" ADD CONSTRAINT "consulting_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "remediation_services" ADD CONSTRAINT "remediation_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview_2" ADD CONSTRAINT "pages_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview_2" ADD CONSTRAINT "pages_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "timeline_items" ADD CONSTRAINT "timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "timeline_items" ADD CONSTRAINT "timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_animated_timeline" ADD CONSTRAINT "pages_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_consulting_services_v" ADD CONSTRAINT "_consulting_services_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_overview_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_remediation_services_v" ADD CONSTRAINT "_remediation_services_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_overview_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview_2" ADD CONSTRAINT "_pages_v_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview_2" ADD CONSTRAINT "_pages_v_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_timeline_items_v" ADD CONSTRAINT "_timeline_items_v_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_timeline_items_v" ADD CONSTRAINT "_timeline_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_animated_timeline" ADD CONSTRAINT "_pages_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview_2" ADD CONSTRAINT "services_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview_2" ADD CONSTRAINT "services_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_animated_timeline" ADD CONSTRAINT "services_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview_2" ADD CONSTRAINT "_services_v_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview_2" ADD CONSTRAINT "_services_v_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_animated_timeline" ADD CONSTRAINT "_services_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview_2" ADD CONSTRAINT "case_studies_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview_2" ADD CONSTRAINT "case_studies_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_animated_timeline" ADD CONSTRAINT "case_studies_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview_2" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_2_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview_2" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_animated_timeline" ADD CONSTRAINT "_case_studies_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "consulting_services_order_idx" ON "consulting_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "consulting_services_parent_id_idx" ON "consulting_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "remediation_services_order_idx" ON "remediation_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "remediation_services_parent_id_idx" ON "remediation_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_order_idx" ON "pages_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_parent_id_idx" ON "pages_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_path_idx" ON "pages_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_background_image_idx" ON "pages_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "timeline_items_order_idx" ON "timeline_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "timeline_items_parent_id_idx" ON "timeline_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "timeline_items_icon_2_idx" ON "timeline_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_order_idx" ON "pages_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_parent_id_idx" ON "pages_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_path_idx" ON "pages_blocks_animated_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_consulting_services_v_order_idx" ON "_consulting_services_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_consulting_services_v_parent_id_idx" ON "_consulting_services_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_remediation_services_v_order_idx" ON "_remediation_services_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_remediation_services_v_parent_id_idx" ON "_remediation_services_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_2_order_idx" ON "_pages_v_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_2_parent_id_idx" ON "_pages_v_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_2_path_idx" ON "_pages_v_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_2_background_image_idx" ON "_pages_v_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_timeline_items_v_order_idx" ON "_timeline_items_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_timeline_items_v_parent_id_idx" ON "_timeline_items_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_timeline_items_v_icon_2_idx" ON "_timeline_items_v" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_animated_timeline_order_idx" ON "_pages_v_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_animated_timeline_parent_id_idx" ON "_pages_v_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_animated_timeline_path_idx" ON "_pages_v_blocks_animated_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_2_order_idx" ON "services_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_2_parent_id_idx" ON "services_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_2_path_idx" ON "services_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_2_background_image_idx" ON "services_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_order_idx" ON "services_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_parent_id_idx" ON "services_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_path_idx" ON "services_blocks_animated_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_2_order_idx" ON "_services_v_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_2_parent_id_idx" ON "_services_v_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_2_path_idx" ON "_services_v_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_2_background_image_idx" ON "_services_v_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_animated_timeline_order_idx" ON "_services_v_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_animated_timeline_parent_id_idx" ON "_services_v_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_animated_timeline_path_idx" ON "_services_v_blocks_animated_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_2_order_idx" ON "case_studies_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_2_parent_id_idx" ON "case_studies_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_2_path_idx" ON "case_studies_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_2_background_image_idx" ON "case_studies_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_order_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_parent_id_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_path_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_2_order_idx" ON "_case_studies_v_blocks_services_overview_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_2_parent_id_idx" ON "_case_studies_v_blocks_services_overview_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_2_path_idx" ON "_case_studies_v_blocks_services_overview_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_2_background_im_idx" ON "_case_studies_v_blocks_services_overview_2" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_animated_timeline_order_idx" ON "_case_studies_v_blocks_animated_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_animated_timeline_parent_id_idx" ON "_case_studies_v_blocks_animated_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_animated_timeline_path_idx" ON "_case_studies_v_blocks_animated_timeline" USING btree ("_path");`)
}
