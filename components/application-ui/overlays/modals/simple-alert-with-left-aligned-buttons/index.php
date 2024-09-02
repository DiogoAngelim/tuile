
    <?php
    /*
      * Plugin Name:       simple_alert_with_left_aligned_buttons
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunceVj_simple_alert_with_left_aligned_buttonsfuncWqO_editor_assets' );

      function wpfunceVj_simple_alert_with_left_aligned_buttonsfuncWqO_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-alert-with-left-aligned-buttons',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-simple-alert-with-left-aligned-buttons', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-simple-alert-with-left-aligned-buttons-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunceVj_simple_alert_with_left_aligned_buttonsfuncWqO_block_assets' );

    function wpfunceVj_simple_alert_with_left_aligned_buttonsfuncWqO_block_assets() {
      $args = array(
        'handle' => 'wp-simple-alert-with-left-aligned-buttons-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/simple-alert-with-left-aligned-buttons',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-alert-with-left-aligned-buttons-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-simple-alert-with-left-aligned-buttons-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    