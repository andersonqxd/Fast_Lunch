import { api } from "@/api"
import { type Produto } from "@/types"

class ProdutService {
    constructor() {}

    async all(page = 1, pageSize = 24) : Promise<Produto[]> {
        const {data} = await api.get('/produtos', {
            params: {
                populate: 'cover',
            }
        })
        return data.data
    }
}

export const produtService = new ProdutService()