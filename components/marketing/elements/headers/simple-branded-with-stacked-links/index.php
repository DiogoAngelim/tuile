
    <?php
    /*
      * Plugin Name:       simple_branded_with_stacked_links
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncYct_simple_branded_with_stacked_linksfuncaxo_editor_assets' );

      function wpfuncYct_simple_branded_with_stacked_linksfuncaxo_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-branded-with-stacked-links',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-simple-branded-with-stacked-links', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-simple-branded-with-stacked-links-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncYct_simple_branded_with_stacked_linksfuncaxo_block_assets' );

    function wpfuncYct_simple_branded_with_stacked_linksfuncaxo_block_assets() {
      $args = array(
        'handle' => 'wp-simple-branded-with-stacked-links-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/simple-branded-with-stacked-links',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-simple-branded-with-stacked-links-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-simple-branded-with-stacked-links-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    