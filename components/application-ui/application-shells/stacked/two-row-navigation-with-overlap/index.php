
    <?php
    /*
      * Plugin Name:       two_row_navigation_with_overlap
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncoVe_two_row_navigation_with_overlapfuncxKr_editor_assets' );

      function wpfuncoVe_two_row_navigation_with_overlapfuncxKr_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-row-navigation-with-overlap',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-row-navigation-with-overlap', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-row-navigation-with-overlap-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncoVe_two_row_navigation_with_overlapfuncxKr_block_assets' );

    function wpfuncoVe_two_row_navigation_with_overlapfuncxKr_block_assets() {
      $args = array(
        'handle' => 'wp-two-row-navigation-with-overlap-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-row-navigation-with-overlap',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-row-navigation-with-overlap-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-row-navigation-with-overlap-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    