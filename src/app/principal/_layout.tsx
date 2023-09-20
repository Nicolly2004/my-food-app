import { Stack } from "expo-router";

export default function PrincipalPageLayout() {
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
    </Stack>
    );
}
