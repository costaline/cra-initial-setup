#!/bin/bash
# 
echo "-- download files --"
# 
touch files-to-download-from-github.txt && \
# .envs
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/envs/files.txt >> files-to-download-from-github.txt && \
# configs
wget -qO- https://raw.githubusercontent.com/costaline/cra-initial-setup/master/configs/files.txt >> files-to-download-from-github.txt && \
# 
wget -qi files-to-download-from-github.txt && \
# 
rm files-to-download-from-github.txt
# 
echo "-- finished --"