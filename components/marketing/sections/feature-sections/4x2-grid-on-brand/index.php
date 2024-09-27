
    <?php
    /*
      * Plugin Name:       4x2_grid_on_brand
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncAVv_4x2_grid_on_brandfuncHIH_editor_assets' );

      function wpfuncAVv_4x2_grid_on_brandfuncHIH_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-4x2-grid-on-brand',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-4x2-grid-on-brand', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-4x2-grid-on-brand-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncAVv_4x2_grid_on_brandfuncHIH_block_assets' );

    function wpfuncAVv_4x2_grid_on_brandfuncHIH_block_assets() {
      $args = array(
        'handle' => 'wp-4x2-grid-on-brand-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/4x2-grid-on-brand',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-4x2-grid-on-brand-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-4x2-grid-on-brand-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    