variable "cluster_id" {
  type        = string
  description = "ECS cluster ID"
}

variable "certbot_image" {
  type        = string
  description = "ECR image URI for the Certbot container"
}

variable "efs_id" {
  type        = string
  description = "EFS filesystem ID"
}

variable "execution_role_arn" {
  type        = string
  description = "IAM role for ECS to pull container images"
}

variable "task_role_arn" {
  type        = string
  description = "IAM task role with Route 53 permissions"
}

variable "security_group_id" {
  type        = string
  description = "Security group for the ECS task"
}

variable "private_subnet_ids" {
  type        = list(string)
  description = "List of private subnet IDs to launch the Certbot task into"
}

variable "cert_email" {
  type        = string
  description = "Email used for Let's Encrypt registration"
}

variable "domain" {
  type        = string
  description = "Primary domain name to issue the certificate for"
}

variable "region" {
  type        = string
  description = "AWS region"
}

variable "run_once" {
  type        = bool
  default     = false
  description = "If true, immediately runs the Certbot task once"
}
