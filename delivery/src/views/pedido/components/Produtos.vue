

<template>
    <div class="flex flex-col p-2">
    <div v-for="produto in produtos" class="flex items-center p-4 border border-slate-400 w-full">
        <div class="text-lg font-bold">
            {{ produto.nome }}
        </div>
        <div class="flex flex-grow justify-end px-4 font-bold">
            <h5>{{ produto.preco }}</h5>
        </div>
        <div class="flex gap-2">
            <button @click="adicionarItem(produto)" class="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">+</button>
            <button @click="removerItem(produto)" class="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">-</button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
    import { ref} from "vue";

    import { Produto } from "@/models/Produto";

    let produtos = ref<Produto[]>([
        new Produto(1,"Coca-Cola 2L", 10)
    ]);

    const adicionarItem = (produto: Produto) => {
        console.log("Adicionando item: " + produto.id);
    }
 
    const removerItem =(produto: Produto) => {
        console.log("Removendo item: " + produto.id);
    }
    
</script>