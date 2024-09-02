
    <?php
    /*
      * Plugin Name:       with_background_image_and_overlapping_cards
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncQqc_with_background_image_and_overlapping_cardsfuncnzs_editor_assets' );

      function wpfuncQqc_with_background_image_and_overlapping_cardsfuncnzs_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-background-image-and-overlapping-cards',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-with-background-image-and-overlapping-cards', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-with-background-image-and-overlapping-cards-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncQqc_with_background_image_and_overlapping_cardsfuncnzs_block_assets' );

    function wpfuncQqc_with_background_image_and_overlapping_cardsfuncnzs_block_assets() {
      $args = array(
        'handle' => 'wp-with-background-image-and-overlapping-cards-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/with-background-image-and-overlapping-cards',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-with-background-image-and-overlapping-cards-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-with-background-image-and-overlapping-cards-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    