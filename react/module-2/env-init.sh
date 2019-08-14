curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react-site/pf-react-express.tar.gz > ~/pf-express.tar.gz
tar -xvzf ~/pf-express.tar.gz -C ~/tutorial
cd ~/tutorial
npm install
export CHOKIDAR_USEPOLLING=true
mkdir ~/tutorial/src/components
curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react/assets/header.js > ~/tutorial/src/components/header.js
curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react/assets/page.js > ~/tutorial/src/components/page.js
curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react/assets/toolbar.js > ~/tutorial/src/components/toolbar.js
touch ./src/app.css
echo "Starting... this will block the rest of the commands from running..."
npm start