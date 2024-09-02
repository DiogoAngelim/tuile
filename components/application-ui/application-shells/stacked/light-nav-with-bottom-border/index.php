
    <?php
    /*
      * Plugin Name:       light_nav_with_bottom_border
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncmSt_light_nav_with_bottom_borderfuncQyE_editor_assets' );

      function wpfuncmSt_light_nav_with_bottom_borderfuncQyE_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-light-nav-with-bottom-border',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-light-nav-with-bottom-border', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-light-nav-with-bottom-border-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncmSt_light_nav_with_bottom_borderfuncQyE_block_assets' );

    function wpfuncmSt_light_nav_with_bottom_borderfuncQyE_block_assets() {
      $args = array(
        'handle' => 'wp-light-nav-with-bottom-border-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/light-nav-with-bottom-border',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-light-nav-with-bottom-border-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-light-nav-with-bottom-border-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    