# modules/efs/main.tf
resource "aws_efs_file_system" "certs" {
  creation_token = "frontend-certs"
  lifecycle_policy {
    transition_to_ia = "AFTER_30_DAYS"
  }
  throughput_mode = "bursting"
  encrypted       = true
  tags = {
    Name = "frontend-efs-certs"
  }
}

resource "aws_efs_mount_target" "efs_mount" {
  for_each        = toset(var.subnet_ids)
  file_system_id  = aws_efs_file_system.certs.id
  subnet_id       = each.key
  security_groups = var.allowed_security_groups
}
