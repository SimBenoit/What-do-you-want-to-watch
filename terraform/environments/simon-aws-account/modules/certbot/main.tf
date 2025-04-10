resource "aws_ecs_task_definition" "certbot" {
  family                   = "certbot-renew"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = var.execution_role_arn
  task_role_arn            = var.task_role_arn

  container_definitions = jsonencode([
    {
      name      = "certbot"
      image     = var.certbot_image
      essential = true
      command   = [
        "certonly",
        "--dns-route53",
        "--non-interactive",
        "--agree-tos",
        "--email", var.cert_email,
        "-d", var.domain,
        "-d", "www.${var.domain}",
        "--config-dir", "/mnt/efs/letsencrypt",
        "--work-dir", "/mnt/efs/work",
        "--logs-dir", "/mnt/efs/logs"
      ]
      mountPoints = [
        {
          sourceVolume  = "certs"
          containerPath = "/mnt/efs"
          readOnly      = false
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/certbot"
          awslogs-region        = var.region
          awslogs-stream-prefix = "certbot"
        }
      }
    }
  ])

  volume {
    name = "certs"
    efs_volume_configuration {
      file_system_id     = var.efs_id
      root_directory     = "/"
      transit_encryption = "ENABLED"
    }
  }
}

resource "aws_cloudwatch_log_group" "certbot" {
  name              = "/ecs/certbot"
  retention_in_days = 7
}

resource "aws_ecs_task" "certbot_once" {
  count             = var.run_once ? 1 : 0
  depends_on        = [aws_ecs_task_definition.certbot]
  launch_type       = "FARGATE"
  cluster           = var.cluster_id
  task_definition   = aws_ecs_task_definition.certbot.arn

  network_configuration {
    subnets          = var.private_subnet_ids
    assign_public_ip = false
    security_groups  = [var.security_group_id]
  }
}
