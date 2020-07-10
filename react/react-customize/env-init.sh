curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react-site/pf-react-express.tar.gz > /root/pf-express.tar.gz
tar -xvzf /root/pf-express.tar.gz
npm install
export CHOKIDAR_USEPOLLING=true
mkdir ~/tutorial/src/components
touch ./src/app.css
echo "Starting... this will block the rest of the commands from running..."
npm start
