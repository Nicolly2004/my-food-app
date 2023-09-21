import { Stack } from "expo-router";
import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useRouter} from 'expo-router';


export default function PrincipalPageLayout() {
    const router = useRouter();

    return (
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
            title: "Loja 01",
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            presentation: "modal",
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
    </Stack>
    );
}
