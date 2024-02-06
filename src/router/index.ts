import {createRouter, createWebHistory} from 'vue-router';
import DashboardView from '../views/DashboardView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView,
        },
        {
            path: '/404',
            name: '404',
            component: () => import('../views/404View.vue'),
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    if (!to.name) {
        next({name: '404'});
        return;
    }

    next();
});

export default router;