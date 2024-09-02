
    <?php
    /*
      * Plugin Name:       with_color_selector__size_selector__and_details_link
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncOeq_with_color_selector__size_selector__and_details_linkfuncuBx_editor_assets' );

      function wpfuncOeq_with_color_selector__size_selector__and_details_linkfuncuBx_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-color-selector--size-selector--and-details-link',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-color-selector--size-selector--and-details-link', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-color-selector--size-selector--and-details-link-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncOeq_with_color_selector__size_selector__and_details_linkfuncuBx_block_assets' );

    function wpfuncOeq_with_color_selector__size_selector__and_details_linkfuncuBx_block_assets() {
      $args = array(
        'handle' => 'wp-with-color-selector--size-selector--and-details-link-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-color-selector--size-selector--and-details-link',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-color-selector--size-selector--and-details-link-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-color-selector--size-selector--and-details-link-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    