#!/bin/sh
set -e

# Optional debug: show env
echo "LAMBDA_SECRET: $LAMBDA_SECRET"
echo "LAMBDA_URL: $LAMBDA_URL"

# Perform safe substitution
envsubst '$LAMBDA_URL $LAMBDA_SECRET' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Optional debug: show output config
echo "---- Final rendered NGINX config ----"
cat /etc/nginx/conf.d/default.conf
echo "-------------------------------------"

# Start NGINX
exec nginx -g 'daemon off;'
