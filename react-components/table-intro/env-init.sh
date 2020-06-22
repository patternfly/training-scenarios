curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react-site/pf-react-express.tar.gz > /root/pf-express.tar.gz
tar -xvzf /root/pf-express.tar.gz
npm install
npm install @patternfly/react-core@prerelease
npm install @patternfly/react-table@prerelease
export CHOKIDAR_USEPOLLING=true
touch ./src/data.js
echo "Starting... this will block the rest of the commands from running..."
npm start
