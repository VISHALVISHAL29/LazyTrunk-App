import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)/Setting" />
      <Stack.Screen name="(tabs)/Deck" />
    </Stack>
  );
}

