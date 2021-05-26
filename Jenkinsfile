pipeline {
    agent { docker { image 'Jenkinsfile_Docker_App_Image()' } }
    stages {
        stage('install') {
            steps {
                sh 'npm install -g @angular/cli@11.2.7 > /dev/null
'
                sh 'mkdir -p $WORKSPACE/appRoot && cd $WORKSPACE/appRoot && ng new angular-demo --defaults'
                sh 'cp -r $WORKSPACE/angular-demo/. $WORKSPACE/appRoot/angular-demo'
$set( $deployDirective = "" )
                sh 'cd $WORKSPACE/appRoot/angular-demo && npm install --prod && npm run setup && ng build ${deployDirective}'
            }
            
        stage('build') {
            steps {
                sh 'cd $WORKSPACE/appRoot/angular-demo && ng build'
            }
        }
    }
}
