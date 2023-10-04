import { PedidoItem } from "./PedidoItem";

export class Pedido {

    public itens: PedidoItem[];

    public total: number;

    constructor(itens: PedidoItem[] = [],
        total: number = 0) {

        this.itens = itens;

        this.total = total;

    }

}