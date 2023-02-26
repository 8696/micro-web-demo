const shelljs = require('shelljs')
const { clearMicroBuildPaths, getLogIns } = require('./util')

clearMicroBuildPaths()

const p = process.argv[2] || '../'

const build = (cmd) => {
  getLogIns().info('run: ' + cmd)
  shelljs.exec(cmd);
};

build('cd '+ p +'micro-base && yarn build:development');

build('cd '+ p +'micro-react-app-01 && yarn build:development');

build('cd '+ p +'micro-react-app-02 && yarn build:development');

build('cd '+ p +'micro-vue-app-01 && yarn build');

build('cd '+ p +'micro-angular-app-01 && yarn build');

