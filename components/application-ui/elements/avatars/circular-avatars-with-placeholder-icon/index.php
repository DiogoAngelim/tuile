
    <?php
    /*
      * Plugin Name:       circular_avatars_with_placeholder_icon
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncvZR_circular_avatars_with_placeholder_iconfunccTa_editor_assets' );

      function wpfuncvZR_circular_avatars_with_placeholder_iconfunccTa_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-circular-avatars-with-placeholder-icon',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-circular-avatars-with-placeholder-icon', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-circular-avatars-with-placeholder-icon-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncvZR_circular_avatars_with_placeholder_iconfunccTa_block_assets' );

    function wpfuncvZR_circular_avatars_with_placeholder_iconfunccTa_block_assets() {
      $args = array(
        'handle' => 'wp-circular-avatars-with-placeholder-icon-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/circular-avatars-with-placeholder-icon',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-circular-avatars-with-placeholder-icon-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-circular-avatars-with-placeholder-icon-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    