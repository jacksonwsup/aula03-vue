import { createRouter,createWebHistory } from "vue-router"; 

import HomeView from '../views/home/HomeView.vue';
import PedidoView from '../views/pedido/PedidoView.vue';
import NotFoundView from '../views/notfound/NotFoundView.vue';

import ProdutoView from "@/views/produto/ProdutoView.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //Esta é a base da navegação
    routes: [
        {
            path: "/",
            name:"home",
            component: HomeView,
        },
        {
            path: "/produtos",
            name:"produtos",
            component: ProdutoView,
            meta: {
                auth:true
            }
        },

        {
            path: "/pedido",
            name:"pedido",
            component: PedidoView,
        },
        {
            path: "/:catchAll(.*)",
            name:"notfound",
            component: NotFoundView,
        }
        
    ]
})

router.beforeEach((to, from) => {
    if (to.meta?.auth) {
        
        console.log(to.name)
    }
})

export default router;


