
    <?php
    /*
      * Plugin Name:       wide_horizontal_user_profile_example
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncttm_wide_horizontal_user_profile_examplefuncIsk_editor_assets' );

      function wpfuncttm_wide_horizontal_user_profile_examplefuncIsk_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-wide-horizontal-user-profile-example',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-wide-horizontal-user-profile-example', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-wide-horizontal-user-profile-example-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncttm_wide_horizontal_user_profile_examplefuncIsk_block_assets' );

    function wpfuncttm_wide_horizontal_user_profile_examplefuncIsk_block_assets() {
      $args = array(
        'handle' => 'wp-wide-horizontal-user-profile-example-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/wide-horizontal-user-profile-example',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-wide-horizontal-user-profile-example-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-wide-horizontal-user-profile-example-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    