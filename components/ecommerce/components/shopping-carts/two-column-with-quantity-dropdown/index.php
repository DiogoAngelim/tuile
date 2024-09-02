
    <?php
    /*
      * Plugin Name:       two_column_with_quantity_dropdown
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncuhE_two_column_with_quantity_dropdownfuncvsR_editor_assets' );

      function wpfuncuhE_two_column_with_quantity_dropdownfuncvsR_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-column-with-quantity-dropdown',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-column-with-quantity-dropdown', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-column-with-quantity-dropdown-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncuhE_two_column_with_quantity_dropdownfuncvsR_block_assets' );

    function wpfuncuhE_two_column_with_quantity_dropdownfuncvsR_block_assets() {
      $args = array(
        'handle' => 'wp-two-column-with-quantity-dropdown-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-column-with-quantity-dropdown',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-column-with-quantity-dropdown-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-column-with-quantity-dropdown-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    