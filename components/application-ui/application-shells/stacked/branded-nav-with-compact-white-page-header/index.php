
    <?php
    /*
      * Plugin Name:       branded_nav_with_compact_white_page_header
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncjSq_branded_nav_with_compact_white_page_headerfuncRef_editor_assets' );

      function wpfuncjSq_branded_nav_with_compact_white_page_headerfuncRef_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-branded-nav-with-compact-white-page-header',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-branded-nav-with-compact-white-page-header', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-branded-nav-with-compact-white-page-header-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncjSq_branded_nav_with_compact_white_page_headerfuncRef_block_assets' );

    function wpfuncjSq_branded_nav_with_compact_white_page_headerfuncRef_block_assets() {
      $args = array(
        'handle' => 'wp-branded-nav-with-compact-white-page-header-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/branded-nav-with-compact-white-page-header',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-branded-nav-with-compact-white-page-header-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-branded-nav-with-compact-white-page-header-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    