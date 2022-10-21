import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import FrequentlyAskedQuestions from "../views/FrequentlyAskedQuestions.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/faq',
        name: 'FrequentlyAskedQuestions',
        component: FrequentlyAskedQuestions
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;