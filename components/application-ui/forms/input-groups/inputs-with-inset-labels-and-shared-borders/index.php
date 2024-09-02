
    <?php
    /*
      * Plugin Name:       inputs_with_inset_labels_and_shared_borders
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncjiZ_inputs_with_inset_labels_and_shared_bordersfunctDt_editor_assets' );

      function wpfuncjiZ_inputs_with_inset_labels_and_shared_bordersfunctDt_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-inputs-with-inset-labels-and-shared-borders',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-inputs-with-inset-labels-and-shared-borders', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-inputs-with-inset-labels-and-shared-borders-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncjiZ_inputs_with_inset_labels_and_shared_bordersfunctDt_block_assets' );

    function wpfuncjiZ_inputs_with_inset_labels_and_shared_bordersfunctDt_block_assets() {
      $args = array(
        'handle' => 'wp-inputs-with-inset-labels-and-shared-borders-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/inputs-with-inset-labels-and-shared-borders',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-inputs-with-inset-labels-and-shared-borders-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-inputs-with-inset-labels-and-shared-borders-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    