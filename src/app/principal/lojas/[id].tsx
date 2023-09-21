import { Column, Container, Divider, Row } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { LojaCover, LojaDescriptions, LojaLogo, LojaName } from "../../../styles/lojas";

export default function LojaIdPage() {
    const {id} = useLocalSearchParams();
    
    return <Container>
        <Column>
        <LojaCover 
          source={{
            uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
          }}
        />
        <Row grow={1} justifyContent="space-between" p="8px">
            <Column >
               <LojaName>Loja 01</LojaName>
               <Row>
                <LojaDescriptions>20-30min</LojaDescriptions>
                <LojaDescriptions>•</LojaDescriptions>
                <LojaDescriptions>Lanches</LojaDescriptions>
               </Row>
            </Column>
            <LojaLogo 
               source={{
                uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
               }}
            />
        </Row>
        <Divider/>
        </Column>
    </Container>;
}