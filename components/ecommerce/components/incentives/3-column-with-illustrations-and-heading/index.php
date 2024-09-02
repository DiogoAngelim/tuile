
    <?php
    /*
      * Plugin Name:       3_column_with_illustrations_and_heading
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncqPt_3_column_with_illustrations_and_headingfuncqyP_editor_assets' );

      function wpfuncqPt_3_column_with_illustrations_and_headingfuncqyP_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-3-column-with-illustrations-and-heading',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-3-column-with-illustrations-and-heading', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-3-column-with-illustrations-and-heading-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncqPt_3_column_with_illustrations_and_headingfuncqyP_block_assets' );

    function wpfuncqPt_3_column_with_illustrations_and_headingfuncqyP_block_assets() {
      $args = array(
        'handle' => 'wp-3-column-with-illustrations-and-heading-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/3-column-with-illustrations-and-heading',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-3-column-with-illustrations-and-heading-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-3-column-with-illustrations-and-heading-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    