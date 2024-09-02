
    <?php
    /*
      * Plugin Name:       avatar_group_stacked_bottom_to_top
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncbDF_avatar_group_stacked_bottom_to_topfuncRrb_editor_assets' );

      function wpfuncbDF_avatar_group_stacked_bottom_to_topfuncRrb_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-group-stacked-bottom-to-top',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-avatar-group-stacked-bottom-to-top', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-avatar-group-stacked-bottom-to-top-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncbDF_avatar_group_stacked_bottom_to_topfuncRrb_block_assets' );

    function wpfuncbDF_avatar_group_stacked_bottom_to_topfuncRrb_block_assets() {
      $args = array(
        'handle' => 'wp-avatar-group-stacked-bottom-to-top-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/avatar-group-stacked-bottom-to-top',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-group-stacked-bottom-to-top-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-avatar-group-stacked-bottom-to-top-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    