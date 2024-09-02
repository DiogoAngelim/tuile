
    <?php
    /*
      * Plugin Name:       full_width_secondary_column_on_right
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncAUm_full_width_secondary_column_on_rightfuncQyJ_editor_assets' );

      function wpfuncAUm_full_width_secondary_column_on_rightfuncQyJ_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-secondary-column-on-right',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-full-width-secondary-column-on-right', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-full-width-secondary-column-on-right-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncAUm_full_width_secondary_column_on_rightfuncQyJ_block_assets' );

    function wpfuncAUm_full_width_secondary_column_on_rightfuncQyJ_block_assets() {
      $args = array(
        'handle' => 'wp-full-width-secondary-column-on-right-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/full-width-secondary-column-on-right',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-full-width-secondary-column-on-right-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-full-width-secondary-column-on-right-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    