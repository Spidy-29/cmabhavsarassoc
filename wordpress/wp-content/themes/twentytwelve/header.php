<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="topheaderarea">
<div class="headerarea">
	<div class="containersize">
 		<div class="logoarea">
        	<div class="logoimg">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
            	<img src="<?php bloginfo('template_url'); ?>/img/ashish-bhavsar-and-associates.png" alt="Ashish Bhavsar & Associates">
	        </a>
            </div>
            <div class="logoname">
            	<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
            </div>
            <div class="clear"></div>
        	    
        </div>
        <div class="headercontactnos">
        	<?php widgets_on_template("HeaderContact"); ?>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="menuarea">
    	<div class="mainmenu">
        	<nav id="site-navigation" class="main-navigation" role="navigation">
			<button class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></button>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav>
        </div>
        <div class="searchbar">
        	<?php get_search_form(); ?>
        </div>
        <div class="clear"></div>
</div>
</div>
<div class="clear"></div>


<?php if ( is_front_page() ) { ?>
<div class="homeslider">
	<?php echo do_shortcode('[promoslider]') ?>
</div>    
<?php } else { ?>
<div class="internaltitle">
	<div class="containersize">
    	<h1 class="entry-title"><?php the_title(); ?></h1>
    </div>
</div> 
<?php } ?>


