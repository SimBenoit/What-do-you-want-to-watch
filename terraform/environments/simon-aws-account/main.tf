terraform {
  required_version = ">= 1.3.0"
}

######################
# 0 Security Module
######################
#module "security" {
#  source = "./modules/security"
#
#  vpc_id = var.vpc_id
#}


######################
# 1 EFS Module
######################
#module "efs" {
#  source = "./modules/efs"
#
#  vpc_id                  = var.vpc_id
#  subnet_ids              = var.private_subnet_ids
#  allowed_security_groups = [
#    module.security.nginx_sg_id,
#    module.security.efs_sg_id
#  ]
#}

######################
# 2 Certbot Task (One-time or Scheduled)
######################
#module "certbot" {
#  source              = "./modules/certbot"
#
#  cluster_id          = var.frontend_cluster_id
#  certbot_image       = var.certbot_image
#  efs_id              = module.efs.efs_id
#  execution_role_arn  = var.certbot_task_role_arn
#  task_role_arn       = var.certbot_task_role_arn
#  security_group_id   = module.security.nginx_sg_id
#  private_subnet_ids  = var.private_subnet_ids
#  cert_email          = var.cert_email
#  domain              = var.domain
#  region              = var.aws_region
#  run_once            = true
#}

######################
# 3 NGINX Frontend Service
######################
module "nginx" {
  source              = "./modules/nginx"

  cluster_id          = var.frontend_cluster_id
  subnet_ids          = var.public_subnet_ids
  efs_id              = var.efs_id
  security_group_id   = var.nginx_sg_id
  frontend_image      = var.frontend_image
  execution_role_arn  = var.ecs_execution_arn
  task_role_arn       = var.ecs_execution_arn
  region              = var.aws_region
}

######################
# 4 ECR Lifecycle Cleanup
######################
#module "ecr_cleanup" {
#  source          = "./modules/ecr_cleanup"
#  repository_name = var.ecr_repository
#}
