import { Component } from '@angular/core';
import { MICRO_APPS } from 'src/environments/environment';

// Single SPA
import * as singleSpa from 'single-spa';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'base-app';

  ngAfterViewInit() {
    /**
     * Registra os micro apps
     */
    MICRO_APPS.forEach(MICRO_APP => {
      console.log('MICRO_APP', MICRO_APP);
      singleSpa.registerApplication(
        MICRO_APP.appName,
        // @ts-ignore
        () => window.System.import(MICRO_APP.main).then(appModule => {
          console.log('app module: single-spa', appModule);
          return appModule.default;
        }),
        location => location.pathname.startsWith(MICRO_APP.path)
      );
    });

    singleSpa.start();
  }
}
