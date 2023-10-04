<template>
    <div>
      <h1 class="flex flex-grow justify text font-bold justify-center text-2xl text-slate-900">Criar Produto</h1>
      <form @submit.prevent="criarProduto">
        <div class="flex flex-col">
          <label for="nome" class="text-slate-900 text-2xl font-bold">Nome: </label>
          <input
            v-model="produto.nome" type="text" id="nome" class="border border-indigo-200" required />
        </div>
        <div class="flex flex-col">
          <label for="valor" class="text-slate-900 text-2xl font-bold">Valor: </label>
          <input v-model="produto.valor" id="valor" class="border border-indigo-200" required />
        </div>
        <div class="flex justify-start">
          <button type="submit" class="h-10  mt-3 font-bold text-white bg-blue-400 hover:bg-blue-500  rounded-md">
            Criar Produto
          </button>
        </div>
        <p v-if="cadastroSucesso" class="text-green-500 mt-2">Produto Cadastrado!</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useProdutoStore } from '@/stores/ProdutoStore';
  
  const produtoStore = useProdutoStore();
  
  const produto = ref({
    nome: "",
    valor: "",
  });
  
  const cadastroSucesso = ref(false);
  
  const criarProduto = async () => {
    await produtoStore.createProduto(produto.value);
  
    produto.value.nome = "";
    produto.value.valor = "";
  
    cadastroSucesso.value = true;
  
    setTimeout(() => {
      cadastroSucesso.value = false;
    }, 3000);
  };
  </script>
  