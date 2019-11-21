curl -L https://raw.githubusercontent.com/patternfly/training-scenarios/master/react-site/pf-react-express.tar.gz > ~/pf-express.tar.gz
tar -xvzf ~/pf-express.tar.gz -C ~/tutorial
cd ~/tutorial
npm install
npm install @patternfly/react-core
npm install @patternfly/react-table
export CHOKIDAR_USEPOLLING=true
mkdir ~/tutorial/src/components
curl -L https://raw.githubusercontent.com/nicolethoen/training-scenarios/master/react-components/toolbar-filter/assets/checkboxSelect.js > ~/tutorial/src/components/checkboxSelect.js
curl -L https://raw.githubusercontent.com/nicolethoen/training-scenarios/master/react-components/toolbar-filter/assets/input.js > ~/tutorial/src/components/input.js
curl -L https://raw.githubusercontent.com/nicolethoen/training-scenarios/master/react-components/toolbar-filter/assets/kebab.js > ~/tutorial/src/components/kebab.js
curl -L https://raw.githubusercontent.com/nicolethoen/training-scenarios/master/react-components/toolbar-filter/assets/table.js > ~/tutorial/src/components/table.js
echo "Starting... this will block the rest of the commands from running..."
npm start