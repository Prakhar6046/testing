-- Migration for CMMC Services Overview Block with ULTRA-SHORTENED names
-- Fixes PostgreSQL 63 character limit
-- Block slug: cmmc_svc_ovw
-- Array dbNames: consult, remed

-- =============================================================================
-- SERVICES COLLECTION TABLES
-- =============================================================================

CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- PAGES COLLECTION TABLES
-- =============================================================================

CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- CASE STUDIES COLLECTION TABLES
-- =============================================================================

CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw" (
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

CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_consult" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_remed" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

-- =============================================================================
-- FOREIGN KEY CONSTRAINTS
-- =============================================================================

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_ovw" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_ovw" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "services_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "_services_v_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_ovw" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_ovw" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "pages_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "_pages_v_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_ovw" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_ovw" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "case_studies_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw_consult" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_consult_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_cmmc_svc_ovw_remed" ADD CONSTRAINT "_case_studies_v_blocks_cmmc_svc_ovw_remed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cmmc_svc_ovw"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- =============================================================================
-- INDEXES
-- =============================================================================

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_order_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_parent_id_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_path_idx" ON "services_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_consult_order_idx" ON "services_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "services_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_remed_order_idx" ON "services_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "services_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_order_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_path_idx" ON "_services_v_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_consult_order_idx" ON "_services_v_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_remed_order_idx" ON "_services_v_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_services_v_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "_services_v_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_order_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_path_idx" ON "pages_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_consult_order_idx" ON "pages_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_remed_order_idx" ON "pages_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "pages_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_path_idx" ON "_pages_v_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_consult_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_remed_order_idx" ON "_pages_v_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "_pages_v_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_order_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_path_idx" ON "case_studies_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_consult_order_idx" ON "case_studies_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_remed_order_idx" ON "case_studies_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "case_studies_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_path_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_consult_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_consult" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_consult_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_consult" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_remed_order_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_remed" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_cmmc_svc_ovw_remed_parent_id_idx" ON "_case_studies_v_blocks_cmmc_svc_ovw_remed" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;
