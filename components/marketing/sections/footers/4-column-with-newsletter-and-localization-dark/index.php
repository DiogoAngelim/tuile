
    <?php
    /*
      * Plugin Name:       4_column_with_newsletter_and_localization_dark
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncieU_4_column_with_newsletter_and_localization_darkfuncxlt_editor_assets' );

      function wpfuncieU_4_column_with_newsletter_and_localization_darkfuncxlt_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-4-column-with-newsletter-and-localization-dark',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-4-column-with-newsletter-and-localization-dark', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-4-column-with-newsletter-and-localization-dark-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncieU_4_column_with_newsletter_and_localization_darkfuncxlt_block_assets' );

    function wpfuncieU_4_column_with_newsletter_and_localization_darkfuncxlt_block_assets() {
      $args = array(
        'handle' => 'wp-4-column-with-newsletter-and-localization-dark-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/4-column-with-newsletter-and-localization-dark',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-4-column-with-newsletter-and-localization-dark-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-4-column-with-newsletter-and-localization-dark-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    