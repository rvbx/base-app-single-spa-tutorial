import { DomainService } from './domain.service';

export const DomainServiceFactory = () => {
  // Create env
  const env = new DomainService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__domain'] || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = window['__domain'][key];
    }
  }

  return env;
};

export const DomainServiceProvider = {
  provide: DomainService,
  useFactory: DomainServiceFactory,
  deps: [],
};