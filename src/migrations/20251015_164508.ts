import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

const shouldSkip = true

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  if (shouldSkip) {
    console.log('20251015_164508: skipping in CI/Vercel')
    return
  }
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "services_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"width" numeric,
  	"height" numeric,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"bold" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"authorization_subtitle" varchar,
  	"authorization_title" varchar,
  	"authorization_image_id" integer,
  	"monitoring_subtitle" varchar,
  	"monitoring_title" varchar,
  	"monitoring_description" varchar,
  	"monitoring_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "pages_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "pages_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_advisory" ADD CONSTRAINT "pages_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_advisory" ADD CONSTRAINT "pages_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "pages_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_readiness_assessment_section_items" ADD CONSTRAINT "pages_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_readiness_assessment_section_items" ADD CONSTRAINT "pages_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_readiness_assessment_section" ADD CONSTRAINT "pages_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "pages_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "pages_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "pages_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "pages_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "pages_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth" ADD CONSTRAINT "pages_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth" ADD CONSTRAINT "pages_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_fedramp_auth" ADD CONSTRAINT "pages_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_advisory" ADD CONSTRAINT "_pages_v_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_advisory" ADD CONSTRAINT "_pages_v_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "_pages_v_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_pages_v_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_pages_v_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_readiness_assessment_section" ADD CONSTRAINT "_pages_v_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fedramp_auth" ADD CONSTRAINT "_pages_v_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "services_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "services_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_advisory" ADD CONSTRAINT "services_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_advisory" ADD CONSTRAINT "services_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "services_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_readiness_assessment_section_items" ADD CONSTRAINT "services_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_readiness_assessment_section_items" ADD CONSTRAINT "services_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_readiness_assessment_section" ADD CONSTRAINT "services_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "services_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "services_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "services_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "services_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "services_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth" ADD CONSTRAINT "services_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth" ADD CONSTRAINT "services_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_fedramp_auth" ADD CONSTRAINT "services_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_advisory" ADD CONSTRAINT "_services_v_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_advisory" ADD CONSTRAINT "_services_v_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "_services_v_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_services_v_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_services_v_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_readiness_assessment_section" ADD CONSTRAINT "_services_v_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_fedramp_auth" ADD CONSTRAINT "_services_v_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_advisory" ADD CONSTRAINT "case_studies_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_advisory" ADD CONSTRAINT "case_studies_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "case_studies_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_readiness_assessment_section_items" ADD CONSTRAINT "case_studies_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_readiness_assessment_section_items" ADD CONSTRAINT "case_studies_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_readiness_assessment_section" ADD CONSTRAINT "case_studies_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_fedramp_auth" ADD CONSTRAINT "case_studies_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_advisory_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_advisory_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_advisory_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_fedramp_advisory"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_advisory" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_advisory_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_advisory" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_advisory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_readiness_assessment_section_paragraphs" ADD CONSTRAINT "_case_studies_v_blocks_readiness_assessment_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_case_studies_v_blocks_readiness_assessment_section_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_readiness_assessment_section_items" ADD CONSTRAINT "_case_studies_v_blocks_readiness_assessment_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_readiness_assessment_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_readiness_assessment_section" ADD CONSTRAINT "_case_studies_v_blocks_readiness_assessment_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_authorization_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth_authorization_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_authorization_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_monitoring_list_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_monitoring_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_fedramp_auth"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_authorization_image_id_media_id_fk" FOREIGN KEY ("authorization_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_monitoring_image_id_media_id_fk" FOREIGN KEY ("monitoring_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_fedramp_auth" ADD CONSTRAINT "_case_studies_v_blocks_fedramp_auth_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_order_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_parent_id_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_icon_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_order_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_parent_id_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_path_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_image_idx" ON "pages_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_paragraphs_order_idx" ON "pages_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "pages_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_items_order_idx" ON "pages_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_items_parent_id_idx" ON "pages_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_items_icon_idx" ON "pages_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_order_idx" ON "pages_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_parent_id_idx" ON "pages_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_readiness_assessment_section_path_idx" ON "pages_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "pages_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "pages_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_list_items_order_idx" ON "pages_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "pages_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_list_items_icon_idx" ON "pages_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "pages_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "pages_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_monitoring_list_items_icon_idx" ON "pages_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_order_idx" ON "pages_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_parent_id_idx" ON "pages_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_path_idx" ON "pages_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_authorization_authorization_im_idx" ON "pages_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_auth_monitoring_monitoring_image_idx" ON "pages_blocks_fedramp_auth" USING btree ("monitoring_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_list_items_order_idx" ON "_pages_v_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_list_items_parent_id_idx" ON "_pages_v_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_list_items_icon_idx" ON "_pages_v_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_order_idx" ON "_pages_v_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_parent_id_idx" ON "_pages_v_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_path_idx" ON "_pages_v_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_advisory_image_idx" ON "_pages_v_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_paragraphs_order_idx" ON "_pages_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "_pages_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_items_order_idx" ON "_pages_v_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_items_parent_id_idx" ON "_pages_v_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_items_icon_idx" ON "_pages_v_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_order_idx" ON "_pages_v_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_parent_id_idx" ON "_pages_v_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_readiness_assessment_section_path_idx" ON "_pages_v_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "_pages_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "_pages_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_list_items_order_idx" ON "_pages_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "_pages_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_list_items_ic_idx" ON "_pages_v_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "_pages_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "_pages_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_monitoring_list_items_icon_idx" ON "_pages_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_order_idx" ON "_pages_v_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_parent_id_idx" ON "_pages_v_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_path_idx" ON "_pages_v_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_authorization_authorization_idx" ON "_pages_v_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fedramp_auth_monitoring_monitoring_image_idx" ON "_pages_v_blocks_fedramp_auth" USING btree ("monitoring_image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_list_items_order_idx" ON "services_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_list_items_parent_id_idx" ON "services_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_list_items_icon_idx" ON "services_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_order_idx" ON "services_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_parent_id_idx" ON "services_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_path_idx" ON "services_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_advisory_image_idx" ON "services_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_paragraphs_order_idx" ON "services_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "services_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_items_order_idx" ON "services_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_items_parent_id_idx" ON "services_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_items_icon_idx" ON "services_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_order_idx" ON "services_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_parent_id_idx" ON "services_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_readiness_assessment_section_path_idx" ON "services_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "services_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "services_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_list_items_order_idx" ON "services_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "services_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_list_items_ic_idx" ON "services_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "services_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "services_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_monitoring_list_items_icon_idx" ON "services_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_order_idx" ON "services_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_parent_id_idx" ON "services_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_path_idx" ON "services_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_authorization_authorization_idx" ON "services_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_fedramp_auth_monitoring_monitoring_image_idx" ON "services_blocks_fedramp_auth" USING btree ("monitoring_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_list_items_order_idx" ON "_services_v_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_list_items_parent_id_idx" ON "_services_v_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_list_items_icon_idx" ON "_services_v_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_order_idx" ON "_services_v_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_parent_id_idx" ON "_services_v_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_path_idx" ON "_services_v_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_advisory_image_idx" ON "_services_v_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_paragraphs_order_idx" ON "_services_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "_services_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_items_order_idx" ON "_services_v_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_items_parent_id_idx" ON "_services_v_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_items_ic_idx" ON "_services_v_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_order_idx" ON "_services_v_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_parent_id_idx" ON "_services_v_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_readiness_assessment_section_path_idx" ON "_services_v_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "_services_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "_services_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_list_items_order_idx" ON "_services_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "_services_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_list_items_idx" ON "_services_v_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "_services_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "_services_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_monitoring_list_items_ic_idx" ON "_services_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_order_idx" ON "_services_v_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_parent_id_idx" ON "_services_v_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_path_idx" ON "_services_v_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_authorization_authorizat_idx" ON "_services_v_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_fedramp_auth_monitoring_monitoring_im_idx" ON "_services_v_blocks_fedramp_auth" USING btree ("monitoring_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_list_items_order_idx" ON "case_studies_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_list_items_parent_id_idx" ON "case_studies_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_list_items_icon_idx" ON "case_studies_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_order_idx" ON "case_studies_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_parent_id_idx" ON "case_studies_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_path_idx" ON "case_studies_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_advisory_image_idx" ON "case_studies_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_paragraphs_order_idx" ON "case_studies_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "case_studies_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_items_order_idx" ON "case_studies_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_items_parent_id_idx" ON "case_studies_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_items_i_idx" ON "case_studies_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_order_idx" ON "case_studies_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_parent_id_idx" ON "case_studies_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_readiness_assessment_section_path_idx" ON "case_studies_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "case_studies_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "case_studies_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_list_items_order_idx" ON "case_studies_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "case_studies_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_list_item_idx" ON "case_studies_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "case_studies_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "case_studies_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_monitoring_list_items_i_idx" ON "case_studies_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_order_idx" ON "case_studies_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_parent_id_idx" ON "case_studies_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_path_idx" ON "case_studies_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_authorization_authoriza_idx" ON "case_studies_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_fedramp_auth_monitoring_monitoring_i_idx" ON "case_studies_blocks_fedramp_auth" USING btree ("monitoring_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_list_items_order_idx" ON "_case_studies_v_blocks_fedramp_advisory_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_list_items_parent_id_idx" ON "_case_studies_v_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_list_items_icon_idx" ON "_case_studies_v_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_order_idx" ON "_case_studies_v_blocks_fedramp_advisory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_parent_id_idx" ON "_case_studies_v_blocks_fedramp_advisory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_path_idx" ON "_case_studies_v_blocks_fedramp_advisory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_advisory_image_idx" ON "_case_studies_v_blocks_fedramp_advisory" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_paragraphs_order_idx" ON "_case_studies_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_paragraphs_parent_id_idx" ON "_case_studies_v_blocks_readiness_assessment_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_items_order_idx" ON "_case_studies_v_blocks_readiness_assessment_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_items_parent_id_idx" ON "_case_studies_v_blocks_readiness_assessment_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_item_idx" ON "_case_studies_v_blocks_readiness_assessment_section_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_order_idx" ON "_case_studies_v_blocks_readiness_assessment_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_parent_id_idx" ON "_case_studies_v_blocks_readiness_assessment_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_readiness_assessment_section_path_idx" ON "_case_studies_v_blocks_readiness_assessment_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs_order_idx" ON "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs_parent_id_idx" ON "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_list_items_order_idx" ON "_case_studies_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_list_items_parent_id_idx" ON "_case_studies_v_blocks_fedramp_auth_authorization_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_list_i_idx" ON "_case_studies_v_blocks_fedramp_auth_authorization_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_monitoring_list_items_order_idx" ON "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_monitoring_list_items_parent_id_idx" ON "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_monitoring_list_item_idx" ON "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_order_idx" ON "_case_studies_v_blocks_fedramp_auth" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_parent_id_idx" ON "_case_studies_v_blocks_fedramp_auth" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_path_idx" ON "_case_studies_v_blocks_fedramp_auth" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_authorization_author_idx" ON "_case_studies_v_blocks_fedramp_auth" USING btree ("authorization_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_fedramp_auth_monitoring_monitorin_idx" ON "_case_studies_v_blocks_fedramp_auth" USING btree ("monitoring_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "pages_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "pages_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "pages_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "pages_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "pages_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "pages_blocks_fedramp_auth" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "_pages_v_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "_pages_v_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_fedramp_auth" CASCADE;
  DROP TABLE "services_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "services_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "services_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "services_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "services_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "services_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "services_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "services_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "services_blocks_fedramp_auth" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "_services_v_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "_services_v_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "_services_v_blocks_fedramp_auth" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "case_studies_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "case_studies_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "case_studies_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "case_studies_blocks_fedramp_auth" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_advisory_list_items" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_advisory" CASCADE;
  DROP TABLE "_case_studies_v_blocks_readiness_assessment_section_paragraphs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_readiness_assessment_section_items" CASCADE;
  DROP TABLE "_case_studies_v_blocks_readiness_assessment_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_auth_authorization_paragraphs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_auth_authorization_list_items" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_auth_monitoring_list_items" CASCADE;
  DROP TABLE "_case_studies_v_blocks_fedramp_auth" CASCADE;`)
}
