
    <?php
    /*
      * Plugin Name:       two_column_cards_with_separate_submit_actions
      * Version:           1.0
      * Author:            Diogo Angelim
      * Author URI:        https://github.com/DiogoAngelim/
    */

    if ( ! defined( 'ABSPATH' ) ) {
      exit;
    }

    add_action( 'enqueue_block_editor_assets', 'wpfuncvqI_two_column_cards_with_separate_submit_actionsfuncdcX_editor_assets' );

      function wpfuncvqI_two_column_cards_with_separate_submit_actionsfuncdcX_editor_assets() {
      $filepath = plugin_dir_path(__FILE__) . 'block.build.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-column-cards-with-separate-submit-actions',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components', 'wp-element' ,'wp-editor'),
        $version
      );

      wp_localize_script( 'wp-two-column-cards-with-separate-submit-actions', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );

      $filepath = plugin_dir_path(__FILE__) . 'editor.css';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_style(
        'wp-two-column-cards-with-separate-submit-actions-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        $version
      );
    }

    add_action( 'enqueue_block_assets', 'wpfuncvqI_two_column_cards_with_separate_submit_actionsfuncdcX_block_assets' );

    function wpfuncvqI_two_column_cards_with_separate_submit_actionsfuncdcX_block_assets() {
      $args = array(
        'handle' => 'wp-two-column-cards-with-separate-submit-actions-frontend',
        'src'    => plugins_url( 'style.css', __FILE__ ),
      );
      
      wp_enqueue_block_style(
        'wp/two-column-cards-with-separate-submit-actions',
        $args
      );

      $filepath = plugin_dir_path(__FILE__) . 'script.js';
      $version = file_exists($filepath) ? filemtime($filepath) : time();

      wp_enqueue_script(
        'wp-two-column-cards-with-separate-submit-actions-js',
        plugins_url( 'scripts.js', __FILE__ ),
        array(),
        $version
      );

      wp_localize_script( 'wp-two-column-cards-with-separate-submit-actions-js', 'vars', array( 'url' => plugin_dir_url( __FILE__ ) ) );
    }

    