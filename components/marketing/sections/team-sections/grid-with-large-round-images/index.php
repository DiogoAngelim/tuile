
    <?php
    /*
      * Plugin Name:       grid_with_large_round_images
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncOjV_grid_with_large_round_imagesfuncRyn_editor_assets' );

      function wpfuncOjV_grid_with_large_round_imagesfuncRyn_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-grid-with-large-round-images',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-grid-with-large-round-images', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-grid-with-large-round-images-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncOjV_grid_with_large_round_imagesfuncRyn_block_assets' );

    function wpfuncOjV_grid_with_large_round_imagesfuncRyn_block_assets() {
      $args = array(
        'handle' => 'wp-grid-with-large-round-images-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/grid-with-large-round-images',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-grid-with-large-round-images-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-grid-with-large-round-images-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    