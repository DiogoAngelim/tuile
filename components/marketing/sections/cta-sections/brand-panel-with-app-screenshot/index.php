
    <?php
    /*
      * Plugin Name:       brand_panel_with_app_screenshot
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncQSr_brand_panel_with_app_screenshotfuncQbm_editor_assets' );

      function wpfuncQSr_brand_panel_with_app_screenshotfuncQbm_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-brand-panel-with-app-screenshot',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-brand-panel-with-app-screenshot', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-brand-panel-with-app-screenshot-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncQSr_brand_panel_with_app_screenshotfuncQbm_block_assets' );

    function wpfuncQSr_brand_panel_with_app_screenshotfuncQbm_block_assets() {
      $args = array(
        'handle' => 'wp-brand-panel-with-app-screenshot-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/brand-panel-with-app-screenshot',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-brand-panel-with-app-screenshot-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-brand-panel-with-app-screenshot-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    