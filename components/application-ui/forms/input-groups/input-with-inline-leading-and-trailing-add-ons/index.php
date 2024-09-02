
    <?php
    /*
      * Plugin Name:       input_with_inline_leading_and_trailing_add_ons
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncmLg_input_with_inline_leading_and_trailing_add_onsfunctsU_editor_assets' );

      function wpfuncmLg_input_with_inline_leading_and_trailing_add_onsfunctsU_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-inline-leading-and-trailing-add-ons',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-input-with-inline-leading-and-trailing-add-ons', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-input-with-inline-leading-and-trailing-add-ons-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncmLg_input_with_inline_leading_and_trailing_add_onsfunctsU_block_assets' );

    function wpfuncmLg_input_with_inline_leading_and_trailing_add_onsfunctsU_block_assets() {
      $args = array(
        'handle' => 'wp-input-with-inline-leading-and-trailing-add-ons-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/input-with-inline-leading-and-trailing-add-ons',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-inline-leading-and-trailing-add-ons-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-input-with-inline-leading-and-trailing-add-ons-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    