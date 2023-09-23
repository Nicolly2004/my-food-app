import { Column, Container, Divider, Row } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { LojaCover, LojaDescriptions, LojaLogo, LojaName } from "../../../styles/lojas";
import { View } from "react-native";
import { CardProduto } from "../../../components/CardProduto";
import { useState } from "react";
import { ProdutoModal } from "../../../components/ProdutoModal";
import { CardLojaProduto } from "../../../components/CardLojaProduto";

export default function LojaIdPage() {
    const {id} = useLocalSearchParams();
    const [produtoVisible,setProdutoVisible] = useState(false);
    const [produto,setProduto] = useState({});

    const toggleModal = () => {
        setProdutoVisible(!produtoVisible);
    };
    
    return (
    <Container>
        <View>
        <LojaCover 
          source={{
            uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
          }}
        />
        <Row grow={1} justifyContent="space-between" p="8px">
            <View >
               <LojaName>Loja 01</LojaName>
               <Row>
                <LojaDescriptions>20-30min</LojaDescriptions>
                <LojaDescriptions>•</LojaDescriptions>
                <LojaDescriptions>Lanches</LojaDescriptions>
               </Row>
            </View>
            <LojaLogo 
               source={{
                uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
               }}
            />
        </Row>
        <Divider/>
        </View>

        <View>
            <CardLojaProduto toggleModal = {toggleModal}/>
            <CardLojaProduto toggleModal = {toggleModal}/>
            <CardLojaProduto toggleModal = {toggleModal}/>
        </View>

        <ProdutoModal 
        toggleModal={toggleModal}
        handleCloseModal={toggleModal}
        modalVisible={produtoVisible}
        produto={produto}
        />
    </Container>
    );
}