-- Migration: Services Overview Block (CMMC)
-- This creates the missing services_overview block tables
-- Safe to run - uses CREATE TABLE IF NOT EXISTS

-- Run this in your Supabase SQL Editor

-- ====================
-- Services Overview Block (for all collections)
-- ====================

-- SERVICES collection
CREATE TABLE IF NOT EXISTS "services_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_services_overview" (
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

-- Version tables for SERVICES
CREATE TABLE IF NOT EXISTS "_services_v_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_services_overview" (
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

-- PAGES collection
CREATE TABLE IF NOT EXISTS "pages_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_overview" (
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

-- Version tables for PAGES
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_overview" (
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

-- CASE STUDIES collection
CREATE TABLE IF NOT EXISTS "case_studies_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "case_studies_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"service" varchar
);

CREATE TABLE IF NOT EXISTS "case_studies_blocks_services_overview" (
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

-- Version tables for CASE STUDIES
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_services_overview_consulting_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_services_overview_remediation_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_services_overview" (
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

-- ====================
-- Foreign Key Constraints
-- ====================

DO $$
BEGIN
    -- Services constraints
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_blocks_services_overview_consulting_services_parent_id_fk') THEN
        ALTER TABLE "services_blocks_services_overview_consulting_services"
        ADD CONSTRAINT "services_blocks_services_overview_consulting_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_blocks_services_overview_remediation_services_parent_id_fk') THEN
        ALTER TABLE "services_blocks_services_overview_remediation_services"
        ADD CONSTRAINT "services_blocks_services_overview_remediation_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_blocks_services_overview_parent_id_fk') THEN
        ALTER TABLE "services_blocks_services_overview"
        ADD CONSTRAINT "services_blocks_services_overview_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    -- Pages constraints
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_services_overview_consulting_services_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_services_overview_consulting_services"
        ADD CONSTRAINT "pages_blocks_services_overview_consulting_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_services_overview_remediation_services_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_services_overview_remediation_services"
        ADD CONSTRAINT "pages_blocks_services_overview_remediation_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_services_overview_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_services_overview"
        ADD CONSTRAINT "pages_blocks_services_overview_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    -- Case Studies constraints
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'case_studies_blocks_services_overview_consulting_services_parent_id_fk') THEN
        ALTER TABLE "case_studies_blocks_services_overview_consulting_services"
        ADD CONSTRAINT "case_studies_blocks_services_overview_consulting_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'case_studies_blocks_services_overview_remediation_services_parent_id_fk') THEN
        ALTER TABLE "case_studies_blocks_services_overview_remediation_services"
        ADD CONSTRAINT "case_studies_blocks_services_overview_remediation_services_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'case_studies_blocks_services_overview_parent_id_fk') THEN
        ALTER TABLE "case_studies_blocks_services_overview"
        ADD CONSTRAINT "case_studies_blocks_services_overview_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;
END $$;

-- ====================
-- Indexes for Performance
-- ====================

-- Services indexes
CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_consulting_services_order_idx" ON "services_blocks_services_overview_consulting_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_consulting_services_parent_id_idx" ON "services_blocks_services_overview_consulting_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_remediation_services_order_idx" ON "services_blocks_services_overview_remediation_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_remediation_services_parent_id_idx" ON "services_blocks_services_overview_remediation_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_order_idx" ON "services_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_parent_id_idx" ON "services_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_services_overview_path_idx" ON "services_blocks_services_overview" USING btree ("_path");

-- Version table indexes
CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_order_idx" ON "_services_v_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_parent_id_idx" ON "_services_v_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_services_overview_path_idx" ON "_services_v_blocks_services_overview" USING btree ("_path");

-- Pages indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_consulting_services_order_idx" ON "pages_blocks_services_overview_consulting_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_consulting_services_parent_id_idx" ON "pages_blocks_services_overview_consulting_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_remediation_services_order_idx" ON "pages_blocks_services_overview_remediation_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_remediation_services_parent_id_idx" ON "pages_blocks_services_overview_remediation_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_order_idx" ON "pages_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_parent_id_idx" ON "pages_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_path_idx" ON "pages_blocks_services_overview" USING btree ("_path");

-- Pages version table indexes
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_order_idx" ON "_pages_v_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_parent_id_idx" ON "_pages_v_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_services_overview_path_idx" ON "_pages_v_blocks_services_overview" USING btree ("_path");

-- Case Studies indexes
CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_consulting_services_order_idx" ON "case_studies_blocks_services_overview_consulting_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_consulting_services_parent_id_idx" ON "case_studies_blocks_services_overview_consulting_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_remediation_services_order_idx" ON "case_studies_blocks_services_overview_remediation_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_remediation_services_parent_id_idx" ON "case_studies_blocks_services_overview_remediation_services" USING btree ("_parent_id");

CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_order_idx" ON "case_studies_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_parent_id_idx" ON "case_studies_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "case_studies_blocks_services_overview_path_idx" ON "case_studies_blocks_services_overview" USING btree ("_path");

-- Case Studies version table indexes
CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_order_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_parent_id_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_services_overview_path_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_path");
