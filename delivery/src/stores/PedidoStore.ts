import { Pedido } from "@/models/Pedido";
import { PedidoItem } from "@/models/PedidoItem";
import type { Produto } from "@/models/Produto";
import { defineStore } from "pinia";

export const usePedidoStore = defineStore("pedido", {

    state: () => {
        return {
            pedido: new Pedido()
        }
    },
    actions: {

       adicionarItem(produto: Produto): void {
           const item: PedidoItem | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
           if (item) {
             item.quantidade++;
           } else {
             this.pedido.itens.push(new PedidoItem(produto, 1));
           }
           this.pedido.total += Number(produto.preco);
           console.log({ pedido: this.pedido });
           console.log({ total: this.pedido.total });
         },
       
         removerItem(produto: Produto): void {
           const item: PedidoItem | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
           if (item) {
             item.quantidade--;
             this.pedido.total -= produto.preco;
             if (item.quantidade === 0) {
               this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
             }
           }
           console.log(this.pedido);
           console.log(this.pedido.total);
         }

         
    }
});