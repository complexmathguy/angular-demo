#!/bin/bash
mkdir appRoot
cd appRoot && ng new angular-demo --defaults
cp -r -n /appRoot/angular-demo/ /gitRoot/
cd /gitRoot/angular-demo && npm install --prod && npm run setup
cd /gitRoot/angular-demo && ng build
cp -r -n /gitRoot/ /code/    
cp -r -n /gitRoot/ /code/