import { Image, Text } from 'react-native';
import styled from "styled-components/native";
import { Link } from 'expo-router';

interface PrincipalLojaDescProps{
  color?: string;
}


export const PrincipalContainer = styled.ScrollView``;


export const PrincipalSection = styled.View`
   padding-top: 8px;
   padding-left: 4px;
   padding-right: 4px;
`;


export const PrincipalSectionTitle = styled.Text`
   font-weight: 700;
   font-size: 15px;
`;


export const PrincipalSectionLink = styled(Link)`
   font-weight: 700;
   font-size: 15px;
   color: #ff0000;
`;

export const LojaImg = styled(Image)`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

export const PrincipalCard = styled.View``;


export const PrincipalCardLoja = styled.View`
  padding: 8px;
`;

export const PrincipalLojaDesc = styled.Text<PrincipalLojaDescProps>`
  font-size: 12px;
  color: ${({color}) => color ? color : '#7f7f7f'};
`;

export const PrincipalCardProduto = styled.View``;


export const PrincipalCardProdutoTitle = styled.Text``;


export const PrincipalLojaName = styled.Text``;

