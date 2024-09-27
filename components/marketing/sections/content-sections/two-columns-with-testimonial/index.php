
    <?php
    /*
      * Plugin Name:       two_columns_with_testimonial
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncOgS_two_columns_with_testimonialfuncrRj_editor_assets' );

      function wpfuncOgS_two_columns_with_testimonialfuncrRj_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-columns-with-testimonial',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-columns-with-testimonial', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-columns-with-testimonial-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncOgS_two_columns_with_testimonialfuncrRj_block_assets' );

    function wpfuncOgS_two_columns_with_testimonialfuncrRj_block_assets() {
      $args = array(
        'handle' => 'wp-two-columns-with-testimonial-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-columns-with-testimonial',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-columns-with-testimonial-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-columns-with-testimonial-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    