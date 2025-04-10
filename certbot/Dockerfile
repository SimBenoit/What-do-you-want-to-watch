FROM python:3.11-slim

# Install Certbot and the Route53 plugin
RUN pip install --no-cache-dir certbot certbot-dns-route53

# Create directory for certs
RUN mkdir -p /etc/letsencrypt /var/lib/letsencrypt /var/log/letsencrypt

# Default command
ENTRYPOINT ["certbot"]
