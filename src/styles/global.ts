import styled from "styled-components/native";
import { Link } from 'expo-router';


interface ColumnProps{
   justifyContent?: string;
   gap?: string;
   alignItems?: string;
   justifyItems?: string;
   grow?: number;
   bg?: string;

}

interface RowProps{
    justifyContent?: string;
    gap?: string;
    alignItems?: string;
    justifyItems?: string;
    grow?: number;
    bg?: string;
 }


export const Column = styled.View<ColumnProps>`
   flex-direction: column;

   flex-wrap: wrap;

   background-color: ${({bg}) => bg ? bg : "none"};

   justify-content: ${({justifyContent}) => 
   justifyContent ? justifyContent : "initial"};

   align-items: ${({alignItems}) => alignItems ? alignItems : "initial"};

   gap: ${({gap}) => gap ? gap : "4px"};

   justify-items: ${({justifyItems}) =>
   justifyItems ? justifyItems: "initial"};

   flex-grow: ${({grow}) => grow ? grow : 0};
`;


export const Row = styled.View<RowProps>`
   flex-direction: row;

   background-color: ${({bg}) => bg ? bg : "none"};

   justify-content: ${({justifyContent}) => 
   justifyContent ? justifyContent : "initial"};

   align-items: ${({alignItems}) => alignItems ? alignItems : "initial"};

   gap: ${({gap}) => gap ? gap : "4px"};

   justify-items: ${({justifyItems}) =>
   justifyItems ? justifyItems: "initial"};

flex-grow: ${({grow}) => grow ? grow : 0};

`;


