import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [font, setFont] = useFonts({
    roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        name="Landing"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
