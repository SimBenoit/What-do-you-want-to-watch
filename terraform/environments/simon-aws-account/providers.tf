provider "aws" {
    region = "us-east-1"
    profile = var.aws_profile != "" ? var.aws_profile : null
    assume_role {
      role_arn = "arn:aws:iam::521673981088:role/Admin"
    }
    default_tags {
      tags = {
        repository = "https://github.com/SimBenoit/What-do-you-want-to-watch.git",
        application = "What-do-you-want-to-watch"
      }
    }
}
