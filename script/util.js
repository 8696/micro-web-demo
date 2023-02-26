const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');
const log4js = require("log4js")
const logger = log4js.getLogger();
logger.level = 'all'
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const ROOT_PATH = path.resolve(__dirname, '../');

function getMicroPaths() {
  const files = fs.readdirSync(path.resolve(__dirname, '../'));
  return files.filter((file) => {
    return !fs.statSync(path.resolve(__dirname, '../' + file)).isFile() && /^micro/.test(file);
  }).map(file => path.resolve(__dirname, '../' + file));
}


function clearPublicPath() {
  try {
    fsExtra.removeSync(PUBLIC_PATH);
  } catch (e) {
  }
  try {
    fsExtra.mkdirpSync(PUBLIC_PATH);
  } catch (e) {
  }
}


function getMicroBuildPaths() {
  return getMicroPaths().map(file => path.resolve(file, './build'));
}

function clearMicroBuildPaths() {
  getMicroBuildPaths().forEach((dir) => {
    try {
      fsExtra.removeSync(dir);
    } catch (e) {
    }
  });
}

function getMicroAppName() {
  return getMicroPaths().map(item => {
    return path.parse(item).name;
  })
    .map(item => {
      return item === 'micro-base' ? item : item.replace(/^micro-/, '');
    });
}

function makePublicMicroPaths() {
  getMicroAppName().forEach(appName => {
    fsExtra.mkdirpSync(path.resolve(PUBLIC_PATH, './' + appName));
  });
}

function moveAppBuildFileToPublic() {
  const microNames = getMicroAppName();
  getMicroPaths().forEach(microPath => {
    microNames.forEach(microName => {
      if (new RegExp(microName + '$').test(microPath)) {
        fsExtra.copySync(
          path.resolve(microPath, './build')
          , path.resolve(PUBLIC_PATH, './' + microName)
          , {}
        );
      }
    });
  });
}

function copyEntryFile() {
  fs.copyFileSync(
    path.resolve(PUBLIC_PATH, './micro-base/index.html')
    , path.resolve(PUBLIC_PATH, './index.html')
  );
}

function clearNodeModules() {
  getMicroPaths().forEach(microApp => {
    try {
      logger.info('remove: ' + path.resolve(microApp, './node_modules'))
      fsExtra.removeSync(path.resolve(microApp, './node_modules'))
      logger.info('remove: ' + path.resolve(microApp, './build'))
      fsExtra.removeSync(path.resolve(microApp, './build'))
    } catch (e) {
    }
  })
  try {
    logger.info('remove: ' + path.resolve(ROOT_PATH, './node_modules'))
    fsExtra.removeSync(path.resolve(ROOT_PATH, './node_modules'))
  } catch (e) {
  }

  try {
    logger.info('remove: ' + PUBLIC_PATH)
    fsExtra.removeSync(PUBLIC_PATH)
  } catch (e) {
  }

}

function getLogIns() {
  return logger
}

module.exports = {
  clearPublicPath,
  clearMicroBuildPaths,
  moveAppBuildFileToPublic,
  copyEntryFile,
  clearNodeModules,
  getLogIns
}
