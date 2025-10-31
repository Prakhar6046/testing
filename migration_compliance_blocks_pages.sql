-- Migration: Compliance Blocks for PAGES Collection
-- This creates all the missing compliance block tables for Pages
-- Safe to run - uses CREATE TABLE IF NOT EXISTS

-- Run this in your Supabase SQL Editor

-- ====================
-- CMMC Blocks for PAGES
-- ====================

-- CMMC Why Us Block
CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_why_us_left_card_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_why_us_right_card_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cmmc_why_us" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"left_card_title" varchar,
	"left_card_subtitle" varchar,
	"center_heading" varchar,
	"center_description" text,
	"right_card_title" varchar,
	"right_card_subtitle" varchar,
	"block_name" varchar
);

-- Services Overview 2 Block
CREATE TABLE IF NOT EXISTS "pages_blocks_services_overview_2_steps" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"number" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_overview_2" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- Animated Timeline Block
CREATE TABLE IF NOT EXISTS "pages_blocks_animated_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"year" varchar,
	"title" varchar,
	"description" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"block_name" varchar
);

-- Compliance Check Block
CREATE TABLE IF NOT EXISTS "pages_blocks_compliance_check_checklist" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"item" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_compliance_check" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- CMCC Timeline Block
CREATE TABLE IF NOT EXISTS "pages_blocks_cmcc_timeline_phases" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"phase" varchar,
	"title" varchar,
	"description" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cmcc_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"block_name" varchar
);

-- ====================
-- FISMA Blocks for PAGES
-- ====================

-- FISMA How To Block
CREATE TABLE IF NOT EXISTS "pages_blocks_fisma_how_to_requirements" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"text" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_fisma_how_to" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"requirements_heading" varchar,
	"border_image_url_id" integer,
	"list_style_image_url_id" integer,
	"background_image_url_id" integer,
	"block_name" varchar
);

-- FISMA Compliance Block
CREATE TABLE IF NOT EXISTS "pages_blocks_fisma_compliance_steps" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_fisma_compliance" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"block_name" varchar
);

-- ====================
-- GLBA Blocks for PAGES
-- ====================

-- GLBA Compliance Block
CREATE TABLE IF NOT EXISTS "pages_blocks_glba_compliance_requirements" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_glba_compliance" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- GLBA Services Block
CREATE TABLE IF NOT EXISTS "pages_blocks_glba_services_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_glba_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"block_name" varchar
);

-- GLBA Penalties Block
CREATE TABLE IF NOT EXISTS "pages_blocks_glba_penalties_examples" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"company" varchar,
	"amount" varchar,
	"reason" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_glba_penalties" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- ====================
-- HIPAA Blocks for PAGES
-- ====================

-- HIPAA Block (Swiper)
CREATE TABLE IF NOT EXISTS "pages_blocks_hipaa_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hipaa_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"block_name" varchar
);

-- HIPAA Paragraph Block
CREATE TABLE IF NOT EXISTS "pages_blocks_hipaa_paragraph_block_paragraphs" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hipaa_paragraph_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"block_name" varchar
);

-- ====================
-- SOC Blocks for PAGES
-- ====================

-- SOC2 Block
CREATE TABLE IF NOT EXISTS "pages_blocks_soc2_block_features" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_soc2_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- SOC3 Block Config
CREATE TABLE IF NOT EXISTS "pages_blocks_soc3_block_config_points" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_soc3_block_config" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- ====================
-- GDPR Blocks for PAGES
-- ====================

-- GDPR Intro Block
CREATE TABLE IF NOT EXISTS "pages_blocks_gdpr_intro_key_points" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"point" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gdpr_intro" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- GDPR Principles Block
CREATE TABLE IF NOT EXISTS "pages_blocks_gdpr_principles_principles" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gdpr_principles" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"block_name" varchar
);

-- ====================
-- CCPA Blocks for PAGES
-- ====================

-- Who Needs To Comply Block
CREATE TABLE IF NOT EXISTS "pages_blocks_who_needs_to_comply_criteria" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"criterion" varchar,
	"description" text
);

CREATE TABLE IF NOT EXISTS "pages_blocks_who_needs_to_comply" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"block_name" varchar
);

-- ====================
-- Version Tables (_pages_v)
-- ====================

-- CMMC Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_why_us_left_card_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_why_us_right_card_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmmc_why_us" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"left_card_title" varchar,
	"left_card_subtitle" varchar,
	"center_heading" varchar,
	"center_description" text,
	"right_card_title" varchar,
	"right_card_subtitle" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_overview_2_steps" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"number" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_services_overview_2" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_animated_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"year" varchar,
	"title" varchar,
	"description" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_compliance_check_checklist" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"item" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_compliance_check" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmcc_timeline_phases" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cmcc_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- FISMA Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fisma_how_to_requirements" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"text" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fisma_how_to" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"requirements_heading" varchar,
	"border_image_url_id" integer,
	"list_style_image_url_id" integer,
	"background_image_url_id" integer,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fisma_compliance_steps" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fisma_compliance" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- GLBA Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_compliance_requirements" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_compliance" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_services_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_penalties_examples" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"company" varchar,
	"amount" varchar,
	"reason" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_glba_penalties" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

-- HIPAA Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hipaa_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hipaa_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hipaa_paragraph_block_paragraphs" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"text" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hipaa_paragraph_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- SOC Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_soc2_block_features" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_soc2_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_soc3_block_config_points" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_soc3_block_config" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

-- GDPR Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gdpr_intro_key_points" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"point" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gdpr_intro" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gdpr_principles_principles" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gdpr_principles" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"subheading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

