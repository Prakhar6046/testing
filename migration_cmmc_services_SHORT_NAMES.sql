-- Migration for CMMC Services Overview Block with SHORTENED table names
-- This fixes the "Exceeded max identifier length" error by using dbName overrides
-- PostgreSQL has a 63 character limit for table/column names

-- =============================================================================
-- SERVICES COLLECTION TABLES
-- =============================================================================

-- Main block table for services collection
CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"block_name" varchar
);

-- Consulting services nested array (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Remediation services nested array (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Version table for main block
CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- Version table for consulting services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- Version table for remediation services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- PAGES COLLECTION TABLES
-- =============================================================================

-- Main block table for pages collection
CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"block_name" varchar
);

-- Consulting services for pages (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Remediation services for pages (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Version table for pages main block
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- Version table for pages consulting services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- Version table for pages remediation services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- CASE STUDIES COLLECTION TABLES
-- =============================================================================

-- Main block table for case_studies collection
CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"block_name" varchar
);

-- Consulting services for case_studies (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Remediation services for case_studies (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

-- Version table for case_studies main block
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_services_overview" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"left_section_heading" varchar,
	"left_section_description" text,
	"background_image_id" integer,
	"consulting_heading" varchar,
	"consulting_subheading" varchar,
	"remediation_heading" varchar,
	"remediation_subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- Version table for case_studies consulting services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- Version table for case_studies remediation services (SHORTENED NAME)
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- FOREIGN KEY CONSTRAINTS
-- =============================================================================

-- Services collection constraints
DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_services_overview" ADD CONSTRAINT "services_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_services_overview" ADD CONSTRAINT "services_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_consult" ADD CONSTRAINT "services_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_remed" ADD CONSTRAINT "services_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_services_v_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_services_v_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_consult" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_remed" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Pages collection constraints
DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_services_overview" ADD CONSTRAINT "pages_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_services_overview" ADD CONSTRAINT "pages_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_consult" ADD CONSTRAINT "pages_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_remed" ADD CONSTRAINT "pages_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_pages_v_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_pages_v_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_consult" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_remed" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Case Studies collection constraints
DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_services_overview" ADD CONSTRAINT "case_studies_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_services_overview" ADD CONSTRAINT "case_studies_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_consult" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_remed" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_services_overview_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_services_overview" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_consult" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_remed" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_services_overview"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- =============================================================================
-- INDEXES
-- =============================================================================

-- Services collection indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_services_overview_order_idx" ON "services_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_services_overview_parent_id_idx" ON "services_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_services_overview_path_idx" ON "services_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_consult_order_idx" ON "services_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_consult_parent_id_idx" ON "services_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_remed_order_idx" ON "services_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_remed_parent_id_idx" ON "services_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Version table indexes for services
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_services_overview_order_idx" ON "_services_v_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_services_overview_parent_id_idx" ON "_services_v_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_services_overview_path_idx" ON "_services_v_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_consult_order_idx" ON "_services_v_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_consult_parent_id_idx" ON "_services_v_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_remed_order_idx" ON "_services_v_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_remed_parent_id_idx" ON "_services_v_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Pages collection indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_services_overview_order_idx" ON "pages_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_services_overview_parent_id_idx" ON "pages_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_services_overview_path_idx" ON "pages_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_consult_order_idx" ON "pages_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_consult_parent_id_idx" ON "pages_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_remed_order_idx" ON "pages_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_remed_parent_id_idx" ON "pages_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Version table indexes for pages
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_services_overview_order_idx" ON "_pages_v_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_services_overview_parent_id_idx" ON "_pages_v_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_services_overview_path_idx" ON "_pages_v_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_consult_order_idx" ON "_pages_v_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_consult_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_remed_order_idx" ON "_pages_v_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_remed_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Case Studies collection indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_services_overview_order_idx" ON "case_studies_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_services_overview_parent_id_idx" ON "case_studies_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_services_overview_path_idx" ON "case_studies_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_consult_order_idx" ON "case_studies_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_consult_parent_id_idx" ON "case_studies_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_remed_order_idx" ON "case_studies_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_remed_parent_id_idx" ON "case_studies_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Version table indexes for case_studies
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_services_overview_order_idx" ON "_case_studies_v_blocks_cmmc_services_overview" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_services_overview_parent_id_idx" ON "_case_studies_v_blocks_cmmc_services_overview" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_services_overview_path_idx" ON "_case_studies_v_blocks_cmmc_services_overview" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_consult_order_idx" ON "_case_studies_v_blocks_cmmc_svc_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_consult_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_remed_order_idx" ON "_case_studies_v_blocks_cmmc_svc_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_remed_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;
