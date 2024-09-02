
    <?php
    /*
      * Plugin Name:       input_with_inline_leading_add_on_and_trailing_dropdown
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncZsS_input_with_inline_leading_add_on_and_trailing_dropdownfuncxag_editor_assets' );

      function wpfuncZsS_input_with_inline_leading_add_on_and_trailing_dropdownfuncxag_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-inline-leading-add-on-and-trailing-dropdown',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-input-with-inline-leading-add-on-and-trailing-dropdown', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-input-with-inline-leading-add-on-and-trailing-dropdown-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncZsS_input_with_inline_leading_add_on_and_trailing_dropdownfuncxag_block_assets' );

    function wpfuncZsS_input_with_inline_leading_add_on_and_trailing_dropdownfuncxag_block_assets() {
      $args = array(
        'handle' => 'wp-input-with-inline-leading-add-on-and-trailing-dropdown-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/input-with-inline-leading-add-on-and-trailing-dropdown',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-inline-leading-add-on-and-trailing-dropdown-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-input-with-inline-leading-add-on-and-trailing-dropdown-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    