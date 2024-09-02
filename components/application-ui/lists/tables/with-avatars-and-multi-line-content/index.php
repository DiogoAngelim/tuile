
    <?php
    /*
      * Plugin Name:       with_avatars_and_multi_line_content
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncGQd_with_avatars_and_multi_line_contentfuncKLs_editor_assets' );

      function wpfuncGQd_with_avatars_and_multi_line_contentfuncKLs_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-avatars-and-multi-line-content',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-avatars-and-multi-line-content', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-avatars-and-multi-line-content-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncGQd_with_avatars_and_multi_line_contentfuncKLs_block_assets' );

    function wpfuncGQd_with_avatars_and_multi_line_contentfuncKLs_block_assets() {
      $args = array(
        'handle' => 'wp-with-avatars-and-multi-line-content-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-avatars-and-multi-line-content',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-avatars-and-multi-line-content-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-avatars-and-multi-line-content-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    