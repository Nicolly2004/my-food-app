import styled from "styled-components/native";
import { Link } from 'expo-router';


interface ColumnProps{
   justifyContent?: string;
   gap?: string;
   alignItems?: string;
   justifyItems?: string;
   grow?: number;
   bg?: string;
   p?: string;
}

interface RowProps{
    justifyContent?: string;
    gap?: string;
    alignItems?: string;
    justifyItems?: string;
    grow?: number;
    bg?: string;
    p?:string;
}

interface ContainerProps{
    bg?: string;
    p?:string;
}

export const Container = styled.ScrollView<ContainerProps>`
background-color: ${({bg}) =>( bg ? bg : "none")};
padding: ${({p}) => p ? p : 0}
`;

export const Divider = styled.View`
   border-bottom-width: 1px;
   border-bottom-color: #c3c3c3;
   border-bottom-style: solid;
   flex-grow: 1;
`;

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

   padding: ${({p}) => p ? p : "0"};
`;


export const Row = styled.View<RowProps>`
   flex-direction: row;

   flex-wrap: wrap;

   background-color: ${({bg}) => bg ? bg : "none"};

   justify-content: ${({justifyContent}) => 
   justifyContent ? justifyContent : "initial"};

   align-items: ${({alignItems}) => alignItems ? alignItems : "initial"};

   gap: ${({gap}) => gap ? gap : "4px"};

   justify-items: ${({justifyItems}) =>
   justifyItems ? justifyItems: "initial"};

   flex-grow: ${({grow}) => grow ? grow : 0};

   padding: ${({p}) => p ? p : "0"};

`;

export const BackButton = styled.TouchableOpacity`
padding: 5px;
`;

