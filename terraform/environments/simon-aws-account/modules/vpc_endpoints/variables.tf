variable "vpc_id" {
  type = string
}

variable "region" {
  type = string
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "security_group_id" {
  type = string
}

variable "route_table_ids" {
  type = list(string)
}
