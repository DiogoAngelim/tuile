
    <?php
    /*
      * Plugin Name:       avatar_groups_with_actions
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncnPf_avatar_groups_with_actionsfuncIty_editor_assets' );

      function wpfuncnPf_avatar_groups_with_actionsfuncIty_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-groups-with-actions',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-avatar-groups-with-actions', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-avatar-groups-with-actions-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncnPf_avatar_groups_with_actionsfuncIty_block_assets' );

    function wpfuncnPf_avatar_groups_with_actionsfuncIty_block_assets() {
      $args = array(
        'handle' => 'wp-avatar-groups-with-actions-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/avatar-groups-with-actions',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-avatar-groups-with-actions-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-avatar-groups-with-actions-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    