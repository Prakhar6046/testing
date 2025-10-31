import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_blocks_wcg_help_list_process_steps" ADD COLUMN "step_icon_id" integer;
  ALTER TABLE "_services_v_blocks_wcg_help_list_process_steps" ADD COLUMN "step_icon_id" integer;
  ALTER TABLE "services_blocks_wcg_help_list_process_steps" ADD CONSTRAINT "services_blocks_wcg_help_list_process_steps_step_icon_id_media_id_fk" FOREIGN KEY ("step_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_wcg_help_list_process_steps" ADD CONSTRAINT "_services_v_blocks_wcg_help_list_process_steps_step_icon_id_media_id_fk" FOREIGN KEY ("step_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "services_blocks_wcg_help_list_process_steps_step_icon_idx" ON "services_blocks_wcg_help_list_process_steps" USING btree ("step_icon_id");
  CREATE INDEX "_services_v_blocks_wcg_help_list_process_steps_step_icon_idx" ON "_services_v_blocks_wcg_help_list_process_steps" USING btree ("step_icon_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_blocks_wcg_help_list_process_steps" DROP CONSTRAINT "services_blocks_wcg_help_list_process_steps_step_icon_id_media_id_fk";
  
  ALTER TABLE "_services_v_blocks_wcg_help_list_process_steps" DROP CONSTRAINT "_services_v_blocks_wcg_help_list_process_steps_step_icon_id_media_id_fk";
  
  DROP INDEX "services_blocks_wcg_help_list_process_steps_step_icon_idx";
  DROP INDEX "_services_v_blocks_wcg_help_list_process_steps_step_icon_idx";
  ALTER TABLE "services_blocks_wcg_help_list_process_steps" DROP COLUMN "step_icon_id";
  ALTER TABLE "_services_v_blocks_wcg_help_list_process_steps" DROP COLUMN "step_icon_id";`)
}
