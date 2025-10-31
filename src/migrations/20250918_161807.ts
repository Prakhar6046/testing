import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_blocks_help_you_video_bg_color" AS ENUM('gray', 'blue');
  CREATE TYPE "public"."enum__services_v_blocks_help_you_video_bg_color" AS ENUM('gray', 'blue');
  ALTER TABLE "services_blocks_help_you_video" ADD COLUMN "bg_color" "enum_services_blocks_help_you_video_bg_color" DEFAULT 'gray';
  ALTER TABLE "_services_v_blocks_help_you_video" ADD COLUMN "bg_color" "enum__services_v_blocks_help_you_video_bg_color" DEFAULT 'gray';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_blocks_help_you_video" DROP COLUMN "bg_color";
  ALTER TABLE "_services_v_blocks_help_you_video" DROP COLUMN "bg_color";
  DROP TYPE "public"."enum_services_blocks_help_you_video_bg_color";
  DROP TYPE "public"."enum__services_v_blocks_help_you_video_bg_color";`)
}
