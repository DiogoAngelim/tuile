
    <?php
    /*
      * Plugin Name:       full_width_with_vertical_images
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncNVN_full_width_with_vertical_imagesfuncACC_editor_assets' );

      function wpfuncNVN_full_width_with_vertical_imagesfuncACC_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-with-vertical-images',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-full-width-with-vertical-images', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-full-width-with-vertical-images-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncNVN_full_width_with_vertical_imagesfuncACC_block_assets' );

    function wpfuncNVN_full_width_with_vertical_imagesfuncACC_block_assets() {
      $args = array(
        'handle' => 'wp-full-width-with-vertical-images-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/full-width-with-vertical-images',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-with-vertical-images-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-full-width-with-vertical-images-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    