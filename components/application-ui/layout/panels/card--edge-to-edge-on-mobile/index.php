
    <?php
    /*
      * Plugin Name:       card__edge_to_edge_on_mobile
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncTDw_card__edge_to_edge_on_mobilefuncbJn_editor_assets' );

      function wpfuncTDw_card__edge_to_edge_on_mobilefuncbJn_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-card--edge-to-edge-on-mobile',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-card--edge-to-edge-on-mobile', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-card--edge-to-edge-on-mobile-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncTDw_card__edge_to_edge_on_mobilefuncbJn_block_assets' );

    function wpfuncTDw_card__edge_to_edge_on_mobilefuncbJn_block_assets() {
      $args = array(
        'handle' => 'wp-card--edge-to-edge-on-mobile-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/card--edge-to-edge-on-mobile',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-card--edge-to-edge-on-mobile-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-card--edge-to-edge-on-mobile-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    