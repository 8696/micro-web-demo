import './public-path.js';

import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare const window : {
  addEventListener: any
  __MICRO_APP_BASE_APPLICATION__: boolean
}
enableProdMode();

let app: NgModuleRef<AppModule> | null = null;
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((res: NgModuleRef<AppModule>) => {
    app = res
  })

console.log(window.__MICRO_APP_BASE_APPLICATION__)

// 监听卸载操作
window.addEventListener('unmount', function () {
  app?.destroy();
  app = null;
})
