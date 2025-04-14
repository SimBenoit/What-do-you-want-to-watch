variable "cluster_id" {
  description = "The ECS cluster ID to deploy into"
  type        = string
}

variable "subnet_ids" {
  description = "Subnets to deploy the service in"
  type        = list(string)
}

variable "efs_id" {
  description = "EFS filesystem ID for mounting SSL certs"
  type        = string
}

variable "security_group_id" {
  description = "Security group to assign to the ECS service"
  type        = string
}

variable "frontend_image" {
  description = "ECR image URI of the frontend Docker image"
  type        = string
}

variable "execution_role_arn" {
  description = "IAM execution role ARN for ECS tasks"
  type        = string
}

variable "task_role_arn" {
  description = "IAM task role ARN for ECS tasks"
  type        = string
}

variable "region" {
  description = "AWS region"
  type        = string
}

variable "lambda_function_url" {
  description = "URL for the lambda email function"
  type        = string
}

variable "lambda_secret" {
  description = "Secret for the lambda function"
  type        = string
}
