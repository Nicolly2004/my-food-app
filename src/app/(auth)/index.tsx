import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../styles/auth";
import { Input } from "../../components/Input";
import { Text } from "react-native";


export default function LoginPage(){
    return <AuthContainer>
        <AuthCard>
            <AuthTitle>Login</AuthTitle>
            <Input label="E-mail"
            keyboardType="email-address"
            placeholder="nicolly@email.com"
            />
            <Input label="Senha"
            secureTextEntry />

            <AuthButtons>
                <Text>Logar</Text>
            </AuthButtons>
   
   <AuthCardFooter>
    <Text>Ainda não possui uma conta?{" "} 
         <AuthLinks href="">Inscreva-se</AuthLinks>
    </Text>
   </AuthCardFooter>
   
        </AuthCard>
    </AuthContainer>
}