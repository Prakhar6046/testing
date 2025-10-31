-- Migration: 20251015_164508
-- This creates all the missing FedRAMP and other block tables
-- Safe to run - uses CREATE TABLE IF NOT EXISTS

-- Run this in your Supabase SQL Editor

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

-- Version tables (for versioning support)
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

-- Add foreign key constraints
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

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_order_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_parent_id_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_list_items_icon_idx" ON "pages_blocks_fedramp_advisory_list_items" USING btree ("icon_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_order_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_parent_id_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_path_idx" ON "pages_blocks_fedramp_advisory" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_fedramp_advisory_image_idx" ON "pages_blocks_fedramp_advisory" USING btree ("image_id");
