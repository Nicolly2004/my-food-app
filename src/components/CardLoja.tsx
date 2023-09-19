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




export const CardLoja = () => {
    return (
        <PrincipalCardLoja>
       <Row gap="8px" alignItems= "center">
       <LojaImg source={{
            uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
         }}
         />
         <Column gap="6px">
         <PrincipalLojaName>Nome da Loja</PrincipalLojaName>

         <Row>
        <Row>
            <Icon name="star" color="#d7d119" />
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
    )
}