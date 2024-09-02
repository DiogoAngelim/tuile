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


add_action( 'enqueue_block_editor_assets', 'gb_block_editor_assets' );

function gb_block_editor_assets() {
	wp_enqueue_script(
		'gb-tailwind',
		plugin_dir_url( __FILE__ ) . 'tailwind.js',
		array( 'wp-blocks', 'wp-element' ),
		'3.4.5'
	);

	wp_localize_script( 'gb-tailwind', 'plugin_url', array( 'url' => plugin_dir_url( __FILE__ ) ) );

	wp_enqueue_style(
		'editor-styles',
		plugin_dir_url( __FILE__ ) . 'editor-styles.css',
		array(),
		'1.0.0'
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
		"logo-clouds",
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
		"footer",
		"common"
	);

	foreach( $custom as $cat ) {

		$categories[] = array(
			'slug'  => $cat,
			'title' => $cat
		);
	}

	return $categories;
} );



require_once( GB_DIR . '/components/ecommerce/page-examples/category-pages/with-text-header-and-simple-product-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/category-pages/with-large-images-and-filters-sidebar/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/category-pages/with-text-header-and-image-product-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/category-pages/with-image-header-and-detail-product-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/category-pages/with-product-grid-and-pagination/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/product-pages/with-expandable-product-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/product-pages/with-related-products/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/product-pages/with-image-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/product-pages/with-tabs-and-related-products/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/product-pages/with-featured-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/shopping-cart-pages/simple-with-policy-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/shopping-cart-pages/with-related-products/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/shopping-cart-pages/with-policy-grid-and-extended-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-history-pages/with-invoice-panels/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-history-pages/with-invoice-tables/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-history-pages/simple/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-history-pages/with-invoice-list/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-history-pages/with-invoice-list-and-quick-actions/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/with-order-summary-sidebar/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/multi-step/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/with-mobile-order-summary-overlay/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/split-with-order-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/single-step-with-order-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/checkout-pages/single-step-with-order-summary/node_modules/terser/tools/props/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/storefront-pages/with-dark-nav-and-footer/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/storefront-pages/with-offers-and-testimonials/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/storefront-pages/with-image-tiles-and-feature-sections/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/storefront-pages/with-overlapping-image-tiles-and-perks/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-detail-pages/with-large-images-and-progress-bars/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-detail-pages/with-progress-bars/index.php' );
require_once( GB_DIR . '/components/ecommerce/page-examples/order-detail-pages/simple-with-full-order-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-tiered-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-alternating-sections/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-split-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-image-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-square-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-header--images--and-descriptions/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-tabs/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-fading-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-features/with-wide-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-quickviews/with-large-size-selector/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-quickviews/with-color-selector--size-selector--and-details-link/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-quickviews/with-color-selector-and-description/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-quickviews/with-color-and-size-selector/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-illustrations-and-split-header/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-icons-and-supporting-text/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-illustrations-and-heading/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-illustrations-and-centered-text/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/2x2-grid-with-illustrations/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/4-column-with-illustrations/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-illustrations-and-header/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/incentives/3-column-with-icons/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-overviews/with-tiered-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-overviews/with-image-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-overviews/with-image-gallery-and-expandable-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-overviews/with-tabs/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-overviews/split-with-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/with-image-backgrounds/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/three-column-with-description/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/three-column/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/with-split-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/with-scrolling-cards/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-previews/with-background-image-and-detail-overlay/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/store-navigation/with-simple-menu-and-promo/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/store-navigation/with-centered-logo-and-featured-categories/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/store-navigation/with-featured-categories/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/store-navigation/with-image-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/store-navigation/with-double-column-and-persistent-mobile-nav/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-summaries/with-large-images-and-progress-bars/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-summaries/with-split-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-summaries/with-progress-bars/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-summaries/simple-with-full-order-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/full-width-with-background-image-and-large-content/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/with-background-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/with-image-tiles/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/with-overlapping-image-tiles/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/full-width-with-overlapping-image-tiles/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/with-offers-and-split-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/full-width-with-background-image/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/promo-sections/with-fading-background-image-and-testimonials/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/checkout-forms/with-order-summary-sidebar/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/checkout-forms/multi-step/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/checkout-forms/with-mobile-order-summary-overlay/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/checkout-forms/split-with-order-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/checkout-forms/single-step-with-order-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-filters/with-dropdown-product-filters/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-filters/with-expandable-product-filter-panel/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-filters/with-centered-text-and-dropdown-product-filters/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-filters/sidebar-filters/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/category-filters/with-inline-actions-and-expandable-sidebar-filters/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-tall-images/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-inline-price-and-cta-link/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-inline-price/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-tall-images-and-cta-link/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/card-with-full-details/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/simple/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-cta-link/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-border-grid/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-image-overlay-and-add-button/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-color-swatches-and-horizontal-scrolling/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/product-lists/with-supporting-text/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-history/invoice-panels/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-history/invoice-list-with-quick-actions/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-history/invoice-list/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/order-history/invoice-table/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/single-column/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/popover/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/two-column-with-quantity-dropdown/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/with-extended-summary/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/modal/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/shopping-carts/slide-over/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/reviews/with-summary-chart/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/reviews/multi-column/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/reviews/simple-with-avatars/index.php' );
require_once( GB_DIR . '/components/ecommerce/components/reviews/avatars-with-separate-description/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-feature-list/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-three-tiers-and-feature-comparison/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-four-tiers-and-feature-list/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-comparison-table/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-split-brand-panel/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/pricing-pages/with-three-tiers-and-testimonial/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/contact-pages/split-with-image-and-centered-cta-section/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/contact-pages/side-by-side-grid-and-newsletter/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/contact-pages/simple-with-brand-contact-panel/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/contact-pages/with-overlapping-cards/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/landing-pages/background-image-hero-with-alternating-features/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/landing-pages/illustrated-hero-with-screenshot-section/index.php' );
require_once( GB_DIR . '/components/marketing/page-examples/landing-pages/simple-with-offset-screenshot-hero/index.php' );
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
require_once( GB_DIR . '/components/marketing/feedback/404-pages/with-navbar-and-footer/index.php' );
require_once( GB_DIR . '/components/marketing/feedback/404-pages/with-popular-pages/index.php' );
require_once( GB_DIR . '/components/marketing/feedback/404-pages/with-background-image/index.php' );
require_once( GB_DIR . '/components/marketing/feedback/404-pages/simple-with-logo/index.php' );
require_once( GB_DIR . '/components/marketing/feedback/404-pages/simple/index.php' );
require_once( GB_DIR . '/components/marketing/feedback/404-pages/split-with-image/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/stacked-with-footer-list/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/full-width-two-columns/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/full-width/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/simple/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/two-column-with-solid-icons/index.php' );
require_once( GB_DIR . '/components/marketing/elements/flyout-menus/stacked-with-footer-actions/index.php' );
require_once( GB_DIR . '/components/marketing/elements/banners/header-centered/index.php' );
require_once( GB_DIR . '/components/marketing/elements/banners/sticky-footer/index.php' );
require_once( GB_DIR . '/components/marketing/elements/banners/header-banner/index.php' );
require_once( GB_DIR . '/components/marketing/elements/banners/floating-at-bottom/index.php' );
require_once( GB_DIR . '/components/marketing/elements/headers/simple-links-on-left/index.php' );
require_once( GB_DIR . '/components/marketing/elements/headers/with-full-width-flyouts/index.php' );
require_once( GB_DIR . '/components/marketing/elements/headers/simple-branded-with-stacked-links/index.php' );
require_once( GB_DIR . '/components/marketing/elements/headers/simple-links-centered/index.php' );
require_once( GB_DIR . '/components/marketing/elements/headers/centered-with-bottom-border/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/home-screens/with-secondary-nav-and-tertiary-column/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/home-screens/full-width-with-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/home-screens/card-layout-with-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/home-screens/constrained-multi-column/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/home-screens/constrained-grid-layout/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/file-gallery/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/multi-column-inbox/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/with-page-heading-and-stacked-list/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/stacked-card-layout/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/multi-column-directory/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/detail-screens/constrained-with-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/settings-screens/with-sidebar-navigation-and-constrained-content-area/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/settings-screens/brand-nav-with-overlap-and-sidebar-form/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/settings-screens/with-breadcrumbs-and-centered-form/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/settings-screens/with-tiered-sidebar-navigation/index.php' );
require_once( GB_DIR . '/components/application-ui/page-examples/settings-screens/with-sidebar-navigation-and-two-column-form/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/sign-in-forms/split-screen/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/sign-in-forms/simple-no-labels/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/sign-in-forms/simple-card/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/textareas/with-title-and-pill-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/textareas/with-preview-button/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/textareas/with-avatar-and-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/textareas/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/textareas/with-underline-and-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/custom-with-check-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/with-secondary-text/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/custom-with-avatar/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/simple-custom/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/simple-native/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/branded-with-supported-text/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/select-menus/custom-with-status-indicator/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/checkboxes/list-with-inline-description/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/checkboxes/list-with-description/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/checkboxes/simple-list-with-heading/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/checkboxes/list-with-checkbox-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-button-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-toggle/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-well/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/simple-well/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-button-at-top-right/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-input/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/action-panels/with-link/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/toggles/with-left-label-and-description/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/toggles/simple-toggle/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/toggles/toggle-with-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/toggles/short-toggle/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/toggles/with-right-label/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/comboboxes/with-secondary-text/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/comboboxes/with-status-indicator/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/comboboxes/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/comboboxes/with-check-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/comboboxes/with-imageurl/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-label/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-overlapping-label/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-inline-leading-and-trailing-add-ons/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-validation-error/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/inputs-with-inset-labels-and-shared-borders/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-leading-icon-and-trailing-button/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-trailing-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-inline-add-on/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-corner-hint/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-add-on/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-gray-background-and-bottom-border/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-inline-leading-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-leading-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-inset-label/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-label-and-help-text/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-pill-shape/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/inputs-with-shared-borders/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-inline-leading-add-on-and-trailing-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-keyboard-shortcut/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/input-groups/input-with-hidden-label/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/stacked-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/simple-list-with-radio-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/simple-list/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/list-with-descriptions-in-panel/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/list-with-inline-description/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/cards/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/list-with-description/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/simple-table/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/simple-inline-list/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/small-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/list-with-radio-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/radio-groups/color-picker/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/form-layouts/two-column-in-full-width-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/form-layouts/labels-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/form-layouts/two-column-cards-with-separate-submit-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/form-layouts/simple-stacked/index.php' );
require_once( GB_DIR . '/components/application-ui/forms/form-layouts/two-column-cards-with-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-vertical-lines/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-stacked-columns-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-hidden-columns-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-sortable-headings/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-striped-rows/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-summary-rows/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-avatars-and-multi-line-content/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-checkboxes/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/full-width/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/simple-striped/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-sticky-header/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-white-background/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-grouped-rows/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-uppercase-headings/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-white-background-and-borders/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/tables/with-condensed-content/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/content-links-with-action/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/with-sticky-headings/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/two-column-with-avatar/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/with-right-justified-avatar-group/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/avatar-groups-with-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/narrow-with-avatar-group/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/with-truncated-content-preview/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/stacked-lists/with-right-justified-second-column/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/feeds/stacked-with-avatars/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/feeds/simple-with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/feeds/with-multiple-item-types/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/actions-with-shared-borders/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/horizontal-link-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/simple-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/images-with-details/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/contact-cards-with-small-portraits/index.php' );
require_once( GB_DIR . '/components/application-ui/lists/grid-lists/contact-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/with-branded-header/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/with-background-overlay/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/empty/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/contact-list-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/wide-create-project-form-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/wide-empty/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/with-sticky-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/create-project-form-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/with-close-button-on-outside/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/user-profile-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/file-details-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/slide-overs/wide-horizontal-user-profile-example/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/simple-alert-with-left-aligned-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/simple-with-gray-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/centered-with-single-action/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/simple-alert/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/centered-with-wide-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/modals/simple-with-dismiss-button/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/with-avatar/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/with-buttons-below/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/condensed/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/with-split-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/overlays/notifications/with-actions-below/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/well/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card-with-header/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card-with-header-and-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/basic-card/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card-with-gray-body/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/well-on-gray/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/well--edge-to-edge-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card-with-gray-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card-with-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/panels/card--edge-to-edge-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-button/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-title-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-title/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-toolbar/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-title-and-button/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-label-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/dividers/with-label/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/basic-responsive/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/aligned-to-center/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/stretched-to-fit/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/basic/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/media-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/wide-responsive/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/aligned-to-bottom/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/media-objects/nested/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/containers/constrained-to-breakpoint-with-padded-content/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/containers/narrow-constrained-with-padded-content/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/containers/constrained-with-padded-content/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/containers/full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/containers/full-width-on-mobile--constrained-with-padded-content-above/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/separate-cards/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/card-with-dividers/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/card-with-dividers--full-width-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/separate-cards--full-width-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/flat-card-with-dividers/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/simple-with-dividers/index.php' );
require_once( GB_DIR . '/components/application-ui/layout/list-containers/simple-with-dividers--full-width-on-mobile/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-in-pills-on-gray/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-in-pills/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/full-width-tabs-with-underline/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-with-underline-and-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-with-underline/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-with-underline-and-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/bar-with-underline/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/tabs/tabs-in-pills-with-brand-color/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/pagination/simple-card-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/pagination/card-footer-with-page-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/pagination/centered-page-numbers/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/brand-with-icons--badges--and-profile-section/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/simple-with-icons--badges--and-profile-section/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/simple-with-icons-and-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/simple-with-icons-and-brand-color/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/with-secondary-navigation/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/dark-with-icons--badges--and-profile-section/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/with-icons-and-expandable-sections/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/sidebar-navigation/with-expandable-sections/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/with-images-and-descriptions/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/dark-with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/with-preview/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/semi-transparent-with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/simple-with-padding/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/with-footer/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/command-palettes/with-groups/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/bullets/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/circles/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/progress-bar/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/panels/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/circles-with-text/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/panels-with-border/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/steps/bullets-and-text/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/breadcrumbs/contained/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/breadcrumbs/full-width-bar/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/breadcrumbs/simple-with-slashes/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/breadcrumbs/simple-with-chevrons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/with-icons-and-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/on-gray/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/with-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/vertical-navigation/with-secondary-navigation/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/dark-with-search/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/dark-with-quick-action/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/with-search/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/with-search-in-column-layout/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/simple-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/with-centered-search-and-secondary-links/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/with-quick-action/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/simple-dark-with-menu-button-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/simple-with-menu-button-on-left/index.php' );
require_once( GB_DIR . '/components/application-ui/navigation/navbars/with-centered-search-and-secondary-links-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-dismiss-button/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-link-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-description/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-list/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/alerts/with-accent-border/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/with-dashed-border/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/with-starting-points/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/with-recommendations-grid/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/with-templates/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/feedback/empty-states/with-recommendations/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/with-action/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/with-avatar--meta--and-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/with-avatar-and-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/with-description/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/card-headings/with-description-and-action/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/card-with-avatar-and-stats/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-actions-on-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-actions-and-breadcrumbs-on-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-avatar-and-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-meta-and-actions-on-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-banner-image/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-meta-and-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-meta--actions--and-breadcrumbs/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-meta--actions--and-breadcrumbs-on-dark/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/page-headings/with-actions-and-breadcrumbs/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-badge-and-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-action/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-tabs/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-actions-and-tabs/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-description/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-input-group/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-inline-tabs/index.php' );
require_once( GB_DIR . '/components/application-ui/headings/section-headings/with-label/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/secondary-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/primary-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/button-with-trailing-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/circular-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/white-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/round-buttons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/buttons/button-with-leading-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/button-groups/with-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/button-groups/basic/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/button-groups/with-checkbox-and-dropdown/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/button-groups/icon-only/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/button-groups/with-stat/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/dropdowns/with-icons/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/dropdowns/with-dividers/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/dropdowns/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/dropdowns/with-simple-header/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/dropdowns/with-minimal-menu-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/circular-avatars-with-bottom-notification/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/circular-avatars-with-placeholder-initials/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/rounded-avatars/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/rounded-avatars-with-top-notification/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/avatar-group-stacked-bottom-to-top/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/circular-avatars-with-top-notification/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/circular-avatars/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/circular-avatars-with-placeholder-icon/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/with-text/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/avatar-group-stacked-top-to-bottom/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/avatars/rounded-avatars-with-bottom-notification/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/basic-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/badge-with-remove-button/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/large-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/badge-with-dot/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/rounded-badges-with-dot/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/large-rounded-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/elements/badges/rounded-badges/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/light-sidebar-with-constrained-content-area/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/light-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/light-sidebar-with-light-background/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/dark-sidebar-with-light-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/dark-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/brand-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/brand-sidebar-with-light-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/sidebar/light-sidebar-with-light-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/light-nav-on-gray-background/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/branded-nav-with-white-page-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/branded-nav-with-compact-white-page-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/two-row-navigation-with-overlap/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/dark-nav-with-overlap/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/brand-nav-with-overlap/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/dark-nav-with-compact-white-page-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/dark-nav-with-white-page-header/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/stacked/light-nav-with-bottom-border/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/full-width-with-narrow-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/full-width-with-narrow-sidebar-and-secondary-column-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/full-width-with-narrow-branded-sidebar/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/full-width-secondary-column-on-right/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/full-width-three-column/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/constrained-three-column/index.php' );
require_once( GB_DIR . '/components/application-ui/application-shells/multi-column/constrained-with-sticky-columns/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/month-view/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/year-view/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/borderless-stacked/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/day-view/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/double/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/small-with-meetings/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/borderless-side-by-side/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/calendars/week-view/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/description-lists/left-aligned-with-inline-actions/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/description-lists/left-aligned/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/description-lists/left-aligned-in-card/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/description-lists/two-column-in-card/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/description-lists/left-aligned-striped-in-card/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/stats/with-shared-borders/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/stats/simple/index.php' );
require_once( GB_DIR . '/components/application-ui/data-display/stats/with-brand-icon/index.php' );