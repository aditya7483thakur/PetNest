import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen options={{ headerShown: false }} name="login/index" />
    </Stack>
  );
}
