curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/site/pf-express.tar.gz > /root/pf-express.tar.gz
tar -xvzf /root/pf-express.tar.gz
npm install
echo "Starting... this will block the rest of the commands from running..."
npm start
