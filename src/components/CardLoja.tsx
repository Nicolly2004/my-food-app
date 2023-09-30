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
    PrincipalCardLoja,
    PrincipalLojaDetails,
    PrincipalLojaRow,
    PrincipalLojaStar
} from "../styles/principal";

import { Column, Row } from "../styles/global";
import { Text } from 'react-native';
import { Link } from 'expo-router';
import { LojaProps } from '../services/lojas';
import { FC } from 'react';


interface CardLojaProps {
  loja: LojaProps;
}

export const CardLoja:FC<CardLojaProps> = ({loja}) => {

    return (
        <Link href={`/principal/lojas/${loja.id}`} asChild > 
        <PrincipalCardLoja>
          <LojaImg 
          source={{
            uri: loja.imageLogo,
         }}
         />
         <PrincipalLojaDetails>
         <PrincipalLojaName>{loja.nome}</PrincipalLojaName>

    <PrincipalLojaRow>
        <PrincipalLojaStar>
            <Icon name="star" color="#d7d119" size={12} />
            <PrincipalLojaDesc color="#c1bb11">{loja.nota}</PrincipalLojaDesc>
            
        </PrincipalLojaStar>
        <PrincipalLojaDesc>•</PrincipalLojaDesc>
        <PrincipalLojaDesc>{loja.categria}</PrincipalLojaDesc>
       </PrincipalLojaRow>

       <Row>
       <PrincipalLojaDesc>{loja.tempo}</PrincipalLojaDesc>
       <PrincipalLojaDesc>•</PrincipalLojaDesc>
        <PrincipalLojaDesc color={loja.taxa_entrega > 0 ? null : "#12af12"}>
          {loja.taxa_entrega > 0 ? loja.taxa_entrega : "Grátis"}
        </PrincipalLojaDesc>
       </Row>
         </PrincipalLojaDetails>
       
       </PrincipalCardLoja>
       </Link>
    );
}