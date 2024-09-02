
    <?php
    /*
      * Plugin Name:       centered_with_wide_buttons
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncPvU_centered_with_wide_buttonsfuncDQp_editor_assets' );

      function wpfuncPvU_centered_with_wide_buttonsfuncDQp_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-centered-with-wide-buttons',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-centered-with-wide-buttons', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-centered-with-wide-buttons-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncPvU_centered_with_wide_buttonsfuncDQp_block_assets' );

    function wpfuncPvU_centered_with_wide_buttonsfuncDQp_block_assets() {
      $args = array(
        'handle' => 'wp-centered-with-wide-buttons-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/centered-with-wide-buttons',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-centered-with-wide-buttons-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-centered-with-wide-buttons-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    