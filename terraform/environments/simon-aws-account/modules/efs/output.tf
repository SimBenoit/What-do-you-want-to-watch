output "efs_id" {
  description = "The ID of the EFS file system"
  value       = aws_efs_file_system.certs.id
}

output "efs_mount_targets" {
  description = "The list of EFS mount target IDs"
  value       = [for mt in aws_efs_mount_target.efs_mount : mt.id]
}
