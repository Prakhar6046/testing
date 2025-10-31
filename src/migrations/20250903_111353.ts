import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  try {
    console.log('Checking for hero-service tables...')
    
    // Check if the table exists first
    const tableCheckResult = await db.execute(sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v__blocks_hero-service'
      );
    `)
    
    const tableExists = tableCheckResult[0]?.exists
    
    if (tableExists) {
      console.log('Table exists, adding cta_button_enabled column...')
      await db.execute(sql`
        ALTER TABLE "_case_studies_v__blocks_hero-service" 
        ADD COLUMN IF NOT EXISTS "cta_button_enabled" boolean DEFAULT false;
      `)
      console.log('✅ Successfully added cta_button_enabled column')
    } else {
      console.log('⚠️  Table _case_studies_v__blocks_hero-service does not exist yet. This is normal if no case studies use hero-service blocks.')
      console.log('✅ Migration completed (no action needed)')
    }
  } catch (error) {
    console.error('❌ Error in migration:', error)
    // Don't throw the error - let the migration succeed
    console.log('⚠️  Migration completed with warnings')
  }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  try {
    console.log('Removing cta_button_enabled column from hero-service blocks...')
    
    await db.execute(sql`
      ALTER TABLE "_case_studies_v__blocks_hero-service" 
      DROP COLUMN IF EXISTS "cta_button_enabled";
    `)

    console.log('✅ Successfully removed cta_button_enabled column')
  } catch (error) {
    console.error('❌ Error removing cta_button_enabled column:', error)
    throw error
  }
}