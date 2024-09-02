
    <?php
    /*
      * Plugin Name:       avatar_group_stacked_top_to_bottom
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncSZh_avatar_group_stacked_top_to_bottomfunccXV_editor_assets' );

      function wpfuncSZh_avatar_group_stacked_top_to_bottomfunccXV_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-group-stacked-top-to-bottom',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-avatar-group-stacked-top-to-bottom', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-avatar-group-stacked-top-to-bottom-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncSZh_avatar_group_stacked_top_to_bottomfunccXV_block_assets' );

    function wpfuncSZh_avatar_group_stacked_top_to_bottomfunccXV_block_assets() {
      $args = array(
        'handle' => 'wp-avatar-group-stacked-top-to-bottom-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/avatar-group-stacked-top-to-bottom',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-group-stacked-top-to-bottom-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-avatar-group-stacked-top-to-bottom-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    