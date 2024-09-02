
    <?php
    /*
      * Plugin Name:       tabs_in_pills_with_brand_color
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncunm_tabs_in_pills_with_brand_colorfuncJvI_editor_assets' );

      function wpfuncunm_tabs_in_pills_with_brand_colorfuncJvI_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-tabs-in-pills-with-brand-color',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-tabs-in-pills-with-brand-color', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-tabs-in-pills-with-brand-color-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncunm_tabs_in_pills_with_brand_colorfuncJvI_block_assets' );

    function wpfuncunm_tabs_in_pills_with_brand_colorfuncJvI_block_assets() {
      $args = array(
        'handle' => 'wp-tabs-in-pills-with-brand-color-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/tabs-in-pills-with-brand-color',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-tabs-in-pills-with-brand-color-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-tabs-in-pills-with-brand-color-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    