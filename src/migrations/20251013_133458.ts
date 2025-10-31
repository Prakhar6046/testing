import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" serial PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "_uuid" varchar,
    "block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "case_studies_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "_case_studies_v_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" serial PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "_uuid" varchar,
    "block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "services_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "_services_v_blocks_contact_form_static" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" serial PRIMARY KEY NOT NULL,
    "content_note" varchar,
    "_uuid" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_form_static" ADD CONSTRAINT "pages_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact_form_static" ADD CONSTRAINT "_pages_v_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "case_studies_blocks_contact_form_static" ADD CONSTRAINT "case_studies_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_blocks_contact_form_static" ADD CONSTRAINT "_case_studies_v_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "services_blocks_contact_form_static" ADD CONSTRAINT "services_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "_services_v_blocks_contact_form_static" ADD CONSTRAINT "_services_v_blocks_contact_form_static_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_static_order_idx" ON "pages_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_static_parent_id_idx" ON "pages_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_static_path_idx" ON "pages_blocks_contact_form_static" USING btree ("_path");

  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_form_static_order_idx" ON "_pages_v_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_form_static_parent_id_idx" ON "_pages_v_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_form_static_path_idx" ON "_pages_v_blocks_contact_form_static" USING btree ("_path");

  CREATE INDEX IF NOT EXISTS "case_studies_blocks_contact_form_static_order_idx" ON "case_studies_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_contact_form_static_parent_id_idx" ON "case_studies_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_blocks_contact_form_static_path_idx" ON "case_studies_blocks_contact_form_static" USING btree ("_path");

  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_contact_form_static_order_idx" ON "_case_studies_v_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_contact_form_static_parent_id_idx" ON "_case_studies_v_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_blocks_contact_form_static_path_idx" ON "_case_studies_v_blocks_contact_form_static" USING btree ("_path");

  CREATE INDEX IF NOT EXISTS "services_blocks_contact_form_static_order_idx" ON "services_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_blocks_contact_form_static_parent_id_idx" ON "services_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_blocks_contact_form_static_path_idx" ON "services_blocks_contact_form_static" USING btree ("_path");

  CREATE INDEX IF NOT EXISTS "_services_v_blocks_contact_form_static_order_idx" ON "_services_v_blocks_contact_form_static" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_contact_form_static_parent_id_idx" ON "_services_v_blocks_contact_form_static" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_blocks_contact_form_static_path_idx" ON "_services_v_blocks_contact_form_static" USING btree ("_path");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE IF EXISTS "pages_blocks_contact_form_static";
   DROP TABLE IF EXISTS "_pages_v_blocks_contact_form_static";
   DROP TABLE IF EXISTS "case_studies_blocks_contact_form_static";
   DROP TABLE IF EXISTS "_case_studies_v_blocks_contact_form_static";
   DROP TABLE IF EXISTS "services_blocks_contact_form_static";
   DROP TABLE IF EXISTS "_services_v_blocks_contact_form_static";
  `)
}
