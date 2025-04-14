#!/bin/sh
# Replace env vars in the config and start NGINX
envsubst '$LAMBDA_URL $LAMBDA_SECRET' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf
exec nginx -g "daemon off;"
