const { Client } = require('pg')
require('dotenv').config()

async function runMigrations() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  })

  try {
    await client.connect()
    console.log('Connected to database')

    // Run the second migration (simpler one first)
    console.log('Running migration 20251015_164538...')
    await client.query(`
      ALTER TABLE "case_studies" DROP COLUMN IF EXISTS "subtitle";
      ALTER TABLE "_case_studies_v" DROP COLUMN IF EXISTS "version_subtitle";
    `)
    console.log('Migration 20251015_164538 completed successfully')

    // Mark both migrations as complete in the payload_migrations table
    const batch = 24 // Next batch number

    // console.log('Marking migration 20251015_164508 as complete...');
    // await client.query(`
    //   INSERT INTO "payload_migrations" ("name", "batch")
    //   VALUES ('20251015_164508', $1)
    //   ON CONFLICT ("name") DO NOTHING;
    // `, [batch]);

    console.log('Marking migration 20251015_164538 as complete...')
    await client.query(
      `
      INSERT INTO "payload_migrations" ("name", "batch")
      VALUES ('20251015_164538', $1)
      ON CONFLICT ("name") DO NOTHING;
    `,
      [batch],
    )

    console.log('Both migrations marked as complete!')
  } catch (error) {
    console.error('Error:', error.message)
    throw error
  } finally {
    await client.end()
  }
}

runMigrations()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
