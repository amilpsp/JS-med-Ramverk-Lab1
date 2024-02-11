import {createRouter, createWebHashHistory} from 'vue-router'

import AboutViewVue from '@/views/AboutView.vue'
import ContactViewVue from '@/views/ContactView.vue'
import HomeViewVue from '@/views/HomeView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            component: AboutViewVue,
            path: '/about'
        },
        {
            component: ContactViewVue,
            path: '/contact'
        },
        {
            component: HomeViewVue,
            path:'/'
        }
    ]
})