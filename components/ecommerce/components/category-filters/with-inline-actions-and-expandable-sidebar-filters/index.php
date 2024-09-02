
    <?php
    /*
      * Plugin Name:       with_inline_actions_and_expandable_sidebar_filters
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncHCz_with_inline_actions_and_expandable_sidebar_filtersfuncUlT_editor_assets' );

      function wpfuncHCz_with_inline_actions_and_expandable_sidebar_filtersfuncUlT_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-inline-actions-and-expandable-sidebar-filters',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-inline-actions-and-expandable-sidebar-filters', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-inline-actions-and-expandable-sidebar-filters-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncHCz_with_inline_actions_and_expandable_sidebar_filtersfuncUlT_block_assets' );

    function wpfuncHCz_with_inline_actions_and_expandable_sidebar_filtersfuncUlT_block_assets() {
      $args = array(
        'handle' => 'wp-with-inline-actions-and-expandable-sidebar-filters-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-inline-actions-and-expandable-sidebar-filters',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-inline-actions-and-expandable-sidebar-filters-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-inline-actions-and-expandable-sidebar-filters-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    