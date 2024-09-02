
    <?php
    /*
      * Plugin Name:       full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncqir_full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobilefuncFql_editor_assets' );

      function wpfuncqir_full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobilefuncFql_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncqir_full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobilefuncFql_block_assets' );

    function wpfuncqir_full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobilefuncFql_block_assets() {
      $args = array(
        'handle' => 'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-full-width-on-mobile--constrained-to-breakpoint-with-padded-content-above-mobile-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    