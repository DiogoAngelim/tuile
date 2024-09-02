
    <?php
    /*
      * Plugin Name:       with_invoice_list_and_quick_actions
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncVjs_with_invoice_list_and_quick_actionsfuncQSs_editor_assets' );

      function wpfuncVjs_with_invoice_list_and_quick_actionsfuncQSs_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-invoice-list-and-quick-actions',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-invoice-list-and-quick-actions', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-invoice-list-and-quick-actions-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncVjs_with_invoice_list_and_quick_actionsfuncQSs_block_assets' );

    function wpfuncVjs_with_invoice_list_and_quick_actionsfuncQSs_block_assets() {
      $args = array(
        'handle' => 'wp-with-invoice-list-and-quick-actions-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-invoice-list-and-quick-actions',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-invoice-list-and-quick-actions-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-invoice-list-and-quick-actions-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    