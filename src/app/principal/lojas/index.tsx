import { CardLoja } from "../../../components/CardLoja";
import { Container } from "../../../styles/global";

export default function LojasPage(){
    return(
        <Container>
            <CardLoja/>
            <CardLoja/>
            <CardLoja/>
        </Container>
    );
}