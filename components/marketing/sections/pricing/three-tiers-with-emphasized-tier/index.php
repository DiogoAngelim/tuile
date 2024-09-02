
    <?php
    /*
      * Plugin Name:       three_tiers_with_emphasized_tier
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfunctyn_three_tiers_with_emphasized_tierfuncnXh_editor_assets' );

      function wpfunctyn_three_tiers_with_emphasized_tierfuncnXh_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-three-tiers-with-emphasized-tier',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-three-tiers-with-emphasized-tier', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-three-tiers-with-emphasized-tier-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfunctyn_three_tiers_with_emphasized_tierfuncnXh_block_assets' );

    function wpfunctyn_three_tiers_with_emphasized_tierfuncnXh_block_assets() {
      $args = array(
        'handle' => 'wp-three-tiers-with-emphasized-tier-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/three-tiers-with-emphasized-tier',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-three-tiers-with-emphasized-tier-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-three-tiers-with-emphasized-tier-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    