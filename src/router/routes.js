import { globalSettings } from '../App';

const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Todos',
        component: () => import('pages/Todos.vue'),
      },
      {
        path: '/todo',
        name: 'AddTodo',
        component: () => import('pages/AddTodo.vue'),
      },
      {
        path: '/todo/:id',
        name: 'EditTodo',
        component: () => import('pages/AddTodo.vue'),
        props: true,
      },
      {
        path: '/forbidden',
        name: 'Forbidden403',
        component: () => import('pages/Forbidden403.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

routes.map((route) => {
  route.beforeEnter = (to, from, next) => {
    if (globalSettings.IS_AVAILABLE) {
      next();
      return;
    }

    if (typeof window.Fingerprint !== 'undefined') {
      // eslint-disable-next-line no-undef
      Fingerprint.isAvailable(() => {
        // eslint-disable-next-line no-undef
        Fingerprint.show({
          clientId: 'Fingerprint-Demo',
          clientSecret: 'password',
        }, () => {
          globalSettings.IS_AVAILABLE = true;

          next();
        }, () => {
          globalSettings.IS_AVAILABLE = false;

          next('/forbidden');
        });
      }, () => {
        globalSettings.IS_AVAILABLE = true;
        next();
      });
    } else {
      globalSettings.IS_AVAILABLE = true;
      next();
    }
  };

  return route;
});

export default routes;
