import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TYPE "public"."enum__services_v_blocks_service_video_video_type" AS ENUM('youtube', 'media');
  CREATE TABLE "services_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum_services_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_video_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'Watch Our Video',
  	"video_id" varchar,
  	"video_type" "enum__services_v_blocks_service_video_video_type" DEFAULT 'youtube',
  	"youtube_url" varchar,
  	"video_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "_pages_v_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "services_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "services_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "_services_v_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "_services_v_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "case_studies_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "case_studies_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "_case_studies_v_blocks_hero_service" ADD COLUMN "video_mode" boolean DEFAULT false;
  ALTER TABLE "_case_studies_v_blocks_hero_service" ADD COLUMN "video_section_id" varchar;
  ALTER TABLE "services_blocks_service_video_content_paragraphs" ADD CONSTRAINT "services_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_video" ADD CONSTRAINT "services_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_video" ADD CONSTRAINT "services_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_video_content_paragraphs" ADD CONSTRAINT "_services_v_blocks_service_video_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_video"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_video" ADD CONSTRAINT "_services_v_blocks_service_video_video_media_id_media_id_fk" FOREIGN KEY ("video_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_video" ADD CONSTRAINT "_services_v_blocks_service_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_blocks_service_video_content_paragraphs_order_idx" ON "services_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "services_blocks_service_video_content_paragraphs_parent_id_idx" ON "services_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_video_order_idx" ON "services_blocks_service_video" USING btree ("_order");
  CREATE INDEX "services_blocks_service_video_parent_id_idx" ON "services_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_video_path_idx" ON "services_blocks_service_video" USING btree ("_path");
  CREATE INDEX "services_blocks_service_video_video_media_idx" ON "services_blocks_service_video" USING btree ("video_media_id");
  CREATE INDEX "_services_v_blocks_service_video_content_paragraphs_order_idx" ON "_services_v_blocks_service_video_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_video_content_paragraphs_parent_id_idx" ON "_services_v_blocks_service_video_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_video_order_idx" ON "_services_v_blocks_service_video" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_video_parent_id_idx" ON "_services_v_blocks_service_video" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_video_path_idx" ON "_services_v_blocks_service_video" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_service_video_video_media_idx" ON "_services_v_blocks_service_video" USING btree ("video_media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "services_blocks_service_video" CASCADE;
  DROP TABLE "_services_v_blocks_service_video_content_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_service_video" CASCADE;
  ALTER TABLE "pages_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "pages_blocks_hero_service" DROP COLUMN "video_section_id";
  ALTER TABLE "_pages_v_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "_pages_v_blocks_hero_service" DROP COLUMN "video_section_id";
  ALTER TABLE "services_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "services_blocks_hero_service" DROP COLUMN "video_section_id";
  ALTER TABLE "_services_v_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "_services_v_blocks_hero_service" DROP COLUMN "video_section_id";
  ALTER TABLE "case_studies_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "case_studies_blocks_hero_service" DROP COLUMN "video_section_id";
  ALTER TABLE "_case_studies_v_blocks_hero_service" DROP COLUMN "video_mode";
  ALTER TABLE "_case_studies_v_blocks_hero_service" DROP COLUMN "video_section_id";
  DROP TYPE "public"."enum_services_blocks_service_video_video_type";
  DROP TYPE "public"."enum__services_v_blocks_service_video_video_type";`)
}
