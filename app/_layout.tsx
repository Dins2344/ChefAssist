import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { LogtoProvider, LogtoConfig } from "@logto/rn";

export default function RootLayout() {
  const [font, setFont] = useFonts({
    roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const config: LogtoConfig = {
    endpoint: "https://l3yo6b.logto.app/",
    appId: "cj4vn24uqa5mf28bnm0j9",
  };

  return (
    <LogtoProvider config={config}>
      <Stack>
        <Stack.Screen
          name="Landing"
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack>
    </LogtoProvider>
  );
}
