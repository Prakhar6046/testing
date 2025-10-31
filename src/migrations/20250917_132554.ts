import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services_blocks_wcg_help_list_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"step_title" varchar,
  	"step_description" varchar
  );
  
  CREATE TABLE "services_blocks_wcg_help_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help you?',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_wcg_help_list_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"step_title" varchar,
  	"step_description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_wcg_help_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help you?',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "services_blocks_wcg_help_list_process_steps" ADD CONSTRAINT "services_blocks_wcg_help_list_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_wcg_help_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_wcg_help_list" ADD CONSTRAINT "services_blocks_wcg_help_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_help_list_process_steps" ADD CONSTRAINT "_services_v_blocks_wcg_help_list_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_wcg_help_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_help_list" ADD CONSTRAINT "_services_v_blocks_wcg_help_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_blocks_wcg_help_list_process_steps_order_idx" ON "services_blocks_wcg_help_list_process_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_wcg_help_list_process_steps_parent_id_idx" ON "services_blocks_wcg_help_list_process_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_wcg_help_list_order_idx" ON "services_blocks_wcg_help_list" USING btree ("_order");
  CREATE INDEX "services_blocks_wcg_help_list_parent_id_idx" ON "services_blocks_wcg_help_list" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_wcg_help_list_path_idx" ON "services_blocks_wcg_help_list" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_wcg_help_list_process_steps_order_idx" ON "_services_v_blocks_wcg_help_list_process_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_wcg_help_list_process_steps_parent_id_idx" ON "_services_v_blocks_wcg_help_list_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_wcg_help_list_order_idx" ON "_services_v_blocks_wcg_help_list" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_wcg_help_list_parent_id_idx" ON "_services_v_blocks_wcg_help_list" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_wcg_help_list_path_idx" ON "_services_v_blocks_wcg_help_list" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_blocks_wcg_help_list_process_steps" CASCADE;
  DROP TABLE "services_blocks_wcg_help_list" CASCADE;
  DROP TABLE "_services_v_blocks_wcg_help_list_process_steps" CASCADE;
  DROP TABLE "_services_v_blocks_wcg_help_list" CASCADE;`)
}
