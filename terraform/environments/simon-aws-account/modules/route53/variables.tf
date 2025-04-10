variable "route53_zone_id" {
  type        = string
  description = "The ID of the Route 53 hosted zone"
}

variable "domain" {
  type        = string
  description = "The base domain name (e.g., arminsden.ca)"
}

variable "target_ip" {
  type        = string
  description = "The public IP address of the ECS frontend service"
}
