output "endpoint_ids" {
  value = [
    aws_vpc_endpoint.ecr_api.id,
    aws_vpc_endpoint.ecr_dkr.id,
    aws_vpc_endpoint.s3.id
  ]
}
