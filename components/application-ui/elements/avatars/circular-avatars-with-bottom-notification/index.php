
    <?php
    /*
      * Plugin Name:       circular_avatars_with_bottom_notification
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunceKq_circular_avatars_with_bottom_notificationfuncGvX_editor_assets' );

      function wpfunceKq_circular_avatars_with_bottom_notificationfuncGvX_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-circular-avatars-with-bottom-notification',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-circular-avatars-with-bottom-notification', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-circular-avatars-with-bottom-notification-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunceKq_circular_avatars_with_bottom_notificationfuncGvX_block_assets' );

    function wpfunceKq_circular_avatars_with_bottom_notificationfuncGvX_block_assets() {
      $args = array(
        'handle' => 'wp-circular-avatars-with-bottom-notification-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/circular-avatars-with-bottom-notification',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-circular-avatars-with-bottom-notification-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-circular-avatars-with-bottom-notification-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    