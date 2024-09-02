
    <?php
    /*
      * Plugin Name:       with_large_images_and_progress_bars
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncNjZ_with_large_images_and_progress_barsfuncelX_editor_assets' );

      function wpfuncNjZ_with_large_images_and_progress_barsfuncelX_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-large-images-and-progress-bars',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-large-images-and-progress-bars', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-large-images-and-progress-bars-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncNjZ_with_large_images_and_progress_barsfuncelX_block_assets' );

    function wpfuncNjZ_with_large_images_and_progress_barsfuncelX_block_assets() {
      $args = array(
        'handle' => 'wp-with-large-images-and-progress-bars-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-large-images-and-progress-bars',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-large-images-and-progress-bars-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-large-images-and-progress-bars-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    