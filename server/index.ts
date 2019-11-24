import koa from 'koa';
import send from 'koa-send';
import chalk from 'chalk';
import {resolve} from 'path';

const app = new koa;


app.use(async (ctx, next) => {
  if(ctx.path.startsWith('/webview/page/')){
    // load webview page
  }
  if(ctx.path.startsWith('/webview/api/')){
    // load webview page
  }
  // main
  await send(ctx, resolve(__dirname, '../public/main.html'));
});

app.listen(9000, () => {
  console.log(chalk.cyan(`serve@http://localhost:9000/`));
});



