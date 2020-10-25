#!/bin/bash
# 
echo "-- update scripts in package.json --"
# 
npx -p npe -c '\
  npe scripts.start "craco start";\
  npe scripts.build "craco build";\
  npe scripts.serve "serve -s build";\
  npe scripts.eslint "eslint \"src/**/*.{js,jsx}\"";\
  npe scripts.eslint:fix "npm run eslint -- --fix";\
  npe scripts.stylelint "stylelint \"src/**/*.{css,scss}\"";\
  npe scripts.stylelint:fix "npm run stylelint -- --fix";\
  npe scripts.lint "npm run eslint ; npm run stylelint";\
  npe scripts.lint:fix "npm run eslint:fix ; npm run stylelint:fix"\
'
# 
echo "-- finished --"