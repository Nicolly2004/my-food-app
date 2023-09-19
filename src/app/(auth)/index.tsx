import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../styles/auth";
import { Input } from "../../components/Input";
import { Text } from "react-native";
import { useRouter } from "expo-router";


export default function LoginPage(){

    const router = useRouter();

    const handleLogin = () => {
      router.push("/principal");
    };


    return <AuthContainer>
        <AuthCard>
            <AuthTitle>Login</AuthTitle>
            <Input label="E-mail"
            keyboardType="email-address"
            placeholder="nicolly@email.com"
            />
            <Input label="Senha"
            secureTextEntry />

            <AuthButtons onPress={handleLogin}>
                <Text>Logar</Text>
            </AuthButtons>
   
   <AuthCardFooter>
    <Text>Ainda não possui uma conta?{" "} 
         <AuthLinks href="/register">Inscreva-se</AuthLinks>
    </Text>

    <Text>Esqueceu sua senha?{" "} 
         <AuthLinks href="/password">Clique aqui</AuthLinks>
    </Text>
   </AuthCardFooter>

        </AuthCard>
    </AuthContainer>
}