import { Stack, useGlobalSearchParams } from "expo-router";
import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useRouter} from 'expo-router';
import { BackButton } from "../../styles/global";
import { AuthProvider } from "../../contexts/AuthContext";
import { Providers } from "../Providers";
import {useState, useEffect} from 'react';
import { LojaProps, getLoja } from "../../services/lojas";


export default function PrincipalPageLayout() {
    const router = useRouter();
    const globalParams = useGlobalSearchParams();
    const [loja,setLoja] = useState<string>("");



     useEffect(() => {
        if (globalParams.id && typeof globalParams.id === 'string') {
            getLoja(Number(globalParams.id))
               .then(({data}) => {
                console.log(data);
                setLoja(data.nome);
               })
               .catch((error) => {});
        }
     },[globalParams?.id]);


    return (
        <Providers>
     <Stack>
        <Stack.Screen name="index"
        options={{
            title:"My Food",
            headerTintColor: "#ff0000",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: "#ffffff"
            },
        }}
        />
        <Stack.Screen 
           name="lojas/index" 
           options={{
                    title: "Lojas",
                    headerTintColor: "#FFF",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft({tintColor}) {
                        return (
                        <Pressable onPress={() => {
                            router.back();
                        }}
                        >
                        <Icon name="angle-left" color={tintColor} size={20}/>
                        </Pressable>
                        );
                    },
                    headerStyle:{
                backgroundColor: "#c93c3c"
            },
        }}
        />
        <Stack.Screen name="lojas/[id]"
         options={{
            title: loja,
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerShadowVisible: false,
           // presentation: "modal",
            headerLeft({tintColor}) {
                return (
                <BackButton onPress={() => {
                    router.back();
                }}
                >
                <Icon name="angle-left" color={tintColor} size={20}/>
                </BackButton>
                );
            },
            headerStyle:{
        backgroundColor: "#c93c3c"
    },
}}
        />
    </Stack>
    </Providers>
    );
}
