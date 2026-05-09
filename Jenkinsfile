pipeline {
    agent any

    environment {
        DOCKER_IMAGE   = "warehouster-frontend"
        CONTAINER_NAME = "warehouster-container"
        APP_PORT       = "5005"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: "main",
                    credentialsId: 'learnfella-credentials',
                    url: 'https://github.com/Rajachellan/warehouster-3.git'
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
                docker build --no-cache -t $DOCKER_IMAGE .
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
                RUNNING=$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME)

                if [ "$RUNNING" != "true" ]; then
                    echo "❌ Container failed to start"
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
            echo "🎉 Warehouster frontend deployed successfully!"
            echo "🚀 App running on port ${APP_PORT}"
        }

        failure {
            echo "❌ Deployment failed. Check logs above."
        }

        always {
            sh 'docker image prune -f || true'
        }
    }
}