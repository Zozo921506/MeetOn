import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import NotFound from '@/views/NotFound.vue';
import RegisterPage from '@/views/RegisterPage.vue';

//Set the routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Home route
        {
            path: '/',
            component: HomePage,
            name: 'Home'
        },

        //Login route
        {
            path: '/login',
            component: LoginPage,
            name: 'Login'
        },

        //Register route
        {
            path: '/register',
            component: RegisterPage,
            name: 'Register'
        },

        //Undefined route
        {
            path: '/:catchAll(.*)',
            component: NotFound,
            name: '404'
        }
    ]
});

export default router;