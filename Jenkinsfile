pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vamsibolloju/heroku-practice-node.git'
            }
        }
        stage('Build') {
            steps {
                 nodejs(nodeJSInstallationName: 'Node-10.17.0') {
                    sh "yarn install"
                    sh "yarn build"
                 }
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node-10.17.0') {
                    sh "yarn test"
                }
            }
            post {
                always {
                    emailext subject: "Job ${JOB_NAME} - build ${BUILD_NUMBER} - ${currentBuild.result}",
                    body: "Please go to  ${BUILD_URL} and verify",
                    to: "test@jenkins"
                }
            }

        }
        stage('Post Build') {
            steps {
                sh "echo 'post build actions'"
            }
            post {
                always {
                    junit "**/junit.xml"
                    archiveArtifacts "dist/*.js"
                }
            }
        }
    }
}
