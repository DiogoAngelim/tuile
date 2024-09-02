
    <?php
    /*
      * Plugin Name:       avatars_with_separate_description
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunccnn_avatars_with_separate_descriptionfuncDIQ_editor_assets' );

      function wpfunccnn_avatars_with_separate_descriptionfuncDIQ_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatars-with-separate-description',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-avatars-with-separate-description', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-avatars-with-separate-description-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunccnn_avatars_with_separate_descriptionfuncDIQ_block_assets' );

    function wpfunccnn_avatars_with_separate_descriptionfuncDIQ_block_assets() {
      $args = array(
        'handle' => 'wp-avatars-with-separate-description-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/avatars-with-separate-description',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatars-with-separate-description-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-avatars-with-separate-description-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    