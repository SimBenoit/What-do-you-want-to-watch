resource "aws_ecs_task_definition" "nginx" {
  family                   = "nginx-frontend"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = var.execution_role_arn
  task_role_arn            = var.task_role_arn

  container_definitions = jsonencode([
    {
      name             = "nginx"
      image            = var.frontend_image
      essential        = true
      portMappings     = [
        {
          containerPort = 443
          protocol      = "tcp"
        }
      ]
      mountPoints = [
        {
          sourceVolume  = "certs"
          containerPath = "/mnt/efs"
          readOnly      = true
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/nginx"
          awslogs-region        = var.region
          awslogs-stream-prefix = "nginx"
        }
      }
    }
  ])

  volume {
    name = "certs"
    efs_volume_configuration {
      file_system_id          = var.efs_id
      root_directory          = "/"
      transit_encryption      = "ENABLED"
    }
  }
}

resource "aws_ecs_service" "nginx" {
  name            = "nginx-frontend-service"
  cluster         = var.cluster_id
  task_definition = aws_ecs_task_definition.nginx.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.subnet_ids
    assign_public_ip = true
    security_groups  = [var.security_group_id]
  }
}
