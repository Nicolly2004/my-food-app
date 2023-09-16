import styled from "styled-components/native";
import { Link } from 'expo-router';


export const AuthInput = styled.TextInput`
   background-color: #F0F0F0 ;
   padding: 4px;
   border-radius: 4px;
`;


export const  AuthTitle = styled.Text`
   font-size: 20px;
   padding-bottom: 4px;
`;

export const  AuthLabel = styled.Text`
   padding-bottom: 2px;
`;

export const  AuthFormControl = styled.View`
    padding-bottom: 8px;
    gap: 10px;
`;


export const  AuthLinks = styled(Link)`
   color: #66CDAA;
`;


export const AuthButtons = styled.TouchableHighlight`
    background-color: #66CDAA;
    padding: 4px;
    border-radius: 5px;
    align-items: center;
`;


export const AuthCard = styled.View`
    padding: 10px;
    border-radius: 7px;
    background-color: #fff;
    gap: 5px;
`;


export const AuthCardFooter = styled.View`
   border-top-width:  2px;
   border-top-color: #91a1a5;
   padding: 4px;
   margin-top: 6px;
`;


export const AuthContainer = styled.SafeAreaView`
    flex:1;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: #edeff0;
`;


