variable "vpc_id" {
  description = "The ID of the existing VPC to launch resources in."
  type        = string
}

variable "private_subnet_ids" {
  description = "List of private subnet IDs for Certbot and EFS mount targets."
  type        = list(string)
}

variable "public_subnet_ids" {
  description = "List of public subnet IDs for the NGINX frontend service."
  type        = list(string)
}

variable "domain" {
  description = "The root domain name for your site (e.g., arminsden.ca)."
  type        = string
}

variable "cert_email" {
  description = "Email address for Let's Encrypt registration."
  type        = string
}

variable "route53_zone_id" {
  description = "The Route 53 hosted zone ID for your domain."
  type        = string
}

variable "frontend_image" {
  description = "The full ECR image URL for your frontend Docker image."
  type        = string
}

variable "ecr_repository" {
  description = "The name of the ECR repository storing the frontend image."
  type        = string
}

variable "aws_region" {
  description = "The region of the entire project."
  type        = string
}

variable "certbot_image" {
  description = "The name of the ECR repository storing the certbot image."
  type        = string
}

variable "frontend_cluster_id" {
  description = "The current cluster we're working in"
  type        = string

}

variable "ecs_execution_arn" {
  description = "IAM to execute most ECS tasks"
  type        = string

}

variable "certbot_task_role_arn" {
  description = "IAM role with Route53 access to deploy certbot"
  type        = string

}

variable "nginx_sg_id" {
  description  = "The id of the security group that does NGINX and other front-facing services"
  type         = string

}

variable "efs_id" {
  description  = "The id of the EFS used for the NGINX"
  type         = string

}
