import { Pedido } from "@/models/Pedido";
import { PedidoItem } from "@/models/PedidoItem";
import type { Produto } from "@/models/Produto";
import enviarPedido from "@/services/PedidoService"; // Corrigindo a importação
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
        },
        removerItem(produto: Produto): void {
            const item: PedidoItem | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
            if (item) {
                item.quantidade--;
                this.pedido.total -= Number(produto.preco);
                if (item.quantidade === 0) {
                    this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
                }
            }
        },
        async concluirPedido(): Promise<void> {
            if (this.pedido.itens.length === 0) {
                return;
            }

            await enviarPedido(this.pedido);
            
            this.pedido = new Pedido();
        }
    }
});
