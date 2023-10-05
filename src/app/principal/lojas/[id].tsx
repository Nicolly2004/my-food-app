import { Column, Container, Divider, Row } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { LojaCover, LojaDescriptions, LojaLogo, LojaName } from "../../../styles/lojas";
import { ActivityIndicator, View } from "react-native";
import { useState,useEffect } from "react";
import { ProdutoModal } from "../../../components/ProdutoModal";
import { CardLojaProduto } from "../../../components/CardLojaProduto";
import { LojaProps, getLoja } from "../../../services/lojas";
import { CardProduto } from "../../../components/CardProduto";
import { ProdutoProps } from "../../../services/produtos";


export default function LojaIdPage() {
    const [isLoadingLoja,setisLoadingLoja] = useState(false);
    const [loja,setLoja] = useState<LojaProps>({} as LojaProps)
    const {id} = useLocalSearchParams();
    const [produtoVisible,setProdutoVisible] = useState(false);
    const [produto,setProduto] = useState<ProdutoProps>({} as ProdutoProps);



    const loadLoja = () => {
        setisLoadingLoja(true);
        getLoja(Number(id))
        .then(({data}) => {
            setLoja(data);
            setisLoadingLoja(false);
        })
        .catch((error) => {});
    };

    useEffect(() => {
        loadLoja();
    },[]);

    const toggleModal = () => {
        setProdutoVisible(!produtoVisible);
    };

    const handleOpenModal = (produto: ProdutoProps)=> {
        produto.loja = loja;
        setProduto(produto);
        toggleModal();
    };
    

    const handleCloseModal = () => {
        setProdutoVisible(false);
        setProduto({} as ProdutoProps);
    };

    if(isLoadingLoja) {
    return (
     <Column>
       <ActivityIndicator size="large" color="#FF0000"/>
     </Column>
    );
}


    return (  
     <Container>
        <View>
        <LojaCover 
          source={{
            uri: loja.imageCover,
          }}

        />
        <Row grow={1} justifyContent="space-between" p="8px">
            <View >
               <LojaName>{loja.nome}</LojaName>
               <Row>
                <LojaDescriptions>{loja.tempo}</LojaDescriptions>
                <LojaDescriptions>•</LojaDescriptions>
                <LojaDescriptions>
                    {loja.categoria}
                </LojaDescriptions>
               </Row>
            </View>
            <LojaLogo 
               source={{
                uri: loja.imageLogo,
               }}
            />
        </Row>
        <Divider/>
        </View>

        <View>
            {loja.produtos?.map((produto,index) => (
                <CardProduto 
                toggleModal={handleOpenModal} 
                key={index} 
                produto={produto}
                />
            ))}
        </View>

        <ProdutoModal 
        toggleModal={toggleModal}
        handleCloseModal={handleCloseModal}
        modalVisible={produtoVisible}
        produto={produto}
        />
    </Container>
    );
}