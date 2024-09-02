
    <?php
    /*
      * Plugin Name:       with_mobile_order_summary_overlay
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncVhF_with_mobile_order_summary_overlayfuncMLy_editor_assets' );

      function wpfuncVhF_with_mobile_order_summary_overlayfuncMLy_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-mobile-order-summary-overlay',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-mobile-order-summary-overlay', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-mobile-order-summary-overlay-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncVhF_with_mobile_order_summary_overlayfuncMLy_block_assets' );

    function wpfuncVhF_with_mobile_order_summary_overlayfuncMLy_block_assets() {
      $args = array(
        'handle' => 'wp-with-mobile-order-summary-overlay-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-mobile-order-summary-overlay',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-mobile-order-summary-overlay-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-mobile-order-summary-overlay-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    