import api from "@/lib/api";
import type { Produto } from "@/models/Produto";

const produtoService = {
  async getProdutos(): Promise<Produto[]> {
    try {
      const response = await api().get("/produtos");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw error;
    }
  },

  async createProduto(produto: Omit<Produto, "id">): Promise<Produto> {
    try {
      const response = await api().post("/produtos", produto);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  }
};

export default produtoService;
