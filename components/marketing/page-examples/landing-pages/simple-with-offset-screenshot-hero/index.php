
    <?php
    /*
      * Plugin Name:       simple_with_offset_screenshot_hero
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunceGS_simple_with_offset_screenshot_herofuncqzw_editor_assets' );

      function wpfunceGS_simple_with_offset_screenshot_herofuncqzw_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-with-offset-screenshot-hero',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-simple-with-offset-screenshot-hero', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-simple-with-offset-screenshot-hero-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunceGS_simple_with_offset_screenshot_herofuncqzw_block_assets' );

    function wpfunceGS_simple_with_offset_screenshot_herofuncqzw_block_assets() {
      $args = array(
        'handle' => 'wp-simple-with-offset-screenshot-hero-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/simple-with-offset-screenshot-hero',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-with-offset-screenshot-hero-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-simple-with-offset-screenshot-hero-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    