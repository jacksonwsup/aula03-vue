<template>
    <pre>{{ store.pedido }}</pre>
</template>

<script setup lang="ts">

import { usePedidoStore } from "../../../stores/PedidoStore";

    const store = usePedidoStore();

</script>