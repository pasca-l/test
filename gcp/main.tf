resource "google_compute_instance" "free_vm" {
  name         = "learning-terraform-vm"
  machine_type = "e2-micro"
  zone         = "us-central1-a"

  allow_stopping_for_update = true

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 30            # Max free tier size
      type  = "pd-standard" # Standard disk is free; pd-balanced/ssd are NOT
    }
  }

  network_interface {
    network = "default"
    access_config {
      # Leaving this empty assigns a public IP (Ephemeral)
      # Essential for connecting via SSH
    }
  }
}