-- CCPA Version Tables
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_who_needs_to_comply_criteria" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"criterion" varchar,
	"description" text,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_who_needs_to_comply" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"description" text,
	"_uuid" varchar,
	"block_name" varchar
);

-- ====================
-- Foreign Key Constraints
-- ====================

DO $$
BEGIN
    -- CMMC Constraints
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_cmmc_why_us_left_card_items_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_cmmc_why_us_left_card_items"
        ADD CONSTRAINT "pages_blocks_cmmc_why_us_left_card_items_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_why_us"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_cmmc_why_us_right_card_items_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_cmmc_why_us_right_card_items"
        ADD CONSTRAINT "pages_blocks_cmmc_why_us_right_card_items_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cmmc_why_us"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pages_blocks_cmmc_why_us_parent_id_fk') THEN
        ALTER TABLE "pages_blocks_cmmc_why_us"
        ADD CONSTRAINT "pages_blocks_cmmc_why_us_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id")
        ON DELETE cascade ON UPDATE no action;
    END IF;
END $$;

-- ====================
-- Indexes for Performance
-- ====================

-- CMMC Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_why_us_order_idx" ON "pages_blocks_cmmc_why_us" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_why_us_parent_id_idx" ON "pages_blocks_cmmc_why_us" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cmmc_why_us_path_idx" ON "pages_blocks_cmmc_why_us" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_order_idx" ON "pages_blocks_services_overview_2" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_parent_id_idx" ON "pages_blocks_services_overview_2" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_overview_2_path_idx" ON "pages_blocks_services_overview_2" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_order_idx" ON "pages_blocks_animated_timeline" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_parent_id_idx" ON "pages_blocks_animated_timeline" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_path_idx" ON "pages_blocks_animated_timeline" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_compliance_check_order_idx" ON "pages_blocks_compliance_check" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_compliance_check_parent_id_idx" ON "pages_blocks_compliance_check" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_compliance_check_path_idx" ON "pages_blocks_compliance_check" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_cmcc_timeline_order_idx" ON "pages_blocks_cmcc_timeline" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cmcc_timeline_parent_id_idx" ON "pages_blocks_cmcc_timeline" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cmcc_timeline_path_idx" ON "pages_blocks_cmcc_timeline" USING btree ("_path");

-- FISMA Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_how_to_order_idx" ON "pages_blocks_fisma_how_to" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_how_to_parent_id_idx" ON "pages_blocks_fisma_how_to" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_how_to_path_idx" ON "pages_blocks_fisma_how_to" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_compliance_order_idx" ON "pages_blocks_fisma_compliance" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_compliance_parent_id_idx" ON "pages_blocks_fisma_compliance" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_fisma_compliance_path_idx" ON "pages_blocks_fisma_compliance" USING btree ("_path");

-- GLBA Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_compliance_order_idx" ON "pages_blocks_glba_compliance" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_compliance_parent_id_idx" ON "pages_blocks_glba_compliance" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_compliance_path_idx" ON "pages_blocks_glba_compliance" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_glba_services_order_idx" ON "pages_blocks_glba_services" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_services_parent_id_idx" ON "pages_blocks_glba_services" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_services_path_idx" ON "pages_blocks_glba_services" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_glba_penalties_order_idx" ON "pages_blocks_glba_penalties" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_penalties_parent_id_idx" ON "pages_blocks_glba_penalties" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_glba_penalties_path_idx" ON "pages_blocks_glba_penalties" USING btree ("_path");

-- HIPAA Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_block_order_idx" ON "pages_blocks_hipaa_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_block_parent_id_idx" ON "pages_blocks_hipaa_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_block_path_idx" ON "pages_blocks_hipaa_block" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_paragraph_block_order_idx" ON "pages_blocks_hipaa_paragraph_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_paragraph_block_parent_id_idx" ON "pages_blocks_hipaa_paragraph_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hipaa_paragraph_block_path_idx" ON "pages_blocks_hipaa_paragraph_block" USING btree ("_path");

-- SOC Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_soc2_block_order_idx" ON "pages_blocks_soc2_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_soc2_block_parent_id_idx" ON "pages_blocks_soc2_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_soc2_block_path_idx" ON "pages_blocks_soc2_block" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_soc3_block_config_order_idx" ON "pages_blocks_soc3_block_config" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_soc3_block_config_parent_id_idx" ON "pages_blocks_soc3_block_config" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_soc3_block_config_path_idx" ON "pages_blocks_soc3_block_config" USING btree ("_path");

-- GDPR Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_intro_order_idx" ON "pages_blocks_gdpr_intro" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_intro_parent_id_idx" ON "pages_blocks_gdpr_intro" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_intro_path_idx" ON "pages_blocks_gdpr_intro" USING btree ("_path");

CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_principles_order_idx" ON "pages_blocks_gdpr_principles" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_principles_parent_id_idx" ON "pages_blocks_gdpr_principles" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gdpr_principles_path_idx" ON "pages_blocks_gdpr_principles" USING btree ("_path");

-- CCPA Indexes
CREATE INDEX IF NOT EXISTS "pages_blocks_who_needs_to_comply_order_idx" ON "pages_blocks_who_needs_to_comply" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_who_needs_to_comply_parent_id_idx" ON "pages_blocks_who_needs_to_comply" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_who_needs_to_comply_path_idx" ON "pages_blocks_who_needs_to_comply" USING btree ("_path");

-- Version table indexes
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_why_us_order_idx" ON "_pages_v_blocks_cmmc_why_us" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_why_us_parent_id_idx" ON "_pages_v_blocks_cmmc_why_us" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cmmc_why_us_path_idx" ON "_pages_v_blocks_cmmc_why_us" USING btree ("_path");
