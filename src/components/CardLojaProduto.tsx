import { TouchableOpacity } from "react-native";
import { Column } from "../styles/global"
import { ProdutoContainer,
     ProdutoDesc, 
     ProdutoName,
     ProdutoPrice,
     ProdutoImg
    } from "../styles/produto"
import { FC } from "react"
import { ProdutoProps } from "../services/produtos";

interface CardLojaProdutoProps{
        toggleModal: (produto: ProdutoProps) => void;
        produto: ProdutoProps;
}
      

export const CardLojaProduto: FC<CardLojaProdutoProps> = ({toggleModal,produto}) => {
    return (
        <TouchableOpacity onPress={() => toggleModal(produto)}> 
        <ProdutoContainer>
            <Column>
            <ProdutoName>{produto.nome}</ProdutoName>
            <ProdutoDesc>{produto.descricao}</ProdutoDesc>
            <ProdutoPrice>{produto.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            })}
            </ProdutoPrice>
            </Column>
            <ProdutoImg 
            source={{
                uri: produto.imagem,
            }}/>
            
        </ProdutoContainer>
        </TouchableOpacity>
    )
}