
    <?php
    /*
      * Plugin Name:       input_with_label_and_help_text
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncuYc_input_with_label_and_help_textfuncUgL_editor_assets' );

      function wpfuncuYc_input_with_label_and_help_textfuncUgL_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-label-and-help-text',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-input-with-label-and-help-text', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-input-with-label-and-help-text-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncuYc_input_with_label_and_help_textfuncUgL_block_assets' );

    function wpfuncuYc_input_with_label_and_help_textfuncUgL_block_assets() {
      $args = array(
        'handle' => 'wp-input-with-label-and-help-text-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/input-with-label-and-help-text',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-input-with-label-and-help-text-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-input-with-label-and-help-text-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    