
    <?php
    /*
      * Plugin Name:       three_tiers_on_brand_and_feature_comparison
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncBdi_three_tiers_on_brand_and_feature_comparisonfunceOe_editor_assets' );

      function wpfuncBdi_three_tiers_on_brand_and_feature_comparisonfunceOe_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-three-tiers-on-brand-and-feature-comparison',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-three-tiers-on-brand-and-feature-comparison', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-three-tiers-on-brand-and-feature-comparison-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncBdi_three_tiers_on_brand_and_feature_comparisonfunceOe_block_assets' );

    function wpfuncBdi_three_tiers_on_brand_and_feature_comparisonfunceOe_block_assets() {
      $args = array(
        'handle' => 'wp-three-tiers-on-brand-and-feature-comparison-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/three-tiers-on-brand-and-feature-comparison',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-three-tiers-on-brand-and-feature-comparison-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-three-tiers-on-brand-and-feature-comparison-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    