import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_pages_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_pages_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum_pages_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum_pages_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_pages_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_pages_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum_pages_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum_pages_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum__pages_v_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__pages_v_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__pages_v_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum__pages_v_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__pages_v_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_services_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_services_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum_services_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum_services_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_services_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_services_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_services_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_services_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_services_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum_services_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum_services_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_services_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__services_v_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__services_v_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum__services_v_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum__services_v_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__services_v_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__services_v_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__services_v_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__services_v_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__services_v_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum__services_v_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__services_v_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__services_v_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_categories" AS ENUM('case-study', 'cybersecurity', 'risk-management', 'compliance', 'privacy', 'threat-detection', 'whitepaper', 'culture', 'cloud-computing', 'data-analytics', 'blogs');
  CREATE TYPE "public"."enum_case_studies_blocks_hero_home_buttons_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_case_studies_blocks_hero_services_cta_button_style" AS ENUM('primary_btn', 'secondary_btn');
  CREATE TYPE "public"."enum_case_studies_blocks_hero_service_cta_button_style" AS ENUM('primary_btn', 'secondary_btn');
  CREATE TYPE "public"."enum_case_studies_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_case_studies_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_case_studies_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_case_studies_blocks_our_services_layout_bg_color" AS ENUM('white', 'background', 'gray-50');
  CREATE TYPE "public"."enum_case_studies_blocks_our_services_layout_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_case_studies_blocks_our_services_style_padding" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_our_services_style_radius" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_our_services_style_icon_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_industries_buttons_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_case_studies_blocks_industries_layout_bg_color" AS ENUM('foreground', 'background', 'white', 'primary');
  CREATE TYPE "public"."enum_case_studies_blocks_industries_layout_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_case_studies_blocks_industries_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_case_studies_blocks_industries_behavior_animation_speed" AS ENUM('fast', 'normal', 'slow');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_layout_bg_color" AS ENUM('white', 'background', 'gray-50', 'foreground');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_layout_stats_columns" AS ENUM('2', '3', '4', '5');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_layout_header_layout" AS ENUM('sideBySide', 'stacked', 'centered');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_style_stat_value_color" AS ENUM('wils_orang', 'primary', 'secondary', 'black', 'white');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_style_text_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_style_logo_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_portfolio_style_stats_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_case_studies_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_content_type" AS ENUM('manual', 'posts', 'mixed');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_post_settings_sort_by" AS ENUM('newest', 'oldest', 'featured');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_layout_bg_color" AS ENUM('background', 'white', 'gray-50', 'foreground');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_layout_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_layout_card_layout" AS ENUM('standard', 'compact', 'featured');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_style_text_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_style_image_background" AS ENUM('primary', 'secondary', 'wils_orang', 'white', 'transparent');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_style_tag_color" AS ENUM('wils_orang', 'primary', 'secondary', 'black');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_style_card_radius" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_case_studies_blocks_case_studies_cta_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum_case_studies_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum_case_studies_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_case_studies_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_case_studies_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_case_studies_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_case_studies_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_case_studies_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum_case_studies_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum_case_studies_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_case_studies_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_studies_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_case_studies_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_categories" AS ENUM('case-study', 'cybersecurity', 'risk-management', 'compliance', 'privacy', 'threat-detection', 'whitepaper', 'culture', 'cloud-computing', 'data-analytics', 'blogs');
  CREATE TYPE "public"."enum__case_studies_v_blocks_hero_home_buttons_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__case_studies_v_blocks_hero_services_cta_button_style" AS ENUM('primary_btn', 'secondary_btn');
  CREATE TYPE "public"."enum__case_studies_v_blocks_hero_service_cta_button_style" AS ENUM('primary_btn', 'secondary_btn');
  CREATE TYPE "public"."enum__case_studies_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__case_studies_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__case_studies_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__case_studies_v_blocks_our_services_layout_bg_color" AS ENUM('white', 'background', 'gray-50');
  CREATE TYPE "public"."enum__case_studies_v_blocks_our_services_layout_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__case_studies_v_blocks_our_services_style_padding" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_our_services_style_radius" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_our_services_style_icon_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_industries_buttons_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__case_studies_v_blocks_industries_layout_bg_color" AS ENUM('foreground', 'background', 'white', 'primary');
  CREATE TYPE "public"."enum__case_studies_v_blocks_industries_layout_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__case_studies_v_blocks_industries_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__case_studies_v_blocks_industries_behavior_animation_speed" AS ENUM('fast', 'normal', 'slow');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_bg_color" AS ENUM('white', 'background', 'gray-50', 'foreground');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_stats_columns" AS ENUM('2', '3', '4', '5');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_header_layout" AS ENUM('sideBySide', 'stacked', 'centered');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_style_stat_value_color" AS ENUM('wils_orang', 'primary', 'secondary', 'black', 'white');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_style_text_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_style_logo_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_portfolio_style_stats_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_case_studies_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_content_type" AS ENUM('manual', 'posts', 'mixed');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_post_settings_sort_by" AS ENUM('newest', 'oldest', 'featured');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_bg_color" AS ENUM('background', 'white', 'gray-50', 'foreground');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_card_layout" AS ENUM('standard', 'compact', 'featured');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_style_text_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_style_image_background" AS ENUM('primary', 'secondary', 'wils_orang', 'white', 'transparent');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_style_tag_color" AS ENUM('wils_orang', 'primary', 'secondary', 'black');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_style_card_radius" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_studies_cta_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_sctabs_services_lk_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_sctabs_services_lk_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum__case_studies_v_blocks_srv_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum__case_studies_v_blocks_image_text_section_layout_img_pos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__case_studies_v_blocks_info_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__case_studies_v_blocks_info_layout_background_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__case_studies_v_blocks_info_layout_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__case_studies_v_blocks_it_experts_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__case_studies_v_blocks_testimonials_layout_slide_layout" AS ENUM('image-left', 'image-right');
  CREATE TYPE "public"."enum__case_studies_v_blocks_resources_industries" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__case_studies_v_blocks_resources_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__case_studies_v_blocks_resources_see_more_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_resources_see_more_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_study_cn_sb_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_case_study_cn_sb_btn_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_blocks_services_more_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_studies_v_blocks_services_more_cards_link_aprnce" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__case_studies_v_version_industry" AS ENUM('healthcare', 'education', 'government', 'financial-services', 'technology', 'non-profit', 'manufacturing', 'other');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_header_nav_items_mega_menu_sections_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer
  );
  
  CREATE TABLE "pages_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum_pages_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum_pages_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer
  );
  
  CREATE TABLE "pages_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum_pages_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum_pages_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum_pages_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum_pages_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "pages_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "pages_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum_pages_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum_pages_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum_pages_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum_pages_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum_pages_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum_pages_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum_pages_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum_pages_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum_pages_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "pages_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "pages_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "pages_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_label" varchar
  );
  
  CREATE TABLE "pages_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb
  );
  
  CREATE TABLE "pages_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum_pages_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum_pages_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum_pages_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum_pages_blocks_services_more_cards_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "pages_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "pages_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "pages_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum__pages_v_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum__pages_v_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum__pages_v_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum__pages_v_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum__pages_v_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum__pages_v_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum__pages_v_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum__pages_v_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum__pages_v_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum__pages_v_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum__pages_v_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum__pages_v_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum__pages_v_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum__pages_v_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum__pages_v_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum__pages_v_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum__pages_v_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum__pages_v_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum__pages_v_blocks_services_more_cards_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer
  );
  
  CREATE TABLE "services_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum_services_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum_services_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "services_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer
  );
  
  CREATE TABLE "services_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum_services_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum_services_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum_services_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum_services_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "services_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "services_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "services_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum_services_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "services_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum_services_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum_services_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum_services_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum_services_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "services_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "services_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "services_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum_services_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_services_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "services_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum_services_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum_services_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum_services_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "services_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "services_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "services_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "services_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_label" varchar
  );
  
  CREATE TABLE "services_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb
  );
  
  CREATE TABLE "services_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum_services_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum_services_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "services_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "services_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum_services_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum_services_blocks_services_more_cards_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "services_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "services_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "services_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "services_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_help_you_v2_help_you_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"list_description" jsonb
  );
  
  CREATE TABLE "services_blocks_help_you_v2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"bottom_card_bottom_card_description" jsonb,
  	"bottom_card_bottom_card_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_service_about_2_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_service_about_2_content_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_service_about_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_help_you_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help you?',
  	"description" jsonb,
  	"video_url" varchar,
  	"cta_text" varchar DEFAULT 'Connect with Our Expert',
  	"cta_url" varchar DEFAULT '/contact',
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum__services_v_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum__services_v_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum__services_v_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum__services_v_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum__services_v_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum__services_v_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum__services_v_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum__services_v_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum__services_v_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum__services_v_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum__services_v_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum__services_v_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__services_v_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_services_v_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum__services_v_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum__services_v_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum__services_v_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum__services_v_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum__services_v_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum__services_v_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum__services_v_blocks_services_more_cards_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_help_you_v2_help_you_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"list_description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_help_you_v2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"bottom_card_bottom_card_description" jsonb,
  	"bottom_card_bottom_card_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about_2_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about_2_content_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_service_about_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_help_you_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help you?',
  	"description" jsonb,
  	"video_url" varchar,
  	"cta_text" varchar DEFAULT 'Connect with Our Expert',
  	"cta_url" varchar DEFAULT '/contact',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_case_studies_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "case_studies_blocks_hero_home_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"url" varchar,
  	"style" "enum_case_studies_blocks_hero_home_buttons_style" DEFAULT 'primary'
  );
  
  CREATE TABLE "case_studies_blocks_hero_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"certification_badge_icon_id" integer,
  	"certification_badge_text" varchar DEFAULT 'CERTIFIED FEDRAMP & STATERAMP',
  	"headline" varchar DEFAULT 'Fast-Track Your
  FedRAMP &
  StateRAMP',
  	"description" varchar DEFAULT 'Achieve or maintain your FedRAMP & StateRAMP authorization with our Advisory and Assessment Services.',
  	"images_main_image_id" integer,
  	"images_overlay_image_id" integer,
  	"compliance_section_enabled" boolean DEFAULT true,
  	"compliance_section_section_label" varchar DEFAULT 'COMPLIANCE EXPERTS',
  	"compliance_section_title" varchar DEFAULT 'Trusted By Government And Industry Leaders',
  	"compliance_section_description" varchar DEFAULT 'Recognized for our expertise in regulatory compliance, we help organizations achieve FeqRAMP and StateRAMP authorizations with integrity, insight, and proven results.',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_hero_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"shortinfo" varchar,
  	"cta_button_text" varchar DEFAULT 'Request Consultation',
  	"cta_button_url" varchar DEFAULT '#',
  	"cta_button_style" "enum_case_studies_blocks_hero_services_cta_button_style" DEFAULT 'secondary_btn',
  	"cta_button_open_in_new_tab" boolean DEFAULT false,
  	"images_main_image_id" integer,
  	"images_overlay_icon_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_hero_service" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"shortinfo" varchar,
  	"cta_button_text" varchar DEFAULT 'Request Consultation',
  	"cta_button_url" varchar DEFAULT '#',
  	"cta_button_style" "enum_case_studies_blocks_hero_service_cta_button_style" DEFAULT 'secondary_btn',
  	"cta_button_open_in_new_tab" boolean DEFAULT false,
  	"images_main_image_id" integer,
  	"images_overlay_icon_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "case_studies_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer
  );
  
  CREATE TABLE "case_studies_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_case_studies_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_case_studies_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "case_studies_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_case_studies_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_case_studies_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_case_studies_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "case_studies_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_case_studies_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_case_studies_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_our_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_hovered_id" integer,
  	"icon_normal_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_our_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Our Services',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"layout_bg_color" "enum_case_studies_blocks_our_services_layout_bg_color" DEFAULT 'white',
  	"layout_columns" "enum_case_studies_blocks_our_services_layout_columns" DEFAULT '4',
  	"layout_special_layout" boolean DEFAULT true,
  	"style_padding" "enum_case_studies_blocks_our_services_style_padding" DEFAULT 'large',
  	"style_radius" "enum_case_studies_blocks_our_services_style_radius" DEFAULT 'large',
  	"style_icon_size" "enum_case_studies_blocks_our_services_style_icon_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_industries_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"default_open" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_industries_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"url" varchar,
  	"style" "enum_case_studies_blocks_industries_buttons_style" DEFAULT 'primary'
  );
  
  CREATE TABLE "case_studies_blocks_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Industries We Serve',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"main_image_id" integer,
  	"icons_check_icon_id" integer,
  	"icons_arrow_icon_id" integer,
  	"layout_bg_color" "enum_case_studies_blocks_industries_layout_bg_color" DEFAULT 'foreground',
  	"layout_text_color" "enum_case_studies_blocks_industries_layout_text_color" DEFAULT 'light',
  	"layout_image_position" "enum_case_studies_blocks_industries_layout_image_position" DEFAULT 'left',
  	"behavior_allow_multiple" boolean DEFAULT false,
  	"behavior_animation_speed" "enum_case_studies_blocks_industries_behavior_animation_speed" DEFAULT 'normal',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_portfolio_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_portfolio_client_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"website" varchar
  );
  
  CREATE TABLE "case_studies_blocks_portfolio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Proven Results that Speak for Themselves',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"layout_bg_color" "enum_case_studies_blocks_portfolio_layout_bg_color" DEFAULT 'white',
  	"layout_stats_columns" "enum_case_studies_blocks_portfolio_layout_stats_columns" DEFAULT '4',
  	"layout_header_layout" "enum_case_studies_blocks_portfolio_layout_header_layout" DEFAULT 'sideBySide',
  	"layout_enable_dividers" boolean DEFAULT true,
  	"style_stat_value_color" "enum_case_studies_blocks_portfolio_style_stat_value_color" DEFAULT 'wils_orang',
  	"style_text_theme" "enum_case_studies_blocks_portfolio_style_text_theme" DEFAULT 'dark',
  	"style_logo_size" "enum_case_studies_blocks_portfolio_style_logo_size" DEFAULT 'medium',
  	"style_stats_size" "enum_case_studies_blocks_portfolio_style_stats_size" DEFAULT 'large',
  	"sections_show_stats" boolean DEFAULT true,
  	"sections_show_logos" boolean DEFAULT true,
  	"sections_show_border" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_case_studies_case_studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Case Study',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum_case_studies_blocks_case_studies_case_studies_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_case_studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Client Case Studies',
  	"header_description" varchar DEFAULT 'Check How We Have Helped Our Clients',
  	"content_type" "enum_case_studies_blocks_case_studies_content_type" DEFAULT 'manual',
  	"post_settings_max_posts" numeric DEFAULT 6,
  	"post_settings_category_filter" varchar,
  	"post_settings_sort_by" "enum_case_studies_blocks_case_studies_post_settings_sort_by" DEFAULT 'newest',
  	"layout_bg_color" "enum_case_studies_blocks_case_studies_layout_bg_color" DEFAULT 'background',
  	"layout_columns" "enum_case_studies_blocks_case_studies_layout_columns" DEFAULT '3',
  	"layout_card_layout" "enum_case_studies_blocks_case_studies_layout_card_layout" DEFAULT 'standard',
  	"layout_show_view_all" boolean DEFAULT true,
  	"style_text_theme" "enum_case_studies_blocks_case_studies_style_text_theme" DEFAULT 'dark',
  	"style_image_background" "enum_case_studies_blocks_case_studies_style_image_background" DEFAULT 'primary',
  	"style_tag_color" "enum_case_studies_blocks_case_studies_style_tag_color" DEFAULT 'wils_orang',
  	"style_card_radius" "enum_case_studies_blocks_case_studies_style_card_radius" DEFAULT 'large',
  	"cta_text" varchar DEFAULT 'View All Case Studies',
  	"cta_url" varchar DEFAULT '/case-studies',
  	"cta_style" "enum_case_studies_blocks_case_studies_cta_style" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum_case_studies_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum_case_studies_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "case_studies_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer
  );
  
  CREATE TABLE "case_studies_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum_case_studies_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum_case_studies_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum_case_studies_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum_case_studies_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "case_studies_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "case_studies_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "case_studies_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum_case_studies_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum_case_studies_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum_case_studies_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum_case_studies_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum_case_studies_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "case_studies_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "case_studies_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum_case_studies_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_case_studies_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "case_studies_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum_case_studies_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum_case_studies_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum_case_studies_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "case_studies_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "case_studies_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?'
  );
  
  CREATE TABLE "case_studies_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE "case_studies_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_label" varchar
  );
  
  CREATE TABLE "case_studies_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb
  );
  
  CREATE TABLE "case_studies_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum_case_studies_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum_case_studies_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "case_studies_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "case_studies_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum_case_studies_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum_case_studies_blocks_services_more_cards_link_aprnce" DEFAULT 'default'
  );
  
  CREATE TABLE "case_studies_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "case_studies_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "case_studies_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar
  );
  
  CREATE TABLE "case_studies_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"client" varchar,
  	"industry" "enum_case_studies_industry",
  	"cover_image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "case_studies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"categories_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "_case_studies_v_version_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__case_studies_v_version_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_case_studies_v_blocks_hero_home_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"url" varchar,
  	"style" "enum__case_studies_v_blocks_hero_home_buttons_style" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_hero_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"certification_badge_icon_id" integer,
  	"certification_badge_text" varchar DEFAULT 'CERTIFIED FEDRAMP & STATERAMP',
  	"headline" varchar DEFAULT 'Fast-Track Your
  FedRAMP &
  StateRAMP',
  	"description" varchar DEFAULT 'Achieve or maintain your FedRAMP & StateRAMP authorization with our Advisory and Assessment Services.',
  	"images_main_image_id" integer,
  	"images_overlay_image_id" integer,
  	"compliance_section_enabled" boolean DEFAULT true,
  	"compliance_section_section_label" varchar DEFAULT 'COMPLIANCE EXPERTS',
  	"compliance_section_title" varchar DEFAULT 'Trusted By Government And Industry Leaders',
  	"compliance_section_description" varchar DEFAULT 'Recognized for our expertise in regulatory compliance, we help organizations achieve FeqRAMP and StateRAMP authorizations with integrity, insight, and proven results.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_hero_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"shortinfo" varchar,
  	"cta_button_text" varchar DEFAULT 'Request Consultation',
  	"cta_button_url" varchar DEFAULT '#',
  	"cta_button_style" "enum__case_studies_v_blocks_hero_services_cta_button_style" DEFAULT 'secondary_btn',
  	"cta_button_open_in_new_tab" boolean DEFAULT false,
  	"images_main_image_id" integer,
  	"images_overlay_icon_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_hero_service" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"shortinfo" varchar,
  	"cta_button_text" varchar DEFAULT 'Request Consultation',
  	"cta_button_url" varchar DEFAULT '#',
  	"cta_button_style" "enum__case_studies_v_blocks_hero_service_cta_button_style" DEFAULT 'secondary_btn',
  	"cta_button_open_in_new_tab" boolean DEFAULT false,
  	"images_main_image_id" integer,
  	"images_overlay_icon_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_service_about_content_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_service_about_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_unhovered_id" integer,
  	"icon_hovered_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_service_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar DEFAULT 'What is IT Change Management?',
  	"content_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__case_studies_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__case_studies_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__case_studies_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__case_studies_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__case_studies_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__case_studies_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__case_studies_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_our_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_hovered_id" integer,
  	"icon_normal_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_our_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Our Services',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"layout_bg_color" "enum__case_studies_v_blocks_our_services_layout_bg_color" DEFAULT 'white',
  	"layout_columns" "enum__case_studies_v_blocks_our_services_layout_columns" DEFAULT '4',
  	"layout_special_layout" boolean DEFAULT true,
  	"style_padding" "enum__case_studies_v_blocks_our_services_style_padding" DEFAULT 'large',
  	"style_radius" "enum__case_studies_v_blocks_our_services_style_radius" DEFAULT 'large',
  	"style_icon_size" "enum__case_studies_v_blocks_our_services_style_icon_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_industries_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"default_open" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_industries_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"url" varchar,
  	"style" "enum__case_studies_v_blocks_industries_buttons_style" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Industries We Serve',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"main_image_id" integer,
  	"icons_check_icon_id" integer,
  	"icons_arrow_icon_id" integer,
  	"layout_bg_color" "enum__case_studies_v_blocks_industries_layout_bg_color" DEFAULT 'foreground',
  	"layout_text_color" "enum__case_studies_v_blocks_industries_layout_text_color" DEFAULT 'light',
  	"layout_image_position" "enum__case_studies_v_blocks_industries_layout_image_position" DEFAULT 'left',
  	"behavior_allow_multiple" boolean DEFAULT false,
  	"behavior_animation_speed" "enum__case_studies_v_blocks_industries_behavior_animation_speed" DEFAULT 'normal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_portfolio_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_portfolio_client_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"website" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_portfolio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Proven Results that Speak for Themselves',
  	"header_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  	"layout_bg_color" "enum__case_studies_v_blocks_portfolio_layout_bg_color" DEFAULT 'white',
  	"layout_stats_columns" "enum__case_studies_v_blocks_portfolio_layout_stats_columns" DEFAULT '4',
  	"layout_header_layout" "enum__case_studies_v_blocks_portfolio_layout_header_layout" DEFAULT 'sideBySide',
  	"layout_enable_dividers" boolean DEFAULT true,
  	"style_stat_value_color" "enum__case_studies_v_blocks_portfolio_style_stat_value_color" DEFAULT 'wils_orang',
  	"style_text_theme" "enum__case_studies_v_blocks_portfolio_style_text_theme" DEFAULT 'dark',
  	"style_logo_size" "enum__case_studies_v_blocks_portfolio_style_logo_size" DEFAULT 'medium',
  	"style_stats_size" "enum__case_studies_v_blocks_portfolio_style_stats_size" DEFAULT 'large',
  	"sections_show_stats" boolean DEFAULT true,
  	"sections_show_logos" boolean DEFAULT true,
  	"sections_show_border" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_case_studies_case_studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Case Study',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum__case_studies_v_blocks_case_studies_case_studies_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_case_studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_title" varchar DEFAULT 'Client Case Studies',
  	"header_description" varchar DEFAULT 'Check How We Have Helped Our Clients',
  	"content_type" "enum__case_studies_v_blocks_case_studies_content_type" DEFAULT 'manual',
  	"post_settings_max_posts" numeric DEFAULT 6,
  	"post_settings_category_filter" varchar,
  	"post_settings_sort_by" "enum__case_studies_v_blocks_case_studies_post_settings_sort_by" DEFAULT 'newest',
  	"layout_bg_color" "enum__case_studies_v_blocks_case_studies_layout_bg_color" DEFAULT 'background',
  	"layout_columns" "enum__case_studies_v_blocks_case_studies_layout_columns" DEFAULT '3',
  	"layout_card_layout" "enum__case_studies_v_blocks_case_studies_layout_card_layout" DEFAULT 'standard',
  	"layout_show_view_all" boolean DEFAULT true,
  	"style_text_theme" "enum__case_studies_v_blocks_case_studies_style_text_theme" DEFAULT 'dark',
  	"style_image_background" "enum__case_studies_v_blocks_case_studies_style_image_background" DEFAULT 'primary',
  	"style_tag_color" "enum__case_studies_v_blocks_case_studies_style_tag_color" DEFAULT 'wils_orang',
  	"style_card_radius" "enum__case_studies_v_blocks_case_studies_style_card_radius" DEFAULT 'large',
  	"cta_text" varchar DEFAULT 'View All Case Studies',
  	"cta_url" varchar DEFAULT '/case-studies',
  	"cta_style" "enum__case_studies_v_blocks_case_studies_cta_style" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_featured_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_srv_sctabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_active_id" integer,
  	"icon_normal_id" integer,
  	"background_icon_id" integer,
  	"lk_enabled" boolean DEFAULT false,
  	"lk_link_type" "enum__case_studies_v_blocks_srv_sctabs_services_lk_link_type" DEFAULT 'reference',
  	"lk_link_new_tab" boolean,
  	"lk_link_url" varchar,
  	"lk_link_label" varchar,
  	"lk_link_aprnce" "enum__case_studies_v_blocks_srv_sctabs_services_lk_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_srv_sctabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_srv" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum__case_studies_v_blocks_srv_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum__case_studies_v_blocks_srv_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum__case_studies_v_blocks_srv_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum__case_studies_v_blocks_srv_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_career_tabs_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_career_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_career_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_co_content_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_co_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_media_media_id" integer,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_image_text_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout_img_pos" "enum__case_studies_v_blocks_image_text_section_layout_img_pos" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_job_listings_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_job_listings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"layout_image_position" "enum__case_studies_v_blocks_info_layout_image_position" DEFAULT 'left',
  	"layout_background_color" "enum__case_studies_v_blocks_info_layout_background_color" DEFAULT 'bg-white',
  	"layout_spacing" "enum__case_studies_v_blocks_info_layout_spacing" DEFAULT 'py-16',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_co_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"description_text" varchar,
  	"featured_image_media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_it_experts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_image_position" "enum__case_studies_v_blocks_it_experts_layout_image_position" DEFAULT 'left',
  	"image_media_id" integer,
  	"text_content_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_mission_vision_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_leadership_points_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_leadership_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_text" varchar,
  	"layout_slide_layout" "enum__case_studies_v_blocks_testimonials_layout_slide_layout" DEFAULT 'image-left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_resources_industries" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__case_studies_v_blocks_resources_industries",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_case_studies_v_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Resources',
  	"populate_by" "enum__case_studies_v_blocks_resources_populate_by" DEFAULT 'collection',
  	"limit" numeric DEFAULT 9,
  	"search_settings_enable_search" boolean DEFAULT true,
  	"search_settings_enable_industry_filter" boolean DEFAULT true,
  	"see_more_btn_enabled" boolean DEFAULT true,
  	"see_more_btn_text" varchar DEFAULT 'See More Resources',
  	"see_more_btn_link_type" "enum__case_studies_v_blocks_resources_see_more_btn_link_type" DEFAULT 'reference',
  	"see_more_btn_link_new_tab" boolean,
  	"see_more_btn_link_url" varchar,
  	"see_more_btn_link_label" varchar,
  	"see_more_btn_link_aprnce" "enum__case_studies_v_blocks_resources_see_more_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_info_tabs_info_sheets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_info_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Info Sheets',
  	"view_all_button_enabled" boolean DEFAULT true,
  	"view_all_button_text" varchar DEFAULT 'View All',
  	"view_all_button_link" varchar DEFAULT '/resources',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_extra_info_problems" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"problem_title" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_extra_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Common Security Problems You Can Fix Instantly',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_ebooks_e_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"display_image_id" integer,
  	"pdf_file_id" integer,
  	"download_text" varchar DEFAULT 'Download',
  	"description" varchar DEFAULT 'What You Need to Know?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_ebooks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'E-Books',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_video_tabs_tabs_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"video_title" varchar,
  	"video_u_r_l" varchar,
  	"thumbnail_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_video_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_video_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_case_study_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"tags_date" timestamp(3) with time zone,
  	"tags_read_time" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_case_study_cn_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sub_title" varchar,
  	"sub_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_case_study_cn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_content" jsonb,
  	"main_image_id" integer,
  	"sb_title" varchar,
  	"sb_description" jsonb,
  	"sb_button_text" varchar,
  	"sb_btn_link_type" "enum__case_studies_v_blocks_case_study_cn_sb_btn_link_type" DEFAULT 'reference',
  	"sb_btn_link_new_tab" boolean,
  	"sb_btn_link_url" varchar,
  	"sb_btn_link_label" varchar,
  	"sb_btn_link_aprnce" "enum__case_studies_v_blocks_case_study_cn_sb_btn_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_experience_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_help_you_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_why_wcg_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_why_wcg_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_more_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"bg_image_id" integer,
  	"link_type" "enum__case_studies_v_blocks_services_more_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_aprnce" "enum__case_studies_v_blocks_services_more_cards_link_aprnce" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_more" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_overview_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_overview_left_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_overview_right_column_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_blocks_services_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'How will WCG help?',
  	"services_intro_text" varchar DEFAULT 'WCG assists organizations to develop policies and procedures for:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_client" varchar,
  	"version_industry" "enum__case_studies_v_version_industry",
  	"version_cover_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_case_studies_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"categories_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "header_nav_items_mega_menu_sections_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link_type" "enum_header_nav_items_mega_menu_sections_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "header_nav_items_mega_menu_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer
  );
  
  ALTER TABLE "pages_blocks_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_featured_resources_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_featured_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_tabs_v_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_tabs_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_featured_resources_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_featured_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_featured_resources_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_featured_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_featured_resources_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_featured_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_submenu" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_blogs" CASCADE;
  DROP TABLE "tabs_services" CASCADE;
  DROP TABLE "tabs" CASCADE;
  DROP TABLE "pages_blocks_services_tabs" CASCADE;
  DROP TABLE "pages_blocks_featured_resources_resources" CASCADE;
  DROP TABLE "pages_blocks_featured_resources" CASCADE;
  DROP TABLE "_pages_v_blocks_blogs" CASCADE;
  DROP TABLE "_tabs_v_services" CASCADE;
  DROP TABLE "_tabs_v" CASCADE;
  DROP TABLE "_pages_v_blocks_services_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_featured_resources_resources" CASCADE;
  DROP TABLE "_pages_v_blocks_featured_resources" CASCADE;
  DROP TABLE "services_blocks_blogs" CASCADE;
  DROP TABLE "services_blocks_services_tabs" CASCADE;
  DROP TABLE "services_blocks_featured_resources_resources" CASCADE;
  DROP TABLE "services_blocks_featured_resources" CASCADE;
  DROP TABLE "_services_v_blocks_blogs" CASCADE;
  DROP TABLE "_services_v_blocks_services_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_featured_resources_resources" CASCADE;
  DROP TABLE "_services_v_blocks_featured_resources" CASCADE;
  DROP TABLE "header_nav_items_submenu" CASCADE;
  ALTER TABLE "pages_blocks_our_services_services" DROP CONSTRAINT "pages_blocks_our_services_services_icon_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP CONSTRAINT "_pages_v_blocks_our_services_services_icon_id_media_id_fk";
  
  ALTER TABLE "services_blocks_our_services_services" DROP CONSTRAINT "services_blocks_our_services_services_icon_id_media_id_fk";
  
  ALTER TABLE "_services_v_blocks_our_services_services" DROP CONSTRAINT "_services_v_blocks_our_services_services_icon_id_media_id_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_posts_fk";
  
  DROP INDEX "pages_blocks_hero_home_certification_badge_certification_badge_icon_idx";
  DROP INDEX "pages_blocks_our_services_services_icon_idx";
  DROP INDEX "_pages_v_blocks_hero_home_certification_badge_certification_badge_icon_idx";
  DROP INDEX "_pages_v_blocks_our_services_services_icon_idx";
  DROP INDEX "services_blocks_hero_home_certification_badge_certification_badge_icon_idx";
  DROP INDEX "services_blocks_our_services_services_icon_idx";
  DROP INDEX "_services_v_blocks_hero_home_certification_badge_certification_badge_icon_idx";
  DROP INDEX "_services_v_blocks_hero_services_images_images_main_image_idx";
  DROP INDEX "_services_v_blocks_hero_services_images_images_overlay_icon_idx";
  DROP INDEX "_services_v_blocks_hero_service_images_images_overlay_icon_idx";
  DROP INDEX "_services_v_blocks_our_services_services_icon_idx";
  DROP INDEX "_services_v_blocks_case_studies_case_studies_internal_page_idx";
  DROP INDEX "footer_rels_posts_id_idx";
  DROP INDEX "redirects_from_idx";
  ALTER TABLE "footer_quick_links" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "footer_services" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "footer_bottom_links" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "pages_blocks_our_services_services" ADD COLUMN "icon_hovered_id" integer;
  ALTER TABLE "pages_blocks_our_services_services" ADD COLUMN "icon_normal_id" integer;
  ALTER TABLE "pages_blocks_contact_form" ADD COLUMN "content_note" varchar;
  ALTER TABLE "pages_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD COLUMN "icon_hovered_id" integer;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD COLUMN "icon_normal_id" integer;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD COLUMN "content_note" varchar;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "services_blocks_our_services_services" ADD COLUMN "icon_hovered_id" integer;
  ALTER TABLE "services_blocks_our_services_services" ADD COLUMN "icon_normal_id" integer;
  ALTER TABLE "services_blocks_contact_form" ADD COLUMN "content_note" varchar;
  ALTER TABLE "services_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD COLUMN "icon_hovered_id" integer;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD COLUMN "icon_normal_id" integer;
  ALTER TABLE "_services_v_blocks_contact_form" ADD COLUMN "content_note" varchar;
  ALTER TABLE "_services_v_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "header_nav_items" ADD COLUMN "use_mega_menu" boolean DEFAULT false;
  ALTER TABLE "footer_rels" ADD COLUMN "services_id" integer;
  ALTER TABLE "pages_blocks_service_about_content_paragraphs" ADD CONSTRAINT "pages_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_about_steps" ADD CONSTRAINT "pages_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_about_steps" ADD CONSTRAINT "pages_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_about_steps" ADD CONSTRAINT "pages_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_about" ADD CONSTRAINT "pages_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_about" ADD CONSTRAINT "pages_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_blogs" ADD CONSTRAINT "pages_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs_services" ADD CONSTRAINT "pages_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs_services" ADD CONSTRAINT "pages_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs_services" ADD CONSTRAINT "pages_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs_services" ADD CONSTRAINT "pages_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs" ADD CONSTRAINT "pages_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs" ADD CONSTRAINT "pages_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv_sctabs" ADD CONSTRAINT "pages_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv" ADD CONSTRAINT "pages_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_srv" ADD CONSTRAINT "pages_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career_tabs_tabs_content" ADD CONSTRAINT "pages_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career_tabs_tabs" ADD CONSTRAINT "pages_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career_tabs" ADD CONSTRAINT "pages_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_co_content_content" ADD CONSTRAINT "pages_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_co_content" ADD CONSTRAINT "pages_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_co_content" ADD CONSTRAINT "pages_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text_section" ADD CONSTRAINT "pages_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text_section" ADD CONSTRAINT "pages_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_job_listings_jobs" ADD CONSTRAINT "pages_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_job_listings" ADD CONSTRAINT "pages_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_info" ADD CONSTRAINT "pages_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_info" ADD CONSTRAINT "pages_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_co_hero" ADD CONSTRAINT "pages_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_co_hero" ADD CONSTRAINT "pages_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_it_experts" ADD CONSTRAINT "pages_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_it_experts" ADD CONSTRAINT "pages_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_mission_vision_tabs" ADD CONSTRAINT "pages_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_mission_vision_tabs" ADD CONSTRAINT "pages_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_mission_vision_tabs" ADD CONSTRAINT "pages_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_mission_vision" ADD CONSTRAINT "pages_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_leadership_points_points" ADD CONSTRAINT "pages_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_leadership_points" ADD CONSTRAINT "pages_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_resources_industries" ADD CONSTRAINT "pages_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_resources" ADD CONSTRAINT "pages_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_info_tabs_info_sheets" ADD CONSTRAINT "pages_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_info_tabs_info_sheets" ADD CONSTRAINT "pages_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_info_tabs_info_sheets" ADD CONSTRAINT "pages_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_info_tabs" ADD CONSTRAINT "pages_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_extra_info_problems" ADD CONSTRAINT "pages_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_extra_info_problems" ADD CONSTRAINT "pages_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_extra_info" ADD CONSTRAINT "pages_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ebooks_e_books" ADD CONSTRAINT "pages_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_ebooks_e_books" ADD CONSTRAINT "pages_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_ebooks_e_books" ADD CONSTRAINT "pages_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ebooks" ADD CONSTRAINT "pages_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "pages_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "pages_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_tabs_tabs" ADD CONSTRAINT "pages_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_tabs" ADD CONSTRAINT "pages_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_study_hero" ADD CONSTRAINT "pages_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_study_cn_content" ADD CONSTRAINT "pages_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_study_cn" ADD CONSTRAINT "pages_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_study_cn" ADD CONSTRAINT "pages_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_experience_section" ADD CONSTRAINT "pages_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_help_you_section" ADD CONSTRAINT "pages_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_help_you_section" ADD CONSTRAINT "pages_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_wcg_section_cards" ADD CONSTRAINT "pages_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_wcg_section" ADD CONSTRAINT "pages_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_section_faqs" ADD CONSTRAINT "pages_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_section" ADD CONSTRAINT "pages_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_more_cards" ADD CONSTRAINT "pages_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_more_cards" ADD CONSTRAINT "pages_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_more_cards" ADD CONSTRAINT "pages_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_more" ADD CONSTRAINT "pages_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview_description" ADD CONSTRAINT "pages_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview_left_column_services" ADD CONSTRAINT "pages_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview_right_column_services" ADD CONSTRAINT "pages_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_overview" ADD CONSTRAINT "pages_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about_content_paragraphs" ADD CONSTRAINT "_pages_v_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about_steps" ADD CONSTRAINT "_pages_v_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about_steps" ADD CONSTRAINT "_pages_v_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about_steps" ADD CONSTRAINT "_pages_v_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about" ADD CONSTRAINT "_pages_v_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_about" ADD CONSTRAINT "_pages_v_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_blogs" ADD CONSTRAINT "_pages_v_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv_sctabs" ADD CONSTRAINT "_pages_v_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv" ADD CONSTRAINT "_pages_v_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_srv" ADD CONSTRAINT "_pages_v_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career_tabs_tabs_content" ADD CONSTRAINT "_pages_v_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career_tabs_tabs" ADD CONSTRAINT "_pages_v_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career_tabs" ADD CONSTRAINT "_pages_v_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_co_content_content" ADD CONSTRAINT "_pages_v_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_co_content" ADD CONSTRAINT "_pages_v_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_co_content" ADD CONSTRAINT "_pages_v_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text_section" ADD CONSTRAINT "_pages_v_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text_section" ADD CONSTRAINT "_pages_v_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_job_listings_jobs" ADD CONSTRAINT "_pages_v_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_job_listings" ADD CONSTRAINT "_pages_v_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info" ADD CONSTRAINT "_pages_v_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info" ADD CONSTRAINT "_pages_v_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_co_hero" ADD CONSTRAINT "_pages_v_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_co_hero" ADD CONSTRAINT "_pages_v_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_it_experts" ADD CONSTRAINT "_pages_v_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_it_experts" ADD CONSTRAINT "_pages_v_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_pages_v_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_pages_v_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_pages_v_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_mission_vision" ADD CONSTRAINT "_pages_v_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_leadership_points_points" ADD CONSTRAINT "_pages_v_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_leadership_points" ADD CONSTRAINT "_pages_v_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_resources_industries" ADD CONSTRAINT "_pages_v_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_resources" ADD CONSTRAINT "_pages_v_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_pages_v_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_pages_v_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_pages_v_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info_tabs" ADD CONSTRAINT "_pages_v_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_extra_info_problems" ADD CONSTRAINT "_pages_v_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_extra_info_problems" ADD CONSTRAINT "_pages_v_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_extra_info" ADD CONSTRAINT "_pages_v_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ebooks_e_books" ADD CONSTRAINT "_pages_v_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ebooks_e_books" ADD CONSTRAINT "_pages_v_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ebooks_e_books" ADD CONSTRAINT "_pages_v_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ebooks" ADD CONSTRAINT "_pages_v_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_pages_v_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_pages_v_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_tabs_tabs" ADD CONSTRAINT "_pages_v_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_tabs" ADD CONSTRAINT "_pages_v_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_hero" ADD CONSTRAINT "_pages_v_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" ADD CONSTRAINT "_pages_v_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_cn" ADD CONSTRAINT "_pages_v_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_case_study_cn" ADD CONSTRAINT "_pages_v_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_experience_section" ADD CONSTRAINT "_pages_v_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_help_you_section" ADD CONSTRAINT "_pages_v_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_help_you_section" ADD CONSTRAINT "_pages_v_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_wcg_section_cards" ADD CONSTRAINT "_pages_v_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_wcg_section" ADD CONSTRAINT "_pages_v_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_section_faqs" ADD CONSTRAINT "_pages_v_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_section" ADD CONSTRAINT "_pages_v_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_more_cards" ADD CONSTRAINT "_pages_v_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_more_cards" ADD CONSTRAINT "_pages_v_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_more_cards" ADD CONSTRAINT "_pages_v_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_more" ADD CONSTRAINT "_pages_v_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview_description" ADD CONSTRAINT "_pages_v_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview_left_column_services" ADD CONSTRAINT "_pages_v_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview_right_column_services" ADD CONSTRAINT "_pages_v_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_overview" ADD CONSTRAINT "_pages_v_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_content_paragraphs" ADD CONSTRAINT "services_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_steps" ADD CONSTRAINT "services_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_steps" ADD CONSTRAINT "services_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_steps" ADD CONSTRAINT "services_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about" ADD CONSTRAINT "services_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about" ADD CONSTRAINT "services_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_featured_blogs" ADD CONSTRAINT "services_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs_services" ADD CONSTRAINT "services_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs_services" ADD CONSTRAINT "services_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs_services" ADD CONSTRAINT "services_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs_services" ADD CONSTRAINT "services_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs" ADD CONSTRAINT "services_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs" ADD CONSTRAINT "services_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv_sctabs" ADD CONSTRAINT "services_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_srv" ADD CONSTRAINT "services_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_srv" ADD CONSTRAINT "services_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_career_tabs_tabs_content" ADD CONSTRAINT "services_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_career_tabs_tabs" ADD CONSTRAINT "services_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_career_tabs" ADD CONSTRAINT "services_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_co_content_content" ADD CONSTRAINT "services_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_co_content" ADD CONSTRAINT "services_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_co_content" ADD CONSTRAINT "services_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_image_text_section" ADD CONSTRAINT "services_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_image_text_section" ADD CONSTRAINT "services_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_job_listings_jobs" ADD CONSTRAINT "services_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_job_listings" ADD CONSTRAINT "services_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_info" ADD CONSTRAINT "services_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_info" ADD CONSTRAINT "services_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_co_hero" ADD CONSTRAINT "services_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_co_hero" ADD CONSTRAINT "services_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_it_experts" ADD CONSTRAINT "services_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_it_experts" ADD CONSTRAINT "services_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_mission_vision_tabs" ADD CONSTRAINT "services_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_mission_vision_tabs" ADD CONSTRAINT "services_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_mission_vision_tabs" ADD CONSTRAINT "services_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_mission_vision" ADD CONSTRAINT "services_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_leadership_points_points" ADD CONSTRAINT "services_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_leadership_points" ADD CONSTRAINT "services_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_testimonials_testimonials" ADD CONSTRAINT "services_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_testimonials_testimonials" ADD CONSTRAINT "services_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_testimonials" ADD CONSTRAINT "services_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_resources_industries" ADD CONSTRAINT "services_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_resources" ADD CONSTRAINT "services_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_info_tabs_info_sheets" ADD CONSTRAINT "services_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_info_tabs_info_sheets" ADD CONSTRAINT "services_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_info_tabs_info_sheets" ADD CONSTRAINT "services_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_info_tabs" ADD CONSTRAINT "services_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_extra_info_problems" ADD CONSTRAINT "services_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_extra_info_problems" ADD CONSTRAINT "services_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_extra_info" ADD CONSTRAINT "services_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_ebooks_e_books" ADD CONSTRAINT "services_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_ebooks_e_books" ADD CONSTRAINT "services_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_ebooks_e_books" ADD CONSTRAINT "services_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_ebooks" ADD CONSTRAINT "services_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "services_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "services_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_video_tabs_tabs" ADD CONSTRAINT "services_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_video_tabs" ADD CONSTRAINT "services_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_hero" ADD CONSTRAINT "services_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_cn_content" ADD CONSTRAINT "services_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_cn" ADD CONSTRAINT "services_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_case_study_cn" ADD CONSTRAINT "services_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_experience_section" ADD CONSTRAINT "services_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_section" ADD CONSTRAINT "services_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_section" ADD CONSTRAINT "services_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_why_wcg_section_cards" ADD CONSTRAINT "services_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_why_wcg_section" ADD CONSTRAINT "services_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_faq_section_faqs" ADD CONSTRAINT "services_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_faq_section" ADD CONSTRAINT "services_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_more_cards" ADD CONSTRAINT "services_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_services_more_cards" ADD CONSTRAINT "services_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_services_more_cards" ADD CONSTRAINT "services_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_more" ADD CONSTRAINT "services_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview_description" ADD CONSTRAINT "services_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview_left_column_services" ADD CONSTRAINT "services_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview_right_column_services" ADD CONSTRAINT "services_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_overview" ADD CONSTRAINT "services_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_v2_help_you_list" ADD CONSTRAINT "services_blocks_help_you_v2_help_you_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_help_you_v2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_v2" ADD CONSTRAINT "services_blocks_help_you_v2_bottom_card_bottom_card_image_id_media_id_fk" FOREIGN KEY ("bottom_card_bottom_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_v2" ADD CONSTRAINT "services_blocks_help_you_v2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_2_content_paragraphs" ADD CONSTRAINT "services_blocks_service_about_2_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_about_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_2_content_list" ADD CONSTRAINT "services_blocks_service_about_2_content_list_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_2_content_list" ADD CONSTRAINT "services_blocks_service_about_2_content_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_service_about_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_2" ADD CONSTRAINT "services_blocks_service_about_2_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_service_about_2" ADD CONSTRAINT "services_blocks_service_about_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_help_you_video" ADD CONSTRAINT "services_blocks_help_you_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_content_paragraphs" ADD CONSTRAINT "_services_v_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_steps" ADD CONSTRAINT "_services_v_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_steps" ADD CONSTRAINT "_services_v_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_steps" ADD CONSTRAINT "_services_v_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about" ADD CONSTRAINT "_services_v_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about" ADD CONSTRAINT "_services_v_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_featured_blogs" ADD CONSTRAINT "_services_v_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv_sctabs" ADD CONSTRAINT "_services_v_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv" ADD CONSTRAINT "_services_v_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_srv" ADD CONSTRAINT "_services_v_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_career_tabs_tabs_content" ADD CONSTRAINT "_services_v_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_career_tabs_tabs" ADD CONSTRAINT "_services_v_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_career_tabs" ADD CONSTRAINT "_services_v_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_co_content_content" ADD CONSTRAINT "_services_v_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_co_content" ADD CONSTRAINT "_services_v_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_co_content" ADD CONSTRAINT "_services_v_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_image_text_section" ADD CONSTRAINT "_services_v_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_image_text_section" ADD CONSTRAINT "_services_v_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_job_listings_jobs" ADD CONSTRAINT "_services_v_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_job_listings" ADD CONSTRAINT "_services_v_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info" ADD CONSTRAINT "_services_v_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info" ADD CONSTRAINT "_services_v_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_co_hero" ADD CONSTRAINT "_services_v_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_co_hero" ADD CONSTRAINT "_services_v_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_it_experts" ADD CONSTRAINT "_services_v_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_it_experts" ADD CONSTRAINT "_services_v_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_services_v_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_services_v_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_services_v_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_mission_vision" ADD CONSTRAINT "_services_v_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_leadership_points_points" ADD CONSTRAINT "_services_v_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_leadership_points" ADD CONSTRAINT "_services_v_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_services_v_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_services_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_testimonials" ADD CONSTRAINT "_services_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_resources_industries" ADD CONSTRAINT "_services_v_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_resources" ADD CONSTRAINT "_services_v_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_services_v_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_services_v_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_services_v_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_info_tabs" ADD CONSTRAINT "_services_v_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_extra_info_problems" ADD CONSTRAINT "_services_v_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_extra_info_problems" ADD CONSTRAINT "_services_v_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_extra_info" ADD CONSTRAINT "_services_v_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_ebooks_e_books" ADD CONSTRAINT "_services_v_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_ebooks_e_books" ADD CONSTRAINT "_services_v_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_ebooks_e_books" ADD CONSTRAINT "_services_v_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_ebooks" ADD CONSTRAINT "_services_v_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_services_v_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_services_v_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_video_tabs_tabs" ADD CONSTRAINT "_services_v_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_video_tabs" ADD CONSTRAINT "_services_v_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_hero" ADD CONSTRAINT "_services_v_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" ADD CONSTRAINT "_services_v_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_cn" ADD CONSTRAINT "_services_v_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_case_study_cn" ADD CONSTRAINT "_services_v_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_experience_section" ADD CONSTRAINT "_services_v_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_section" ADD CONSTRAINT "_services_v_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_section" ADD CONSTRAINT "_services_v_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_why_wcg_section_cards" ADD CONSTRAINT "_services_v_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_why_wcg_section" ADD CONSTRAINT "_services_v_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_faq_section_faqs" ADD CONSTRAINT "_services_v_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_faq_section" ADD CONSTRAINT "_services_v_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_more_cards" ADD CONSTRAINT "_services_v_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_more_cards" ADD CONSTRAINT "_services_v_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_more_cards" ADD CONSTRAINT "_services_v_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_more" ADD CONSTRAINT "_services_v_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview_description" ADD CONSTRAINT "_services_v_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview_left_column_services" ADD CONSTRAINT "_services_v_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview_right_column_services" ADD CONSTRAINT "_services_v_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_overview" ADD CONSTRAINT "_services_v_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_v2_help_you_list" ADD CONSTRAINT "_services_v_blocks_help_you_v2_help_you_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_help_you_v2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_v2" ADD CONSTRAINT "_services_v_blocks_help_you_v2_bottom_card_bottom_card_image_id_media_id_fk" FOREIGN KEY ("bottom_card_bottom_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_v2" ADD CONSTRAINT "_services_v_blocks_help_you_v2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_2_content_paragraphs" ADD CONSTRAINT "_services_v_blocks_service_about_2_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_about_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_2_content_list" ADD CONSTRAINT "_services_v_blocks_service_about_2_content_list_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_2_content_list" ADD CONSTRAINT "_services_v_blocks_service_about_2_content_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_service_about_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_2" ADD CONSTRAINT "_services_v_blocks_service_about_2_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_service_about_2" ADD CONSTRAINT "_services_v_blocks_service_about_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_help_you_video" ADD CONSTRAINT "_services_v_blocks_help_you_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_categories" ADD CONSTRAINT "case_studies_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_home_buttons" ADD CONSTRAINT "case_studies_blocks_hero_home_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_hero_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_home" ADD CONSTRAINT "case_studies_blocks_hero_home_certification_badge_icon_id_media_id_fk" FOREIGN KEY ("certification_badge_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_home" ADD CONSTRAINT "case_studies_blocks_hero_home_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_home" ADD CONSTRAINT "case_studies_blocks_hero_home_images_overlay_image_id_media_id_fk" FOREIGN KEY ("images_overlay_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_home" ADD CONSTRAINT "case_studies_blocks_hero_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_services" ADD CONSTRAINT "case_studies_blocks_hero_services_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_services" ADD CONSTRAINT "case_studies_blocks_hero_services_images_overlay_icon_id_media_id_fk" FOREIGN KEY ("images_overlay_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_services" ADD CONSTRAINT "case_studies_blocks_hero_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_service" ADD CONSTRAINT "case_studies_blocks_hero_service_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_service" ADD CONSTRAINT "case_studies_blocks_hero_service_images_overlay_icon_id_media_id_fk" FOREIGN KEY ("images_overlay_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_hero_service" ADD CONSTRAINT "case_studies_blocks_hero_service_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about_content_paragraphs" ADD CONSTRAINT "case_studies_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about_steps" ADD CONSTRAINT "case_studies_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about_steps" ADD CONSTRAINT "case_studies_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about_steps" ADD CONSTRAINT "case_studies_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about" ADD CONSTRAINT "case_studies_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_service_about" ADD CONSTRAINT "case_studies_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cta_links" ADD CONSTRAINT "case_studies_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_cta" ADD CONSTRAINT "case_studies_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_content_columns" ADD CONSTRAINT "case_studies_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_content" ADD CONSTRAINT "case_studies_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_media_block" ADD CONSTRAINT "case_studies_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_media_block" ADD CONSTRAINT "case_studies_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_archive" ADD CONSTRAINT "case_studies_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_form_block" ADD CONSTRAINT "case_studies_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_form_block" ADD CONSTRAINT "case_studies_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_our_services_services" ADD CONSTRAINT "case_studies_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_our_services_services" ADD CONSTRAINT "case_studies_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_our_services_services" ADD CONSTRAINT "case_studies_blocks_our_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_our_services" ADD CONSTRAINT "case_studies_blocks_our_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries_industries" ADD CONSTRAINT "case_studies_blocks_industries_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries_buttons" ADD CONSTRAINT "case_studies_blocks_industries_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries" ADD CONSTRAINT "case_studies_blocks_industries_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries" ADD CONSTRAINT "case_studies_blocks_industries_icons_check_icon_id_media_id_fk" FOREIGN KEY ("icons_check_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries" ADD CONSTRAINT "case_studies_blocks_industries_icons_arrow_icon_id_media_id_fk" FOREIGN KEY ("icons_arrow_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_industries" ADD CONSTRAINT "case_studies_blocks_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_portfolio_statistics" ADD CONSTRAINT "case_studies_blocks_portfolio_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_portfolio_client_logos" ADD CONSTRAINT "case_studies_blocks_portfolio_client_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_portfolio_client_logos" ADD CONSTRAINT "case_studies_blocks_portfolio_client_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_portfolio" ADD CONSTRAINT "case_studies_blocks_portfolio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_studies_case_studies" ADD CONSTRAINT "case_studies_blocks_case_studies_case_studies_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_studies_case_studies" ADD CONSTRAINT "case_studies_blocks_case_studies_case_studies_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_studies_case_studies" ADD CONSTRAINT "case_studies_blocks_case_studies_case_studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_studies" ADD CONSTRAINT "case_studies_blocks_case_studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_featured_blogs" ADD CONSTRAINT "case_studies_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs_services" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs_services" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs_services" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs_services" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv_sctabs" ADD CONSTRAINT "case_studies_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv" ADD CONSTRAINT "case_studies_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_srv" ADD CONSTRAINT "case_studies_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_contact_form" ADD CONSTRAINT "case_studies_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_career_tabs_tabs_content" ADD CONSTRAINT "case_studies_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_career_tabs_tabs" ADD CONSTRAINT "case_studies_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_career_tabs" ADD CONSTRAINT "case_studies_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_co_content_content" ADD CONSTRAINT "case_studies_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_co_content" ADD CONSTRAINT "case_studies_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_co_content" ADD CONSTRAINT "case_studies_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_image_text_section" ADD CONSTRAINT "case_studies_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_image_text_section" ADD CONSTRAINT "case_studies_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_job_listings_jobs" ADD CONSTRAINT "case_studies_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_job_listings" ADD CONSTRAINT "case_studies_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info" ADD CONSTRAINT "case_studies_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info" ADD CONSTRAINT "case_studies_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_co_hero" ADD CONSTRAINT "case_studies_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_co_hero" ADD CONSTRAINT "case_studies_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_it_experts" ADD CONSTRAINT "case_studies_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_it_experts" ADD CONSTRAINT "case_studies_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_mission_vision_tabs" ADD CONSTRAINT "case_studies_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_mission_vision_tabs" ADD CONSTRAINT "case_studies_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_mission_vision_tabs" ADD CONSTRAINT "case_studies_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_mission_vision" ADD CONSTRAINT "case_studies_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_leadership_points_points" ADD CONSTRAINT "case_studies_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_leadership_points" ADD CONSTRAINT "case_studies_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_testimonials_testimonials" ADD CONSTRAINT "case_studies_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_testimonials_testimonials" ADD CONSTRAINT "case_studies_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_testimonials" ADD CONSTRAINT "case_studies_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_resources_industries" ADD CONSTRAINT "case_studies_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_resources" ADD CONSTRAINT "case_studies_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info_tabs_info_sheets" ADD CONSTRAINT "case_studies_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info_tabs_info_sheets" ADD CONSTRAINT "case_studies_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info_tabs_info_sheets" ADD CONSTRAINT "case_studies_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_info_tabs" ADD CONSTRAINT "case_studies_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_extra_info_problems" ADD CONSTRAINT "case_studies_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_extra_info_problems" ADD CONSTRAINT "case_studies_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_extra_info" ADD CONSTRAINT "case_studies_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_ebooks_e_books" ADD CONSTRAINT "case_studies_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_ebooks_e_books" ADD CONSTRAINT "case_studies_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_ebooks_e_books" ADD CONSTRAINT "case_studies_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_ebooks" ADD CONSTRAINT "case_studies_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "case_studies_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "case_studies_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_video_tabs_tabs" ADD CONSTRAINT "case_studies_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_video_tabs" ADD CONSTRAINT "case_studies_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_hero" ADD CONSTRAINT "case_studies_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" ADD CONSTRAINT "case_studies_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_cn" ADD CONSTRAINT "case_studies_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_case_study_cn" ADD CONSTRAINT "case_studies_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_experience_section" ADD CONSTRAINT "case_studies_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_help_you_section" ADD CONSTRAINT "case_studies_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_help_you_section" ADD CONSTRAINT "case_studies_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_why_wcg_section_cards" ADD CONSTRAINT "case_studies_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_why_wcg_section" ADD CONSTRAINT "case_studies_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_faq_section_faqs" ADD CONSTRAINT "case_studies_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_faq_section" ADD CONSTRAINT "case_studies_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_more_cards" ADD CONSTRAINT "case_studies_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_more_cards" ADD CONSTRAINT "case_studies_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_more_cards" ADD CONSTRAINT "case_studies_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_more" ADD CONSTRAINT "case_studies_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview_description" ADD CONSTRAINT "case_studies_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview_left_column_services" ADD CONSTRAINT "case_studies_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview_right_column_services" ADD CONSTRAINT "case_studies_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_services_overview" ADD CONSTRAINT "case_studies_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_version_categories" ADD CONSTRAINT "_case_studies_v_version_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_home_buttons" ADD CONSTRAINT "_case_studies_v_blocks_hero_home_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_hero_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_home" ADD CONSTRAINT "_case_studies_v_blocks_hero_home_certification_badge_icon_id_media_id_fk" FOREIGN KEY ("certification_badge_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_home" ADD CONSTRAINT "_case_studies_v_blocks_hero_home_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_home" ADD CONSTRAINT "_case_studies_v_blocks_hero_home_images_overlay_image_id_media_id_fk" FOREIGN KEY ("images_overlay_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_home" ADD CONSTRAINT "_case_studies_v_blocks_hero_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_services" ADD CONSTRAINT "_case_studies_v_blocks_hero_services_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_services" ADD CONSTRAINT "_case_studies_v_blocks_hero_services_images_overlay_icon_id_media_id_fk" FOREIGN KEY ("images_overlay_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_services" ADD CONSTRAINT "_case_studies_v_blocks_hero_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_service" ADD CONSTRAINT "_case_studies_v_blocks_hero_service_images_main_image_id_media_id_fk" FOREIGN KEY ("images_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_service" ADD CONSTRAINT "_case_studies_v_blocks_hero_service_images_overlay_icon_id_media_id_fk" FOREIGN KEY ("images_overlay_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_hero_service" ADD CONSTRAINT "_case_studies_v_blocks_hero_service_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about_content_paragraphs" ADD CONSTRAINT "_case_studies_v_blocks_service_about_content_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about_steps" ADD CONSTRAINT "_case_studies_v_blocks_service_about_steps_icon_unhovered_id_media_id_fk" FOREIGN KEY ("icon_unhovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about_steps" ADD CONSTRAINT "_case_studies_v_blocks_service_about_steps_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about_steps" ADD CONSTRAINT "_case_studies_v_blocks_service_about_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_service_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about" ADD CONSTRAINT "_case_studies_v_blocks_service_about_content_image_media_id_media_id_fk" FOREIGN KEY ("content_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_service_about" ADD CONSTRAINT "_case_studies_v_blocks_service_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cta_links" ADD CONSTRAINT "_case_studies_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_cta" ADD CONSTRAINT "_case_studies_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_content_columns" ADD CONSTRAINT "_case_studies_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_content" ADD CONSTRAINT "_case_studies_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_media_block" ADD CONSTRAINT "_case_studies_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_media_block" ADD CONSTRAINT "_case_studies_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_archive" ADD CONSTRAINT "_case_studies_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_form_block" ADD CONSTRAINT "_case_studies_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_form_block" ADD CONSTRAINT "_case_studies_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_our_services_services" ADD CONSTRAINT "_case_studies_v_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_our_services_services" ADD CONSTRAINT "_case_studies_v_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_our_services_services" ADD CONSTRAINT "_case_studies_v_blocks_our_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_our_services" ADD CONSTRAINT "_case_studies_v_blocks_our_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries_industries" ADD CONSTRAINT "_case_studies_v_blocks_industries_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries_buttons" ADD CONSTRAINT "_case_studies_v_blocks_industries_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries" ADD CONSTRAINT "_case_studies_v_blocks_industries_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries" ADD CONSTRAINT "_case_studies_v_blocks_industries_icons_check_icon_id_media_id_fk" FOREIGN KEY ("icons_check_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries" ADD CONSTRAINT "_case_studies_v_blocks_industries_icons_arrow_icon_id_media_id_fk" FOREIGN KEY ("icons_arrow_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_industries" ADD CONSTRAINT "_case_studies_v_blocks_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_portfolio_statistics" ADD CONSTRAINT "_case_studies_v_blocks_portfolio_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_portfolio_client_logos" ADD CONSTRAINT "_case_studies_v_blocks_portfolio_client_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_portfolio_client_logos" ADD CONSTRAINT "_case_studies_v_blocks_portfolio_client_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_portfolio" ADD CONSTRAINT "_case_studies_v_blocks_portfolio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_studies_case_studies" ADD CONSTRAINT "_case_studies_v_blocks_case_studies_case_studies_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_studies_case_studies" ADD CONSTRAINT "_case_studies_v_blocks_case_studies_case_studies_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_studies_case_studies" ADD CONSTRAINT "_case_studies_v_blocks_case_studies_case_studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_studies" ADD CONSTRAINT "_case_studies_v_blocks_case_studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_featured_blogs" ADD CONSTRAINT "_case_studies_v_blocks_featured_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_services_icon_active_id_media_id_fk" FOREIGN KEY ("icon_active_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs_services" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_srv_sctabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs" ADD CONSTRAINT "_case_studies_v_blocks_srv_sctabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_srv"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv" ADD CONSTRAINT "_case_studies_v_blocks_srv_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_srv" ADD CONSTRAINT "_case_studies_v_blocks_srv_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_contact_form" ADD CONSTRAINT "_case_studies_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_career_tabs_tabs_content" ADD CONSTRAINT "_case_studies_v_blocks_career_tabs_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_career_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_career_tabs_tabs" ADD CONSTRAINT "_case_studies_v_blocks_career_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_career_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_career_tabs" ADD CONSTRAINT "_case_studies_v_blocks_career_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_co_content_content" ADD CONSTRAINT "_case_studies_v_blocks_co_content_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_co_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_co_content" ADD CONSTRAINT "_case_studies_v_blocks_co_content_featured_media_media_id_media_id_fk" FOREIGN KEY ("featured_media_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_co_content" ADD CONSTRAINT "_case_studies_v_blocks_co_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_image_text_section" ADD CONSTRAINT "_case_studies_v_blocks_image_text_section_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_image_text_section" ADD CONSTRAINT "_case_studies_v_blocks_image_text_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_job_listings_jobs" ADD CONSTRAINT "_case_studies_v_blocks_job_listings_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_job_listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_job_listings" ADD CONSTRAINT "_case_studies_v_blocks_job_listings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info" ADD CONSTRAINT "_case_studies_v_blocks_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info" ADD CONSTRAINT "_case_studies_v_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_co_hero" ADD CONSTRAINT "_case_studies_v_blocks_co_hero_featured_image_media_id_media_id_fk" FOREIGN KEY ("featured_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_co_hero" ADD CONSTRAINT "_case_studies_v_blocks_co_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_it_experts" ADD CONSTRAINT "_case_studies_v_blocks_it_experts_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_it_experts" ADD CONSTRAINT "_case_studies_v_blocks_it_experts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_case_studies_v_blocks_mission_vision_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_case_studies_v_blocks_mission_vision_tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_mission_vision_tabs" ADD CONSTRAINT "_case_studies_v_blocks_mission_vision_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_mission_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_mission_vision" ADD CONSTRAINT "_case_studies_v_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_leadership_points_points" ADD CONSTRAINT "_case_studies_v_blocks_leadership_points_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_leadership_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_leadership_points" ADD CONSTRAINT "_case_studies_v_blocks_leadership_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_case_studies_v_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_case_studies_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_testimonials" ADD CONSTRAINT "_case_studies_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_resources_industries" ADD CONSTRAINT "_case_studies_v_blocks_resources_industries_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_resources" ADD CONSTRAINT "_case_studies_v_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_case_studies_v_blocks_info_tabs_info_sheets_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_case_studies_v_blocks_info_tabs_info_sheets_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info_tabs_info_sheets" ADD CONSTRAINT "_case_studies_v_blocks_info_tabs_info_sheets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_info_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_info_tabs" ADD CONSTRAINT "_case_studies_v_blocks_info_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_extra_info_problems" ADD CONSTRAINT "_case_studies_v_blocks_extra_info_problems_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_extra_info_problems" ADD CONSTRAINT "_case_studies_v_blocks_extra_info_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_extra_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_extra_info" ADD CONSTRAINT "_case_studies_v_blocks_extra_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_ebooks_e_books" ADD CONSTRAINT "_case_studies_v_blocks_ebooks_e_books_display_image_id_media_id_fk" FOREIGN KEY ("display_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_ebooks_e_books" ADD CONSTRAINT "_case_studies_v_blocks_ebooks_e_books_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_ebooks_e_books" ADD CONSTRAINT "_case_studies_v_blocks_ebooks_e_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_ebooks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_ebooks" ADD CONSTRAINT "_case_studies_v_blocks_ebooks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_case_studies_v_blocks_video_tabs_tabs_videos_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_video_tabs_tabs_videos" ADD CONSTRAINT "_case_studies_v_blocks_video_tabs_tabs_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_video_tabs_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_video_tabs_tabs" ADD CONSTRAINT "_case_studies_v_blocks_video_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_video_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_video_tabs" ADD CONSTRAINT "_case_studies_v_blocks_video_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_hero" ADD CONSTRAINT "_case_studies_v_blocks_case_study_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" ADD CONSTRAINT "_case_studies_v_blocks_case_study_cn_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_case_study_cn"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn" ADD CONSTRAINT "_case_studies_v_blocks_case_study_cn_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn" ADD CONSTRAINT "_case_studies_v_blocks_case_study_cn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_experience_section" ADD CONSTRAINT "_case_studies_v_blocks_experience_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_help_you_section" ADD CONSTRAINT "_case_studies_v_blocks_help_you_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_help_you_section" ADD CONSTRAINT "_case_studies_v_blocks_help_you_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_why_wcg_section_cards" ADD CONSTRAINT "_case_studies_v_blocks_why_wcg_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_why_wcg_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_why_wcg_section" ADD CONSTRAINT "_case_studies_v_blocks_why_wcg_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_faq_section_faqs" ADD CONSTRAINT "_case_studies_v_blocks_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_faq_section" ADD CONSTRAINT "_case_studies_v_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_more_cards" ADD CONSTRAINT "_case_studies_v_blocks_services_more_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_more_cards" ADD CONSTRAINT "_case_studies_v_blocks_services_more_cards_bg_image_id_media_id_fk" FOREIGN KEY ("bg_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_more_cards" ADD CONSTRAINT "_case_studies_v_blocks_services_more_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_more"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_more" ADD CONSTRAINT "_case_studies_v_blocks_services_more_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview_description" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview_left_column_services" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_left_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview_right_column_services" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_right_column_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_services_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_blocks_services_overview" ADD CONSTRAINT "_case_studies_v_blocks_services_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_mega_menu_sections_items" ADD CONSTRAINT "header_nav_items_mega_menu_sections_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_mega_menu_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_mega_menu_sections" ADD CONSTRAINT "header_nav_items_mega_menu_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_service_about_content_paragraphs_order_idx" ON "pages_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_about_content_paragraphs_parent_id_idx" ON "pages_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_about_steps_order_idx" ON "pages_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_about_steps_parent_id_idx" ON "pages_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_about_steps_icon_unhovered_idx" ON "pages_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "pages_blocks_service_about_steps_icon_hovered_idx" ON "pages_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "pages_blocks_service_about_order_idx" ON "pages_blocks_service_about" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_about_parent_id_idx" ON "pages_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_about_path_idx" ON "pages_blocks_service_about" USING btree ("_path");
  CREATE INDEX "pages_blocks_service_about_content_image_content_image_m_idx" ON "pages_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "pages_blocks_featured_blogs_order_idx" ON "pages_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "pages_blocks_featured_blogs_parent_id_idx" ON "pages_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_featured_blogs_path_idx" ON "pages_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "pages_blocks_srv_sctabs_services_order_idx" ON "pages_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_srv_sctabs_services_parent_id_idx" ON "pages_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_srv_sctabs_services_icon_active_idx" ON "pages_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "pages_blocks_srv_sctabs_services_icon_normal_idx" ON "pages_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "pages_blocks_srv_sctabs_services_background_icon_idx" ON "pages_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "pages_blocks_srv_sctabs_order_idx" ON "pages_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_srv_sctabs_parent_id_idx" ON "pages_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_srv_sctabs_icon_idx" ON "pages_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_srv_sctabs_active_icon_idx" ON "pages_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "pages_blocks_srv_order_idx" ON "pages_blocks_srv" USING btree ("_order");
  CREATE INDEX "pages_blocks_srv_parent_id_idx" ON "pages_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_srv_path_idx" ON "pages_blocks_srv" USING btree ("_path");
  CREATE INDEX "pages_blocks_srv_empty_state_empty_state_icon_idx" ON "pages_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "pages_blocks_career_tabs_tabs_content_order_idx" ON "pages_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_career_tabs_tabs_content_parent_id_idx" ON "pages_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career_tabs_tabs_order_idx" ON "pages_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_career_tabs_tabs_parent_id_idx" ON "pages_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career_tabs_order_idx" ON "pages_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_career_tabs_parent_id_idx" ON "pages_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career_tabs_path_idx" ON "pages_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_co_content_content_order_idx" ON "pages_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_co_content_content_parent_id_idx" ON "pages_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_co_content_order_idx" ON "pages_blocks_co_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_co_content_parent_id_idx" ON "pages_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_co_content_path_idx" ON "pages_blocks_co_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_co_content_featured_media_featured_media_me_idx" ON "pages_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "pages_blocks_image_text_section_order_idx" ON "pages_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_section_parent_id_idx" ON "pages_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_section_path_idx" ON "pages_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_section_image_image_media_idx" ON "pages_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "pages_blocks_job_listings_jobs_order_idx" ON "pages_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "pages_blocks_job_listings_jobs_parent_id_idx" ON "pages_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_job_listings_order_idx" ON "pages_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "pages_blocks_job_listings_parent_id_idx" ON "pages_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_job_listings_path_idx" ON "pages_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "pages_blocks_info_order_idx" ON "pages_blocks_info" USING btree ("_order");
  CREATE INDEX "pages_blocks_info_parent_id_idx" ON "pages_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_info_path_idx" ON "pages_blocks_info" USING btree ("_path");
  CREATE INDEX "pages_blocks_info_image_idx" ON "pages_blocks_info" USING btree ("image_id");
  CREATE INDEX "pages_blocks_co_hero_order_idx" ON "pages_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_co_hero_parent_id_idx" ON "pages_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_co_hero_path_idx" ON "pages_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_co_hero_featured_image_featured_image_media_idx" ON "pages_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "pages_blocks_it_experts_order_idx" ON "pages_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "pages_blocks_it_experts_parent_id_idx" ON "pages_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_it_experts_path_idx" ON "pages_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "pages_blocks_it_experts_image_image_media_idx" ON "pages_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "pages_blocks_mission_vision_tabs_order_idx" ON "pages_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_mission_vision_tabs_parent_id_idx" ON "pages_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_mission_vision_tabs_icon_idx" ON "pages_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_mission_vision_tabs_active_icon_idx" ON "pages_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "pages_blocks_mission_vision_order_idx" ON "pages_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "pages_blocks_mission_vision_parent_id_idx" ON "pages_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_mission_vision_path_idx" ON "pages_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "pages_blocks_leadership_points_points_order_idx" ON "pages_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_leadership_points_points_parent_id_idx" ON "pages_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_leadership_points_order_idx" ON "pages_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_leadership_points_parent_id_idx" ON "pages_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_leadership_points_path_idx" ON "pages_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_testimonials_order_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_testimonials_parent_id_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_testimonials_avatar_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_resources_industries_order_idx" ON "pages_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "pages_blocks_resources_industries_parent_idx" ON "pages_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_resources_order_idx" ON "pages_blocks_resources" USING btree ("_order");
  CREATE INDEX "pages_blocks_resources_parent_id_idx" ON "pages_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_resources_path_idx" ON "pages_blocks_resources" USING btree ("_path");
  CREATE INDEX "pages_blocks_info_tabs_info_sheets_order_idx" ON "pages_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "pages_blocks_info_tabs_info_sheets_parent_id_idx" ON "pages_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_info_tabs_info_sheets_display_image_idx" ON "pages_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "pages_blocks_info_tabs_info_sheets_pdf_file_idx" ON "pages_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "pages_blocks_info_tabs_order_idx" ON "pages_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_info_tabs_parent_id_idx" ON "pages_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_info_tabs_path_idx" ON "pages_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_extra_info_problems_order_idx" ON "pages_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "pages_blocks_extra_info_problems_parent_id_idx" ON "pages_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_extra_info_problems_icon_idx" ON "pages_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_extra_info_order_idx" ON "pages_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "pages_blocks_extra_info_parent_id_idx" ON "pages_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_extra_info_path_idx" ON "pages_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "pages_blocks_ebooks_e_books_order_idx" ON "pages_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "pages_blocks_ebooks_e_books_parent_id_idx" ON "pages_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ebooks_e_books_display_image_idx" ON "pages_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "pages_blocks_ebooks_e_books_pdf_file_idx" ON "pages_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "pages_blocks_ebooks_order_idx" ON "pages_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "pages_blocks_ebooks_parent_id_idx" ON "pages_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ebooks_path_idx" ON "pages_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_tabs_tabs_videos_order_idx" ON "pages_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_tabs_tabs_videos_parent_id_idx" ON "pages_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "pages_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "pages_blocks_video_tabs_tabs_order_idx" ON "pages_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_tabs_tabs_parent_id_idx" ON "pages_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_tabs_order_idx" ON "pages_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_tabs_parent_id_idx" ON "pages_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_tabs_path_idx" ON "pages_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_case_study_hero_order_idx" ON "pages_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_study_hero_parent_id_idx" ON "pages_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_study_hero_path_idx" ON "pages_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_case_study_cn_content_order_idx" ON "pages_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_study_cn_content_parent_id_idx" ON "pages_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_study_cn_order_idx" ON "pages_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_study_cn_parent_id_idx" ON "pages_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_study_cn_path_idx" ON "pages_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "pages_blocks_case_study_cn_main_image_idx" ON "pages_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "pages_blocks_experience_section_order_idx" ON "pages_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_experience_section_parent_id_idx" ON "pages_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_experience_section_path_idx" ON "pages_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_help_you_section_order_idx" ON "pages_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_help_you_section_parent_id_idx" ON "pages_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_help_you_section_path_idx" ON "pages_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_help_you_section_image_idx" ON "pages_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "pages_blocks_why_wcg_section_cards_order_idx" ON "pages_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_wcg_section_cards_parent_id_idx" ON "pages_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_wcg_section_order_idx" ON "pages_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_wcg_section_parent_id_idx" ON "pages_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_wcg_section_path_idx" ON "pages_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_section_faqs_order_idx" ON "pages_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_section_faqs_parent_id_idx" ON "pages_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_section_order_idx" ON "pages_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_section_parent_id_idx" ON "pages_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_section_path_idx" ON "pages_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_more_cards_order_idx" ON "pages_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_more_cards_parent_id_idx" ON "pages_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_more_cards_icon_idx" ON "pages_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_services_more_cards_bg_image_idx" ON "pages_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "pages_blocks_services_more_order_idx" ON "pages_blocks_services_more" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_more_parent_id_idx" ON "pages_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_more_path_idx" ON "pages_blocks_services_more" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_overview_description_order_idx" ON "pages_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_overview_description_parent_id_idx" ON "pages_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_overview_left_column_services_order_idx" ON "pages_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_overview_left_column_services_parent_id_idx" ON "pages_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_overview_right_column_services_order_idx" ON "pages_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_overview_right_column_services_parent_id_idx" ON "pages_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_overview_order_idx" ON "pages_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_overview_parent_id_idx" ON "pages_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_overview_path_idx" ON "pages_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_about_content_paragraphs_order_idx" ON "_pages_v_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_about_content_paragraphs_parent_id_idx" ON "_pages_v_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_about_steps_order_idx" ON "_pages_v_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_about_steps_parent_id_idx" ON "_pages_v_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_about_steps_icon_unhovered_idx" ON "_pages_v_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "_pages_v_blocks_service_about_steps_icon_hovered_idx" ON "_pages_v_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "_pages_v_blocks_service_about_order_idx" ON "_pages_v_blocks_service_about" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_about_parent_id_idx" ON "_pages_v_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_about_path_idx" ON "_pages_v_blocks_service_about" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_about_content_image_content_imag_idx" ON "_pages_v_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "_pages_v_blocks_featured_blogs_order_idx" ON "_pages_v_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_featured_blogs_parent_id_idx" ON "_pages_v_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_featured_blogs_path_idx" ON "_pages_v_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_services_order_idx" ON "_pages_v_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_services_parent_id_idx" ON "_pages_v_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_services_icon_active_idx" ON "_pages_v_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_services_icon_normal_idx" ON "_pages_v_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_services_background_icon_idx" ON "_pages_v_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_order_idx" ON "_pages_v_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_parent_id_idx" ON "_pages_v_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_icon_idx" ON "_pages_v_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_srv_sctabs_active_icon_idx" ON "_pages_v_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "_pages_v_blocks_srv_order_idx" ON "_pages_v_blocks_srv" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_srv_parent_id_idx" ON "_pages_v_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_srv_path_idx" ON "_pages_v_blocks_srv" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_srv_empty_state_empty_state_icon_idx" ON "_pages_v_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "_pages_v_blocks_career_tabs_tabs_content_order_idx" ON "_pages_v_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career_tabs_tabs_content_parent_id_idx" ON "_pages_v_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career_tabs_tabs_order_idx" ON "_pages_v_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career_tabs_tabs_parent_id_idx" ON "_pages_v_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career_tabs_order_idx" ON "_pages_v_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career_tabs_parent_id_idx" ON "_pages_v_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career_tabs_path_idx" ON "_pages_v_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_co_content_content_order_idx" ON "_pages_v_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_co_content_content_parent_id_idx" ON "_pages_v_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_co_content_order_idx" ON "_pages_v_blocks_co_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_co_content_parent_id_idx" ON "_pages_v_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_co_content_path_idx" ON "_pages_v_blocks_co_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_co_content_featured_media_featured_media_idx" ON "_pages_v_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "_pages_v_blocks_image_text_section_order_idx" ON "_pages_v_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_section_parent_id_idx" ON "_pages_v_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_section_path_idx" ON "_pages_v_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_section_image_image_media_idx" ON "_pages_v_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "_pages_v_blocks_job_listings_jobs_order_idx" ON "_pages_v_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_job_listings_jobs_parent_id_idx" ON "_pages_v_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_job_listings_order_idx" ON "_pages_v_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_job_listings_parent_id_idx" ON "_pages_v_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_job_listings_path_idx" ON "_pages_v_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_info_order_idx" ON "_pages_v_blocks_info" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_info_parent_id_idx" ON "_pages_v_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_info_path_idx" ON "_pages_v_blocks_info" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_info_image_idx" ON "_pages_v_blocks_info" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_co_hero_order_idx" ON "_pages_v_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_co_hero_parent_id_idx" ON "_pages_v_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_co_hero_path_idx" ON "_pages_v_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_co_hero_featured_image_featured_image_me_idx" ON "_pages_v_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "_pages_v_blocks_it_experts_order_idx" ON "_pages_v_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_it_experts_parent_id_idx" ON "_pages_v_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_it_experts_path_idx" ON "_pages_v_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_it_experts_image_image_media_idx" ON "_pages_v_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "_pages_v_blocks_mission_vision_tabs_order_idx" ON "_pages_v_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_mission_vision_tabs_parent_id_idx" ON "_pages_v_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_mission_vision_tabs_icon_idx" ON "_pages_v_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_mission_vision_tabs_active_icon_idx" ON "_pages_v_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "_pages_v_blocks_mission_vision_order_idx" ON "_pages_v_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_mission_vision_parent_id_idx" ON "_pages_v_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_mission_vision_path_idx" ON "_pages_v_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_leadership_points_points_order_idx" ON "_pages_v_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_leadership_points_points_parent_id_idx" ON "_pages_v_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_leadership_points_order_idx" ON "_pages_v_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_leadership_points_parent_id_idx" ON "_pages_v_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_leadership_points_path_idx" ON "_pages_v_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_order_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_avatar_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_resources_industries_order_idx" ON "_pages_v_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_resources_industries_parent_idx" ON "_pages_v_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_resources_order_idx" ON "_pages_v_blocks_resources" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_resources_parent_id_idx" ON "_pages_v_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_resources_path_idx" ON "_pages_v_blocks_resources" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_info_tabs_info_sheets_order_idx" ON "_pages_v_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_info_tabs_info_sheets_parent_id_idx" ON "_pages_v_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_info_tabs_info_sheets_display_image_idx" ON "_pages_v_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "_pages_v_blocks_info_tabs_info_sheets_pdf_file_idx" ON "_pages_v_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "_pages_v_blocks_info_tabs_order_idx" ON "_pages_v_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_info_tabs_parent_id_idx" ON "_pages_v_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_info_tabs_path_idx" ON "_pages_v_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_extra_info_problems_order_idx" ON "_pages_v_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_extra_info_problems_parent_id_idx" ON "_pages_v_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_extra_info_problems_icon_idx" ON "_pages_v_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_extra_info_order_idx" ON "_pages_v_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_extra_info_parent_id_idx" ON "_pages_v_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_extra_info_path_idx" ON "_pages_v_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_ebooks_e_books_order_idx" ON "_pages_v_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_ebooks_e_books_parent_id_idx" ON "_pages_v_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_ebooks_e_books_display_image_idx" ON "_pages_v_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "_pages_v_blocks_ebooks_e_books_pdf_file_idx" ON "_pages_v_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "_pages_v_blocks_ebooks_order_idx" ON "_pages_v_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_ebooks_parent_id_idx" ON "_pages_v_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_ebooks_path_idx" ON "_pages_v_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_tabs_tabs_videos_order_idx" ON "_pages_v_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_tabs_tabs_videos_parent_id_idx" ON "_pages_v_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "_pages_v_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "_pages_v_blocks_video_tabs_tabs_order_idx" ON "_pages_v_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_tabs_tabs_parent_id_idx" ON "_pages_v_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_tabs_order_idx" ON "_pages_v_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_tabs_parent_id_idx" ON "_pages_v_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_tabs_path_idx" ON "_pages_v_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_case_study_hero_order_idx" ON "_pages_v_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_case_study_hero_parent_id_idx" ON "_pages_v_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_case_study_hero_path_idx" ON "_pages_v_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_case_study_cn_content_order_idx" ON "_pages_v_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_case_study_cn_content_parent_id_idx" ON "_pages_v_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_case_study_cn_order_idx" ON "_pages_v_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_case_study_cn_parent_id_idx" ON "_pages_v_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_case_study_cn_path_idx" ON "_pages_v_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_case_study_cn_main_image_idx" ON "_pages_v_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "_pages_v_blocks_experience_section_order_idx" ON "_pages_v_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_experience_section_parent_id_idx" ON "_pages_v_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_experience_section_path_idx" ON "_pages_v_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_help_you_section_order_idx" ON "_pages_v_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_help_you_section_parent_id_idx" ON "_pages_v_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_help_you_section_path_idx" ON "_pages_v_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_help_you_section_image_idx" ON "_pages_v_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_why_wcg_section_cards_order_idx" ON "_pages_v_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_wcg_section_cards_parent_id_idx" ON "_pages_v_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_wcg_section_order_idx" ON "_pages_v_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_wcg_section_parent_id_idx" ON "_pages_v_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_wcg_section_path_idx" ON "_pages_v_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_section_faqs_order_idx" ON "_pages_v_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_section_faqs_parent_id_idx" ON "_pages_v_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_section_order_idx" ON "_pages_v_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_section_parent_id_idx" ON "_pages_v_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_section_path_idx" ON "_pages_v_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_services_more_cards_order_idx" ON "_pages_v_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_more_cards_parent_id_idx" ON "_pages_v_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_more_cards_icon_idx" ON "_pages_v_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_services_more_cards_bg_image_idx" ON "_pages_v_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "_pages_v_blocks_services_more_order_idx" ON "_pages_v_blocks_services_more" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_more_parent_id_idx" ON "_pages_v_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_more_path_idx" ON "_pages_v_blocks_services_more" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_services_overview_description_order_idx" ON "_pages_v_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_overview_description_parent_id_idx" ON "_pages_v_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_overview_left_column_services_order_idx" ON "_pages_v_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_overview_left_column_services_parent_id_idx" ON "_pages_v_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_overview_right_column_services_order_idx" ON "_pages_v_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_overview_right_column_services_parent_id_idx" ON "_pages_v_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_overview_order_idx" ON "_pages_v_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_overview_parent_id_idx" ON "_pages_v_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_overview_path_idx" ON "_pages_v_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "services_blocks_service_about_content_paragraphs_order_idx" ON "services_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_content_paragraphs_parent_id_idx" ON "services_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_steps_order_idx" ON "services_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_steps_parent_id_idx" ON "services_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_steps_icon_unhovered_idx" ON "services_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "services_blocks_service_about_steps_icon_hovered_idx" ON "services_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "services_blocks_service_about_order_idx" ON "services_blocks_service_about" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_parent_id_idx" ON "services_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_path_idx" ON "services_blocks_service_about" USING btree ("_path");
  CREATE INDEX "services_blocks_service_about_content_image_content_imag_idx" ON "services_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "services_blocks_featured_blogs_order_idx" ON "services_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "services_blocks_featured_blogs_parent_id_idx" ON "services_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_featured_blogs_path_idx" ON "services_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "services_blocks_srv_sctabs_services_order_idx" ON "services_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "services_blocks_srv_sctabs_services_parent_id_idx" ON "services_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_srv_sctabs_services_icon_active_idx" ON "services_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "services_blocks_srv_sctabs_services_icon_normal_idx" ON "services_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "services_blocks_srv_sctabs_services_background_icon_idx" ON "services_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "services_blocks_srv_sctabs_order_idx" ON "services_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "services_blocks_srv_sctabs_parent_id_idx" ON "services_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_srv_sctabs_icon_idx" ON "services_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "services_blocks_srv_sctabs_active_icon_idx" ON "services_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "services_blocks_srv_order_idx" ON "services_blocks_srv" USING btree ("_order");
  CREATE INDEX "services_blocks_srv_parent_id_idx" ON "services_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_srv_path_idx" ON "services_blocks_srv" USING btree ("_path");
  CREATE INDEX "services_blocks_srv_empty_state_empty_state_icon_idx" ON "services_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "services_blocks_career_tabs_tabs_content_order_idx" ON "services_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "services_blocks_career_tabs_tabs_content_parent_id_idx" ON "services_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_career_tabs_tabs_order_idx" ON "services_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_career_tabs_tabs_parent_id_idx" ON "services_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_career_tabs_order_idx" ON "services_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_career_tabs_parent_id_idx" ON "services_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_career_tabs_path_idx" ON "services_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "services_blocks_co_content_content_order_idx" ON "services_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "services_blocks_co_content_content_parent_id_idx" ON "services_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_co_content_order_idx" ON "services_blocks_co_content" USING btree ("_order");
  CREATE INDEX "services_blocks_co_content_parent_id_idx" ON "services_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_co_content_path_idx" ON "services_blocks_co_content" USING btree ("_path");
  CREATE INDEX "services_blocks_co_content_featured_media_featured_media_idx" ON "services_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "services_blocks_image_text_section_order_idx" ON "services_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "services_blocks_image_text_section_parent_id_idx" ON "services_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_image_text_section_path_idx" ON "services_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "services_blocks_image_text_section_image_image_media_idx" ON "services_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "services_blocks_job_listings_jobs_order_idx" ON "services_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "services_blocks_job_listings_jobs_parent_id_idx" ON "services_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_job_listings_order_idx" ON "services_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "services_blocks_job_listings_parent_id_idx" ON "services_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_job_listings_path_idx" ON "services_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "services_blocks_info_order_idx" ON "services_blocks_info" USING btree ("_order");
  CREATE INDEX "services_blocks_info_parent_id_idx" ON "services_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_info_path_idx" ON "services_blocks_info" USING btree ("_path");
  CREATE INDEX "services_blocks_info_image_idx" ON "services_blocks_info" USING btree ("image_id");
  CREATE INDEX "services_blocks_co_hero_order_idx" ON "services_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "services_blocks_co_hero_parent_id_idx" ON "services_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_co_hero_path_idx" ON "services_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "services_blocks_co_hero_featured_image_featured_image_me_idx" ON "services_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "services_blocks_it_experts_order_idx" ON "services_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "services_blocks_it_experts_parent_id_idx" ON "services_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_it_experts_path_idx" ON "services_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "services_blocks_it_experts_image_image_media_idx" ON "services_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "services_blocks_mission_vision_tabs_order_idx" ON "services_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_mission_vision_tabs_parent_id_idx" ON "services_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_mission_vision_tabs_icon_idx" ON "services_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "services_blocks_mission_vision_tabs_active_icon_idx" ON "services_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "services_blocks_mission_vision_order_idx" ON "services_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "services_blocks_mission_vision_parent_id_idx" ON "services_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_mission_vision_path_idx" ON "services_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "services_blocks_leadership_points_points_order_idx" ON "services_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "services_blocks_leadership_points_points_parent_id_idx" ON "services_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_leadership_points_order_idx" ON "services_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "services_blocks_leadership_points_parent_id_idx" ON "services_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_leadership_points_path_idx" ON "services_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "services_blocks_testimonials_testimonials_order_idx" ON "services_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "services_blocks_testimonials_testimonials_parent_id_idx" ON "services_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_testimonials_testimonials_avatar_idx" ON "services_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "services_blocks_testimonials_order_idx" ON "services_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "services_blocks_testimonials_parent_id_idx" ON "services_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_testimonials_path_idx" ON "services_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "services_blocks_resources_industries_order_idx" ON "services_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "services_blocks_resources_industries_parent_idx" ON "services_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "services_blocks_resources_order_idx" ON "services_blocks_resources" USING btree ("_order");
  CREATE INDEX "services_blocks_resources_parent_id_idx" ON "services_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_resources_path_idx" ON "services_blocks_resources" USING btree ("_path");
  CREATE INDEX "services_blocks_info_tabs_info_sheets_order_idx" ON "services_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "services_blocks_info_tabs_info_sheets_parent_id_idx" ON "services_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_info_tabs_info_sheets_display_image_idx" ON "services_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "services_blocks_info_tabs_info_sheets_pdf_file_idx" ON "services_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "services_blocks_info_tabs_order_idx" ON "services_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_info_tabs_parent_id_idx" ON "services_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_info_tabs_path_idx" ON "services_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "services_blocks_extra_info_problems_order_idx" ON "services_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "services_blocks_extra_info_problems_parent_id_idx" ON "services_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_extra_info_problems_icon_idx" ON "services_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "services_blocks_extra_info_order_idx" ON "services_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "services_blocks_extra_info_parent_id_idx" ON "services_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_extra_info_path_idx" ON "services_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "services_blocks_ebooks_e_books_order_idx" ON "services_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "services_blocks_ebooks_e_books_parent_id_idx" ON "services_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_ebooks_e_books_display_image_idx" ON "services_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "services_blocks_ebooks_e_books_pdf_file_idx" ON "services_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "services_blocks_ebooks_order_idx" ON "services_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "services_blocks_ebooks_parent_id_idx" ON "services_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_ebooks_path_idx" ON "services_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "services_blocks_video_tabs_tabs_videos_order_idx" ON "services_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "services_blocks_video_tabs_tabs_videos_parent_id_idx" ON "services_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "services_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "services_blocks_video_tabs_tabs_order_idx" ON "services_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_video_tabs_tabs_parent_id_idx" ON "services_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_video_tabs_order_idx" ON "services_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_video_tabs_parent_id_idx" ON "services_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_video_tabs_path_idx" ON "services_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "services_blocks_case_study_hero_order_idx" ON "services_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "services_blocks_case_study_hero_parent_id_idx" ON "services_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_case_study_hero_path_idx" ON "services_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "services_blocks_case_study_cn_content_order_idx" ON "services_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "services_blocks_case_study_cn_content_parent_id_idx" ON "services_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_case_study_cn_order_idx" ON "services_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "services_blocks_case_study_cn_parent_id_idx" ON "services_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_case_study_cn_path_idx" ON "services_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "services_blocks_case_study_cn_main_image_idx" ON "services_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "services_blocks_experience_section_order_idx" ON "services_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "services_blocks_experience_section_parent_id_idx" ON "services_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_experience_section_path_idx" ON "services_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "services_blocks_help_you_section_order_idx" ON "services_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "services_blocks_help_you_section_parent_id_idx" ON "services_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_help_you_section_path_idx" ON "services_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "services_blocks_help_you_section_image_idx" ON "services_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "services_blocks_why_wcg_section_cards_order_idx" ON "services_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "services_blocks_why_wcg_section_cards_parent_id_idx" ON "services_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_why_wcg_section_order_idx" ON "services_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "services_blocks_why_wcg_section_parent_id_idx" ON "services_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_why_wcg_section_path_idx" ON "services_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "services_blocks_faq_section_faqs_order_idx" ON "services_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "services_blocks_faq_section_faqs_parent_id_idx" ON "services_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_faq_section_order_idx" ON "services_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "services_blocks_faq_section_parent_id_idx" ON "services_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_faq_section_path_idx" ON "services_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "services_blocks_services_more_cards_order_idx" ON "services_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "services_blocks_services_more_cards_parent_id_idx" ON "services_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_more_cards_icon_idx" ON "services_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "services_blocks_services_more_cards_bg_image_idx" ON "services_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "services_blocks_services_more_order_idx" ON "services_blocks_services_more" USING btree ("_order");
  CREATE INDEX "services_blocks_services_more_parent_id_idx" ON "services_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_more_path_idx" ON "services_blocks_services_more" USING btree ("_path");
  CREATE INDEX "services_blocks_services_overview_description_order_idx" ON "services_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "services_blocks_services_overview_description_parent_id_idx" ON "services_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_overview_left_column_services_order_idx" ON "services_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "services_blocks_services_overview_left_column_services_parent_id_idx" ON "services_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_overview_right_column_services_order_idx" ON "services_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "services_blocks_services_overview_right_column_services_parent_id_idx" ON "services_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_overview_order_idx" ON "services_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "services_blocks_services_overview_parent_id_idx" ON "services_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_overview_path_idx" ON "services_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "services_blocks_help_you_v2_help_you_list_order_idx" ON "services_blocks_help_you_v2_help_you_list" USING btree ("_order");
  CREATE INDEX "services_blocks_help_you_v2_help_you_list_parent_id_idx" ON "services_blocks_help_you_v2_help_you_list" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_help_you_v2_order_idx" ON "services_blocks_help_you_v2" USING btree ("_order");
  CREATE INDEX "services_blocks_help_you_v2_parent_id_idx" ON "services_blocks_help_you_v2" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_help_you_v2_path_idx" ON "services_blocks_help_you_v2" USING btree ("_path");
  CREATE INDEX "services_blocks_help_you_v2_bottom_card_bottom_card_bott_idx" ON "services_blocks_help_you_v2" USING btree ("bottom_card_bottom_card_image_id");
  CREATE INDEX "services_blocks_service_about_2_content_paragraphs_order_idx" ON "services_blocks_service_about_2_content_paragraphs" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_2_content_paragraphs_parent_id_idx" ON "services_blocks_service_about_2_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_2_content_list_order_idx" ON "services_blocks_service_about_2_content_list" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_2_content_list_parent_id_idx" ON "services_blocks_service_about_2_content_list" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_2_content_list_icon_idx" ON "services_blocks_service_about_2_content_list" USING btree ("icon_id");
  CREATE INDEX "services_blocks_service_about_2_order_idx" ON "services_blocks_service_about_2" USING btree ("_order");
  CREATE INDEX "services_blocks_service_about_2_parent_id_idx" ON "services_blocks_service_about_2" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_service_about_2_path_idx" ON "services_blocks_service_about_2" USING btree ("_path");
  CREATE INDEX "services_blocks_service_about_2_content_image_content_im_idx" ON "services_blocks_service_about_2" USING btree ("content_image_media_id");
  CREATE INDEX "services_blocks_help_you_video_order_idx" ON "services_blocks_help_you_video" USING btree ("_order");
  CREATE INDEX "services_blocks_help_you_video_parent_id_idx" ON "services_blocks_help_you_video" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_help_you_video_path_idx" ON "services_blocks_help_you_video" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_service_about_content_paragraphs_order_idx" ON "_services_v_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_content_paragraphs_parent_id_idx" ON "_services_v_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_steps_order_idx" ON "_services_v_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_steps_parent_id_idx" ON "_services_v_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_steps_icon_unhovered_idx" ON "_services_v_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "_services_v_blocks_service_about_steps_icon_hovered_idx" ON "_services_v_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "_services_v_blocks_service_about_order_idx" ON "_services_v_blocks_service_about" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_parent_id_idx" ON "_services_v_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_path_idx" ON "_services_v_blocks_service_about" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_service_about_content_image_content_i_idx" ON "_services_v_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "_services_v_blocks_featured_blogs_order_idx" ON "_services_v_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_featured_blogs_parent_id_idx" ON "_services_v_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_featured_blogs_path_idx" ON "_services_v_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_srv_sctabs_services_order_idx" ON "_services_v_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_srv_sctabs_services_parent_id_idx" ON "_services_v_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_services_icon_active_idx" ON "_services_v_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_services_icon_normal_idx" ON "_services_v_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_services_background_icon_idx" ON "_services_v_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_order_idx" ON "_services_v_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_srv_sctabs_parent_id_idx" ON "_services_v_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_icon_idx" ON "_services_v_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_srv_sctabs_active_icon_idx" ON "_services_v_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "_services_v_blocks_srv_order_idx" ON "_services_v_blocks_srv" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_srv_parent_id_idx" ON "_services_v_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_srv_path_idx" ON "_services_v_blocks_srv" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_srv_empty_state_empty_state_icon_idx" ON "_services_v_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "_services_v_blocks_career_tabs_tabs_content_order_idx" ON "_services_v_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_career_tabs_tabs_content_parent_id_idx" ON "_services_v_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_career_tabs_tabs_order_idx" ON "_services_v_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_career_tabs_tabs_parent_id_idx" ON "_services_v_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_career_tabs_order_idx" ON "_services_v_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_career_tabs_parent_id_idx" ON "_services_v_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_career_tabs_path_idx" ON "_services_v_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_co_content_content_order_idx" ON "_services_v_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_co_content_content_parent_id_idx" ON "_services_v_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_co_content_order_idx" ON "_services_v_blocks_co_content" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_co_content_parent_id_idx" ON "_services_v_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_co_content_path_idx" ON "_services_v_blocks_co_content" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_co_content_featured_media_featured_me_idx" ON "_services_v_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "_services_v_blocks_image_text_section_order_idx" ON "_services_v_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_image_text_section_parent_id_idx" ON "_services_v_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_image_text_section_path_idx" ON "_services_v_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_image_text_section_image_image_media_idx" ON "_services_v_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "_services_v_blocks_job_listings_jobs_order_idx" ON "_services_v_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_job_listings_jobs_parent_id_idx" ON "_services_v_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_job_listings_order_idx" ON "_services_v_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_job_listings_parent_id_idx" ON "_services_v_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_job_listings_path_idx" ON "_services_v_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_info_order_idx" ON "_services_v_blocks_info" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_info_parent_id_idx" ON "_services_v_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_info_path_idx" ON "_services_v_blocks_info" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_info_image_idx" ON "_services_v_blocks_info" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_co_hero_order_idx" ON "_services_v_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_co_hero_parent_id_idx" ON "_services_v_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_co_hero_path_idx" ON "_services_v_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_co_hero_featured_image_featured_image_idx" ON "_services_v_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "_services_v_blocks_it_experts_order_idx" ON "_services_v_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_it_experts_parent_id_idx" ON "_services_v_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_it_experts_path_idx" ON "_services_v_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_it_experts_image_image_media_idx" ON "_services_v_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "_services_v_blocks_mission_vision_tabs_order_idx" ON "_services_v_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_mission_vision_tabs_parent_id_idx" ON "_services_v_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_mission_vision_tabs_icon_idx" ON "_services_v_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_mission_vision_tabs_active_icon_idx" ON "_services_v_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "_services_v_blocks_mission_vision_order_idx" ON "_services_v_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_mission_vision_parent_id_idx" ON "_services_v_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_mission_vision_path_idx" ON "_services_v_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_leadership_points_points_order_idx" ON "_services_v_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_leadership_points_points_parent_id_idx" ON "_services_v_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_leadership_points_order_idx" ON "_services_v_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_leadership_points_parent_id_idx" ON "_services_v_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_leadership_points_path_idx" ON "_services_v_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_testimonials_testimonials_order_idx" ON "_services_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_testimonials_testimonials_parent_id_idx" ON "_services_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_testimonials_testimonials_avatar_idx" ON "_services_v_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "_services_v_blocks_testimonials_order_idx" ON "_services_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_testimonials_parent_id_idx" ON "_services_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_testimonials_path_idx" ON "_services_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_resources_industries_order_idx" ON "_services_v_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "_services_v_blocks_resources_industries_parent_idx" ON "_services_v_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "_services_v_blocks_resources_order_idx" ON "_services_v_blocks_resources" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_resources_parent_id_idx" ON "_services_v_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_resources_path_idx" ON "_services_v_blocks_resources" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_info_tabs_info_sheets_order_idx" ON "_services_v_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_info_tabs_info_sheets_parent_id_idx" ON "_services_v_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_info_tabs_info_sheets_display_image_idx" ON "_services_v_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "_services_v_blocks_info_tabs_info_sheets_pdf_file_idx" ON "_services_v_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "_services_v_blocks_info_tabs_order_idx" ON "_services_v_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_info_tabs_parent_id_idx" ON "_services_v_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_info_tabs_path_idx" ON "_services_v_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_extra_info_problems_order_idx" ON "_services_v_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_extra_info_problems_parent_id_idx" ON "_services_v_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_extra_info_problems_icon_idx" ON "_services_v_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_extra_info_order_idx" ON "_services_v_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_extra_info_parent_id_idx" ON "_services_v_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_extra_info_path_idx" ON "_services_v_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_ebooks_e_books_order_idx" ON "_services_v_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_ebooks_e_books_parent_id_idx" ON "_services_v_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_ebooks_e_books_display_image_idx" ON "_services_v_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "_services_v_blocks_ebooks_e_books_pdf_file_idx" ON "_services_v_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "_services_v_blocks_ebooks_order_idx" ON "_services_v_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_ebooks_parent_id_idx" ON "_services_v_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_ebooks_path_idx" ON "_services_v_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_video_tabs_tabs_videos_order_idx" ON "_services_v_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_video_tabs_tabs_videos_parent_id_idx" ON "_services_v_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "_services_v_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "_services_v_blocks_video_tabs_tabs_order_idx" ON "_services_v_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_video_tabs_tabs_parent_id_idx" ON "_services_v_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_video_tabs_order_idx" ON "_services_v_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_video_tabs_parent_id_idx" ON "_services_v_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_video_tabs_path_idx" ON "_services_v_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_case_study_hero_order_idx" ON "_services_v_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_case_study_hero_parent_id_idx" ON "_services_v_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_case_study_hero_path_idx" ON "_services_v_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_case_study_cn_content_order_idx" ON "_services_v_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_case_study_cn_content_parent_id_idx" ON "_services_v_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_case_study_cn_order_idx" ON "_services_v_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_case_study_cn_parent_id_idx" ON "_services_v_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_case_study_cn_path_idx" ON "_services_v_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_case_study_cn_main_image_idx" ON "_services_v_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "_services_v_blocks_experience_section_order_idx" ON "_services_v_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_experience_section_parent_id_idx" ON "_services_v_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_experience_section_path_idx" ON "_services_v_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_help_you_section_order_idx" ON "_services_v_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_help_you_section_parent_id_idx" ON "_services_v_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_help_you_section_path_idx" ON "_services_v_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_help_you_section_image_idx" ON "_services_v_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_why_wcg_section_cards_order_idx" ON "_services_v_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_why_wcg_section_cards_parent_id_idx" ON "_services_v_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_why_wcg_section_order_idx" ON "_services_v_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_why_wcg_section_parent_id_idx" ON "_services_v_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_why_wcg_section_path_idx" ON "_services_v_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_faq_section_faqs_order_idx" ON "_services_v_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_faq_section_faqs_parent_id_idx" ON "_services_v_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_faq_section_order_idx" ON "_services_v_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_faq_section_parent_id_idx" ON "_services_v_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_faq_section_path_idx" ON "_services_v_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_services_more_cards_order_idx" ON "_services_v_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_more_cards_parent_id_idx" ON "_services_v_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_more_cards_icon_idx" ON "_services_v_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_services_more_cards_bg_image_idx" ON "_services_v_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "_services_v_blocks_services_more_order_idx" ON "_services_v_blocks_services_more" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_more_parent_id_idx" ON "_services_v_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_more_path_idx" ON "_services_v_blocks_services_more" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_services_overview_description_order_idx" ON "_services_v_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_overview_description_parent_id_idx" ON "_services_v_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_overview_left_column_services_order_idx" ON "_services_v_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_overview_left_column_services_parent_id_idx" ON "_services_v_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_overview_right_column_services_order_idx" ON "_services_v_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_overview_right_column_services_parent_id_idx" ON "_services_v_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_overview_order_idx" ON "_services_v_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_overview_parent_id_idx" ON "_services_v_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_overview_path_idx" ON "_services_v_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_help_you_v2_help_you_list_order_idx" ON "_services_v_blocks_help_you_v2_help_you_list" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_help_you_v2_help_you_list_parent_id_idx" ON "_services_v_blocks_help_you_v2_help_you_list" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_help_you_v2_order_idx" ON "_services_v_blocks_help_you_v2" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_help_you_v2_parent_id_idx" ON "_services_v_blocks_help_you_v2" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_help_you_v2_path_idx" ON "_services_v_blocks_help_you_v2" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_help_you_v2_bottom_card_bottom_card_b_idx" ON "_services_v_blocks_help_you_v2" USING btree ("bottom_card_bottom_card_image_id");
  CREATE INDEX "_services_v_blocks_service_about_2_content_paragraphs_order_idx" ON "_services_v_blocks_service_about_2_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_2_content_paragraphs_parent_id_idx" ON "_services_v_blocks_service_about_2_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_2_content_list_order_idx" ON "_services_v_blocks_service_about_2_content_list" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_2_content_list_parent_id_idx" ON "_services_v_blocks_service_about_2_content_list" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_2_content_list_icon_idx" ON "_services_v_blocks_service_about_2_content_list" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_service_about_2_order_idx" ON "_services_v_blocks_service_about_2" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_service_about_2_parent_id_idx" ON "_services_v_blocks_service_about_2" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_service_about_2_path_idx" ON "_services_v_blocks_service_about_2" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_service_about_2_content_image_content_idx" ON "_services_v_blocks_service_about_2" USING btree ("content_image_media_id");
  CREATE INDEX "_services_v_blocks_help_you_video_order_idx" ON "_services_v_blocks_help_you_video" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_help_you_video_parent_id_idx" ON "_services_v_blocks_help_you_video" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_help_you_video_path_idx" ON "_services_v_blocks_help_you_video" USING btree ("_path");
  CREATE INDEX "case_studies_categories_order_idx" ON "case_studies_categories" USING btree ("order");
  CREATE INDEX "case_studies_categories_parent_idx" ON "case_studies_categories" USING btree ("parent_id");
  CREATE INDEX "case_studies_blocks_hero_home_buttons_order_idx" ON "case_studies_blocks_hero_home_buttons" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_hero_home_buttons_parent_id_idx" ON "case_studies_blocks_hero_home_buttons" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_hero_home_order_idx" ON "case_studies_blocks_hero_home" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_hero_home_parent_id_idx" ON "case_studies_blocks_hero_home" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_hero_home_path_idx" ON "case_studies_blocks_hero_home" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_hero_home_certification_badge_certif_idx" ON "case_studies_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "case_studies_blocks_hero_home_images_images_main_image_idx" ON "case_studies_blocks_hero_home" USING btree ("images_main_image_id");
  CREATE INDEX "case_studies_blocks_hero_home_images_images_overlay_imag_idx" ON "case_studies_blocks_hero_home" USING btree ("images_overlay_image_id");
  CREATE INDEX "case_studies_blocks_hero_services_order_idx" ON "case_studies_blocks_hero_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_hero_services_parent_id_idx" ON "case_studies_blocks_hero_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_hero_services_path_idx" ON "case_studies_blocks_hero_services" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_hero_services_images_images_main_ima_idx" ON "case_studies_blocks_hero_services" USING btree ("images_main_image_id");
  CREATE INDEX "case_studies_blocks_hero_services_images_images_overlay__idx" ON "case_studies_blocks_hero_services" USING btree ("images_overlay_icon_id");
  CREATE INDEX "case_studies_blocks_hero_service_order_idx" ON "case_studies_blocks_hero_service" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_hero_service_parent_id_idx" ON "case_studies_blocks_hero_service" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_hero_service_path_idx" ON "case_studies_blocks_hero_service" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_hero_service_images_images_main_imag_idx" ON "case_studies_blocks_hero_service" USING btree ("images_main_image_id");
  CREATE INDEX "case_studies_blocks_hero_service_images_images_overlay_i_idx" ON "case_studies_blocks_hero_service" USING btree ("images_overlay_icon_id");
  CREATE INDEX "case_studies_blocks_service_about_content_paragraphs_order_idx" ON "case_studies_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_service_about_content_paragraphs_parent_id_idx" ON "case_studies_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_service_about_steps_order_idx" ON "case_studies_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_service_about_steps_parent_id_idx" ON "case_studies_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_service_about_steps_icon_unhovered_idx" ON "case_studies_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "case_studies_blocks_service_about_steps_icon_hovered_idx" ON "case_studies_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "case_studies_blocks_service_about_order_idx" ON "case_studies_blocks_service_about" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_service_about_parent_id_idx" ON "case_studies_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_service_about_path_idx" ON "case_studies_blocks_service_about" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_service_about_content_image_content__idx" ON "case_studies_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "case_studies_blocks_cta_links_order_idx" ON "case_studies_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_cta_links_parent_id_idx" ON "case_studies_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_cta_order_idx" ON "case_studies_blocks_cta" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_cta_parent_id_idx" ON "case_studies_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_cta_path_idx" ON "case_studies_blocks_cta" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_content_columns_order_idx" ON "case_studies_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_content_columns_parent_id_idx" ON "case_studies_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_content_order_idx" ON "case_studies_blocks_content" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_content_parent_id_idx" ON "case_studies_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_content_path_idx" ON "case_studies_blocks_content" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_media_block_order_idx" ON "case_studies_blocks_media_block" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_media_block_parent_id_idx" ON "case_studies_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_media_block_path_idx" ON "case_studies_blocks_media_block" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_media_block_media_idx" ON "case_studies_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "case_studies_blocks_archive_order_idx" ON "case_studies_blocks_archive" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_archive_parent_id_idx" ON "case_studies_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_archive_path_idx" ON "case_studies_blocks_archive" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_form_block_order_idx" ON "case_studies_blocks_form_block" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_form_block_parent_id_idx" ON "case_studies_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_form_block_path_idx" ON "case_studies_blocks_form_block" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_form_block_form_idx" ON "case_studies_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "case_studies_blocks_our_services_services_order_idx" ON "case_studies_blocks_our_services_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_our_services_services_parent_id_idx" ON "case_studies_blocks_our_services_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_our_services_services_icon_hovered_idx" ON "case_studies_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "case_studies_blocks_our_services_services_icon_normal_idx" ON "case_studies_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "case_studies_blocks_our_services_order_idx" ON "case_studies_blocks_our_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_our_services_parent_id_idx" ON "case_studies_blocks_our_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_our_services_path_idx" ON "case_studies_blocks_our_services" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_industries_industries_order_idx" ON "case_studies_blocks_industries_industries" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_industries_industries_parent_id_idx" ON "case_studies_blocks_industries_industries" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_industries_buttons_order_idx" ON "case_studies_blocks_industries_buttons" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_industries_buttons_parent_id_idx" ON "case_studies_blocks_industries_buttons" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_industries_order_idx" ON "case_studies_blocks_industries" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_industries_parent_id_idx" ON "case_studies_blocks_industries" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_industries_path_idx" ON "case_studies_blocks_industries" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_industries_main_image_idx" ON "case_studies_blocks_industries" USING btree ("main_image_id");
  CREATE INDEX "case_studies_blocks_industries_icons_icons_check_icon_idx" ON "case_studies_blocks_industries" USING btree ("icons_check_icon_id");
  CREATE INDEX "case_studies_blocks_industries_icons_icons_arrow_icon_idx" ON "case_studies_blocks_industries" USING btree ("icons_arrow_icon_id");
  CREATE INDEX "case_studies_blocks_portfolio_statistics_order_idx" ON "case_studies_blocks_portfolio_statistics" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_portfolio_statistics_parent_id_idx" ON "case_studies_blocks_portfolio_statistics" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_portfolio_client_logos_order_idx" ON "case_studies_blocks_portfolio_client_logos" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_portfolio_client_logos_parent_id_idx" ON "case_studies_blocks_portfolio_client_logos" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_portfolio_client_logos_logo_idx" ON "case_studies_blocks_portfolio_client_logos" USING btree ("logo_id");
  CREATE INDEX "case_studies_blocks_portfolio_order_idx" ON "case_studies_blocks_portfolio" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_portfolio_parent_id_idx" ON "case_studies_blocks_portfolio" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_portfolio_path_idx" ON "case_studies_blocks_portfolio" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_case_studies_case_studies_order_idx" ON "case_studies_blocks_case_studies_case_studies" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_case_studies_case_studies_parent_id_idx" ON "case_studies_blocks_case_studies_case_studies" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_case_studies_case_studies_image_idx" ON "case_studies_blocks_case_studies_case_studies" USING btree ("image_id");
  CREATE INDEX "case_studies_blocks_case_studies_case_studies_internal_p_idx" ON "case_studies_blocks_case_studies_case_studies" USING btree ("internal_page_id");
  CREATE INDEX "case_studies_blocks_case_studies_order_idx" ON "case_studies_blocks_case_studies" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_case_studies_parent_id_idx" ON "case_studies_blocks_case_studies" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_case_studies_path_idx" ON "case_studies_blocks_case_studies" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_featured_blogs_order_idx" ON "case_studies_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_featured_blogs_parent_id_idx" ON "case_studies_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_featured_blogs_path_idx" ON "case_studies_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_srv_sctabs_services_order_idx" ON "case_studies_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_srv_sctabs_services_parent_id_idx" ON "case_studies_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_services_icon_active_idx" ON "case_studies_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_services_icon_normal_idx" ON "case_studies_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_services_background_icon_idx" ON "case_studies_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_order_idx" ON "case_studies_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_srv_sctabs_parent_id_idx" ON "case_studies_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_icon_idx" ON "case_studies_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "case_studies_blocks_srv_sctabs_active_icon_idx" ON "case_studies_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "case_studies_blocks_srv_order_idx" ON "case_studies_blocks_srv" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_srv_parent_id_idx" ON "case_studies_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_srv_path_idx" ON "case_studies_blocks_srv" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_srv_empty_state_empty_state_icon_idx" ON "case_studies_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "case_studies_blocks_contact_form_order_idx" ON "case_studies_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_contact_form_parent_id_idx" ON "case_studies_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_contact_form_path_idx" ON "case_studies_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_career_tabs_tabs_content_order_idx" ON "case_studies_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_career_tabs_tabs_content_parent_id_idx" ON "case_studies_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_career_tabs_tabs_order_idx" ON "case_studies_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_career_tabs_tabs_parent_id_idx" ON "case_studies_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_career_tabs_order_idx" ON "case_studies_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_career_tabs_parent_id_idx" ON "case_studies_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_career_tabs_path_idx" ON "case_studies_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_co_content_content_order_idx" ON "case_studies_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_co_content_content_parent_id_idx" ON "case_studies_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_co_content_order_idx" ON "case_studies_blocks_co_content" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_co_content_parent_id_idx" ON "case_studies_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_co_content_path_idx" ON "case_studies_blocks_co_content" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_co_content_featured_media_featured_m_idx" ON "case_studies_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "case_studies_blocks_image_text_section_order_idx" ON "case_studies_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_image_text_section_parent_id_idx" ON "case_studies_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_image_text_section_path_idx" ON "case_studies_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_image_text_section_image_image_media_idx" ON "case_studies_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "case_studies_blocks_job_listings_jobs_order_idx" ON "case_studies_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_job_listings_jobs_parent_id_idx" ON "case_studies_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_job_listings_order_idx" ON "case_studies_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_job_listings_parent_id_idx" ON "case_studies_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_job_listings_path_idx" ON "case_studies_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_info_order_idx" ON "case_studies_blocks_info" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_info_parent_id_idx" ON "case_studies_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_info_path_idx" ON "case_studies_blocks_info" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_info_image_idx" ON "case_studies_blocks_info" USING btree ("image_id");
  CREATE INDEX "case_studies_blocks_co_hero_order_idx" ON "case_studies_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_co_hero_parent_id_idx" ON "case_studies_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_co_hero_path_idx" ON "case_studies_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_co_hero_featured_image_featured_imag_idx" ON "case_studies_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "case_studies_blocks_it_experts_order_idx" ON "case_studies_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_it_experts_parent_id_idx" ON "case_studies_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_it_experts_path_idx" ON "case_studies_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_it_experts_image_image_media_idx" ON "case_studies_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "case_studies_blocks_mission_vision_tabs_order_idx" ON "case_studies_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_mission_vision_tabs_parent_id_idx" ON "case_studies_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_mission_vision_tabs_icon_idx" ON "case_studies_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "case_studies_blocks_mission_vision_tabs_active_icon_idx" ON "case_studies_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "case_studies_blocks_mission_vision_order_idx" ON "case_studies_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_mission_vision_parent_id_idx" ON "case_studies_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_mission_vision_path_idx" ON "case_studies_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_leadership_points_points_order_idx" ON "case_studies_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_leadership_points_points_parent_id_idx" ON "case_studies_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_leadership_points_order_idx" ON "case_studies_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_leadership_points_parent_id_idx" ON "case_studies_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_leadership_points_path_idx" ON "case_studies_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_testimonials_testimonials_order_idx" ON "case_studies_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_testimonials_testimonials_parent_id_idx" ON "case_studies_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_testimonials_testimonials_avatar_idx" ON "case_studies_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "case_studies_blocks_testimonials_order_idx" ON "case_studies_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_testimonials_parent_id_idx" ON "case_studies_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_testimonials_path_idx" ON "case_studies_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_resources_industries_order_idx" ON "case_studies_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "case_studies_blocks_resources_industries_parent_idx" ON "case_studies_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "case_studies_blocks_resources_order_idx" ON "case_studies_blocks_resources" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_resources_parent_id_idx" ON "case_studies_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_resources_path_idx" ON "case_studies_blocks_resources" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_info_tabs_info_sheets_order_idx" ON "case_studies_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_info_tabs_info_sheets_parent_id_idx" ON "case_studies_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_info_tabs_info_sheets_display_image_idx" ON "case_studies_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "case_studies_blocks_info_tabs_info_sheets_pdf_file_idx" ON "case_studies_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "case_studies_blocks_info_tabs_order_idx" ON "case_studies_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_info_tabs_parent_id_idx" ON "case_studies_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_info_tabs_path_idx" ON "case_studies_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_extra_info_problems_order_idx" ON "case_studies_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_extra_info_problems_parent_id_idx" ON "case_studies_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_extra_info_problems_icon_idx" ON "case_studies_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "case_studies_blocks_extra_info_order_idx" ON "case_studies_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_extra_info_parent_id_idx" ON "case_studies_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_extra_info_path_idx" ON "case_studies_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_ebooks_e_books_order_idx" ON "case_studies_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_ebooks_e_books_parent_id_idx" ON "case_studies_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_ebooks_e_books_display_image_idx" ON "case_studies_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "case_studies_blocks_ebooks_e_books_pdf_file_idx" ON "case_studies_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "case_studies_blocks_ebooks_order_idx" ON "case_studies_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_ebooks_parent_id_idx" ON "case_studies_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_ebooks_path_idx" ON "case_studies_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_video_tabs_tabs_videos_order_idx" ON "case_studies_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_video_tabs_tabs_videos_parent_id_idx" ON "case_studies_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "case_studies_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "case_studies_blocks_video_tabs_tabs_order_idx" ON "case_studies_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_video_tabs_tabs_parent_id_idx" ON "case_studies_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_video_tabs_order_idx" ON "case_studies_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_video_tabs_parent_id_idx" ON "case_studies_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_video_tabs_path_idx" ON "case_studies_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_case_study_hero_order_idx" ON "case_studies_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_case_study_hero_parent_id_idx" ON "case_studies_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_case_study_hero_path_idx" ON "case_studies_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_case_study_cn_content_order_idx" ON "case_studies_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_case_study_cn_content_parent_id_idx" ON "case_studies_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_case_study_cn_order_idx" ON "case_studies_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_case_study_cn_parent_id_idx" ON "case_studies_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_case_study_cn_path_idx" ON "case_studies_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_case_study_cn_main_image_idx" ON "case_studies_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "case_studies_blocks_experience_section_order_idx" ON "case_studies_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_experience_section_parent_id_idx" ON "case_studies_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_experience_section_path_idx" ON "case_studies_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_help_you_section_order_idx" ON "case_studies_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_help_you_section_parent_id_idx" ON "case_studies_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_help_you_section_path_idx" ON "case_studies_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_help_you_section_image_idx" ON "case_studies_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "case_studies_blocks_why_wcg_section_cards_order_idx" ON "case_studies_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_why_wcg_section_cards_parent_id_idx" ON "case_studies_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_why_wcg_section_order_idx" ON "case_studies_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_why_wcg_section_parent_id_idx" ON "case_studies_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_why_wcg_section_path_idx" ON "case_studies_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_faq_section_faqs_order_idx" ON "case_studies_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_faq_section_faqs_parent_id_idx" ON "case_studies_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_faq_section_order_idx" ON "case_studies_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_faq_section_parent_id_idx" ON "case_studies_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_faq_section_path_idx" ON "case_studies_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_services_more_cards_order_idx" ON "case_studies_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_more_cards_parent_id_idx" ON "case_studies_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_more_cards_icon_idx" ON "case_studies_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "case_studies_blocks_services_more_cards_bg_image_idx" ON "case_studies_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "case_studies_blocks_services_more_order_idx" ON "case_studies_blocks_services_more" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_more_parent_id_idx" ON "case_studies_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_more_path_idx" ON "case_studies_blocks_services_more" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_services_overview_description_order_idx" ON "case_studies_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_overview_description_parent_id_idx" ON "case_studies_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_overview_left_column_services_order_idx" ON "case_studies_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_overview_left_column_services_parent_id_idx" ON "case_studies_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_overview_right_column_services_order_idx" ON "case_studies_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_overview_right_column_services_parent_id_idx" ON "case_studies_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_overview_order_idx" ON "case_studies_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_services_overview_parent_id_idx" ON "case_studies_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_services_overview_path_idx" ON "case_studies_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "case_studies_cover_image_idx" ON "case_studies" USING btree ("cover_image_id");
  CREATE INDEX "case_studies_meta_meta_image_idx" ON "case_studies" USING btree ("meta_image_id");
  CREATE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX "case_studies_rels_order_idx" ON "case_studies_rels" USING btree ("order");
  CREATE INDEX "case_studies_rels_parent_idx" ON "case_studies_rels" USING btree ("parent_id");
  CREATE INDEX "case_studies_rels_path_idx" ON "case_studies_rels" USING btree ("path");
  CREATE INDEX "case_studies_rels_pages_id_idx" ON "case_studies_rels" USING btree ("pages_id");
  CREATE INDEX "case_studies_rels_services_id_idx" ON "case_studies_rels" USING btree ("services_id");
  CREATE INDEX "case_studies_rels_categories_id_idx" ON "case_studies_rels" USING btree ("categories_id");
  CREATE INDEX "case_studies_rels_posts_id_idx" ON "case_studies_rels" USING btree ("posts_id");
  CREATE INDEX "case_studies_rels_case_studies_id_idx" ON "case_studies_rels" USING btree ("case_studies_id");
  CREATE INDEX "_case_studies_v_version_categories_order_idx" ON "_case_studies_v_version_categories" USING btree ("order");
  CREATE INDEX "_case_studies_v_version_categories_parent_idx" ON "_case_studies_v_version_categories" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_blocks_hero_home_buttons_order_idx" ON "_case_studies_v_blocks_hero_home_buttons" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_hero_home_buttons_parent_id_idx" ON "_case_studies_v_blocks_hero_home_buttons" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_hero_home_order_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_hero_home_parent_id_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_hero_home_path_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_hero_home_certification_badge_cer_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "_case_studies_v_blocks_hero_home_images_images_main_imag_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("images_main_image_id");
  CREATE INDEX "_case_studies_v_blocks_hero_home_images_images_overlay_i_idx" ON "_case_studies_v_blocks_hero_home" USING btree ("images_overlay_image_id");
  CREATE INDEX "_case_studies_v_blocks_hero_services_order_idx" ON "_case_studies_v_blocks_hero_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_hero_services_parent_id_idx" ON "_case_studies_v_blocks_hero_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_hero_services_path_idx" ON "_case_studies_v_blocks_hero_services" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_hero_services_images_images_main__idx" ON "_case_studies_v_blocks_hero_services" USING btree ("images_main_image_id");
  CREATE INDEX "_case_studies_v_blocks_hero_services_images_images_overl_idx" ON "_case_studies_v_blocks_hero_services" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_case_studies_v_blocks_hero_service_order_idx" ON "_case_studies_v_blocks_hero_service" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_hero_service_parent_id_idx" ON "_case_studies_v_blocks_hero_service" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_hero_service_path_idx" ON "_case_studies_v_blocks_hero_service" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_hero_service_images_images_main_i_idx" ON "_case_studies_v_blocks_hero_service" USING btree ("images_main_image_id");
  CREATE INDEX "_case_studies_v_blocks_hero_service_images_images_overla_idx" ON "_case_studies_v_blocks_hero_service" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_content_paragraphs_order_idx" ON "_case_studies_v_blocks_service_about_content_paragraphs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_service_about_content_paragraphs_parent_id_idx" ON "_case_studies_v_blocks_service_about_content_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_steps_order_idx" ON "_case_studies_v_blocks_service_about_steps" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_service_about_steps_parent_id_idx" ON "_case_studies_v_blocks_service_about_steps" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_steps_icon_unhovere_idx" ON "_case_studies_v_blocks_service_about_steps" USING btree ("icon_unhovered_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_steps_icon_hovered_idx" ON "_case_studies_v_blocks_service_about_steps" USING btree ("icon_hovered_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_order_idx" ON "_case_studies_v_blocks_service_about" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_service_about_parent_id_idx" ON "_case_studies_v_blocks_service_about" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_service_about_path_idx" ON "_case_studies_v_blocks_service_about" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_service_about_content_image_conte_idx" ON "_case_studies_v_blocks_service_about" USING btree ("content_image_media_id");
  CREATE INDEX "_case_studies_v_blocks_cta_links_order_idx" ON "_case_studies_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_cta_links_parent_id_idx" ON "_case_studies_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_cta_order_idx" ON "_case_studies_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_cta_parent_id_idx" ON "_case_studies_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_cta_path_idx" ON "_case_studies_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_content_columns_order_idx" ON "_case_studies_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_content_columns_parent_id_idx" ON "_case_studies_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_content_order_idx" ON "_case_studies_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_content_parent_id_idx" ON "_case_studies_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_content_path_idx" ON "_case_studies_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_media_block_order_idx" ON "_case_studies_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_media_block_parent_id_idx" ON "_case_studies_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_media_block_path_idx" ON "_case_studies_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_media_block_media_idx" ON "_case_studies_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_case_studies_v_blocks_archive_order_idx" ON "_case_studies_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_archive_parent_id_idx" ON "_case_studies_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_archive_path_idx" ON "_case_studies_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_form_block_order_idx" ON "_case_studies_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_form_block_parent_id_idx" ON "_case_studies_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_form_block_path_idx" ON "_case_studies_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_form_block_form_idx" ON "_case_studies_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_case_studies_v_blocks_our_services_services_order_idx" ON "_case_studies_v_blocks_our_services_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_our_services_services_parent_id_idx" ON "_case_studies_v_blocks_our_services_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_our_services_services_icon_hovere_idx" ON "_case_studies_v_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "_case_studies_v_blocks_our_services_services_icon_normal_idx" ON "_case_studies_v_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "_case_studies_v_blocks_our_services_order_idx" ON "_case_studies_v_blocks_our_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_our_services_parent_id_idx" ON "_case_studies_v_blocks_our_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_our_services_path_idx" ON "_case_studies_v_blocks_our_services" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_industries_industries_order_idx" ON "_case_studies_v_blocks_industries_industries" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_industries_industries_parent_id_idx" ON "_case_studies_v_blocks_industries_industries" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_industries_buttons_order_idx" ON "_case_studies_v_blocks_industries_buttons" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_industries_buttons_parent_id_idx" ON "_case_studies_v_blocks_industries_buttons" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_industries_order_idx" ON "_case_studies_v_blocks_industries" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_industries_parent_id_idx" ON "_case_studies_v_blocks_industries" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_industries_path_idx" ON "_case_studies_v_blocks_industries" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_industries_main_image_idx" ON "_case_studies_v_blocks_industries" USING btree ("main_image_id");
  CREATE INDEX "_case_studies_v_blocks_industries_icons_icons_check_icon_idx" ON "_case_studies_v_blocks_industries" USING btree ("icons_check_icon_id");
  CREATE INDEX "_case_studies_v_blocks_industries_icons_icons_arrow_icon_idx" ON "_case_studies_v_blocks_industries" USING btree ("icons_arrow_icon_id");
  CREATE INDEX "_case_studies_v_blocks_portfolio_statistics_order_idx" ON "_case_studies_v_blocks_portfolio_statistics" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_portfolio_statistics_parent_id_idx" ON "_case_studies_v_blocks_portfolio_statistics" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_portfolio_client_logos_order_idx" ON "_case_studies_v_blocks_portfolio_client_logos" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_portfolio_client_logos_parent_id_idx" ON "_case_studies_v_blocks_portfolio_client_logos" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_portfolio_client_logos_logo_idx" ON "_case_studies_v_blocks_portfolio_client_logos" USING btree ("logo_id");
  CREATE INDEX "_case_studies_v_blocks_portfolio_order_idx" ON "_case_studies_v_blocks_portfolio" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_portfolio_parent_id_idx" ON "_case_studies_v_blocks_portfolio" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_portfolio_path_idx" ON "_case_studies_v_blocks_portfolio" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_case_studies_case_studies_order_idx" ON "_case_studies_v_blocks_case_studies_case_studies" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_case_studies_case_studies_parent_id_idx" ON "_case_studies_v_blocks_case_studies_case_studies" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_case_studies_case_studies_image_idx" ON "_case_studies_v_blocks_case_studies_case_studies" USING btree ("image_id");
  CREATE INDEX "_case_studies_v_blocks_case_studies_case_studies_interna_idx" ON "_case_studies_v_blocks_case_studies_case_studies" USING btree ("internal_page_id");
  CREATE INDEX "_case_studies_v_blocks_case_studies_order_idx" ON "_case_studies_v_blocks_case_studies" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_case_studies_parent_id_idx" ON "_case_studies_v_blocks_case_studies" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_case_studies_path_idx" ON "_case_studies_v_blocks_case_studies" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_featured_blogs_order_idx" ON "_case_studies_v_blocks_featured_blogs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_featured_blogs_parent_id_idx" ON "_case_studies_v_blocks_featured_blogs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_featured_blogs_path_idx" ON "_case_studies_v_blocks_featured_blogs" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_services_order_idx" ON "_case_studies_v_blocks_srv_sctabs_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_services_parent_id_idx" ON "_case_studies_v_blocks_srv_sctabs_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_services_icon_active_idx" ON "_case_studies_v_blocks_srv_sctabs_services" USING btree ("icon_active_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_services_icon_normal_idx" ON "_case_studies_v_blocks_srv_sctabs_services" USING btree ("icon_normal_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_services_background_ic_idx" ON "_case_studies_v_blocks_srv_sctabs_services" USING btree ("background_icon_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_order_idx" ON "_case_studies_v_blocks_srv_sctabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_parent_id_idx" ON "_case_studies_v_blocks_srv_sctabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_icon_idx" ON "_case_studies_v_blocks_srv_sctabs" USING btree ("icon_id");
  CREATE INDEX "_case_studies_v_blocks_srv_sctabs_active_icon_idx" ON "_case_studies_v_blocks_srv_sctabs" USING btree ("active_icon_id");
  CREATE INDEX "_case_studies_v_blocks_srv_order_idx" ON "_case_studies_v_blocks_srv" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_srv_parent_id_idx" ON "_case_studies_v_blocks_srv" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_srv_path_idx" ON "_case_studies_v_blocks_srv" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_srv_empty_state_empty_state_icon_idx" ON "_case_studies_v_blocks_srv" USING btree ("empty_state_icon_id");
  CREATE INDEX "_case_studies_v_blocks_contact_form_order_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_contact_form_parent_id_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_contact_form_path_idx" ON "_case_studies_v_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_tabs_content_order_idx" ON "_case_studies_v_blocks_career_tabs_tabs_content" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_tabs_content_parent_id_idx" ON "_case_studies_v_blocks_career_tabs_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_tabs_order_idx" ON "_case_studies_v_blocks_career_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_tabs_parent_id_idx" ON "_case_studies_v_blocks_career_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_order_idx" ON "_case_studies_v_blocks_career_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_parent_id_idx" ON "_case_studies_v_blocks_career_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_career_tabs_path_idx" ON "_case_studies_v_blocks_career_tabs" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_co_content_content_order_idx" ON "_case_studies_v_blocks_co_content_content" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_co_content_content_parent_id_idx" ON "_case_studies_v_blocks_co_content_content" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_co_content_order_idx" ON "_case_studies_v_blocks_co_content" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_co_content_parent_id_idx" ON "_case_studies_v_blocks_co_content" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_co_content_path_idx" ON "_case_studies_v_blocks_co_content" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_co_content_featured_media_feature_idx" ON "_case_studies_v_blocks_co_content" USING btree ("featured_media_media_id");
  CREATE INDEX "_case_studies_v_blocks_image_text_section_order_idx" ON "_case_studies_v_blocks_image_text_section" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_image_text_section_parent_id_idx" ON "_case_studies_v_blocks_image_text_section" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_image_text_section_path_idx" ON "_case_studies_v_blocks_image_text_section" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_image_text_section_image_image_me_idx" ON "_case_studies_v_blocks_image_text_section" USING btree ("image_media_id");
  CREATE INDEX "_case_studies_v_blocks_job_listings_jobs_order_idx" ON "_case_studies_v_blocks_job_listings_jobs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_job_listings_jobs_parent_id_idx" ON "_case_studies_v_blocks_job_listings_jobs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_job_listings_order_idx" ON "_case_studies_v_blocks_job_listings" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_job_listings_parent_id_idx" ON "_case_studies_v_blocks_job_listings" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_job_listings_path_idx" ON "_case_studies_v_blocks_job_listings" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_info_order_idx" ON "_case_studies_v_blocks_info" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_info_parent_id_idx" ON "_case_studies_v_blocks_info" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_info_path_idx" ON "_case_studies_v_blocks_info" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_info_image_idx" ON "_case_studies_v_blocks_info" USING btree ("image_id");
  CREATE INDEX "_case_studies_v_blocks_co_hero_order_idx" ON "_case_studies_v_blocks_co_hero" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_co_hero_parent_id_idx" ON "_case_studies_v_blocks_co_hero" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_co_hero_path_idx" ON "_case_studies_v_blocks_co_hero" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_co_hero_featured_image_featured_i_idx" ON "_case_studies_v_blocks_co_hero" USING btree ("featured_image_media_id");
  CREATE INDEX "_case_studies_v_blocks_it_experts_order_idx" ON "_case_studies_v_blocks_it_experts" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_it_experts_parent_id_idx" ON "_case_studies_v_blocks_it_experts" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_it_experts_path_idx" ON "_case_studies_v_blocks_it_experts" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_it_experts_image_image_media_idx" ON "_case_studies_v_blocks_it_experts" USING btree ("image_media_id");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_tabs_order_idx" ON "_case_studies_v_blocks_mission_vision_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_tabs_parent_id_idx" ON "_case_studies_v_blocks_mission_vision_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_tabs_icon_idx" ON "_case_studies_v_blocks_mission_vision_tabs" USING btree ("icon_id");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_tabs_active_icon_idx" ON "_case_studies_v_blocks_mission_vision_tabs" USING btree ("active_icon_id");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_order_idx" ON "_case_studies_v_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_parent_id_idx" ON "_case_studies_v_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_mission_vision_path_idx" ON "_case_studies_v_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_leadership_points_points_order_idx" ON "_case_studies_v_blocks_leadership_points_points" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_leadership_points_points_parent_id_idx" ON "_case_studies_v_blocks_leadership_points_points" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_leadership_points_order_idx" ON "_case_studies_v_blocks_leadership_points" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_leadership_points_parent_id_idx" ON "_case_studies_v_blocks_leadership_points" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_leadership_points_path_idx" ON "_case_studies_v_blocks_leadership_points" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_testimonials_testimonials_order_idx" ON "_case_studies_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_testimonials_testimonials_parent_id_idx" ON "_case_studies_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_testimonials_testimonials_avatar_idx" ON "_case_studies_v_blocks_testimonials_testimonials" USING btree ("avatar_id");
  CREATE INDEX "_case_studies_v_blocks_testimonials_order_idx" ON "_case_studies_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_testimonials_parent_id_idx" ON "_case_studies_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_testimonials_path_idx" ON "_case_studies_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_resources_industries_order_idx" ON "_case_studies_v_blocks_resources_industries" USING btree ("order");
  CREATE INDEX "_case_studies_v_blocks_resources_industries_parent_idx" ON "_case_studies_v_blocks_resources_industries" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_blocks_resources_order_idx" ON "_case_studies_v_blocks_resources" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_resources_parent_id_idx" ON "_case_studies_v_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_resources_path_idx" ON "_case_studies_v_blocks_resources" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_info_sheets_order_idx" ON "_case_studies_v_blocks_info_tabs_info_sheets" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_info_sheets_parent_id_idx" ON "_case_studies_v_blocks_info_tabs_info_sheets" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_info_sheets_display_ima_idx" ON "_case_studies_v_blocks_info_tabs_info_sheets" USING btree ("display_image_id");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_info_sheets_pdf_file_idx" ON "_case_studies_v_blocks_info_tabs_info_sheets" USING btree ("pdf_file_id");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_order_idx" ON "_case_studies_v_blocks_info_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_parent_id_idx" ON "_case_studies_v_blocks_info_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_info_tabs_path_idx" ON "_case_studies_v_blocks_info_tabs" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_extra_info_problems_order_idx" ON "_case_studies_v_blocks_extra_info_problems" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_extra_info_problems_parent_id_idx" ON "_case_studies_v_blocks_extra_info_problems" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_extra_info_problems_icon_idx" ON "_case_studies_v_blocks_extra_info_problems" USING btree ("icon_id");
  CREATE INDEX "_case_studies_v_blocks_extra_info_order_idx" ON "_case_studies_v_blocks_extra_info" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_extra_info_parent_id_idx" ON "_case_studies_v_blocks_extra_info" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_extra_info_path_idx" ON "_case_studies_v_blocks_extra_info" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_ebooks_e_books_order_idx" ON "_case_studies_v_blocks_ebooks_e_books" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_ebooks_e_books_parent_id_idx" ON "_case_studies_v_blocks_ebooks_e_books" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_ebooks_e_books_display_image_idx" ON "_case_studies_v_blocks_ebooks_e_books" USING btree ("display_image_id");
  CREATE INDEX "_case_studies_v_blocks_ebooks_e_books_pdf_file_idx" ON "_case_studies_v_blocks_ebooks_e_books" USING btree ("pdf_file_id");
  CREATE INDEX "_case_studies_v_blocks_ebooks_order_idx" ON "_case_studies_v_blocks_ebooks" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_ebooks_parent_id_idx" ON "_case_studies_v_blocks_ebooks" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_ebooks_path_idx" ON "_case_studies_v_blocks_ebooks" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_tabs_videos_order_idx" ON "_case_studies_v_blocks_video_tabs_tabs_videos" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_tabs_videos_parent_id_idx" ON "_case_studies_v_blocks_video_tabs_tabs_videos" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_tabs_videos_thumbnail_idx" ON "_case_studies_v_blocks_video_tabs_tabs_videos" USING btree ("thumbnail_id");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_tabs_order_idx" ON "_case_studies_v_blocks_video_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_tabs_parent_id_idx" ON "_case_studies_v_blocks_video_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_order_idx" ON "_case_studies_v_blocks_video_tabs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_parent_id_idx" ON "_case_studies_v_blocks_video_tabs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_video_tabs_path_idx" ON "_case_studies_v_blocks_video_tabs" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_case_study_hero_order_idx" ON "_case_studies_v_blocks_case_study_hero" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_case_study_hero_parent_id_idx" ON "_case_studies_v_blocks_case_study_hero" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_case_study_hero_path_idx" ON "_case_studies_v_blocks_case_study_hero" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_content_order_idx" ON "_case_studies_v_blocks_case_study_cn_content" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_content_parent_id_idx" ON "_case_studies_v_blocks_case_study_cn_content" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_order_idx" ON "_case_studies_v_blocks_case_study_cn" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_parent_id_idx" ON "_case_studies_v_blocks_case_study_cn" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_path_idx" ON "_case_studies_v_blocks_case_study_cn" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_case_study_cn_main_image_idx" ON "_case_studies_v_blocks_case_study_cn" USING btree ("main_image_id");
  CREATE INDEX "_case_studies_v_blocks_experience_section_order_idx" ON "_case_studies_v_blocks_experience_section" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_experience_section_parent_id_idx" ON "_case_studies_v_blocks_experience_section" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_experience_section_path_idx" ON "_case_studies_v_blocks_experience_section" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_help_you_section_order_idx" ON "_case_studies_v_blocks_help_you_section" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_help_you_section_parent_id_idx" ON "_case_studies_v_blocks_help_you_section" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_help_you_section_path_idx" ON "_case_studies_v_blocks_help_you_section" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_help_you_section_image_idx" ON "_case_studies_v_blocks_help_you_section" USING btree ("image_id");
  CREATE INDEX "_case_studies_v_blocks_why_wcg_section_cards_order_idx" ON "_case_studies_v_blocks_why_wcg_section_cards" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_why_wcg_section_cards_parent_id_idx" ON "_case_studies_v_blocks_why_wcg_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_why_wcg_section_order_idx" ON "_case_studies_v_blocks_why_wcg_section" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_why_wcg_section_parent_id_idx" ON "_case_studies_v_blocks_why_wcg_section" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_why_wcg_section_path_idx" ON "_case_studies_v_blocks_why_wcg_section" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_faq_section_faqs_order_idx" ON "_case_studies_v_blocks_faq_section_faqs" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_faq_section_faqs_parent_id_idx" ON "_case_studies_v_blocks_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_faq_section_order_idx" ON "_case_studies_v_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_faq_section_parent_id_idx" ON "_case_studies_v_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_faq_section_path_idx" ON "_case_studies_v_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_services_more_cards_order_idx" ON "_case_studies_v_blocks_services_more_cards" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_more_cards_parent_id_idx" ON "_case_studies_v_blocks_services_more_cards" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_more_cards_icon_idx" ON "_case_studies_v_blocks_services_more_cards" USING btree ("icon_id");
  CREATE INDEX "_case_studies_v_blocks_services_more_cards_bg_image_idx" ON "_case_studies_v_blocks_services_more_cards" USING btree ("bg_image_id");
  CREATE INDEX "_case_studies_v_blocks_services_more_order_idx" ON "_case_studies_v_blocks_services_more" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_more_parent_id_idx" ON "_case_studies_v_blocks_services_more" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_more_path_idx" ON "_case_studies_v_blocks_services_more" USING btree ("_path");
  CREATE INDEX "_case_studies_v_blocks_services_overview_description_order_idx" ON "_case_studies_v_blocks_services_overview_description" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_overview_description_parent_id_idx" ON "_case_studies_v_blocks_services_overview_description" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_overview_left_column_services_order_idx" ON "_case_studies_v_blocks_services_overview_left_column_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_overview_left_column_services_parent_id_idx" ON "_case_studies_v_blocks_services_overview_left_column_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_overview_right_column_services_order_idx" ON "_case_studies_v_blocks_services_overview_right_column_services" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_overview_right_column_services_parent_id_idx" ON "_case_studies_v_blocks_services_overview_right_column_services" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_overview_order_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_order");
  CREATE INDEX "_case_studies_v_blocks_services_overview_parent_id_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_blocks_services_overview_path_idx" ON "_case_studies_v_blocks_services_overview" USING btree ("_path");
  CREATE INDEX "_case_studies_v_parent_idx" ON "_case_studies_v" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_version_version_cover_image_idx" ON "_case_studies_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_case_studies_v_version_meta_version_meta_image_idx" ON "_case_studies_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_case_studies_v_version_version_slug_idx" ON "_case_studies_v" USING btree ("version_slug");
  CREATE INDEX "_case_studies_v_version_version_updated_at_idx" ON "_case_studies_v" USING btree ("version_updated_at");
  CREATE INDEX "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX "_case_studies_v_autosave_idx" ON "_case_studies_v" USING btree ("autosave");
  CREATE INDEX "_case_studies_v_rels_order_idx" ON "_case_studies_v_rels" USING btree ("order");
  CREATE INDEX "_case_studies_v_rels_parent_idx" ON "_case_studies_v_rels" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_rels_path_idx" ON "_case_studies_v_rels" USING btree ("path");
  CREATE INDEX "_case_studies_v_rels_pages_id_idx" ON "_case_studies_v_rels" USING btree ("pages_id");
  CREATE INDEX "_case_studies_v_rels_services_id_idx" ON "_case_studies_v_rels" USING btree ("services_id");
  CREATE INDEX "_case_studies_v_rels_categories_id_idx" ON "_case_studies_v_rels" USING btree ("categories_id");
  CREATE INDEX "_case_studies_v_rels_posts_id_idx" ON "_case_studies_v_rels" USING btree ("posts_id");
  CREATE INDEX "_case_studies_v_rels_case_studies_id_idx" ON "_case_studies_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "header_nav_items_mega_menu_sections_items_order_idx" ON "header_nav_items_mega_menu_sections_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_mega_menu_sections_items_parent_id_idx" ON "header_nav_items_mega_menu_sections_items" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_mega_menu_sections_order_idx" ON "header_nav_items_mega_menu_sections" USING btree ("_order");
  CREATE INDEX "header_nav_items_mega_menu_sections_parent_id_idx" ON "header_nav_items_mega_menu_sections" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_services_id_idx" ON "header_rels" USING btree ("services_id");
  ALTER TABLE "pages_blocks_our_services_services" ADD CONSTRAINT "pages_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services_services" ADD CONSTRAINT "pages_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD CONSTRAINT "_pages_v_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD CONSTRAINT "_pages_v_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_our_services_services" ADD CONSTRAINT "services_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_our_services_services" ADD CONSTRAINT "services_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD CONSTRAINT "_services_v_blocks_our_services_services_icon_hovered_id_media_id_fk" FOREIGN KEY ("icon_hovered_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD CONSTRAINT "_services_v_blocks_our_services_services_icon_normal_id_media_id_fk" FOREIGN KEY ("icon_normal_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_home_certification_badge_certification_idx" ON "pages_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "pages_blocks_our_services_services_icon_hovered_idx" ON "pages_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "pages_blocks_our_services_services_icon_normal_idx" ON "pages_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "pages_rels_case_studies_id_idx" ON "pages_rels" USING btree ("case_studies_id");
  CREATE INDEX "_pages_v_blocks_hero_home_certification_badge_certificat_idx" ON "_pages_v_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "_pages_v_blocks_our_services_services_icon_hovered_idx" ON "_pages_v_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "_pages_v_blocks_our_services_services_icon_normal_idx" ON "_pages_v_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "_pages_v_rels_case_studies_id_idx" ON "_pages_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "services_blocks_hero_home_certification_badge_certificat_idx" ON "services_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "services_blocks_our_services_services_icon_hovered_idx" ON "services_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "services_blocks_our_services_services_icon_normal_idx" ON "services_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "services_rels_case_studies_id_idx" ON "services_rels" USING btree ("case_studies_id");
  CREATE INDEX "_services_v_blocks_hero_home_certification_badge_certifi_idx" ON "_services_v_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "_services_v_blocks_hero_services_images_images_main_imag_idx" ON "_services_v_blocks_hero_services" USING btree ("images_main_image_id");
  CREATE INDEX "_services_v_blocks_hero_services_images_images_overlay_i_idx" ON "_services_v_blocks_hero_services" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_services_v_blocks_hero_service_images_images_overlay_ic_idx" ON "_services_v_blocks_hero_service" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_services_v_blocks_our_services_services_icon_hovered_idx" ON "_services_v_blocks_our_services_services" USING btree ("icon_hovered_id");
  CREATE INDEX "_services_v_blocks_our_services_services_icon_normal_idx" ON "_services_v_blocks_our_services_services" USING btree ("icon_normal_id");
  CREATE INDEX "_services_v_blocks_case_studies_case_studies_internal_pa_idx" ON "_services_v_blocks_case_studies_case_studies" USING btree ("internal_page_id");
  CREATE INDEX "_services_v_rels_case_studies_id_idx" ON "_services_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "footer_rels_services_id_idx" ON "footer_rels" USING btree ("services_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  ALTER TABLE "pages_blocks_our_services_services" DROP COLUMN "icon_id";
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP COLUMN "icon_id";
  ALTER TABLE "services_blocks_our_services_services" DROP COLUMN "icon_id";
  ALTER TABLE "_services_v_blocks_our_services_services" DROP COLUMN "icon_id";
  ALTER TABLE "header_nav_items" DROP COLUMN "has_submenu";
  ALTER TABLE "footer_rels" DROP COLUMN "posts_id";
  DROP TYPE "public"."enum_tabs_services_link_type";
  DROP TYPE "public"."enum_pages_blocks_services_tabs_layout_bg_color";
  DROP TYPE "public"."enum_pages_blocks_services_tabs_layout_ctner_spacing";
  DROP TYPE "public"."enum_pages_blocks_services_tabs_layout_tabs_layout";
  DROP TYPE "public"."enum_pages_blocks_services_tabs_layout_grid_cols";
  DROP TYPE "public"."enum_pages_blocks_featured_resources_resources_link_type";
  DROP TYPE "public"."enum_pages_blocks_featured_resources_styling_background";
  DROP TYPE "public"."enum__tabs_v_services_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_services_tabs_layout_bg_color";
  DROP TYPE "public"."enum__pages_v_blocks_services_tabs_layout_ctner_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_services_tabs_layout_tabs_layout";
  DROP TYPE "public"."enum__pages_v_blocks_services_tabs_layout_grid_cols";
  DROP TYPE "public"."enum__pages_v_blocks_featured_resources_resources_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_featured_resources_styling_background";
  DROP TYPE "public"."enum_services_blocks_services_tabs_layout_bg_color";
  DROP TYPE "public"."enum_services_blocks_services_tabs_layout_ctner_spacing";
  DROP TYPE "public"."enum_services_blocks_services_tabs_layout_tabs_layout";
  DROP TYPE "public"."enum_services_blocks_services_tabs_layout_grid_cols";
  DROP TYPE "public"."enum_services_blocks_featured_resources_resources_link_type";
  DROP TYPE "public"."enum_services_blocks_featured_resources_styling_background";
  DROP TYPE "public"."enum__services_v_blocks_services_tabs_layout_bg_color";
  DROP TYPE "public"."enum__services_v_blocks_services_tabs_layout_ctner_spacing";
  DROP TYPE "public"."enum__services_v_blocks_services_tabs_layout_tabs_layout";
  DROP TYPE "public"."enum__services_v_blocks_services_tabs_layout_grid_cols";
  DROP TYPE "public"."enum__services_v_blocks_featured_resources_resources_link_type";
  DROP TYPE "public"."enum__services_v_blocks_featured_resources_styling_background";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_tabs_services_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_services_tabs_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_pages_blocks_services_tabs_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_pages_blocks_services_tabs_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum_pages_blocks_services_tabs_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum_pages_blocks_featured_resources_resources_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum_pages_blocks_featured_resources_styling_background" AS ENUM('white', 'light-blue');
  CREATE TYPE "public"."enum__tabs_v_services_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_services_tabs_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__pages_v_blocks_services_tabs_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__pages_v_blocks_services_tabs_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum__pages_v_blocks_services_tabs_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum__pages_v_blocks_featured_resources_resources_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_featured_resources_styling_background" AS ENUM('white', 'light-blue');
  CREATE TYPE "public"."enum_services_blocks_services_tabs_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum_services_blocks_services_tabs_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum_services_blocks_services_tabs_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum_services_blocks_services_tabs_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum_services_blocks_featured_resources_resources_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum_services_blocks_featured_resources_styling_background" AS ENUM('white', 'light-blue');
  CREATE TYPE "public"."enum__services_v_blocks_services_tabs_layout_bg_color" AS ENUM('bg-white', 'bg-gray-50', 'bg-background');
  CREATE TYPE "public"."enum__services_v_blocks_services_tabs_layout_ctner_spacing" AS ENUM('py-8', 'py-16', 'py-24');
  CREATE TYPE "public"."enum__services_v_blocks_services_tabs_layout_tabs_layout" AS ENUM('grid-cols-2', 'grid-cols-1', 'grid-cols-3');
  CREATE TYPE "public"."enum__services_v_blocks_services_tabs_layout_grid_cols" AS ENUM('grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-2 md:grid-cols-3', 'grid-cols-2 md:grid-cols-4');
  CREATE TYPE "public"."enum__services_v_blocks_featured_resources_resources_link_type" AS ENUM('external', 'internal', 'none');
  CREATE TYPE "public"."enum__services_v_blocks_featured_resources_styling_background" AS ENUM('white', 'light-blue');
  CREATE TABLE "pages_blocks_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "tabs_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"background_icon_id" integer,
  	"link_enabled" boolean DEFAULT false,
  	"link_type" "enum_tabs_services_link_type" DEFAULT 'reference',
  	"link_url" varchar,
  	"link_open_in_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer
  );
  
  CREATE TABLE "pages_blocks_services_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum_pages_blocks_services_tabs_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum_pages_blocks_services_tabs_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum_pages_blocks_services_tabs_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum_pages_blocks_services_tabs_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_featured_resources_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Resource',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum_pages_blocks_featured_resources_resources_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer
  );
  
  CREATE TABLE "pages_blocks_featured_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"styling_background" "enum_pages_blocks_featured_resources_styling_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_tabs_v_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"background_icon_id" integer,
  	"link_enabled" boolean DEFAULT false,
  	"link_type" "enum__tabs_v_services_link_type" DEFAULT 'reference',
  	"link_url" varchar,
  	"link_open_in_new_tab" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_id" integer,
  	"active_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum__pages_v_blocks_services_tabs_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum__pages_v_blocks_services_tabs_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum__pages_v_blocks_services_tabs_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum__pages_v_blocks_services_tabs_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_featured_resources_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Resource',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum__pages_v_blocks_featured_resources_resources_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_featured_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"styling_background" "enum__pages_v_blocks_featured_resources_styling_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_services_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum_services_blocks_services_tabs_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum_services_blocks_services_tabs_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum_services_blocks_services_tabs_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum_services_blocks_services_tabs_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_featured_resources_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Resource',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum_services_blocks_featured_resources_resources_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer
  );
  
  CREATE TABLE "services_blocks_featured_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"styling_background" "enum_services_blocks_featured_resources_styling_background" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_blogs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_config_use_custom_title" boolean DEFAULT false,
  	"title_config_custom_title" varchar,
  	"content_note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_header_enabled" boolean DEFAULT false,
  	"section_header_title" varchar,
  	"section_header_description" varchar,
  	"empty_state_title" varchar DEFAULT 'No Services Available',
  	"empty_state_description" varchar DEFAULT 'We are currently updating our services in this category. Please check back soon or contact us for more information.',
  	"empty_state_icon_id" integer,
  	"layout_bg_color" "enum__services_v_blocks_services_tabs_layout_bg_color" DEFAULT 'bg-white',
  	"layout_ctner_spacing" "enum__services_v_blocks_services_tabs_layout_ctner_spacing" DEFAULT 'py-16',
  	"layout_tabs_layout" "enum__services_v_blocks_services_tabs_layout_tabs_layout" DEFAULT 'grid-cols-2',
  	"layout_grid_cols" "enum__services_v_blocks_services_tabs_layout_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_featured_resources_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"tag" varchar DEFAULT 'Resource',
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum__services_v_blocks_featured_resources_resources_link_type" DEFAULT 'external',
  	"external_url" varchar,
  	"internal_page_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_featured_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"styling_background" "enum__services_v_blocks_featured_resources_styling_background" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_nav_items_submenu" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"href" varchar
  );
  
  ALTER TABLE "pages_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_help_you_v2_help_you_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_help_you_v2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about_2_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about_2_content_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_service_about_2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_help_you_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_help_you_v2_help_you_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_help_you_v2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about_2_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about_2_content_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_service_about_2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_blocks_help_you_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_hero_home_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_hero_home" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_hero_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_hero_service" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_our_services_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_our_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_industries_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_industries_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_portfolio_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_portfolio_client_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_portfolio" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_case_studies_case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_hero_home_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_hero_home" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_hero_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_hero_service" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_service_about_content_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_service_about_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_service_about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_our_services_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_our_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_industries_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_industries_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_portfolio_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_portfolio_client_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_portfolio" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_case_studies_case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_featured_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_srv_sctabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_srv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_career_tabs_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_career_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_career_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_co_content_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_co_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_image_text_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_job_listings_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_job_listings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_co_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_it_experts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_mission_vision_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_leadership_points_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_leadership_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_testimonials_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_resources_industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_info_tabs_info_sheets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_info_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_extra_info_problems" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_extra_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_ebooks_e_books" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_ebooks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_video_tabs_tabs_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_video_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_video_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_case_study_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_case_study_cn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_experience_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_help_you_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_why_wcg_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_why_wcg_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_faq_section_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_faq_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_more_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_more" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_overview_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_overview_left_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_overview_right_column_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_blocks_services_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_mega_menu_sections_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_mega_menu_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_service_about_steps" CASCADE;
  DROP TABLE "pages_blocks_service_about" CASCADE;
  DROP TABLE "pages_blocks_featured_blogs" CASCADE;
  DROP TABLE "pages_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "pages_blocks_srv_sctabs" CASCADE;
  DROP TABLE "pages_blocks_srv" CASCADE;
  DROP TABLE "pages_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "pages_blocks_career_tabs" CASCADE;
  DROP TABLE "pages_blocks_co_content_content" CASCADE;
  DROP TABLE "pages_blocks_co_content" CASCADE;
  DROP TABLE "pages_blocks_image_text_section" CASCADE;
  DROP TABLE "pages_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "pages_blocks_job_listings" CASCADE;
  DROP TABLE "pages_blocks_info" CASCADE;
  DROP TABLE "pages_blocks_co_hero" CASCADE;
  DROP TABLE "pages_blocks_it_experts" CASCADE;
  DROP TABLE "pages_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "pages_blocks_mission_vision" CASCADE;
  DROP TABLE "pages_blocks_leadership_points_points" CASCADE;
  DROP TABLE "pages_blocks_leadership_points" CASCADE;
  DROP TABLE "pages_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_resources_industries" CASCADE;
  DROP TABLE "pages_blocks_resources" CASCADE;
  DROP TABLE "pages_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "pages_blocks_info_tabs" CASCADE;
  DROP TABLE "pages_blocks_extra_info_problems" CASCADE;
  DROP TABLE "pages_blocks_extra_info" CASCADE;
  DROP TABLE "pages_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "pages_blocks_ebooks" CASCADE;
  DROP TABLE "pages_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "pages_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "pages_blocks_video_tabs" CASCADE;
  DROP TABLE "pages_blocks_case_study_hero" CASCADE;
  DROP TABLE "pages_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "pages_blocks_case_study_cn" CASCADE;
  DROP TABLE "pages_blocks_experience_section" CASCADE;
  DROP TABLE "pages_blocks_help_you_section" CASCADE;
  DROP TABLE "pages_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "pages_blocks_why_wcg_section" CASCADE;
  DROP TABLE "pages_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "pages_blocks_faq_section" CASCADE;
  DROP TABLE "pages_blocks_services_more_cards" CASCADE;
  DROP TABLE "pages_blocks_services_more" CASCADE;
  DROP TABLE "pages_blocks_services_overview_description" CASCADE;
  DROP TABLE "pages_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "pages_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "pages_blocks_services_overview" CASCADE;
  DROP TABLE "_pages_v_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_service_about_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_service_about" CASCADE;
  DROP TABLE "_pages_v_blocks_featured_blogs" CASCADE;
  DROP TABLE "_pages_v_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "_pages_v_blocks_srv_sctabs" CASCADE;
  DROP TABLE "_pages_v_blocks_srv" CASCADE;
  DROP TABLE "_pages_v_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_career_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_co_content_content" CASCADE;
  DROP TABLE "_pages_v_blocks_co_content" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text_section" CASCADE;
  DROP TABLE "_pages_v_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_job_listings" CASCADE;
  DROP TABLE "_pages_v_blocks_info" CASCADE;
  DROP TABLE "_pages_v_blocks_co_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_it_experts" CASCADE;
  DROP TABLE "_pages_v_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_mission_vision" CASCADE;
  DROP TABLE "_pages_v_blocks_leadership_points_points" CASCADE;
  DROP TABLE "_pages_v_blocks_leadership_points" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_resources_industries" CASCADE;
  DROP TABLE "_pages_v_blocks_resources" CASCADE;
  DROP TABLE "_pages_v_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "_pages_v_blocks_info_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_extra_info_problems" CASCADE;
  DROP TABLE "_pages_v_blocks_extra_info" CASCADE;
  DROP TABLE "_pages_v_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "_pages_v_blocks_ebooks" CASCADE;
  DROP TABLE "_pages_v_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "_pages_v_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_video_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_case_study_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "_pages_v_blocks_case_study_cn" CASCADE;
  DROP TABLE "_pages_v_blocks_experience_section" CASCADE;
  DROP TABLE "_pages_v_blocks_help_you_section" CASCADE;
  DROP TABLE "_pages_v_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_why_wcg_section" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_section" CASCADE;
  DROP TABLE "_pages_v_blocks_services_more_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_services_more" CASCADE;
  DROP TABLE "_pages_v_blocks_services_overview_description" CASCADE;
  DROP TABLE "_pages_v_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "_pages_v_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "_pages_v_blocks_services_overview" CASCADE;
  DROP TABLE "services_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "services_blocks_service_about_steps" CASCADE;
  DROP TABLE "services_blocks_service_about" CASCADE;
  DROP TABLE "services_blocks_featured_blogs" CASCADE;
  DROP TABLE "services_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "services_blocks_srv_sctabs" CASCADE;
  DROP TABLE "services_blocks_srv" CASCADE;
  DROP TABLE "services_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "services_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "services_blocks_career_tabs" CASCADE;
  DROP TABLE "services_blocks_co_content_content" CASCADE;
  DROP TABLE "services_blocks_co_content" CASCADE;
  DROP TABLE "services_blocks_image_text_section" CASCADE;
  DROP TABLE "services_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "services_blocks_job_listings" CASCADE;
  DROP TABLE "services_blocks_info" CASCADE;
  DROP TABLE "services_blocks_co_hero" CASCADE;
  DROP TABLE "services_blocks_it_experts" CASCADE;
  DROP TABLE "services_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "services_blocks_mission_vision" CASCADE;
  DROP TABLE "services_blocks_leadership_points_points" CASCADE;
  DROP TABLE "services_blocks_leadership_points" CASCADE;
  DROP TABLE "services_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "services_blocks_testimonials" CASCADE;
  DROP TABLE "services_blocks_resources_industries" CASCADE;
  DROP TABLE "services_blocks_resources" CASCADE;
  DROP TABLE "services_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "services_blocks_info_tabs" CASCADE;
  DROP TABLE "services_blocks_extra_info_problems" CASCADE;
  DROP TABLE "services_blocks_extra_info" CASCADE;
  DROP TABLE "services_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "services_blocks_ebooks" CASCADE;
  DROP TABLE "services_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "services_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "services_blocks_video_tabs" CASCADE;
  DROP TABLE "services_blocks_case_study_hero" CASCADE;
  DROP TABLE "services_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "services_blocks_case_study_cn" CASCADE;
  DROP TABLE "services_blocks_experience_section" CASCADE;
  DROP TABLE "services_blocks_help_you_section" CASCADE;
  DROP TABLE "services_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "services_blocks_why_wcg_section" CASCADE;
  DROP TABLE "services_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "services_blocks_faq_section" CASCADE;
  DROP TABLE "services_blocks_services_more_cards" CASCADE;
  DROP TABLE "services_blocks_services_more" CASCADE;
  DROP TABLE "services_blocks_services_overview_description" CASCADE;
  DROP TABLE "services_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "services_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "services_blocks_services_overview" CASCADE;
  DROP TABLE "services_blocks_help_you_v2_help_you_list" CASCADE;
  DROP TABLE "services_blocks_help_you_v2" CASCADE;
  DROP TABLE "services_blocks_service_about_2_content_paragraphs" CASCADE;
  DROP TABLE "services_blocks_service_about_2_content_list" CASCADE;
  DROP TABLE "services_blocks_service_about_2" CASCADE;
  DROP TABLE "services_blocks_help_you_video" CASCADE;
  DROP TABLE "_services_v_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_service_about_steps" CASCADE;
  DROP TABLE "_services_v_blocks_service_about" CASCADE;
  DROP TABLE "_services_v_blocks_featured_blogs" CASCADE;
  DROP TABLE "_services_v_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "_services_v_blocks_srv_sctabs" CASCADE;
  DROP TABLE "_services_v_blocks_srv" CASCADE;
  DROP TABLE "_services_v_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "_services_v_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_career_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_co_content_content" CASCADE;
  DROP TABLE "_services_v_blocks_co_content" CASCADE;
  DROP TABLE "_services_v_blocks_image_text_section" CASCADE;
  DROP TABLE "_services_v_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "_services_v_blocks_job_listings" CASCADE;
  DROP TABLE "_services_v_blocks_info" CASCADE;
  DROP TABLE "_services_v_blocks_co_hero" CASCADE;
  DROP TABLE "_services_v_blocks_it_experts" CASCADE;
  DROP TABLE "_services_v_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_mission_vision" CASCADE;
  DROP TABLE "_services_v_blocks_leadership_points_points" CASCADE;
  DROP TABLE "_services_v_blocks_leadership_points" CASCADE;
  DROP TABLE "_services_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_services_v_blocks_testimonials" CASCADE;
  DROP TABLE "_services_v_blocks_resources_industries" CASCADE;
  DROP TABLE "_services_v_blocks_resources" CASCADE;
  DROP TABLE "_services_v_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "_services_v_blocks_info_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_extra_info_problems" CASCADE;
  DROP TABLE "_services_v_blocks_extra_info" CASCADE;
  DROP TABLE "_services_v_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "_services_v_blocks_ebooks" CASCADE;
  DROP TABLE "_services_v_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "_services_v_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_video_tabs" CASCADE;
  DROP TABLE "_services_v_blocks_case_study_hero" CASCADE;
  DROP TABLE "_services_v_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "_services_v_blocks_case_study_cn" CASCADE;
  DROP TABLE "_services_v_blocks_experience_section" CASCADE;
  DROP TABLE "_services_v_blocks_help_you_section" CASCADE;
  DROP TABLE "_services_v_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "_services_v_blocks_why_wcg_section" CASCADE;
  DROP TABLE "_services_v_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "_services_v_blocks_faq_section" CASCADE;
  DROP TABLE "_services_v_blocks_services_more_cards" CASCADE;
  DROP TABLE "_services_v_blocks_services_more" CASCADE;
  DROP TABLE "_services_v_blocks_services_overview_description" CASCADE;
  DROP TABLE "_services_v_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "_services_v_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "_services_v_blocks_services_overview" CASCADE;
  DROP TABLE "_services_v_blocks_help_you_v2_help_you_list" CASCADE;
  DROP TABLE "_services_v_blocks_help_you_v2" CASCADE;
  DROP TABLE "_services_v_blocks_service_about_2_content_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_service_about_2_content_list" CASCADE;
  DROP TABLE "_services_v_blocks_service_about_2" CASCADE;
  DROP TABLE "_services_v_blocks_help_you_video" CASCADE;
  DROP TABLE "case_studies_categories" CASCADE;
  DROP TABLE "case_studies_blocks_hero_home_buttons" CASCADE;
  DROP TABLE "case_studies_blocks_hero_home" CASCADE;
  DROP TABLE "case_studies_blocks_hero_services" CASCADE;
  DROP TABLE "case_studies_blocks_hero_service" CASCADE;
  DROP TABLE "case_studies_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "case_studies_blocks_service_about_steps" CASCADE;
  DROP TABLE "case_studies_blocks_service_about" CASCADE;
  DROP TABLE "case_studies_blocks_cta_links" CASCADE;
  DROP TABLE "case_studies_blocks_cta" CASCADE;
  DROP TABLE "case_studies_blocks_content_columns" CASCADE;
  DROP TABLE "case_studies_blocks_content" CASCADE;
  DROP TABLE "case_studies_blocks_media_block" CASCADE;
  DROP TABLE "case_studies_blocks_archive" CASCADE;
  DROP TABLE "case_studies_blocks_form_block" CASCADE;
  DROP TABLE "case_studies_blocks_our_services_services" CASCADE;
  DROP TABLE "case_studies_blocks_our_services" CASCADE;
  DROP TABLE "case_studies_blocks_industries_industries" CASCADE;
  DROP TABLE "case_studies_blocks_industries_buttons" CASCADE;
  DROP TABLE "case_studies_blocks_industries" CASCADE;
  DROP TABLE "case_studies_blocks_portfolio_statistics" CASCADE;
  DROP TABLE "case_studies_blocks_portfolio_client_logos" CASCADE;
  DROP TABLE "case_studies_blocks_portfolio" CASCADE;
  DROP TABLE "case_studies_blocks_case_studies_case_studies" CASCADE;
  DROP TABLE "case_studies_blocks_case_studies" CASCADE;
  DROP TABLE "case_studies_blocks_featured_blogs" CASCADE;
  DROP TABLE "case_studies_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "case_studies_blocks_srv_sctabs" CASCADE;
  DROP TABLE "case_studies_blocks_srv" CASCADE;
  DROP TABLE "case_studies_blocks_contact_form" CASCADE;
  DROP TABLE "case_studies_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "case_studies_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_career_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_co_content_content" CASCADE;
  DROP TABLE "case_studies_blocks_co_content" CASCADE;
  DROP TABLE "case_studies_blocks_image_text_section" CASCADE;
  DROP TABLE "case_studies_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "case_studies_blocks_job_listings" CASCADE;
  DROP TABLE "case_studies_blocks_info" CASCADE;
  DROP TABLE "case_studies_blocks_co_hero" CASCADE;
  DROP TABLE "case_studies_blocks_it_experts" CASCADE;
  DROP TABLE "case_studies_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_mission_vision" CASCADE;
  DROP TABLE "case_studies_blocks_leadership_points_points" CASCADE;
  DROP TABLE "case_studies_blocks_leadership_points" CASCADE;
  DROP TABLE "case_studies_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "case_studies_blocks_testimonials" CASCADE;
  DROP TABLE "case_studies_blocks_resources_industries" CASCADE;
  DROP TABLE "case_studies_blocks_resources" CASCADE;
  DROP TABLE "case_studies_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "case_studies_blocks_info_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_extra_info_problems" CASCADE;
  DROP TABLE "case_studies_blocks_extra_info" CASCADE;
  DROP TABLE "case_studies_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "case_studies_blocks_ebooks" CASCADE;
  DROP TABLE "case_studies_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "case_studies_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_video_tabs" CASCADE;
  DROP TABLE "case_studies_blocks_case_study_hero" CASCADE;
  DROP TABLE "case_studies_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "case_studies_blocks_case_study_cn" CASCADE;
  DROP TABLE "case_studies_blocks_experience_section" CASCADE;
  DROP TABLE "case_studies_blocks_help_you_section" CASCADE;
  DROP TABLE "case_studies_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "case_studies_blocks_why_wcg_section" CASCADE;
  DROP TABLE "case_studies_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "case_studies_blocks_faq_section" CASCADE;
  DROP TABLE "case_studies_blocks_services_more_cards" CASCADE;
  DROP TABLE "case_studies_blocks_services_more" CASCADE;
  DROP TABLE "case_studies_blocks_services_overview_description" CASCADE;
  DROP TABLE "case_studies_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "case_studies_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "case_studies_blocks_services_overview" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "case_studies_rels" CASCADE;
  DROP TABLE "_case_studies_v_version_categories" CASCADE;
  DROP TABLE "_case_studies_v_blocks_hero_home_buttons" CASCADE;
  DROP TABLE "_case_studies_v_blocks_hero_home" CASCADE;
  DROP TABLE "_case_studies_v_blocks_hero_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_hero_service" CASCADE;
  DROP TABLE "_case_studies_v_blocks_service_about_content_paragraphs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_service_about_steps" CASCADE;
  DROP TABLE "_case_studies_v_blocks_service_about" CASCADE;
  DROP TABLE "_case_studies_v_blocks_cta_links" CASCADE;
  DROP TABLE "_case_studies_v_blocks_cta" CASCADE;
  DROP TABLE "_case_studies_v_blocks_content_columns" CASCADE;
  DROP TABLE "_case_studies_v_blocks_content" CASCADE;
  DROP TABLE "_case_studies_v_blocks_media_block" CASCADE;
  DROP TABLE "_case_studies_v_blocks_archive" CASCADE;
  DROP TABLE "_case_studies_v_blocks_form_block" CASCADE;
  DROP TABLE "_case_studies_v_blocks_our_services_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_our_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_industries_industries" CASCADE;
  DROP TABLE "_case_studies_v_blocks_industries_buttons" CASCADE;
  DROP TABLE "_case_studies_v_blocks_industries" CASCADE;
  DROP TABLE "_case_studies_v_blocks_portfolio_statistics" CASCADE;
  DROP TABLE "_case_studies_v_blocks_portfolio_client_logos" CASCADE;
  DROP TABLE "_case_studies_v_blocks_portfolio" CASCADE;
  DROP TABLE "_case_studies_v_blocks_case_studies_case_studies" CASCADE;
  DROP TABLE "_case_studies_v_blocks_case_studies" CASCADE;
  DROP TABLE "_case_studies_v_blocks_featured_blogs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_srv_sctabs_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_srv_sctabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_srv" CASCADE;
  DROP TABLE "_case_studies_v_blocks_contact_form" CASCADE;
  DROP TABLE "_case_studies_v_blocks_career_tabs_tabs_content" CASCADE;
  DROP TABLE "_case_studies_v_blocks_career_tabs_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_career_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_co_content_content" CASCADE;
  DROP TABLE "_case_studies_v_blocks_co_content" CASCADE;
  DROP TABLE "_case_studies_v_blocks_image_text_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_job_listings_jobs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_job_listings" CASCADE;
  DROP TABLE "_case_studies_v_blocks_info" CASCADE;
  DROP TABLE "_case_studies_v_blocks_co_hero" CASCADE;
  DROP TABLE "_case_studies_v_blocks_it_experts" CASCADE;
  DROP TABLE "_case_studies_v_blocks_mission_vision_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_mission_vision" CASCADE;
  DROP TABLE "_case_studies_v_blocks_leadership_points_points" CASCADE;
  DROP TABLE "_case_studies_v_blocks_leadership_points" CASCADE;
  DROP TABLE "_case_studies_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_case_studies_v_blocks_testimonials" CASCADE;
  DROP TABLE "_case_studies_v_blocks_resources_industries" CASCADE;
  DROP TABLE "_case_studies_v_blocks_resources" CASCADE;
  DROP TABLE "_case_studies_v_blocks_info_tabs_info_sheets" CASCADE;
  DROP TABLE "_case_studies_v_blocks_info_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_extra_info_problems" CASCADE;
  DROP TABLE "_case_studies_v_blocks_extra_info" CASCADE;
  DROP TABLE "_case_studies_v_blocks_ebooks_e_books" CASCADE;
  DROP TABLE "_case_studies_v_blocks_ebooks" CASCADE;
  DROP TABLE "_case_studies_v_blocks_video_tabs_tabs_videos" CASCADE;
  DROP TABLE "_case_studies_v_blocks_video_tabs_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_video_tabs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_case_study_hero" CASCADE;
  DROP TABLE "_case_studies_v_blocks_case_study_cn_content" CASCADE;
  DROP TABLE "_case_studies_v_blocks_case_study_cn" CASCADE;
  DROP TABLE "_case_studies_v_blocks_experience_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_help_you_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_why_wcg_section_cards" CASCADE;
  DROP TABLE "_case_studies_v_blocks_why_wcg_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_faq_section_faqs" CASCADE;
  DROP TABLE "_case_studies_v_blocks_faq_section" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_more_cards" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_more" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_overview_description" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_overview_left_column_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_overview_right_column_services" CASCADE;
  DROP TABLE "_case_studies_v_blocks_services_overview" CASCADE;
  DROP TABLE "_case_studies_v" CASCADE;
  DROP TABLE "_case_studies_v_rels" CASCADE;
  DROP TABLE "header_nav_items_mega_menu_sections_items" CASCADE;
  DROP TABLE "header_nav_items_mega_menu_sections" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  ALTER TABLE "pages_blocks_our_services_services" DROP CONSTRAINT "pages_blocks_our_services_services_icon_hovered_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_our_services_services" DROP CONSTRAINT "pages_blocks_our_services_services_icon_normal_id_media_id_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_case_studies_fk";
  
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP CONSTRAINT "_pages_v_blocks_our_services_services_icon_hovered_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP CONSTRAINT "_pages_v_blocks_our_services_services_icon_normal_id_media_id_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_case_studies_fk";
  
  ALTER TABLE "services_blocks_our_services_services" DROP CONSTRAINT "services_blocks_our_services_services_icon_hovered_id_media_id_fk";
  
  ALTER TABLE "services_blocks_our_services_services" DROP CONSTRAINT "services_blocks_our_services_services_icon_normal_id_media_id_fk";
  
  ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_case_studies_fk";
  
  ALTER TABLE "_services_v_blocks_our_services_services" DROP CONSTRAINT "_services_v_blocks_our_services_services_icon_hovered_id_media_id_fk";
  
  ALTER TABLE "_services_v_blocks_our_services_services" DROP CONSTRAINT "_services_v_blocks_our_services_services_icon_normal_id_media_id_fk";
  
  ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_case_studies_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_case_studies_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_services_fk";
  
  DROP INDEX "pages_blocks_hero_home_certification_badge_certification_idx";
  DROP INDEX "pages_blocks_our_services_services_icon_hovered_idx";
  DROP INDEX "pages_blocks_our_services_services_icon_normal_idx";
  DROP INDEX "pages_rels_case_studies_id_idx";
  DROP INDEX "_pages_v_blocks_hero_home_certification_badge_certificat_idx";
  DROP INDEX "_pages_v_blocks_our_services_services_icon_hovered_idx";
  DROP INDEX "_pages_v_blocks_our_services_services_icon_normal_idx";
  DROP INDEX "_pages_v_rels_case_studies_id_idx";
  DROP INDEX "services_blocks_hero_home_certification_badge_certificat_idx";
  DROP INDEX "services_blocks_our_services_services_icon_hovered_idx";
  DROP INDEX "services_blocks_our_services_services_icon_normal_idx";
  DROP INDEX "services_rels_case_studies_id_idx";
  DROP INDEX "_services_v_blocks_hero_home_certification_badge_certifi_idx";
  DROP INDEX "_services_v_blocks_hero_services_images_images_main_imag_idx";
  DROP INDEX "_services_v_blocks_hero_services_images_images_overlay_i_idx";
  DROP INDEX "_services_v_blocks_hero_service_images_images_overlay_ic_idx";
  DROP INDEX "_services_v_blocks_our_services_services_icon_hovered_idx";
  DROP INDEX "_services_v_blocks_our_services_services_icon_normal_idx";
  DROP INDEX "_services_v_blocks_case_studies_case_studies_internal_pa_idx";
  DROP INDEX "_services_v_rels_case_studies_id_idx";
  DROP INDEX "payload_locked_documents_rels_case_studies_id_idx";
  DROP INDEX "footer_rels_services_id_idx";
  DROP INDEX "redirects_from_idx";
  ALTER TABLE "footer_quick_links" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "footer_services" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "footer_bottom_links" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "pages_blocks_our_services_services" ADD COLUMN "icon_id" integer;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD COLUMN "icon_id" integer;
  ALTER TABLE "services_blocks_our_services_services" ADD COLUMN "icon_id" integer;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD COLUMN "icon_id" integer;
  ALTER TABLE "header_nav_items" ADD COLUMN "has_submenu" boolean DEFAULT false;
  ALTER TABLE "footer_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "pages_blocks_blogs" ADD CONSTRAINT "pages_blocks_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tabs_services" ADD CONSTRAINT "tabs_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tabs_services" ADD CONSTRAINT "tabs_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tabs_services" ADD CONSTRAINT "tabs_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tabs" ADD CONSTRAINT "tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tabs" ADD CONSTRAINT "tabs_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tabs" ADD CONSTRAINT "tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_services_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_tabs" ADD CONSTRAINT "pages_blocks_services_tabs_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_tabs" ADD CONSTRAINT "pages_blocks_services_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_resources_resources" ADD CONSTRAINT "pages_blocks_featured_resources_resources_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_resources_resources" ADD CONSTRAINT "pages_blocks_featured_resources_resources_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_resources_resources" ADD CONSTRAINT "pages_blocks_featured_resources_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_featured_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_resources" ADD CONSTRAINT "pages_blocks_featured_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blogs" ADD CONSTRAINT "_pages_v_blocks_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_tabs_v_services" ADD CONSTRAINT "_tabs_v_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_tabs_v_services" ADD CONSTRAINT "_tabs_v_services_background_icon_id_media_id_fk" FOREIGN KEY ("background_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_tabs_v_services" ADD CONSTRAINT "_tabs_v_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_tabs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_tabs_v" ADD CONSTRAINT "_tabs_v_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_tabs_v" ADD CONSTRAINT "_tabs_v_active_icon_id_media_id_fk" FOREIGN KEY ("active_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_tabs_v" ADD CONSTRAINT "_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_services_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_tabs" ADD CONSTRAINT "_pages_v_blocks_services_tabs_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_tabs" ADD CONSTRAINT "_pages_v_blocks_services_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_resources_resources" ADD CONSTRAINT "_pages_v_blocks_featured_resources_resources_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_resources_resources" ADD CONSTRAINT "_pages_v_blocks_featured_resources_resources_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_resources_resources" ADD CONSTRAINT "_pages_v_blocks_featured_resources_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_featured_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_resources" ADD CONSTRAINT "_pages_v_blocks_featured_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_blogs" ADD CONSTRAINT "services_blocks_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_tabs" ADD CONSTRAINT "services_blocks_services_tabs_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_services_tabs" ADD CONSTRAINT "services_blocks_services_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_featured_resources_resources" ADD CONSTRAINT "services_blocks_featured_resources_resources_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_featured_resources_resources" ADD CONSTRAINT "services_blocks_featured_resources_resources_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_featured_resources_resources" ADD CONSTRAINT "services_blocks_featured_resources_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_featured_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_featured_resources" ADD CONSTRAINT "services_blocks_featured_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_blogs" ADD CONSTRAINT "_services_v_blocks_blogs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_tabs" ADD CONSTRAINT "_services_v_blocks_services_tabs_empty_state_icon_id_media_id_fk" FOREIGN KEY ("empty_state_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_tabs" ADD CONSTRAINT "_services_v_blocks_services_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_featured_resources_resources" ADD CONSTRAINT "_services_v_blocks_featured_resources_resources_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_featured_resources_resources" ADD CONSTRAINT "_services_v_blocks_featured_resources_resources_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_featured_resources_resources" ADD CONSTRAINT "_services_v_blocks_featured_resources_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_featured_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_featured_resources" ADD CONSTRAINT "_services_v_blocks_featured_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_submenu" ADD CONSTRAINT "header_nav_items_submenu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_blogs_order_idx" ON "pages_blocks_blogs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blogs_parent_id_idx" ON "pages_blocks_blogs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blogs_path_idx" ON "pages_blocks_blogs" USING btree ("_path");
  CREATE INDEX "tabs_services_order_idx" ON "tabs_services" USING btree ("_order");
  CREATE INDEX "tabs_services_parent_id_idx" ON "tabs_services" USING btree ("_parent_id");
  CREATE INDEX "tabs_services_icon_1_idx" ON "tabs_services" USING btree ("icon_id");
  CREATE INDEX "tabs_services_background_icon_1_idx" ON "tabs_services" USING btree ("background_icon_id");
  CREATE INDEX "tabs_order_idx" ON "tabs" USING btree ("_order");
  CREATE INDEX "tabs_parent_id_idx" ON "tabs" USING btree ("_parent_id");
  CREATE INDEX "tabs_icon_1_idx" ON "tabs" USING btree ("icon_id");
  CREATE INDEX "tabs_active_icon_1_idx" ON "tabs" USING btree ("active_icon_id");
  CREATE INDEX "pages_blocks_services_tabs_order_idx" ON "pages_blocks_services_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_tabs_parent_id_idx" ON "pages_blocks_services_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_tabs_path_idx" ON "pages_blocks_services_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_tabs_empty_state_empty_state_icon_idx" ON "pages_blocks_services_tabs" USING btree ("empty_state_icon_id");
  CREATE INDEX "pages_blocks_featured_resources_resources_order_idx" ON "pages_blocks_featured_resources_resources" USING btree ("_order");
  CREATE INDEX "pages_blocks_featured_resources_resources_parent_id_idx" ON "pages_blocks_featured_resources_resources" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_featured_resources_resources_image_idx" ON "pages_blocks_featured_resources_resources" USING btree ("image_id");
  CREATE INDEX "pages_blocks_featured_resources_resources_internal_page_idx" ON "pages_blocks_featured_resources_resources" USING btree ("internal_page_id");
  CREATE INDEX "pages_blocks_featured_resources_order_idx" ON "pages_blocks_featured_resources" USING btree ("_order");
  CREATE INDEX "pages_blocks_featured_resources_parent_id_idx" ON "pages_blocks_featured_resources" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_featured_resources_path_idx" ON "pages_blocks_featured_resources" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blogs_order_idx" ON "_pages_v_blocks_blogs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blogs_parent_id_idx" ON "_pages_v_blocks_blogs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blogs_path_idx" ON "_pages_v_blocks_blogs" USING btree ("_path");
  CREATE INDEX "_tabs_v_services_order_idx" ON "_tabs_v_services" USING btree ("_order");
  CREATE INDEX "_tabs_v_services_parent_id_idx" ON "_tabs_v_services" USING btree ("_parent_id");
  CREATE INDEX "_tabs_v_services_icon_1_idx" ON "_tabs_v_services" USING btree ("icon_id");
  CREATE INDEX "_tabs_v_services_background_icon_1_idx" ON "_tabs_v_services" USING btree ("background_icon_id");
  CREATE INDEX "_tabs_v_order_idx" ON "_tabs_v" USING btree ("_order");
  CREATE INDEX "_tabs_v_parent_id_idx" ON "_tabs_v" USING btree ("_parent_id");
  CREATE INDEX "_tabs_v_icon_1_idx" ON "_tabs_v" USING btree ("icon_id");
  CREATE INDEX "_tabs_v_active_icon_1_idx" ON "_tabs_v" USING btree ("active_icon_id");
  CREATE INDEX "_pages_v_blocks_services_tabs_order_idx" ON "_pages_v_blocks_services_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_tabs_parent_id_idx" ON "_pages_v_blocks_services_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_tabs_path_idx" ON "_pages_v_blocks_services_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_services_tabs_empty_state_empty_state_icon_idx" ON "_pages_v_blocks_services_tabs" USING btree ("empty_state_icon_id");
  CREATE INDEX "_pages_v_blocks_featured_resources_resources_order_idx" ON "_pages_v_blocks_featured_resources_resources" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_featured_resources_resources_parent_id_idx" ON "_pages_v_blocks_featured_resources_resources" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_featured_resources_resources_image_idx" ON "_pages_v_blocks_featured_resources_resources" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_featured_resources_resources_internal_page_idx" ON "_pages_v_blocks_featured_resources_resources" USING btree ("internal_page_id");
  CREATE INDEX "_pages_v_blocks_featured_resources_order_idx" ON "_pages_v_blocks_featured_resources" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_featured_resources_parent_id_idx" ON "_pages_v_blocks_featured_resources" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_featured_resources_path_idx" ON "_pages_v_blocks_featured_resources" USING btree ("_path");
  CREATE INDEX "services_blocks_blogs_order_idx" ON "services_blocks_blogs" USING btree ("_order");
  CREATE INDEX "services_blocks_blogs_parent_id_idx" ON "services_blocks_blogs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_blogs_path_idx" ON "services_blocks_blogs" USING btree ("_path");
  CREATE INDEX "services_blocks_services_tabs_order_idx" ON "services_blocks_services_tabs" USING btree ("_order");
  CREATE INDEX "services_blocks_services_tabs_parent_id_idx" ON "services_blocks_services_tabs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_tabs_path_idx" ON "services_blocks_services_tabs" USING btree ("_path");
  CREATE INDEX "services_blocks_services_tabs_empty_state_empty_state_icon_idx" ON "services_blocks_services_tabs" USING btree ("empty_state_icon_id");
  CREATE INDEX "services_blocks_featured_resources_resources_order_idx" ON "services_blocks_featured_resources_resources" USING btree ("_order");
  CREATE INDEX "services_blocks_featured_resources_resources_parent_id_idx" ON "services_blocks_featured_resources_resources" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_featured_resources_resources_image_idx" ON "services_blocks_featured_resources_resources" USING btree ("image_id");
  CREATE INDEX "services_blocks_featured_resources_resources_internal_page_idx" ON "services_blocks_featured_resources_resources" USING btree ("internal_page_id");
  CREATE INDEX "services_blocks_featured_resources_order_idx" ON "services_blocks_featured_resources" USING btree ("_order");
  CREATE INDEX "services_blocks_featured_resources_parent_id_idx" ON "services_blocks_featured_resources" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_featured_resources_path_idx" ON "services_blocks_featured_resources" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_blogs_order_idx" ON "_services_v_blocks_blogs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_blogs_parent_id_idx" ON "_services_v_blocks_blogs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_blogs_path_idx" ON "_services_v_blocks_blogs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_services_tabs_order_idx" ON "_services_v_blocks_services_tabs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_tabs_parent_id_idx" ON "_services_v_blocks_services_tabs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_tabs_path_idx" ON "_services_v_blocks_services_tabs" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_services_tabs_empty_state_empty_state_icon_idx" ON "_services_v_blocks_services_tabs" USING btree ("empty_state_icon_id");
  CREATE INDEX "_services_v_blocks_featured_resources_resources_order_idx" ON "_services_v_blocks_featured_resources_resources" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_featured_resources_resources_parent_id_idx" ON "_services_v_blocks_featured_resources_resources" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_featured_resources_resources_image_idx" ON "_services_v_blocks_featured_resources_resources" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_featured_resources_resources_internal_page_idx" ON "_services_v_blocks_featured_resources_resources" USING btree ("internal_page_id");
  CREATE INDEX "_services_v_blocks_featured_resources_order_idx" ON "_services_v_blocks_featured_resources" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_featured_resources_parent_id_idx" ON "_services_v_blocks_featured_resources" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_featured_resources_path_idx" ON "_services_v_blocks_featured_resources" USING btree ("_path");
  CREATE INDEX "header_nav_items_submenu_order_idx" ON "header_nav_items_submenu" USING btree ("_order");
  CREATE INDEX "header_nav_items_submenu_parent_id_idx" ON "header_nav_items_submenu" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_our_services_services" ADD CONSTRAINT "pages_blocks_our_services_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD CONSTRAINT "_pages_v_blocks_our_services_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_our_services_services" ADD CONSTRAINT "services_blocks_our_services_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_our_services_services" ADD CONSTRAINT "_services_v_blocks_our_services_services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_home_certification_badge_certification_badge_icon_idx" ON "pages_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "pages_blocks_our_services_services_icon_idx" ON "pages_blocks_our_services_services" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_hero_home_certification_badge_certification_badge_icon_idx" ON "_pages_v_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "_pages_v_blocks_our_services_services_icon_idx" ON "_pages_v_blocks_our_services_services" USING btree ("icon_id");
  CREATE INDEX "services_blocks_hero_home_certification_badge_certification_badge_icon_idx" ON "services_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "services_blocks_our_services_services_icon_idx" ON "services_blocks_our_services_services" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_hero_home_certification_badge_certification_badge_icon_idx" ON "_services_v_blocks_hero_home" USING btree ("certification_badge_icon_id");
  CREATE INDEX "_services_v_blocks_hero_services_images_images_main_image_idx" ON "_services_v_blocks_hero_services" USING btree ("images_main_image_id");
  CREATE INDEX "_services_v_blocks_hero_services_images_images_overlay_icon_idx" ON "_services_v_blocks_hero_services" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_services_v_blocks_hero_service_images_images_overlay_icon_idx" ON "_services_v_blocks_hero_service" USING btree ("images_overlay_icon_id");
  CREATE INDEX "_services_v_blocks_our_services_services_icon_idx" ON "_services_v_blocks_our_services_services" USING btree ("icon_id");
  CREATE INDEX "_services_v_blocks_case_studies_case_studies_internal_page_idx" ON "_services_v_blocks_case_studies_case_studies" USING btree ("internal_page_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  ALTER TABLE "pages_blocks_our_services_services" DROP COLUMN "icon_hovered_id";
  ALTER TABLE "pages_blocks_our_services_services" DROP COLUMN "icon_normal_id";
  ALTER TABLE "pages_blocks_contact_form" DROP COLUMN "content_note";
  ALTER TABLE "pages_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP COLUMN "icon_hovered_id";
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP COLUMN "icon_normal_id";
  ALTER TABLE "_pages_v_blocks_contact_form" DROP COLUMN "content_note";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "services_blocks_our_services_services" DROP COLUMN "icon_hovered_id";
  ALTER TABLE "services_blocks_our_services_services" DROP COLUMN "icon_normal_id";
  ALTER TABLE "services_blocks_contact_form" DROP COLUMN "content_note";
  ALTER TABLE "services_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "_services_v_blocks_our_services_services" DROP COLUMN "icon_hovered_id";
  ALTER TABLE "_services_v_blocks_our_services_services" DROP COLUMN "icon_normal_id";
  ALTER TABLE "_services_v_blocks_contact_form" DROP COLUMN "content_note";
  ALTER TABLE "_services_v_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "header_nav_items" DROP COLUMN "use_mega_menu";
  ALTER TABLE "footer_rels" DROP COLUMN "services_id";
  DROP TYPE "public"."enum_pages_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum_pages_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum_pages_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum_pages_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum_pages_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum_pages_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum_pages_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum_pages_blocks_info_layout_image_position";
  DROP TYPE "public"."enum_pages_blocks_info_layout_background_color";
  DROP TYPE "public"."enum_pages_blocks_info_layout_spacing";
  DROP TYPE "public"."enum_pages_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum_pages_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum_pages_blocks_resources_industries";
  DROP TYPE "public"."enum_pages_blocks_resources_populate_by";
  DROP TYPE "public"."enum_pages_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum_pages_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum_pages_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum_pages_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum_pages_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum_pages_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum__pages_v_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum__pages_v_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum__pages_v_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum__pages_v_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum__pages_v_blocks_info_layout_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_info_layout_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_info_layout_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum__pages_v_blocks_resources_industries";
  DROP TYPE "public"."enum__pages_v_blocks_resources_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum__pages_v_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum__pages_v_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum_services_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum_services_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum_services_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum_services_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum_services_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum_services_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum_services_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum_services_blocks_info_layout_image_position";
  DROP TYPE "public"."enum_services_blocks_info_layout_background_color";
  DROP TYPE "public"."enum_services_blocks_info_layout_spacing";
  DROP TYPE "public"."enum_services_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum_services_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum_services_blocks_resources_industries";
  DROP TYPE "public"."enum_services_blocks_resources_populate_by";
  DROP TYPE "public"."enum_services_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum_services_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum_services_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum_services_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum_services_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum_services_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum__services_v_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum__services_v_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum__services_v_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum__services_v_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum__services_v_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum__services_v_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum__services_v_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum__services_v_blocks_info_layout_image_position";
  DROP TYPE "public"."enum__services_v_blocks_info_layout_background_color";
  DROP TYPE "public"."enum__services_v_blocks_info_layout_spacing";
  DROP TYPE "public"."enum__services_v_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum__services_v_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum__services_v_blocks_resources_industries";
  DROP TYPE "public"."enum__services_v_blocks_resources_populate_by";
  DROP TYPE "public"."enum__services_v_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum__services_v_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum__services_v_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum__services_v_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum__services_v_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum__services_v_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum_case_studies_categories";
  DROP TYPE "public"."enum_case_studies_blocks_hero_home_buttons_style";
  DROP TYPE "public"."enum_case_studies_blocks_hero_services_cta_button_style";
  DROP TYPE "public"."enum_case_studies_blocks_hero_service_cta_button_style";
  DROP TYPE "public"."enum_case_studies_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_case_studies_blocks_content_columns_size";
  DROP TYPE "public"."enum_case_studies_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_case_studies_blocks_archive_populate_by";
  DROP TYPE "public"."enum_case_studies_blocks_archive_relation_to";
  DROP TYPE "public"."enum_case_studies_blocks_our_services_layout_bg_color";
  DROP TYPE "public"."enum_case_studies_blocks_our_services_layout_columns";
  DROP TYPE "public"."enum_case_studies_blocks_our_services_style_padding";
  DROP TYPE "public"."enum_case_studies_blocks_our_services_style_radius";
  DROP TYPE "public"."enum_case_studies_blocks_our_services_style_icon_size";
  DROP TYPE "public"."enum_case_studies_blocks_industries_buttons_style";
  DROP TYPE "public"."enum_case_studies_blocks_industries_layout_bg_color";
  DROP TYPE "public"."enum_case_studies_blocks_industries_layout_text_color";
  DROP TYPE "public"."enum_case_studies_blocks_industries_layout_image_position";
  DROP TYPE "public"."enum_case_studies_blocks_industries_behavior_animation_speed";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_layout_bg_color";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_layout_stats_columns";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_layout_header_layout";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_style_stat_value_color";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_style_text_theme";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_style_logo_size";
  DROP TYPE "public"."enum_case_studies_blocks_portfolio_style_stats_size";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_case_studies_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_content_type";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_post_settings_sort_by";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_layout_bg_color";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_layout_columns";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_layout_card_layout";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_style_text_theme";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_style_image_background";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_style_tag_color";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_style_card_radius";
  DROP TYPE "public"."enum_case_studies_blocks_case_studies_cta_style";
  DROP TYPE "public"."enum_case_studies_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum_case_studies_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum_case_studies_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum_case_studies_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum_case_studies_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum_case_studies_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum_case_studies_blocks_info_layout_image_position";
  DROP TYPE "public"."enum_case_studies_blocks_info_layout_background_color";
  DROP TYPE "public"."enum_case_studies_blocks_info_layout_spacing";
  DROP TYPE "public"."enum_case_studies_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum_case_studies_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum_case_studies_blocks_resources_industries";
  DROP TYPE "public"."enum_case_studies_blocks_resources_populate_by";
  DROP TYPE "public"."enum_case_studies_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum_case_studies_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum_case_studies_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum_case_studies_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum_case_studies_industry";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_categories";
  DROP TYPE "public"."enum__case_studies_v_blocks_hero_home_buttons_style";
  DROP TYPE "public"."enum__case_studies_v_blocks_hero_services_cta_button_style";
  DROP TYPE "public"."enum__case_studies_v_blocks_hero_service_cta_button_style";
  DROP TYPE "public"."enum__case_studies_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__case_studies_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__case_studies_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__case_studies_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__case_studies_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__case_studies_v_blocks_our_services_layout_bg_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_our_services_layout_columns";
  DROP TYPE "public"."enum__case_studies_v_blocks_our_services_style_padding";
  DROP TYPE "public"."enum__case_studies_v_blocks_our_services_style_radius";
  DROP TYPE "public"."enum__case_studies_v_blocks_our_services_style_icon_size";
  DROP TYPE "public"."enum__case_studies_v_blocks_industries_buttons_style";
  DROP TYPE "public"."enum__case_studies_v_blocks_industries_layout_bg_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_industries_layout_text_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_industries_layout_image_position";
  DROP TYPE "public"."enum__case_studies_v_blocks_industries_behavior_animation_speed";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_bg_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_stats_columns";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_layout_header_layout";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_style_stat_value_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_style_text_theme";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_style_logo_size";
  DROP TYPE "public"."enum__case_studies_v_blocks_portfolio_style_stats_size";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_case_studies_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_content_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_post_settings_sort_by";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_bg_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_columns";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_layout_card_layout";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_style_text_theme";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_style_image_background";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_style_tag_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_style_card_radius";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_studies_cta_style";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_sctabs_services_lk_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_sctabs_services_lk_link_aprnce";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_layout_bg_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_layout_ctner_spacing";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_layout_tabs_layout";
  DROP TYPE "public"."enum__case_studies_v_blocks_srv_layout_grid_cols";
  DROP TYPE "public"."enum__case_studies_v_blocks_image_text_section_layout_img_pos";
  DROP TYPE "public"."enum__case_studies_v_blocks_info_layout_image_position";
  DROP TYPE "public"."enum__case_studies_v_blocks_info_layout_background_color";
  DROP TYPE "public"."enum__case_studies_v_blocks_info_layout_spacing";
  DROP TYPE "public"."enum__case_studies_v_blocks_it_experts_layout_image_position";
  DROP TYPE "public"."enum__case_studies_v_blocks_testimonials_layout_slide_layout";
  DROP TYPE "public"."enum__case_studies_v_blocks_resources_industries";
  DROP TYPE "public"."enum__case_studies_v_blocks_resources_populate_by";
  DROP TYPE "public"."enum__case_studies_v_blocks_resources_see_more_btn_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_resources_see_more_btn_link_aprnce";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_study_cn_sb_btn_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_case_study_cn_sb_btn_link_aprnce";
  DROP TYPE "public"."enum__case_studies_v_blocks_services_more_cards_link_type";
  DROP TYPE "public"."enum__case_studies_v_blocks_services_more_cards_link_aprnce";
  DROP TYPE "public"."enum__case_studies_v_version_industry";
  DROP TYPE "public"."enum__case_studies_v_version_status";
  DROP TYPE "public"."enum_header_nav_items_mega_menu_sections_items_link_type";`)
}
