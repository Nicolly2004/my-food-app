
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
import { useState,useEffect } from "react";
import { ProdutoModal } from "../../components/ProdutoModal";
import { LojaProps, getLojas } from "../../services/lojas";
import { ActivityIndicator} from 'react-native';
import { RefreshControl } from "react-native-gesture-handler";


export default function PrincipalPage() {

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [produto,setProduto] = useState({});
    const[lojas,setLojas] = useState<LojaProps[]>([]);
    const [isLojaLoading,setIsLojaLoading] = useState(false);

    const loadLojas = () => {
        setIsLojaLoading(true);
        getLojas().then(({data}) => {
            setLojas(data.data);
            setIsLojaLoading(false);
        })
        .catch((error) => {});
    }
 
    useEffect(() => {
        loadLojas();
    }, []);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
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

      {isLojaLoading ? (
         <ActivityIndicator size="small" color="#FF0000" />
      ): 
        lojas?.map((loja,index:number) => (
          <CardLoja key={index} loja={loja} />
      ))
        }

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
      handleCloseModal={toggleModal} 
      />
      <RefreshControl  
      refreshing={isLojaLoading}
      onRefresh={() => {
        loadLojas();
      }}
      />
    </PrincipalContainer>
    );
}