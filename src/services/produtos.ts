import { LojaProps } from "./lojas";

export interface ProdutoProps {
    id: number,
    loja: LojaProps,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string,
    images: string[]
}