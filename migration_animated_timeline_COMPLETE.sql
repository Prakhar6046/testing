-- Complete migration for Animated Timeline block
-- Block slug: animated_timeline
-- Nested array: timelineItems (auto-generated name, no dbName override)

-- =============================================================================
-- PAGES COLLECTION TABLES
-- =============================================================================

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

-- =============================================================================
-- SERVICES COLLECTION TABLES
-- =============================================================================

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

-- =============================================================================
-- CASE STUDIES COLLECTION TABLES
-- =============================================================================

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

-- =============================================================================
-- FOREIGN KEY CONSTRAINTS
-- =============================================================================

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

-- =============================================================================
-- INDEXES
-- =============================================================================

-- Pages indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_order_idx" ON "pages_blocks_animated_timeline" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_parent_id_idx" ON "pages_blocks_animated_timeline" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_path_idx" ON "pages_blocks_animated_timeline" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_timeline_items_order_idx" ON "pages_blocks_animated_timeline_timeline_items" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "pages_blocks_animated_timeline_timeline_items_parent_id_idx" ON "pages_blocks_animated_timeline_timeline_items" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Services indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_order_idx" ON "services_blocks_animated_timeline" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_parent_id_idx" ON "services_blocks_animated_timeline" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_path_idx" ON "services_blocks_animated_timeline" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_timeline_items_order_idx" ON "services_blocks_animated_timeline_timeline_items" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "services_blocks_animated_timeline_timeline_items_parent_id_idx" ON "services_blocks_animated_timeline_timeline_items" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

-- Case Studies indexes
DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_order_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_parent_id_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_path_idx" ON "case_studies_blocks_animated_timeline" USING btree ("_path");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_timeline_items_order_idx" ON "case_studies_blocks_animated_timeline_timeline_items" USING btree ("_order");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
 CREATE INDEX IF NOT EXISTS "case_studies_blocks_animated_timeline_timeline_items_parent_id_idx" ON "case_studies_blocks_animated_timeline_timeline_items" USING btree ("_parent_id");
EXCEPTION
 WHEN duplicate_table THEN null;
END $$;
