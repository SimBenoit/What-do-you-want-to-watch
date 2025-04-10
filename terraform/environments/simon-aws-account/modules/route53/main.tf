resource "aws_route53_record" "root_domain" {
  zone_id = var.route53_zone_id
  name    = var.domain
  type    = "A"
  ttl     = 300
  records = [var.target_ip]
}

resource "aws_route53_record" "www" {
  zone_id = var.route53_zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  ttl     = 300
  records = [var.domain]
}
