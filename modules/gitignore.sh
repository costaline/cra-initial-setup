# !/bin/bash
# 
echo "-- update .gitignore --"
# 
echo >> ./.gitignore
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/configs/.gitignore >> ./.gitignore 
# 
echo "-- finished --"