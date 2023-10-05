import { api } from "../settings/api";
import { PaginatedResponse } from "./commom";
import { ProdutoProps } from "./produtos";

const RESOURCE_URL = '/lojas';


export interface LojaProps {
    id: number,
    nome: string,
    tempo: string,
    nota: number,
    categoria:string,
    pedido_minimo: number,
    taxa_entrega: number,
    imageCover: string,
    imageLogo: string,
    produtos: ProdutoProps[]
}


interface LojaRequest extends Omit<LojaProps, "id" | "produtos" |"imageCover" |"imageLogo"| "nota">{
      logo?: string,
      cover?:string,
}

export const getLojas = () => {
    return api.get<PaginatedResponse<LojaProps[]>>(RESOURCE_URL);
}

export const getLoja = (id:number) => {
    return api.get<LojaProps>(`${RESOURCE_URL}/${id}`);
}

export const createLojas = (body: LojaRequest) => {
    return api.post<LojaRequest,LojaProps>(RESOURCE_URL);
}

export const updateLojas = (id:number,body: Partial<LojaRequest>) => {
    return api.put<LojaRequest,LojaProps>(`${RESOURCE_URL}/${id}`, body);
}

export const deleteLojas = (id:number) => {
    return api.delete<LojaRequest,LojaProps>(`${RESOURCE_URL}/${id}`);
}
