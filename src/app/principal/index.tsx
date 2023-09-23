
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
    PrincipalProdutoTempo,
    PrincipalRowTitle,
    PrincipalList
    
} from "../../styles/principal";

import { CardLoja } from '../../components/CardLoja';
import { Column, Row } from "../../styles/global";
import { CardProduto } from "../../components/CardProduto";
import { useState } from "react";
import { ProdutoModal } from "../../components/ProdutoModal";

export default function PrincipalPage() {

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [produto,setProduto] = useState({});

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    };


    return ( 
    <PrincipalContainer>
       <PrincipalSection>
        <PrincipalRowTitle>
            <PrincipalSectionTitle>Lojas</PrincipalSectionTitle>
            <PrincipalSectionLink href="/principal/lojas">
                Ver Todas
            </PrincipalSectionLink>
        </PrincipalRowTitle>
        <PrincipalList>
        <CardLoja/>
        <CardLoja/>
        <CardLoja/>
        <CardLoja/>
      </PrincipalList>
       </PrincipalSection>
       <PrincipalSection>
       <Column grow={1}>
        <PrincipalRowTitle>
            <PrincipalSectionTitle>Produtos</PrincipalSectionTitle>
            <PrincipalSectionLink href="">Ver Todos</PrincipalSectionLink>
        </PrincipalRowTitle>

        <PrincipalList gap = "8px" >
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
           <CardProduto toggleModal={toggleModal}/>
        </PrincipalList>

        </Column>
       </PrincipalSection>
       <ProdutoModal  
       modalVisible={modalIsOpen}
      produto={produto} 
      toggleModal={toggleModal}
      handleCloseModal={toggleModal} />
    </PrincipalContainer>
    );
}