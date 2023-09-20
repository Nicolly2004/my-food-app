import { Column, Row } from "../styles/global"
import { 
       PrincipalCardProduto,
       PrincipalCardProdutoTitle,
       PrincipalLojaDesc,
       PrincipalProdutoImg,
       PrincipalProdutoPrice,
       PrincipalProdutoTempo } from "../styles/principal"


export const CardProduto = () => {
    return (
        <PrincipalCardProduto>
        <Row alignItems = "center" gap = {14}>
        <PrincipalProdutoImg
         source={{
            uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
        }}
    />
    <Column>
    <PrincipalCardProdutoTitle>
        Produto 01
    </PrincipalCardProdutoTitle>
    <PrincipalProdutoPrice> R$ 35,49 </PrincipalProdutoPrice>

    <Row>
    <PrincipalProdutoTempo> 20 - 30min </PrincipalProdutoTempo>
    <PrincipalLojaDesc>•</PrincipalLojaDesc>
    <PrincipalProdutoPrice>Grátis</PrincipalProdutoPrice>
    </Row>

    </Column>
</Row>
</PrincipalCardProduto>
    )
}