<?php
define( 'WP_CACHE', true );
define('WP_AUTO_UPDATE_CORE', true);
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u850013731_MigratioN6');

/** MySQL database username */
define('DB_USER', 'u850013731_MigratioN6');

/** MySQL database password */
define('DB_PASSWORD', 'hE7RJ4MKu}[v');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'DgCP;G?ij7Gr|USG!iz&<hV7#y h^1mw/s)+;L,@.SJcZ`#yA/8Sjj!U/G8 2#Jk');
define('SECURE_AUTH_KEY',  '=-hS@I|i)d#kF9vu _ND-o`*^{];p QqdM,T;c0EpoM9%;t~j5Rc&#9{r-Xlwl0v');
define('LOGGED_IN_KEY',    '38EyM6`<7f@q,WKE*pr(B=hZ7qdc 6m+_geHl0GQxkWF5%_<Hx]~@LDz*]7svQH&');
define('NONCE_KEY',        ']h~-3&oblLO2rk#},iDIN_y;gHqID@:V.J:]IhK48^35-HXlI.f7+*+n7UM[~-_I');
define('AUTH_SALT',        '7K#._AiZR<>oKYzD]d,+3f|kQy^Wj{p=a8[d1_ns.yR6OLod/g=c,%<Z,@WH|-Wu');
define('SECURE_AUTH_SALT', '.=8jYQu[O2B{4lZR81nOA0[JD %w@xJO96ETF}!y]<W xW^G>,ANXyD&(y@a#8>4');
define('LOGGED_IN_SALT',   'I&n!e).c/dvhd{o7;]|7Kwm7XE3@ss)xi+(5iZrplt[BP4OFI%>3HPP L[@p7dZO');
define('NONCE_SALT',       ']1+yG1YS?Le3m55 VxN%g^iN(_ID +@?o+C,tl!{_nq=-peOB;Z~op@1%E n6U5d');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
