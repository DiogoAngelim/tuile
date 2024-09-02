
    <?php
    /*
      * Plugin Name:       custom_with_status_indicator
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncmMj_custom_with_status_indicatorfuncHFZ_editor_assets' );

      function wpfuncmMj_custom_with_status_indicatorfuncHFZ_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-custom-with-status-indicator',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-custom-with-status-indicator', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-custom-with-status-indicator-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncmMj_custom_with_status_indicatorfuncHFZ_block_assets' );

    function wpfuncmMj_custom_with_status_indicatorfuncHFZ_block_assets() {
      $args = array(
        'handle' => 'wp-custom-with-status-indicator-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/custom-with-status-indicator',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-custom-with-status-indicator-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-custom-with-status-indicator-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    