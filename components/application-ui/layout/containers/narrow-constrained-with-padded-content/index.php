
    <?php
    /*
      * Plugin Name:       narrow_constrained_with_padded_content
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncYKt_narrow_constrained_with_padded_contentfuncvyc_editor_assets' );

      function wpfuncYKt_narrow_constrained_with_padded_contentfuncvyc_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-narrow-constrained-with-padded-content',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-narrow-constrained-with-padded-content', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-narrow-constrained-with-padded-content-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncYKt_narrow_constrained_with_padded_contentfuncvyc_block_assets' );

    function wpfuncYKt_narrow_constrained_with_padded_contentfuncvyc_block_assets() {
      $args = array(
        'handle' => 'wp-narrow-constrained-with-padded-content-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/narrow-constrained-with-padded-content',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-narrow-constrained-with-padded-content-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-narrow-constrained-with-padded-content-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    