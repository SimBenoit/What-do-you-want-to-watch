terraform {
  backend "s3" {
    bucket = "terraform-ayrmin"
    key    = "app1/terraform.tfstate"
    region = "us-east-1"
  }
}
