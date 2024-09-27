
    <?php
    /*
      * Plugin Name:       dark_version_with_large_images
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncwKG_dark_version_with_large_imagesfuncaCk_editor_assets' );

      function wpfuncwKG_dark_version_with_large_imagesfuncaCk_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-dark-version-with-large-images',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-dark-version-with-large-images', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-dark-version-with-large-images-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncwKG_dark_version_with_large_imagesfuncaCk_block_assets' );

    function wpfuncwKG_dark_version_with_large_imagesfuncaCk_block_assets() {
      $args = array(
        'handle' => 'wp-dark-version-with-large-images-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/dark-version-with-large-images',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-dark-version-with-large-images-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-dark-version-with-large-images-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    