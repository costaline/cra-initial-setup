#!/bin/bash
# 
# install dependencies
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/modules/dependencies.sh | bash 
# 
# update .gitignore
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/modules/gitignore.sh | bash 
# 