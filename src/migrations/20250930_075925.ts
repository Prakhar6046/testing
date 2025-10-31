import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_recommended_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_recommended_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TABLE "services_recommended_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum_services_recommended_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum_services_recommended_cards_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "services_recommended" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_recommended_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer
  );
  
  ALTER TABLE "services_recommended_cards" ADD CONSTRAINT "services_recommended_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_recommended_cards" ADD CONSTRAINT "services_recommended_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_recommended_cards" ADD CONSTRAINT "services_recommended_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_recommended"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_recommended_rels" ADD CONSTRAINT "services_recommended_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services_recommended"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_recommended_rels" ADD CONSTRAINT "services_recommended_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_recommended_rels" ADD CONSTRAINT "services_recommended_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_recommended_cards_order_idx" ON "services_recommended_cards" USING btree ("_order");
  CREATE INDEX "services_recommended_cards_parent_id_idx" ON "services_recommended_cards" USING btree ("_parent_id");
  CREATE INDEX "services_recommended_cards_icon_idx" ON "services_recommended_cards" USING btree ("icon_id");
  CREATE INDEX "services_recommended_cards_bg_image_idx" ON "services_recommended_cards" USING btree ("bg_image_id");
  CREATE INDEX "services_recommended_rels_order_idx" ON "services_recommended_rels" USING btree ("order");
  CREATE INDEX "services_recommended_rels_parent_idx" ON "services_recommended_rels" USING btree ("parent_id");
  CREATE INDEX "services_recommended_rels_path_idx" ON "services_recommended_rels" USING btree ("path");
  CREATE INDEX "services_recommended_rels_pages_id_idx" ON "services_recommended_rels" USING btree ("pages_id");
  CREATE INDEX "services_recommended_rels_services_id_idx" ON "services_recommended_rels" USING btree ("services_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_recommended_cards" CASCADE;
  DROP TABLE "services_recommended" CASCADE;
  DROP TABLE "services_recommended_rels" CASCADE;
  DROP TYPE "public"."enum_services_recommended_cards_link_type";
  DROP TYPE "public"."enum_services_recommended_cards_link_aprnce";`)
}
