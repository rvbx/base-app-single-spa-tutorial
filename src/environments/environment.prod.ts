export const environment = {
  production: true
};

const MICRO_APP_BASE_URL = '/apps';

export const MICRO_APPS = [
  {
    appName: 'app1',
    main: `${MICRO_APP_BASE_URL}/app1/main.js`,
    path: '/app1',
    codigo: 0
  },
  {
    appName: 'app2',
    main: `${MICRO_APP_BASE_URL}/app2/main.js`,
    path: '/app2',
    codigo: 1
  }
];