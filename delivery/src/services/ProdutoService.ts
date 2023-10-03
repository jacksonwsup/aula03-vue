import type { Produto } from '@/models/Produto';

import api from "@/lib/api";

const getProdutos = async (): Promise<Produto[]> => {

    const response = await api().get("/produtos");

    return response.data;

}

export default {
    getProdutos
}

