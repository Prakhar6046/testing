import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum__pages_v_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum_services_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum__services_v_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum_case_studies_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_icon" AS ENUM('FaLocationDot', 'FaPhoneAlt', 'FaEnvelope', 'FaRegSmile', 'FaUser', 'FaBuilding', 'FaGlobe', 'FaClock', 'FaMapMarkerAlt', 'FaComments', 'FaQuestionCircle', 'FaBriefcase', 'FaCalendar', 'FaHome', 'FaMobileAlt', 'FaPaperPlane', 'FaInfoCircle', 'FaLink');
  ALTER TABLE "pages_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "_pages_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "services_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "_services_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "case_studies_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "_case_studies_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/resource-center';
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD COLUMN "icon" "enum_pages_blocks_case_study_cn_content_icon";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD COLUMN "icon" "enum__pages_v_blocks_case_study_cn_content_icon";
  ALTER TABLE "services_blocks_case_study_cn_content" ADD COLUMN "icon" "enum_services_blocks_case_study_cn_content_icon";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD COLUMN "icon" "enum__services_v_blocks_case_study_cn_content_icon";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD COLUMN "icon" "enum_case_studies_blocks_case_study_cn_content_icon";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD COLUMN "icon" "enum__case_studies_v_blocks_case_study_cn_content_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "_pages_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "services_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "_services_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "case_studies_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "_case_studies_v_blocks_case_studies" ALTER COLUMN "cta_url" SET DEFAULT '/case-studies';
  ALTER TABLE "pages_blocks_case_study_cn_content" DROP COLUMN "icon";
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DROP COLUMN "icon";
  ALTER TABLE "services_blocks_case_study_cn_content" DROP COLUMN "icon";
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DROP COLUMN "icon";
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DROP COLUMN "icon";
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DROP COLUMN "icon";
  DROP TYPE "public"."enum_pages_blocks_case_study_cn_content_icon";
  DROP TYPE "public"."enum__pages_v_blocks_case_study_cn_content_icon";
  DROP TYPE "public"."enum_services_blocks_case_study_cn_content_icon";
  DROP TYPE "public"."enum__services_v_blocks_case_study_cn_content_icon";
  DROP TYPE "public"."enum_case_studies_blocks_case_study_cn_content_icon";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_study_cn_content_icon";`)
}
