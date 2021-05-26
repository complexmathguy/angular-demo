resource "kubernetes_replication_controller" "app-master" {
  metadata {
    name = "app-master"
  }

  spec {
    replicas = 1

    selector = {
      app  = "angular-demo"
    }
    template {        
      container {
        image = "mongo"
        name  = "mongo"

        port {
          container_port = 27017
        }

        resources {
          requests {
            cpu    = "100m"
            memory = "100Mi"
          }
        }
      }

      container {
        image = "theharbormaster/angular-demo:latest"
        name  = "app-container"
        
        env {
          name  = "MONGOOSE_HOST_NAME"
          value = "kubernetes_service.app-master.load_balancer_ingress.0.ip"                 
        }
        
        port {
          container_port = 8080
        }

        port {
          container_port = 4000
        }

        resources {
          requests {
            cpu    = "100m"
            memory = "100Mi"
          }
        }
      }
    }
  }
}