-- Fix missing auto_play column and create animated_timeline blocks
-- This version cleans up orphaned data before adding foreign key constraints

-- First, clean up any orphaned data in existing tables
DELETE FROM "services_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "services");

DELETE FROM "pages_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "pages");

DELETE FROM "case_studies_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "case_studies");

DELETE FROM "_services_v_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "_services_v");

DELETE FROM "_pages_v_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "_pages_v");

DELETE FROM "_case_studies_v_blocks_animated_timeline"
WHERE "_parent_id" NOT IN (SELECT "id" FROM "_case_studies_v");

-- Pages collection - Main block table
CREATE TABLE IF NOT EXISTS "pages_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"block_name" varchar
);

-- Pages collection - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "pages_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

-- Pages version table - Main block
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"_uuid" varchar,
	"block_name" varchar
);

-- Pages version table - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "_pages_v_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

-- Services collection - Main block table
CREATE TABLE IF NOT EXISTS "services_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"block_name" varchar
);

-- Services collection - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "services_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

-- Services version table - Main block
CREATE TABLE IF NOT EXISTS "_services_v_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"_uuid" varchar,
	"block_name" varchar
);

-- Services version table - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "_services_v_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

-- Case Studies collection - Main block table
CREATE TABLE IF NOT EXISTS "case_studies_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"block_name" varchar
);

-- Case Studies collection - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "case_studies_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer
);

-- Case Studies version table - Main block
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_animated_timeline" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"auto_play" boolean DEFAULT true,
	"auto_play_interval" integer DEFAULT 3000,
	"_uuid" varchar,
	"block_name" varchar
);

-- Case Studies version table - Nested array for timeline items
CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_animated_timeline_timeline_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"year" varchar,
	"phase" varchar,
	"title" varchar,
	"description" text,
	"icon_id" integer,
	"_uuid" varchar
);

-- Add missing auto_play and auto_play_interval columns if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'pages_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "pages_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'pages_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "pages_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_pages_v_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "_pages_v_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_pages_v_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "_pages_v_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'services_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "services_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'services_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "services_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_services_v_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "_services_v_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_services_v_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "_services_v_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'case_studies_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "case_studies_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'case_studies_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "case_studies_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_case_studies_v_blocks_animated_timeline'
                   AND column_name = 'auto_play') THEN
        ALTER TABLE "_case_studies_v_blocks_animated_timeline" ADD COLUMN "auto_play" boolean DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = '_case_studies_v_blocks_animated_timeline'
                   AND column_name = 'auto_play_interval') THEN
        ALTER TABLE "_case_studies_v_blocks_animated_timeline" ADD COLUMN "auto_play_interval" integer DEFAULT 3000;
    END IF;
END $$;

-- Create foreign key constraints (after cleanup, these should work)

-- Pages constraints
DO $$ BEGIN
 ALTER TABLE "pages_blocks_animated_timeline" ADD CONSTRAINT "pages_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "pages_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "pages_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Pages version constraints
DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_animated_timeline" ADD CONSTRAINT "_pages_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_pages_v_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_pages_v_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Services constraints
DO $$ BEGIN
 ALTER TABLE "services_blocks_animated_timeline" ADD CONSTRAINT "services_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "services_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "services_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Services version constraints
DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_animated_timeline" ADD CONSTRAINT "_services_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_services_v_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_services_v_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Case Studies constraints
DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_animated_timeline" ADD CONSTRAINT "case_studies_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "case_studies_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "case_studies_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "case_studies_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Case Studies version constraints
DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_animated_timeline" ADD CONSTRAINT "_case_studies_v_blocks_animated_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_case_studies_v_blocks_animated_timeline_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_animated_timeline"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_case_studies_v_blocks_animated_timeline_timeline_items" ADD CONSTRAINT "_case_studies_v_blocks_animated_timeline_timeline_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
