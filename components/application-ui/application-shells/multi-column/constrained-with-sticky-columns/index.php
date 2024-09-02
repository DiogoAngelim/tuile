
    <?php
    /*
      * Plugin Name:       constrained_with_sticky_columns
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncdow_constrained_with_sticky_columnsfuncqSB_editor_assets' );

      function wpfuncdow_constrained_with_sticky_columnsfuncqSB_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-constrained-with-sticky-columns',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-constrained-with-sticky-columns', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-constrained-with-sticky-columns-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncdow_constrained_with_sticky_columnsfuncqSB_block_assets' );

    function wpfuncdow_constrained_with_sticky_columnsfuncqSB_block_assets() {
      $args = array(
        'handle' => 'wp-constrained-with-sticky-columns-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/constrained-with-sticky-columns',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-constrained-with-sticky-columns-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-constrained-with-sticky-columns-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    