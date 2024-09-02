
    <?php
    /*
      * Plugin Name:       tabs_with_underline_and_icons
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncbmE_tabs_with_underline_and_iconsfuncixp_editor_assets' );

      function wpfuncbmE_tabs_with_underline_and_iconsfuncixp_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-tabs-with-underline-and-icons',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-tabs-with-underline-and-icons', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-tabs-with-underline-and-icons-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncbmE_tabs_with_underline_and_iconsfuncixp_block_assets' );

    function wpfuncbmE_tabs_with_underline_and_iconsfuncixp_block_assets() {
      $args = array(
        'handle' => 'wp-tabs-with-underline-and-icons-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/tabs-with-underline-and-icons',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-tabs-with-underline-and-icons-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-tabs-with-underline-and-icons-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    