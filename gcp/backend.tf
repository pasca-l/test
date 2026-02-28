terraform {
  backend "gcs" {
    bucket = "sy-tfstate"
    prefix = "terraform/github"
  }
}
