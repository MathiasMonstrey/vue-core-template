import VueRouter, { RouteConfig } from 'vue-router';
import Vue, { VueConstructor } from 'vue';

export default {
    install(vue: typeof Vue, { router, error }: { router: VueRouter, error: VueConstructor<Vue> }): void {
        const allroutes = this.getAllRoutes(error);
        router.addRoutes(allroutes);
    },

    getModuleRoutes(): RouteConfig[] {
        const routeFiles = require.context('@/', true, /[A-Za-z0-9-_]+\-routes\.ts$/i);
        const routes: RouteConfig[] = [];
        routeFiles.keys().forEach((key) => {
            routeFiles(key).default.forEach((route: RouteConfig) => {
                routes.push(route);
            });
        });
        return routes;
    },

    getIgnoredRoutes(error: VueConstructor<Vue>): RouteConfig[] {
        /* if (error) {
            return [
                { path: '/404', component: error },
                { path: '/403', component: error },
                { path: '/*', redirect: '/404' },
            ];
        } */
        return [];
    },

    getAllRoutes(error: VueConstructor<Vue>): RouteConfig[] {
        return this.getModuleRoutes().concat(this.getIgnoredRoutes(error));
    },
};
