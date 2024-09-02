
    <?php
    /*
      * Plugin Name:       simple_dark_with_menu_button_on_left
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncOLR_simple_dark_with_menu_button_on_leftfuncMsq_editor_assets' );

      function wpfuncOLR_simple_dark_with_menu_button_on_leftfuncMsq_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-dark-with-menu-button-on-left',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-simple-dark-with-menu-button-on-left', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-simple-dark-with-menu-button-on-left-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncOLR_simple_dark_with_menu_button_on_leftfuncMsq_block_assets' );

    function wpfuncOLR_simple_dark_with_menu_button_on_leftfuncMsq_block_assets() {
      $args = array(
        'handle' => 'wp-simple-dark-with-menu-button-on-left-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/simple-dark-with-menu-button-on-left',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-dark-with-menu-button-on-left-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-simple-dark-with-menu-button-on-left-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    