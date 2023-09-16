import { Input } from "../../../components/Input";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../../styles/auth";
import {Text} from 'react-native'

export default function PasswordPage(){
    return (
        <AuthContainer>
            <AuthCard>
            <AuthTitle>Recuperar Senha</AuthTitle>


            <Input
             label="E-mail"
            keyboardType="email-address"
            placeholder="nicolly@email.com"
            />
            
            <AuthButtons>
                <Text>Recuperar</Text>
            </AuthButtons>

        </AuthCard>
        </AuthContainer>
    )
}