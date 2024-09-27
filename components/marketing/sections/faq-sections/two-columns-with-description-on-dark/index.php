
    <?php
    /*
      * Plugin Name:       two_columns_with_description_on_dark
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncUej_two_columns_with_description_on_darkfuncAiL_editor_assets' );

      function wpfuncUej_two_columns_with_description_on_darkfuncAiL_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-columns-with-description-on-dark',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-columns-with-description-on-dark', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-columns-with-description-on-dark-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncUej_two_columns_with_description_on_darkfuncAiL_block_assets' );

    function wpfuncUej_two_columns_with_description_on_darkfuncAiL_block_assets() {
      $args = array(
        'handle' => 'wp-two-columns-with-description-on-dark-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-columns-with-description-on-dark',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-columns-with-description-on-dark-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-columns-with-description-on-dark-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    