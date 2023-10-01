import { createRouter,createWebHistory } from "vue-router"; 

import HomeView from "../views/home/HomeView.vue";
import PedidoView from "../views/pedido/PedidoView.vue";
import NotFoundView from "../views/home/NotFoundView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //Esta é a base da navegação
    routes: [
        {
            path: "/",
            name:"home",
            component: HomeView,
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

export default router;


