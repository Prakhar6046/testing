import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services_blocks_wcg_training_services_training_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "services_blocks_wcg_training_services_how_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "services_blocks_wcg_training_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Training services WCG offers',
  	"description" varchar DEFAULT 'WCG offers many professional training and development services to organizations and agencies that need to optimize their network security and help their employees maintain great cybersecurity hygiene. The development training courses are designed to meet industry standards for IT professionals. Participants can obtain skills in several key business areas and technologies. The training services we offer include, but are not limited to:',
  	"how_section_title" varchar DEFAULT 'How',
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_wcg_training_services_training_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_wcg_training_services_how_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_wcg_training_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Training services WCG offers',
  	"description" varchar DEFAULT 'WCG offers many professional training and development services to organizations and agencies that need to optimize their network security and help their employees maintain great cybersecurity hygiene. The development training courses are designed to meet industry standards for IT professionals. Participants can obtain skills in several key business areas and technologies. The training services we offer include, but are not limited to:',
  	"how_section_title" varchar DEFAULT 'How',
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "services_blocks_wcg_training_services_training_services" ADD CONSTRAINT "services_blocks_wcg_training_services_training_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_wcg_training_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_wcg_training_services_how_description" ADD CONSTRAINT "services_blocks_wcg_training_services_how_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_wcg_training_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_wcg_training_services" ADD CONSTRAINT "services_blocks_wcg_training_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_wcg_training_services" ADD CONSTRAINT "services_blocks_wcg_training_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_training_services_training_services" ADD CONSTRAINT "_services_v_blocks_wcg_training_services_training_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_wcg_training_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_training_services_how_description" ADD CONSTRAINT "_services_v_blocks_wcg_training_services_how_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_wcg_training_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_training_services" ADD CONSTRAINT "_services_v_blocks_wcg_training_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_training_services" ADD CONSTRAINT "_services_v_blocks_wcg_training_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_blocks_wcg_training_services_training_services_order_idx" ON "services_blocks_wcg_training_services_training_services" USING btree ("_order");
  CREATE INDEX "services_blocks_wcg_training_services_training_services_parent_id_idx" ON "services_blocks_wcg_training_services_training_services" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_wcg_training_services_how_description_order_idx" ON "services_blocks_wcg_training_services_how_description" USING btree ("_order");
  CREATE INDEX "services_blocks_wcg_training_services_how_description_parent_id_idx" ON "services_blocks_wcg_training_services_how_description" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_wcg_training_services_order_idx" ON "services_blocks_wcg_training_services" USING btree ("_order");
  CREATE INDEX "services_blocks_wcg_training_services_parent_id_idx" ON "services_blocks_wcg_training_services" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_wcg_training_services_path_idx" ON "services_blocks_wcg_training_services" USING btree ("_path");
  CREATE INDEX "services_blocks_wcg_training_services_background_image_idx" ON "services_blocks_wcg_training_services" USING btree ("background_image_id");
  CREATE INDEX "_services_v_blocks_wcg_training_services_training_services_order_idx" ON "_services_v_blocks_wcg_training_services_training_services" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_wcg_training_services_training_services_parent_id_idx" ON "_services_v_blocks_wcg_training_services_training_services" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_wcg_training_services_how_description_order_idx" ON "_services_v_blocks_wcg_training_services_how_description" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_wcg_training_services_how_description_parent_id_idx" ON "_services_v_blocks_wcg_training_services_how_description" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_wcg_training_services_order_idx" ON "_services_v_blocks_wcg_training_services" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_wcg_training_services_parent_id_idx" ON "_services_v_blocks_wcg_training_services" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_wcg_training_services_path_idx" ON "_services_v_blocks_wcg_training_services" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_wcg_training_services_background_imag_idx" ON "_services_v_blocks_wcg_training_services" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_blocks_wcg_training_services_training_services" CASCADE;
  DROP TABLE "services_blocks_wcg_training_services_how_description" CASCADE;
  DROP TABLE "services_blocks_wcg_training_services" CASCADE;
  DROP TABLE "_services_v_blocks_wcg_training_services_training_services" CASCADE;
  DROP TABLE "_services_v_blocks_wcg_training_services_how_description" CASCADE;
  DROP TABLE "_services_v_blocks_wcg_training_services" CASCADE;`)
}
