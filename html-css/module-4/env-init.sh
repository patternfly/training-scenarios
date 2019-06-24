curl -L https://www.dropbox.com/s/u1ofp8ch795zkvr/pf-express.tar.gz?dl=0 > ~/pf-express.tar.gz
tar -xvzf ~/pf-express.tar.gz -C ~/tutorial
cd ~/tutorial
npm install
echo "Starting... this will block the rest of the commands from running..."
npm start