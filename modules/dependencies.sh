# !/bin/bash
# 
echo "-- install dependencies --"
# 
npm install --silent --save \
  classnames \
  node-sass \
  normalize.css \
  prop-types \
  react-router-dom \
  react-redux \
  redux \
  redux-thunk
# 
echo "-- finished --"
# 
echo "-- install dev dependencies --"
# 
npm install --silent --save-dev \
  @craco/craco \
  craco-alias \
  craco-sass-resources-loader \
  eslint-config-prettier \
  eslint-plugin-babel \
  eslint-plugin-prettier \
  eslint-plugin-simple-import-sort \
  prettier \
  redux-devtools-extension \
  serve \
  stylelint \
  stylelint-config-rational-order \
  stylelint-config-recommended \
  stylelint-order \
  stylelint-scss
# 
echo "-- finished --"