
    <?php
    /*
      * Plugin Name:       full_width_with_narrow_sidebar
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunczJa_full_width_with_narrow_sidebarfuncXWe_editor_assets' );

      function wpfunczJa_full_width_with_narrow_sidebarfuncXWe_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-with-narrow-sidebar',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-full-width-with-narrow-sidebar', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-full-width-with-narrow-sidebar-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunczJa_full_width_with_narrow_sidebarfuncXWe_block_assets' );

    function wpfunczJa_full_width_with_narrow_sidebarfuncXWe_block_assets() {
      $args = array(
        'handle' => 'wp-full-width-with-narrow-sidebar-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/full-width-with-narrow-sidebar',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-with-narrow-sidebar-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-full-width-with-narrow-sidebar-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    