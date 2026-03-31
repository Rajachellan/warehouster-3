pipeline {
    agent any

    environment {
        DOCKER_IMAGE   = "warehouster-frontend"
        CONTAINER_NAME = "warehouster-container"
        APP_PORT       = "5005"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: "dev",
                    credentialsId: 'learnfella-credentials',
                    url: 'https://github.com/Rajachellan/warehouster.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                echo "Installing dependencies..."
                npm install
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building Docker image..."
                docker build -t $DOCKER_IMAGE .
                '''
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                  --name $CONTAINER_NAME \
                  --restart always \
                  -p $APP_PORT:$APP_PORT \
                  $DOCKER_IMAGE:latest
                '''
            }
        }

        stage('Verify Container') {
            steps {
                sh '''
                if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME)" != "true" ]; then
                    docker logs $CONTAINER_NAME
                    exit 1
                fi
                echo "✅ Container is running"
                '''
            }
        }
    }

    post {
        success {
            echo "🎉 Learnfella frontend deployed successfully!"
            echo "App running on port ${APP_PORT}"
        }
        failure {
            echo "❌ Deployment failed. Check logs above."
        }
    }
}
