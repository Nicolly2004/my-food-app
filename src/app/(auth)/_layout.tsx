import { Stack } from "expo-router";
import { AuthProvider } from "../../contexts/AuthContext";
import { Providers } from "../Providers";

export default function LayoutAuth(){
    return (
    <Providers>
    <Stack>
        <Stack.Screen 
        name="index" 
        options={{
            headerShown: false,
        }}
        />

        <Stack.Screen 
        name="register/index" 
        options={{
            title:"",
        }}
        />

       <Stack.Screen 
        name= "password/index" 
        options={{
            title: "",
        }}
        />
        
    </Stack>
    </Providers>
    );
}