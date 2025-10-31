import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Add missing columns for case studies categories field
  try {
    console.log('Adding categories column to case_studies...')
    await db.execute(sql`
      ALTER TABLE "case_studies" 
      ADD COLUMN IF NOT EXISTS "categories" jsonb;
    `)
    
    console.log('Adding categories column to _case_studies_v...')
    await db.execute(sql`
      ALTER TABLE "_case_studies_v" 
      ADD COLUMN IF NOT EXISTS "categories" jsonb;
    `)

    console.log('✅ Successfully added categories columns')
  } catch (error) {
    console.error('❌ Error adding categories columns:', error)
    throw error
  }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Remove the categories columns
  try {
    await db.execute(sql`
      ALTER TABLE "case_studies" 
      DROP COLUMN IF EXISTS "categories";
    `)
    
    await db.execute(sql`
      ALTER TABLE "_case_studies_v" 
      DROP COLUMN IF EXISTS "categories";
    `)

    console.log('✅ Successfully removed categories columns')
  } catch (error) {
    console.error('❌ Error removing categories columns:', error)
    throw error
  }
}