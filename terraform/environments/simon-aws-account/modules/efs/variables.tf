variable "vpc_id" {
  type        = string
  description = "The VPC to create the EFS file system and mount targets in"
}

variable "subnet_ids" {
  type        = list(string)
  description = "List of subnet IDs to create mount targets in"
}

variable "allowed_security_groups" {
  description = "List of security group IDs that should have NFS access to EFS"
  type        = list(string)
}
