import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../styles/auth";
import { Input } from "../../components/Input";
import { Text } from "react-native";
import { useRouter } from "expo-router";
import { useForm} from 'react-hook-form';
import {Form} from '../../components/Form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validation = yup.object().shape({
    email: yup.string().required("O e-mail -e obrigatório")
    .email("E-mail inválido!!!"),
    password: yup.string().required()
.min(8,"A senha deve ter no mínimo 8 caracteres!!!"),
});

export default function LoginPage(){

    const router = useRouter();
    const {
        handleSubmit,
        register,
        setValue,
        formState:{errors},
    } = useForm({
        resolver: yupResolver(validation),
    });

    const handleLogin = (data: any) => {
      console.log(data);
      //router.push("/principal");
    };
 

    return <AuthContainer>
        <AuthCard>
            <AuthTitle>Login</AuthTitle>
            <Form {...{register,setValue,errors}}>
            <Input
            id="email"
             label="E-mail"
            keyboardType="email-address"
            placeholder="nicolly@email.com"
            />
            <Input 
            id="password"
            label="Senha"
            secureTextEntry />
           </Form>

            <AuthButtons onPress={handleSubmit(handleLogin)}>
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