const {execSync} = require('child_process');

const { clearMicroBuildPaths } = require('./util')

clearMicroBuildPaths()

const p = process.argv[2] || '../'

const build = (cmd) => {
  console.log('run: ' + cmd);
  execSync(cmd);
};

build('cd '+ p +'micro-base && yarn build:development');

build('cd '+ p +'micro-react-app-01 && yarn build:development');

build('cd '+ p +'micro-react-app-02 && yarn build:development');

build('cd '+ p +'micro-vue-app-01 && yarn build');

build('cd '+ p +'micro-angular-app-01 && yarn build');

console.log('build end.')
