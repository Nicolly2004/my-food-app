import { Stack } from "expo-router";

export default function LayoutAuth(){
    return (
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
    );
}