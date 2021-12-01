#FROM php:7.2-apache
FROM koder/apache-php-5.3

#Delete onbuild action from image base
RUN rm -R /var/www

RUN mkdir -p /var/www/web/scweb
# COPY scweb /var/www/web/scweb
RUN chown -R www-data:www-data /var/www/web
RUN chmod +x -R /var/www/web


