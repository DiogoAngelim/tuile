
    <?php
    /*
      * Plugin Name:       with_text_header_and_simple_product_grid
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncqpL_with_text_header_and_simple_product_gridfuncyGZ_editor_assets' );

      function wpfuncqpL_with_text_header_and_simple_product_gridfuncyGZ_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-text-header-and-simple-product-grid',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-text-header-and-simple-product-grid', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-text-header-and-simple-product-grid-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncqpL_with_text_header_and_simple_product_gridfuncyGZ_block_assets' );

    function wpfuncqpL_with_text_header_and_simple_product_gridfuncyGZ_block_assets() {
      $args = array(
        'handle' => 'wp-with-text-header-and-simple-product-grid-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-text-header-and-simple-product-grid',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-text-header-and-simple-product-grid-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-text-header-and-simple-product-grid-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    