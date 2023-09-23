import { TouchableOpacity } from "react-native";
import { Column } from "../styles/global"
import { ProdutoContainer,
     ProdutoDesc, 
     ProdutoName,
     ProdutoPrice,
     ProdutoImg
    } from "../styles/produto"
import { FC } from "react"

    interface CardLojaProdutoProps{
        toggleModal: () => void;
}
      

export const CardLojaProduto: FC<CardLojaProdutoProps> = ({toggleModal}) => {
    return (
        <TouchableOpacity onPress={toggleModal}> 
        <ProdutoContainer>
            <Column>
            <ProdutoName>Batata com Cheddar e Bacon</ProdutoName>
            <ProdutoDesc>
                Batata,cheddar e bacon acompanha molho do cheff
            </ProdutoDesc>
            <ProdutoPrice>R$ 75,93</ProdutoPrice>
            </Column>
            <ProdutoImg 
            source={{
                uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
            }}/>
            
        </ProdutoContainer>
        </TouchableOpacity>
    )
}