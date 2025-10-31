-- Fix missing auto_play column in animated_timeline blocks
-- The field is 'autoPlay' in code but stored as 'auto_play' in DB

-- Pages collection
ALTER TABLE "pages_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "pages_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;

ALTER TABLE "_pages_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "_pages_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;

-- Services collection
ALTER TABLE "services_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "services_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;

ALTER TABLE "_services_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "_services_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;

-- Case Studies collection
ALTER TABLE "case_studies_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "case_studies_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;

ALTER TABLE "_case_studies_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play" boolean DEFAULT true;

ALTER TABLE "_case_studies_v_blocks_animated_timeline"
ADD COLUMN IF NOT EXISTS "auto_play_interval" integer DEFAULT 3000;
