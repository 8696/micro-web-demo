const shelljs = require('shelljs')
const { clearMicroBuildPaths, getLogIns } = require('./util')

clearMicroBuildPaths()

const p = process.argv[2] || '../'

const build = (cmd) => {
  getLogIns().info('run: ' + cmd)
  shelljs.exec(cmd);
};

build('cd '+ p +'micro-base && pnpm build:development');

build('cd '+ p +'micro-react-app-01 && pnpm build:development');

build('cd '+ p +'micro-react-app-02 && pnpm build:development');

build('cd '+ p +'micro-vue-app-01 && pnpm build');

build('cd '+ p +'micro-angular-app-01 && pnpm build');

