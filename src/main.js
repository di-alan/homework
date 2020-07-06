import $ from "jquery";
import Vue from 'vue'
import VueRouter from 'vue-router'



import Login from './components/Login.vue'
import Detail from './components/Detail.vue'
import Index from './views/Index.vue'
import App from "./App.vue";

const router= new VueRouter({
    routes:[{
        path:"/",
        component:Login
    },
    {
        path:"/index",
        component:Detail,
          children:[{
            path:"",
            component:Detail
        }] 
    }
   ]     
})

Vue.use(VueRouter)

new Vue({
    el: "#app",
    render: h => h(App),
    router
})
