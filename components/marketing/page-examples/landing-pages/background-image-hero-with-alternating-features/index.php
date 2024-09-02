
    <?php
    /*
      * Plugin Name:       background_image_hero_with_alternating_features
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncLNM_background_image_hero_with_alternating_featuresfuncGjo_editor_assets' );

      function wpfuncLNM_background_image_hero_with_alternating_featuresfuncGjo_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-background-image-hero-with-alternating-features',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-background-image-hero-with-alternating-features', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-background-image-hero-with-alternating-features-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncLNM_background_image_hero_with_alternating_featuresfuncGjo_block_assets' );

    function wpfuncLNM_background_image_hero_with_alternating_featuresfuncGjo_block_assets() {
      $args = array(
        'handle' => 'wp-background-image-hero-with-alternating-features-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/background-image-hero-with-alternating-features',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-background-image-hero-with-alternating-features-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-background-image-hero-with-alternating-features-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    