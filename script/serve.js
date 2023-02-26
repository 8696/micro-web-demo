const shelljs = require('shelljs')
const p = process.argv[2] || '../'
const { getLogIns } = require('./util')

const serve = (cmd) => {
  getLogIns().info('run: ' + cmd);
  shelljs.exec(cmd, { async: true })
};

try {
  serve('cd '+ p +'micro-base && yarn run start:development');
}catch (e) {
}

try {
  serve('cd '+ p +'micro-react-app-01 && yarn start:development');
} catch (e) {
}

try {
  serve('cd '+ p +'micro-react-app-02 && yarn start:development');
} catch (e) {
}

try {
  serve('cd '+ p +'micro-vue-app-01 && yarn run serve');
} catch (e) {
}

try {
  serve('cd '+ p +'micro-angular-app-01 && yarn start');
} catch (e) {
}

