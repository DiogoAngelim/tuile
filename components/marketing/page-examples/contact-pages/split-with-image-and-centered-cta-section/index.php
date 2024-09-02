
    <?php
    /*
      * Plugin Name:       split_with_image_and_centered_cta_section
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncGBo_split_with_image_and_centered_cta_sectionfuncCyO_editor_assets' );

      function wpfuncGBo_split_with_image_and_centered_cta_sectionfuncCyO_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-split-with-image-and-centered-cta-section',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-split-with-image-and-centered-cta-section', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-split-with-image-and-centered-cta-section-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncGBo_split_with_image_and_centered_cta_sectionfuncCyO_block_assets' );

    function wpfuncGBo_split_with_image_and_centered_cta_sectionfuncCyO_block_assets() {
      $args = array(
        'handle' => 'wp-split-with-image-and-centered-cta-section-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/split-with-image-and-centered-cta-section',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-split-with-image-and-centered-cta-section-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-split-with-image-and-centered-cta-section-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    