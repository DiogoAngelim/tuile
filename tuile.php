<?php
/**
 * Plugin Name: Tuile
 * Plugin URI: https://github.com/DiogoAngelim/tuile
 * Description: A library of blocks for the WP Gutenbergerg project.
 * Author URI: https://github.com/DiogAangelim/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'GB_VERSION' ) ) {
	define( 'GB_VERSION', '1.0.0' );
}

if ( ! defined( 'GB_NAME' ) ) {
	define( 'GB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'GB_DIR' ) ) {
	define( 'GB_DIR', WP_PLUGIN_DIR . '/' . GB_NAME );
}

if ( ! defined( 'GB_URL' ) ) {
	define( 'GB_URL', WP_PLUGIN_URL . '/' . GB_NAME );
}



function prefix_remove_core_block_styles() {
	global $wp_styles;

	foreach ( $wp_styles->queue as $key => $handle ) {
		if ( strpos( $handle, 'wp-block-' ) === 0 ) {
			wp_dequeue_style( $handle );
		}
	}
}
add_action( 'wp_enqueue_scripts', 'prefix_remove_core_block_styles' );

add_action(
	'wp_default_styles',
	function( $styles ) {

		/* Create an array with the two handles wp-block-library and
		 * wp-block-library-theme.
		 */
		$handles = [ 'wp-block-library', 'wp-block-library-theme' ];

		foreach ( $handles as $handle ) {
			// Search and compare with the list of registered style handles:
			$style = $styles->query( $handle, 'registered' );
			if ( ! $style ) {
				continue;
			}
			// Remove the style
			$styles->remove( $handle );
			// Remove path and dependencies
			$styles->add( $handle, false, [] );
		}
	},
	PHP_INT_MAX
);


remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 );
remove_filter( 'render_block', 'gutenberg_render_layout_support_flag', 10, 2 );
remove_filter( 'render_block', 'wp_render_elements_support', 10, 2 );
remove_filter( 'render_block', 'gutenberg_render_elements_support', 10, 2 );

function prefix_remove_global_styles() {
	wp_dequeue_style( 'global-styles' );
} 
add_action( 'wp_enqueue_scripts', 'prefix_remove_global_styles', 100 );

add_action( 'enqueue_block_editor_assets', 'gb_block_editor_assets' );

function gb_block_editor_assets() {
	wp_enqueue_script(
		'gb-tailwind',
		plugin_dir_url( __FILE__ ) . 'tailwind.js',
		array( 'wp-blocks', 'wp-element' ),
		'3.4.5'
	);

	wp_localize_script( 'gb-tailwind', 'plugin_url', array( 'url' => plugin_dir_url( __FILE__ ) ) );

	$filepath = plugin_dir_url(__FILE__) . 'scripts.js';
	$version = file_exists($filepath) ? filemtime($filepath) : time();

	wp_enqueue_script(
		'gb-scripts',
		plugin_dir_url( __FILE__ ) . 'scripts.js',
		array(),
		$version
	);

	$filepath = plugin_dir_url(__FILE__) . 'editor-styles.css';
	$version = file_exists($filepath) ? filemtime($filepath) : time();

	wp_enqueue_style(
		'editor-styles',
		plugin_dir_url( __FILE__ ) . 'editor-styles.css',
		array(),
		$version
	);
}


add_action( 'wp_enqueue_scripts', 'gb_enqueue_frontend_assets' );

function gb_enqueue_frontend_assets() {
	$filepath = plugin_dir_url(__FILE__) . 'tailwind.js';
	$version = file_exists($filepath) ? filemtime($filepath) : time();

	wp_enqueue_script(
		'gb-tailwindcss',
		plugins_url( 'tailwind.js', __FILE__ ),
		array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
		$version
	);

	$filepath = plugin_dir_url(__FILE__) . 'editor-styles.css';
	$version = file_exists($filepath) ? filemtime($filepath) : time();

	wp_enqueue_style(
		'gb-editor-styles',
		plugin_dir_url( __FILE__ ) . 'editor-styles.css',
		array(),
		$version
	);
}


add_filter( 'block_categories_all' , function( $categories ) {

	$custom = array(
		"heroes",
		"header",
		"logo clouds",
		"feature",
		"testimonials",
		"content",
		"blog",
		"team",
		"newsletter",
		"stats",
		"cta",
		"pricing",
		"faq",
		"contact",
		"footer"
	);

	foreach( $custom as $cat ) {

		$categories[] = array(
			'slug'  => $cat,
			'title' => $cat
		);
	}

	return $categories;
} );


