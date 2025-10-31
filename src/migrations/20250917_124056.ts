import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services_blocks_penetration_testing_testing_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"scenario" jsonb
  );
  
  CREATE TABLE "services_blocks_penetration_testing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'When do you need Penetration Testing Services?',
  	"subtitle" varchar DEFAULT 'We recommend fulfilling a cyber security penetration testing if:',
  	"bottom_description" jsonb,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_penetration_testing_testing_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"scenario" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_penetration_testing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'When do you need Penetration Testing Services?',
  	"subtitle" varchar DEFAULT 'We recommend fulfilling a cyber security penetration testing if:',
  	"bottom_description" jsonb,
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "services_blocks_penetration_testing_testing_list" ADD CONSTRAINT "services_blocks_penetration_testing_testing_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_penetration_testing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_penetration_testing" ADD CONSTRAINT "services_blocks_penetration_testing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_penetration_testing" ADD CONSTRAINT "services_blocks_penetration_testing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_penetration_testing_testing_list" ADD CONSTRAINT "_services_v_blocks_penetration_testing_testing_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_penetration_testing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_penetration_testing" ADD CONSTRAINT "_services_v_blocks_penetration_testing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_penetration_testing" ADD CONSTRAINT "_services_v_blocks_penetration_testing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_blocks_penetration_testing_testing_list_order_idx" ON "services_blocks_penetration_testing_testing_list" USING btree ("_order");
  CREATE INDEX "services_blocks_penetration_testing_testing_list_parent_id_idx" ON "services_blocks_penetration_testing_testing_list" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_penetration_testing_order_idx" ON "services_blocks_penetration_testing" USING btree ("_order");
  CREATE INDEX "services_blocks_penetration_testing_parent_id_idx" ON "services_blocks_penetration_testing" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_penetration_testing_path_idx" ON "services_blocks_penetration_testing" USING btree ("_path");
  CREATE INDEX "services_blocks_penetration_testing_background_image_idx" ON "services_blocks_penetration_testing" USING btree ("background_image_id");
  CREATE INDEX "_services_v_blocks_penetration_testing_testing_list_order_idx" ON "_services_v_blocks_penetration_testing_testing_list" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_penetration_testing_testing_list_parent_id_idx" ON "_services_v_blocks_penetration_testing_testing_list" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_penetration_testing_order_idx" ON "_services_v_blocks_penetration_testing" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_penetration_testing_parent_id_idx" ON "_services_v_blocks_penetration_testing" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_penetration_testing_path_idx" ON "_services_v_blocks_penetration_testing" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_penetration_testing_background_image_idx" ON "_services_v_blocks_penetration_testing" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_blocks_penetration_testing_testing_list" CASCADE;
  DROP TABLE "services_blocks_penetration_testing" CASCADE;
  DROP TABLE "_services_v_blocks_penetration_testing_testing_list" CASCADE;
  DROP TABLE "_services_v_blocks_penetration_testing" CASCADE;`)
}
