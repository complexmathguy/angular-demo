resource "kubernetes_service" "app-master" {
  metadata {
    name = "app-master"
  }

  spec {
    selector = {
      app  = "angular-demo"
    }
    port {
      name        = "app-port"
      port        = 8080
      target_port = 8080
    }

    port {
      name        = "mongoose-port"
      port        = 4000
      target_port = 4000
    }
    
    port {
      name        = "mongo-port"
      port        = 27017
      target_port = 27017
    }

    type = "LoadBalancer"
  }
  
}
