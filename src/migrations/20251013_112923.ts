import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contact_form_settings_info_cards_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum_contact_form_settings_form_fields_field_type" AS ENUM('text', 'email', 'tel', 'number', 'textarea');
  CREATE TYPE "public"."enum_contact_form_settings_form_fields_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum_contact_form_settings_form_fields_width" AS ENUM('full', 'half', 'third');
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"note" varchar DEFAULT 'Content managed in Global Settings',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "contact_form_settings_info_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_contact_form_settings_info_cards_icon" DEFAULT 'FaLocationDot' NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "contact_form_settings_form_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field_type" "enum_contact_form_settings_form_fields_field_type" DEFAULT 'text' NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"placeholder" varchar,
  	"icon" "enum_contact_form_settings_form_fields_icon",
  	"width" "enum_contact_form_settings_form_fields_width" DEFAULT 'full' NOT NULL,
  	"required" boolean DEFAULT false,
  	"rows" numeric DEFAULT 5
  );
  
  ALTER TABLE "pages_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_contact_form" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form" CASCADE;
  DROP TABLE "services_blocks_contact_form" CASCADE;
  DROP TABLE "_services_v_blocks_contact_form" CASCADE;
  DROP TABLE "case_studies_blocks_contact_form" CASCADE;
  DROP TABLE "_case_studies_v_blocks_contact_form" CASCADE;
  ALTER TABLE "contact_form_settings" ALTER COLUMN "title" SET DEFAULT 'Have A Project? Let''s Get In Touch With Us!';
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_enabled" boolean DEFAULT false;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_host" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_port" numeric DEFAULT 587;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_secure" boolean DEFAULT true;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_username" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_password" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_from_email" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_from_name" varchar DEFAULT 'Contact Form';
  ALTER TABLE "contact_form_settings" ADD COLUMN "smtp_recipient_email" varchar;
  ALTER TABLE "contact_form_settings" ADD COLUMN "privacy_policy_enabled" boolean DEFAULT true;
  ALTER TABLE "contact_form_settings" ADD COLUMN "privacy_policy_text" varchar DEFAULT 'I agree to Privacy Policy and Terms of Use';
  ALTER TABLE "contact_form_settings" ADD COLUMN "privacy_policy_privacy_link" varchar DEFAULT '/privacy-policy';
  ALTER TABLE "contact_form_settings" ADD COLUMN "submit_button_text" varchar DEFAULT 'Contact With Us Now' NOT NULL;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact" ADD CONSTRAINT "services_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact" ADD CONSTRAINT "_services_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_contact" ADD CONSTRAINT "case_studies_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_contact" ADD CONSTRAINT "_case_studies_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_form_settings_info_cards" ADD CONSTRAINT "contact_form_settings_info_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_form_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_form_settings_form_fields" ADD CONSTRAINT "contact_form_settings_form_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_form_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_order_idx" ON "_pages_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_parent_id_idx" ON "_pages_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_path_idx" ON "_pages_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "services_blocks_contact_order_idx" ON "services_blocks_contact" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_parent_id_idx" ON "services_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_path_idx" ON "services_blocks_contact" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_contact_order_idx" ON "_services_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_parent_id_idx" ON "_services_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_path_idx" ON "_services_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_contact_order_idx" ON "case_studies_blocks_contact" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_contact_parent_id_idx" ON "case_studies_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_contact_path_idx" ON "case_studies_blocks_contact" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_contact_order_idx" ON "_case_studies_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_contact_parent_id_idx" ON "_case_studies_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_contact_path_idx" ON "_case_studies_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "contact_form_settings_info_cards_order_idx" ON "contact_form_settings_info_cards" USING btree ("_order");
  CREATE INDEX "contact_form_settings_info_cards_parent_id_idx" ON "contact_form_settings_info_cards" USING btree ("_parent_id");
  CREATE INDEX "contact_form_settings_form_fields_order_idx" ON "contact_form_settings_form_fields" USING btree ("_order");
  CREATE INDEX "contact_form_settings_form_fields_parent_id_idx" ON "contact_form_settings_form_fields" USING btree ("_parent_id");
  ALTER TABLE "contact_form_settings" DROP COLUMN "description";
  ALTER TABLE "contact_form_settings" DROP COLUMN "quote_show_quote";
  ALTER TABLE "contact_form_settings" DROP COLUMN "quote_quote";
  ALTER TABLE "contact_form_settings" DROP COLUMN "quote_stars";
  ALTER TABLE "contact_form_settings" DROP COLUMN "quote_author";`)
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
  
  ALTER TABLE "pages_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_form_settings_info_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_form_settings_form_fields" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "_pages_v_blocks_contact" CASCADE;
  DROP TABLE "services_blocks_contact" CASCADE;
  DROP TABLE "_services_v_blocks_contact" CASCADE;
  DROP TABLE "case_studies_blocks_contact" CASCADE;
  DROP TABLE "_case_studies_v_blocks_contact" CASCADE;
  DROP TABLE "contact_form_settings_info_cards" CASCADE;
  DROP TABLE "contact_form_settings_form_fields" CASCADE;
  ALTER TABLE "contact_form_settings" ALTER COLUMN "title" SET DEFAULT 'Want to Make Your Own Success Story?';
  ALTER TABLE "contact_form_settings" ADD COLUMN "description" varchar DEFAULT 'Join the many of happy clients we''ve served in the past, contact us today!' NOT NULL;
  ALTER TABLE "contact_form_settings" ADD COLUMN "quote_show_quote" boolean DEFAULT true;
  ALTER TABLE "contact_form_settings" ADD COLUMN "quote_quote" varchar DEFAULT '“We’re here to help you every step of the way. Whether you’re just starting out or looking to scale, we’ve got you covered.”';
  ALTER TABLE "contact_form_settings" ADD COLUMN "quote_stars" numeric DEFAULT 5;
  ALTER TABLE "contact_form_settings" ADD COLUMN "quote_author" varchar DEFAULT 'John Doe';
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
  CREATE INDEX "_case_studies_v_blocks_contact_form_path_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_path");
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_enabled";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_host";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_port";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_secure";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_username";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_password";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_from_email";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_from_name";
  ALTER TABLE "contact_form_settings" DROP COLUMN "smtp_recipient_email";
  ALTER TABLE "contact_form_settings" DROP COLUMN "privacy_policy_enabled";
  ALTER TABLE "contact_form_settings" DROP COLUMN "privacy_policy_text";
  ALTER TABLE "contact_form_settings" DROP COLUMN "privacy_policy_privacy_link";
  ALTER TABLE "contact_form_settings" DROP COLUMN "submit_button_text";
  DROP TYPE "public"."enum_contact_form_settings_info_cards_icon";
  DROP TYPE "public"."enum_contact_form_settings_form_fields_field_type";
  DROP TYPE "public"."enum_contact_form_settings_form_fields_icon";
  DROP TYPE "public"."enum_contact_form_settings_form_fields_width";`)
}
