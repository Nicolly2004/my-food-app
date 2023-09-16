import { Text } from "react-native";
import { Input } from "../../../components/Input";
import {
     AuthButtons,
     AuthCard, 
     AuthCardFooter, 
     AuthContainer, 
     AuthLinks, 
     AuthTitle 
} from "../../../styles/auth";
import { useRouter } from 'expo-router';


export default function RegisterPage(){
    const router = useRouter();
    return (
        <AuthContainer>
             <AuthCard>
            <AuthTitle>Cadastro</AuthTitle>
  
            <Input
             label="Nome"
            placeholder="Nicolly Oliveira"
            />
             
            <Input
             label="E-mail"
            keyboardType="email-address"
            placeholder="nicolly@email.com"
            />

            <Input label="Senha"
            secureTextEntry />

            <Input
             label="Confirme sua Senha"
             secureTextEntry
            />

            <AuthButtons>
                <Text>Quero me Cadastrar</Text>
            </AuthButtons>

   
   <AuthCardFooter>

   <Text>Já possui conta?{" "} 
         <AuthLinks href="" onPress={() => router.replace("/")}>
          Fazer Login
        </AuthLinks>
    </Text>

    <Text>Esqueceu sua senha?{" "} 
         <AuthLinks href="/password">Clique aqui</AuthLinks>
    </Text>
   </AuthCardFooter>

        </AuthCard>
        </AuthContainer>
    );
}