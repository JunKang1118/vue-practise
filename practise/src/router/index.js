import { createRouter, createWebHistory  } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CountDown from '../views/CountDown.vue'


/**
 * createRouter: returns a router instance which should be passed into the app instance for activation.
 *               
 *               compulsory params: routes, history
 * 
 * history     : either pass createWebHistory or createWebHashHistory or createMemoryHistory.
 *               createWebHistory    : require proper server config, but comes with nice looking URL
 *               createWebHashHistory: pass URL after the # char, doesn't require special treatment on server level
 *               createMemoryHistory : for Node env and SSR, unable to back, forward due to absent of history 
 */              
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/countdown', component: CountDown, name:"CountDown"},
        {path: '/', component: HomePage, name:"Home"},
    ]
})

export default router