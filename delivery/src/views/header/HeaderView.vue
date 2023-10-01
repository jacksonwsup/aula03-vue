<template>
    <nav class="flex items-center h-16 w-full bg-blue-400">
    <div class="pt-2 pb-2 ml-6">
        <RouterLink to="/" class="text-xl font-bold no-underline whitespace-nowrap">Delivery</RouterLink>
    </div>
    <div class="flex flex-grow pl-4 justify-between">
        <div class="space-x-4">
            <RouterLink to="/restaurantes">Restaurantes</RouterLink>
            <RouterLink to="/produtos">Produtos</RouterLink>
            <RouterLink to="/pedido">Pedidos</RouterLink>
        </div>
        <div class="pr-4">
            <RouterLink to="/">Sair</RouterLink>
        </div>
    </div>
    
    </nav>
</template>