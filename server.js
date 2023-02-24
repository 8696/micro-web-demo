const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const fs = require('fs')
const app = new Koa();

const publicPath = path.resolve(__dirname, './public')

app.use(koaStatic(publicPath, {
  maxAge: 20000
}));

app.use(async (context) => {
  // 处理 404
  context.body = fs.readFileSync(path.resolve(publicPath, './index.html')).toString()
});

const port = 38004

app.listen(port);
console.log('预览：http://localhost:' + port)
