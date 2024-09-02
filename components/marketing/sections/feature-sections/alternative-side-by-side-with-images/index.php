
    <?php
    /*
      * Plugin Name:       alternative_side_by_side_with_images
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunczKg_alternative_side_by_side_with_imagesfuncrKS_editor_assets' );

      function wpfunczKg_alternative_side_by_side_with_imagesfuncrKS_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-alternative-side-by-side-with-images',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-alternative-side-by-side-with-images', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-alternative-side-by-side-with-images-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunczKg_alternative_side_by_side_with_imagesfuncrKS_block_assets' );

    function wpfunczKg_alternative_side_by_side_with_imagesfuncrKS_block_assets() {
      $args = array(
        'handle' => 'wp-alternative-side-by-side-with-images-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/alternative-side-by-side-with-images',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-alternative-side-by-side-with-images-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-alternative-side-by-side-with-images-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    