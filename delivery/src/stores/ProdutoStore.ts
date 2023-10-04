import type { Produto } from "@/models/Produto";
import ProdutoService from "@/services/ProdutoService";

import { defineStore } from "pinia";

export const useProdutoStore = defineStore("produto", {
  state: () => ({
    produtos: [] as Produto[],
  }),

  actions: {
    async getProdutos() {
      this.produtos = await ProdutoService.getProdutos();
    },

    async createProduto(produto: Omit<Produto, "id">) {
      const novoProduto = await ProdutoService.createProduto(produto);
      this.produtos.push(novoProduto);
    },
  },
});
