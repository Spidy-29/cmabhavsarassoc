<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
</div><!-- #main .wrapper -->
<!-- #colophon -->
</div><!-- #page -->


<div class="footerarea">
	<div class="footersec1">
    	<div class="footercontactform"><?php widgets_on_template("FooterContForm"); ?></div>
        <div class="footercontactinfo"><?php widgets_on_template("FootercontactDetails"); ?>
       <div class="clear"></div><div class="footercontactnos"><?php widgets_on_template("FootercontactNos"); ?></div>
        </div>
        
        <div class="clear"></div>
		
    </div>
    <div class="footersec2">
    	<?php widgets_on_template("FooterSocials"); ?>
        <div class="clear"></div>
    </div>
</div>


<div class="designbytag">
	Design and Developed by : <a href="http://www.webever.co" target="_blank">Webever Technologies</a>
</div>

<?php wp_footer(); ?>
</body>
</html>