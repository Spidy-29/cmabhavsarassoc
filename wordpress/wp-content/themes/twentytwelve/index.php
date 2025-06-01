<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

<div class="introductionsection">
	<div><?php widgets_on_template("WelcomeSection"); ?></div>
    <div class="clear"></div>
</div>
<div class="clear"></div>

<div class="homeservicesarea">
	<div class="homeserviceswidth">
		<?php widgets_on_template("HomeServiceSections"); ?>
        <div class="clear"></div>
    </div>
</div>
<div class="clear"></div>

 
<?php get_footer(); ?>
