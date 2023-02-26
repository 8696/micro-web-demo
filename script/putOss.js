const glob = require("glob")
const path = require("path")
const fs = require("fs")
const OSS = require('ali-oss');
const { getLogIns } = require('./util')
const config = require('./ossConfig/config')
const p = process.argv[2] || 'QK'

const client = new OSS(config(p));

client.listV2({
  'max-keys': 1000
})
  .then(async (res) => {

    for (let i = 0; i < res.objects.length; i++) {
      const item = res.objects[i]
      getLogIns().info('remove：' + item.name)
      await client.delete(item.name)
    }

    glob(path.resolve(__dirname, '../public/**/*'), async  (err, files) => {
      if (err) return;
      for (let i = 0; i < files.length; i++) {
        let file = files[i]
        if (!fs.statSync(file).isDirectory()) {
          getLogIns().info('put：' + file)
          file = file.replace(path.resolve(__dirname, '../public') + '/', '');
          const isHtml = /\.html$/.test(file)
          await client.put(file, files[i], {
            headers: JSON.parse(JSON.stringify({
              'Cache-Control': isHtml ? 'no-store' : 'max-age=' + 3600 * 24,
              'Expires': isHtml ? -1 : undefined,
              'Pragma': isHtml ? 'no-cache': undefined
            }))
          })
        }
      }
    })
  })

