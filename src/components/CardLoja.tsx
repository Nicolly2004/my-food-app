import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    LojaImg, 
    PrincipalCard, 
    PrincipalContainer, 
    PrincipalSection, 
    PrincipalSectionLink,
    PrincipalSectionTitle,
    PrincipalLojaName, 
    PrincipalLojaDesc, 
    PrincipalCardLoja
} from "../styles/principal";

import { Column, Row } from "../styles/global";
import { Text } from 'react-native';
import { Link } from 'expo-router';


export const CardLoja = () => {

    return (
        <Link href="/principal/lojas/1">
        <PrincipalCardLoja>
       <Row gap="8px" alignItems= "center">
       <LojaImg source={{
            uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
         }}
         />
         <Column gap="6px">
         <PrincipalLojaName>Nome da Loja</PrincipalLojaName>
    <Row grow={1} justifyContent="space-between">
        <Row >
            
            <Icon name="star" color="#d7d119" size={12} />
            <PrincipalLojaDesc color="#c1bb11">5</PrincipalLojaDesc>
            
        </Row>
        <PrincipalLojaDesc>•</PrincipalLojaDesc>
        <PrincipalLojaDesc>Lanches</PrincipalLojaDesc>

       </Row>
       <Row>
       <PrincipalLojaDesc>30 - 45min</PrincipalLojaDesc>
       <PrincipalLojaDesc>•</PrincipalLojaDesc>
        <PrincipalLojaDesc>R$ 15,00</PrincipalLojaDesc>
       </Row>
         </Column>
       </Row>
       
       </PrincipalCardLoja>
       </Link>
    );
}