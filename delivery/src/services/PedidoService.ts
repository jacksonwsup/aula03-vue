import api from "@/lib/api";
import type { Pedido } from "@/models/Pedido";

const enviarPedido = async (pedido: Pedido): Promise<void> => {
  try {
    const pedidoMapped = {
      itens: pedido.itens.map((item) => ({
        produto: item.produto.id,
        quantidade: item.quantidade
      }))
    };

    const response = await api().post("/pedidos", pedidoMapped);

    if (response.status === 201) {
      console.log("Pedido realizado!");
    } else {
      console.log("Erro na realização do pedido.");
    }
  } catch (error) {
    console.error("Erro na realização do pedido:", error);
  }
};

export default enviarPedido;
