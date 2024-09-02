
    <?php
    /*
      * Plugin Name:       brand_nav_with_overlap_and_sidebar_form
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncFjm_brand_nav_with_overlap_and_sidebar_formfuncTQi_editor_assets' );

      function wpfuncFjm_brand_nav_with_overlap_and_sidebar_formfuncTQi_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-brand-nav-with-overlap-and-sidebar-form',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-brand-nav-with-overlap-and-sidebar-form', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-brand-nav-with-overlap-and-sidebar-form-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncFjm_brand_nav_with_overlap_and_sidebar_formfuncTQi_block_assets' );

    function wpfuncFjm_brand_nav_with_overlap_and_sidebar_formfuncTQi_block_assets() {
      $args = array(
        'handle' => 'wp-brand-nav-with-overlap-and-sidebar-form-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/brand-nav-with-overlap-and-sidebar-form',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-brand-nav-with-overlap-and-sidebar-form-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-brand-nav-with-overlap-and-sidebar-form-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    