require_once( GB_DIR . '/components/marketing/sections/stats-sections/simple-in-card/index.php' );
require_once( GB_DIR . '/components/marketing/sections/stats-sections/with-fading-background-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/stats-sections/simple-on-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/stats-sections/split-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/simple-stacked/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/with-paragraph-on-dark/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/with-description-on-brand-card/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/centered-card-with-graphic/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/with-paragraph-on-brand-card/index.php' );
require_once( GB_DIR . '/components/marketing/sections/newsletter-sections/simple-with-description/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/split-two-tone/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/simple-two-column/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/side-by-side-grid/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/split-brand-panel/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/split-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/contact-sections/simple-four-column/index.php' );
require_once( GB_DIR . '/components/marketing/sections/testimonials/with-large-avatar/index.php' );
require_once( GB_DIR . '/components/marketing/sections/testimonials/with-background-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/testimonials/simple-centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/testimonials/side-by-side-on-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/testimonials/with-overlapping-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/grid-with-large-round-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/full-width-with-vertical-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/with-image-and-short-paragraph/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/dark-version-with-large-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/with-vertical-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/with-small-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/grid-with-round-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/team-sections/with-large-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/dark-with-illustration/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/split-with-screenshot/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/simple-centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/with-sign-in-form/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/with-angled-image-on-right/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/card-with-background-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/index/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/split-with-navbar/index.php' );
require_once( GB_DIR . '/components/marketing/sections/heroes/with-app-screenshot/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/4-column-with-company-mission/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/4-column-with-newsletter/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/simple-centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/social-links-only/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/4-column-with-newsletter-and-localization-dark/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/4-column-with-newsletter-dark/index.php' );
require_once( GB_DIR . '/components/marketing/sections/footers/4-column-with-newsletter-and-localization/index.php' );
require_once( GB_DIR . '/components/marketing/sections/blog-sections/2-column-with-sign-up/index.php' );
require_once( GB_DIR . '/components/marketing/sections/blog-sections/3-column-cards/index.php' );
require_once( GB_DIR . '/components/marketing/sections/blog-sections/3-column-with-badges/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/two-columns-with-description-on-dark/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/side-by-side/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/two-columns-with-description/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/three-columns/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/centered-accordion/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/offset-with-supporting-text/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/two-columns/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/two-columns-on-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/faq-sections/three-columns-with-introduction/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/with-testimonial-and-stats/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/two-columns-with-testimonial/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/two-columns/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/two-columns-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/content-sections/split-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/simple-three-column/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/alternative-side-by-side-with-images/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/with-large-screenshot/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/4x2-grid-on-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/with-feature-list/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/with-feature-grid-list/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/offset-2x2-grid/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/grid-with-offset-icons/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/centered-2x2-grid/index.php' );
require_once( GB_DIR . '/components/marketing/sections/feature-sections/alternating-with-optional-testimonial/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/brand-panel-with-app-screenshot/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/simple-stacked/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/simple-centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/simple-justified/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/simple-justified-on-light-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/brand-panel-with-overlapping-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/simple-center-branded/index.php' );
require_once( GB_DIR . '/components/marketing/sections/cta-sections/split-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/four-tiers-with-toggle/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/three-tiers-on-brand-and-feature-comparison/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/three-tiers-with-emphasized-tier/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/single-price-with-feature-list/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/single-price-with-details/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/with-comparison-table/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/split-with-brand-panel/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/two-tiers-with-extra-tier/index.php' );
require_once( GB_DIR . '/components/marketing/sections/pricing/three-tiers/index.php' );
require_once( GB_DIR . '/components/marketing/sections/logo-clouds/off-white-grid/index.php' );
require_once( GB_DIR . '/components/marketing/sections/logo-clouds/simple-with-heading/index.php' );
require_once( GB_DIR . '/components/marketing/sections/logo-clouds/simple-with-heading-on-brand/index.php' );
require_once( GB_DIR . '/components/marketing/sections/logo-clouds/simple/index.php' );
require_once( GB_DIR . '/components/marketing/sections/logo-clouds/split-with-grid-on-right/index.php' );
require_once( GB_DIR . '/components/marketing/sections/header/simple-with-select-menu-dark/index.php' );
require_once( GB_DIR . '/components/marketing/sections/header/with-background-image-and-overlapping-cards/index.php' );
require_once( GB_DIR . '/components/marketing/sections/header/simple-centered/index.php' );
require_once( GB_DIR . '/components/marketing/sections/header/simple-with-select-menu/index.php' );
require_once( GB_DIR . '/components/marketing/sections/header/branded-with-background-image/index.php' );