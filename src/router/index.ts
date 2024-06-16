import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';
import { Loading, QSpinnerFacebook } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    Loading.show({
      spinner: QSpinnerFacebook,
      delay: 1000,
      message: 'Network might be slow. Please wait...',
    });

    next();
  });

  Router.afterEach(() => {
    Loading.hide();
  });

  return Router;
});
