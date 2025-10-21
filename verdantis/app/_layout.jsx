import { Stack } from "expo-router";
import { AuthProvider, AuthContext } from "../src/context/AuthContext";
import { useContext } from "react";
import { Redirect } from "expo-router";

function AuthRedirect() {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect href="/(main)" />;
  } else {
    return <Redirect href="/(auth)/LoginScreen" />;
  }
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Grupo de autenticação */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* Grupo principal (após login) */}
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        {/* Redirecionamento automático */}
        <Stack.Screen name="index" options={{ headerShown: false }} component={AuthRedirect} />
      </Stack>
    </AuthProvider>
  );
}
