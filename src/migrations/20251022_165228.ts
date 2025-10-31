import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TYPE "public"."enum__pages_v_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TYPE "public"."enum_case_studies_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TYPE "public"."enum__case_studies_v_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TABLE "pages_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum_pages_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum__pages_v_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "case_studies_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum_case_studies_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum__case_studies_v_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_service_video_content_paragraphs" ADD CONSTRAINT "pages_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_video" ADD CONSTRAINT "pages_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_video" ADD CONSTRAINT "pages_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_video_content_paragraphs" ADD CONSTRAINT "_pages_v_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_video" ADD CONSTRAINT "_pages_v_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_video" ADD CONSTRAINT "_pages_v_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_video_content_paragraphs" ADD CONSTRAINT "case_studies_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_video" ADD CONSTRAINT "case_studies_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_video" ADD CONSTRAINT "case_studies_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_video_content_paragraphs" ADD CONSTRAINT "_case_studies_v_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_video" ADD CONSTRAINT "_case_studies_v_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_video" ADD CONSTRAINT "_case_studies_v_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_service_video_content_paragraphs_order_idx" ON "pages_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_video_content_paragraphs_parent_id_idx" ON "pages_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_video_order_idx" ON "pages_blocks_service_video" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_video_parent_id_idx" ON "pages_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_video_path_idx" ON "pages_blocks_service_video" USING btree ("_path");
  CREATE INDEX "pages_blocks_service_video_video_media_idx" ON "pages_blocks_service_video" USING btree ("video_media_id");
  CREATE INDEX "_pages_v_blocks_service_video_content_paragraphs_order_idx" ON "_pages_v_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_video_content_paragraphs_parent_id_idx" ON "_pages_v_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_video_order_idx" ON "_pages_v_blocks_service_video" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_video_parent_id_idx" ON "_pages_v_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_video_path_idx" ON "_pages_v_blocks_service_video" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_video_video_media_idx" ON "_pages_v_blocks_service_video" USING btree ("video_media_id");
  CREATE INDEX "case_studies_blocks_service_video_content_paragraphs_order_idx" ON "case_studies_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_service_video_content_paragraphs_parent_id_idx" ON "case_studies_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_service_video_order_idx" ON "case_studies_blocks_service_video" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_service_video_parent_id_idx" ON "case_studies_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_service_video_path_idx" ON "case_studies_blocks_service_video" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_service_video_video_media_idx" ON "case_studies_blocks_service_video" USING btree ("video_media_id");
  CREATE INDEX "_case_studies_v_blocks_service_video_content_paragraphs_order_idx" ON "_case_studies_v_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_service_video_content_paragraphs_parent_id_idx" ON "_case_studies_v_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_service_video_order_idx" ON "_case_studies_v_blocks_service_video" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_service_video_parent_id_idx" ON "_case_studies_v_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_service_video_path_idx" ON "_case_studies_v_blocks_service_video" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_service_video_video_media_idx" ON "_case_studies_v_blocks_service_video" USING btree ("video_media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_service_video" CASCADE;
  DROP TABLE "_pages_v_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_service_video" CASCADE;
  DROP TABLE "case_studies_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "case_studies_blocks_service_video" CASCADE;
  DROP TABLE "_case_studies_v_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_service_video" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_service_video_video_type";
  DROP TYPE "public"."enum__pages_v_blocks_service_video_video_type";
  DROP TYPE "public"."enum_case_studies_blocks_service_video_video_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_service_video_video_type";`)
}
