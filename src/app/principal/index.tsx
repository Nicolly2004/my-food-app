
import {
    PrincipalCardProduto,
    PrincipalContainer, 
    PrincipalSection, 
    PrincipalSectionLink,
    PrincipalSectionTitle,
    PrincipalProdutoImg,
    PrincipalCardProdutoTitle,
    PrincipalLojaDesc,
    PrincipalProdutoPrice,
    PrincipalProdutoTempo
    
} from "../../styles/principal";

import { CardLoja } from '../../components/CardLoja';
import { Column, Row } from "../../styles/global";
import { CardProduto } from "../../components/CardProduto";

export default function PrincipalPage() {
    return ( 
    <PrincipalContainer>
      
       <PrincipalSection>
        <Row grow={1}>
        <Row justifyContent="space-between" grow={1}>
            <PrincipalSectionTitle>Lojas</PrincipalSectionTitle>
            <PrincipalSectionLink href="/principal/lojas">Ver Todas</PrincipalSectionLink>
        </Row>
        <Row>
        <CardLoja/>
        <CardLoja/>
        <CardLoja/>
        <CardLoja/>
      </Row>
        </Row>
       </PrincipalSection>
       <PrincipalSection>
       <Column grow={1}>
        <Row justifyContent="space-between" grow={1}>
            <PrincipalSectionTitle>Produtos</PrincipalSectionTitle>
            <PrincipalSectionLink href="">Ver Todos</PrincipalSectionLink>
        </Row>

        <Column >
           <CardProduto/>
           <CardProduto/>
           <CardProduto/>
           <CardProduto/>
        </Column>

        </Column>
       </PrincipalSection>
    </PrincipalContainer>
    );
}