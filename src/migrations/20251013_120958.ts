import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_contact_form" RENAME TO "pages_blocks_contact";
  ALTER TABLE "_pages_v_blocks_contact_form" RENAME TO "_pages_v_blocks_contact";
  ALTER TABLE "services_blocks_contact_form" RENAME TO "services_blocks_contact";
  ALTER TABLE "_services_v_blocks_contact_form" RENAME TO "_services_v_blocks_contact";
  ALTER TABLE "case_studies_blocks_contact_form" RENAME TO "case_studies_blocks_contact";
  ALTER TABLE "_case_studies_v_blocks_contact_form" RENAME TO "_case_studies_v_blocks_contact";

  -- Rename the column in renamed tables
  ALTER TABLE "pages_blocks_contact" RENAME COLUMN "content_note" TO "note";
  ALTER TABLE "_pages_v_blocks_contact" RENAME COLUMN "content_note" TO "note";
  ALTER TABLE "services_blocks_contact" RENAME COLUMN "content_note" TO "note";
  ALTER TABLE "_services_v_blocks_contact" RENAME COLUMN "content_note" TO "note";
  ALTER TABLE "case_studies_blocks_contact" RENAME COLUMN "content_note" TO "note";
  ALTER TABLE "_case_studies_v_blocks_contact" RENAME COLUMN "content_note" TO "note";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD CONSTRAINT "_pages_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact_form" ADD CONSTRAINT "services_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact_form" ADD CONSTRAINT "_services_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_contact_form" ADD CONSTRAINT "case_studies_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_contact_form" ADD CONSTRAINT "_case_studies_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_contact_form_order_idx" ON "pages_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_parent_id_idx" ON "pages_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_form_path_idx" ON "pages_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_form_order_idx" ON "_pages_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_parent_id_idx" ON "_pages_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_path_idx" ON "_pages_v_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "services_blocks_contact_form_order_idx" ON "services_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_form_parent_id_idx" ON "services_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_form_path_idx" ON "services_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_contact_form_order_idx" ON "_services_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_form_parent_id_idx" ON "_services_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_form_path_idx" ON "_services_v_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_contact_form_order_idx" ON "case_studies_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_contact_form_parent_id_idx" ON "case_studies_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_contact_form_path_idx" ON "case_studies_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_contact_form_order_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_contact_form_parent_id_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_contact_form_path_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_path");`)
}
