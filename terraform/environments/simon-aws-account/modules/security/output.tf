output "nginx_sg_id" {
  value = aws_security_group.nginx_task_sg.id
}

output "efs_sg_id" {
  value = aws_security_group.efs_sg.id
}
