pipeline {

	environment {
		containerName = "${SERVICE_NAME}"
		imagesName = "${PROFILE}/${SERVICE_NAME}"
	}
	
    agent any
    tools {
        nodejs "node"
    }
	
    stages {
        stage('check') {
            steps {
				checkout scm
            }
        }
		
		stage('validate'){
			steps{
				sh ''' docker stop "${containerName}" || true && docker rm "${containerName}" || true '''
				sh ''' docker images -a | grep "${imagesName}" | awk '{print \$3}' | xargs --no-run-if-empty docker rmi --force '''
			}
		}
		
		stage('dockerize') {
            steps {
				sh "docker build --build-arg profile=${PROFILE} --build-arg port=${PORT_FORWARD} --no-cache -t ${imagesName} ."
            }
        }
		
		stage('deploy') {
            steps {
				script {
					sh "docker run -d -p ${PORT_FORWARD}:80 --name ${containerName} --network desklab-net ${imagesName}"
				}
			}
        }
    }
}
