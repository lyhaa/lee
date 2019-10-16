import Vue from 'vue';
import Router from 'vue-router';
import Home from '../path/Home.vue';
import List from '../path/List.vue';
import Cart from '../path/Cart.vue';
import My from '../path/My.vue';
Vue.use(Router);
const router = new Router({
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home,
            meta:{
                KeepAlive: true
            }
        },
        {
            path:"/list",
            name:"List",
            component:List
        },
        {
            path:"/cart",
            name:"cart",
            component:Cart
        },
        {
            path:"/My",
            name:"my",
            component:My
        }
    ]
})
export default router;