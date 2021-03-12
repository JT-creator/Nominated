#/usr/bin/cd cgi-bin
#/usr/bin/mkdir .ht_bin
#/usr/bin/chmod 711 .ht_bin
#/usr/bin/cp -p /opt/php-latest/bin/php.cgi .ht_bin/php.cgi
#/usr/bin/chmod 700 .ht_bin/php.cgi
Action php-cgi /~su_cfas/cgi-bin/.ht_bin/php.cgi
AddHandler php-cgi .php