#!/bin/bash
# 
# install dependencies
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/modules/dependencies.sh | bash 
# 
# update .gitignore
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/modules/gitignore.sh | bash 
# 
# update scripts in package.json
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/modules/package-scripts.sh | bash 