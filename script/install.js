const shelljs = require('shelljs')
const { getLogIns } = require('./util')

const p = process.argv[2] || '../'

const install = (cmd) => {
  getLogIns().info('run: ' + cmd);
  shelljs.exec(cmd);
};

try {
  install('cd '+ p +'micro-base && yarn');
}catch (e) {
}

try {
  install('cd '+ p +'micro-react-app-01 && yarn');
} catch (e) {
}

try {
  install('cd '+ p +'micro-react-app-02 && yarn');
} catch (e) {
}

try {
  install('cd '+ p +'micro-vue-app-01 && yarn');
} catch (e) {
}

try {
  install('cd '+ p +'micro-angular-app-01 && yarn');
} catch (e) {
}

