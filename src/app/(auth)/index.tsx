import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../styles/auth";
import { Input } from "../../components/Input";
import { Text,ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useForm} from 'react-hook-form';
import {Form} from '../../components/Form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useAuth } from "../../contexts/AuthContext";
import { LoginForm } from "../../services/auth";
import { notifyError, notifySuccess } from "../../services/notify";

const validation = yup.object().shape({
    email: yup.string().required("O e-mail é obrigatório")
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
        formState:{errors,isSubmitting},
    } = useForm<LoginForm>({
        resolver: yupResolver(validation),
    });

    const {signIn} = useAuth();

    const handleLogin = async (data: LoginForm) => {
      const result = await signIn(data.email, data.password);

      if(result){
        notifySuccess("Login realizado com sucesso!");
        router.push("/principal");
        return;
      }

      notifyError("Erro ao ralizar login! Verifique suas credenciais.")
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

          {!isSubmitting ? (
            <AuthButtons onPress={handleSubmit(handleLogin)}>
                <Text>Logar</Text>
            </AuthButtons>
          ) : (
            <ActivityIndicator size="small" color="#62F374"/>
          )}
          
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