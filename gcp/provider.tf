# https://registry.terraform.io/providers/hashiCorp/google/latest/docs

terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

provider "google" {
  project = "terraform-488710"
  region  = "us-central1"
}
