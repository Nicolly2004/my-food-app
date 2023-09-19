import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    LojaImg, 
    PrincipalCard, 
    PrincipalContainer, 
    PrincipalSection, 
    PrincipalSectionLink,
    PrincipalSectionTitle,
    PrincipalLojaName, 
    PrincipalLojaDesc 
} from "../../styles/principal";

import { Column, Row } from "../../styles/global";
import { Text } from 'react-native';
import { CardLoja } from '../../components/CardLoja';

export default function PrincipalPage() {
    return ( 
    <PrincipalContainer>
      <Row>
        <CardLoja/>
        <CardLoja/>
        <CardLoja/>
      </Row>
       <PrincipalSection>
        <Row grow={1}>
        <Row justifyContent="space-between" grow={1}>
            <PrincipalSectionTitle>Lojas</PrincipalSectionTitle>
            <PrincipalSectionLink href="">Ver Todas</PrincipalSectionLink>
        </Row>
        </Row>
       </PrincipalSection>
    </PrincipalContainer>
    );
}