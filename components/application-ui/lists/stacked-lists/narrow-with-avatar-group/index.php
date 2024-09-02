
    <?php
    /*
      * Plugin Name:       narrow_with_avatar_group
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncuMr_narrow_with_avatar_groupfuncBdm_editor_assets' );

      function wpfuncuMr_narrow_with_avatar_groupfuncBdm_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-narrow-with-avatar-group',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-narrow-with-avatar-group', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-narrow-with-avatar-group-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncuMr_narrow_with_avatar_groupfuncBdm_block_assets' );

    function wpfuncuMr_narrow_with_avatar_groupfuncBdm_block_assets() {
      $args = array(
        'handle' => 'wp-narrow-with-avatar-group-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/narrow-with-avatar-group',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-narrow-with-avatar-group-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-narrow-with-avatar-group-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    