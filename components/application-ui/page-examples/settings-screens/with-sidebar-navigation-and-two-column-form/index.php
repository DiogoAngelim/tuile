
    <?php
    /*
      * Plugin Name:       with_sidebar_navigation_and_two_column_form
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunckJz_with_sidebar_navigation_and_two_column_formfuncqfC_editor_assets' );

      function wpfunckJz_with_sidebar_navigation_and_two_column_formfuncqfC_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-sidebar-navigation-and-two-column-form',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-sidebar-navigation-and-two-column-form', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-sidebar-navigation-and-two-column-form-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunckJz_with_sidebar_navigation_and_two_column_formfuncqfC_block_assets' );

    function wpfunckJz_with_sidebar_navigation_and_two_column_formfuncqfC_block_assets() {
      $args = array(
        'handle' => 'wp-with-sidebar-navigation-and-two-column-form-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-sidebar-navigation-and-two-column-form',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-sidebar-navigation-and-two-column-form-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-sidebar-navigation-and-two-column-form-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    