
    <?php
    /*
      * Plugin Name:       two_tiers_with_extra_tier
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncZoO_two_tiers_with_extra_tierfuncUik_editor_assets' );

      function wpfuncZoO_two_tiers_with_extra_tierfuncUik_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-tiers-with-extra-tier',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-tiers-with-extra-tier', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-tiers-with-extra-tier-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncZoO_two_tiers_with_extra_tierfuncUik_block_assets' );

    function wpfuncZoO_two_tiers_with_extra_tierfuncUik_block_assets() {
      $args = array(
        'handle' => 'wp-two-tiers-with-extra-tier-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-tiers-with-extra-tier',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-tiers-with-extra-tier-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-tiers-with-extra-tier-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    