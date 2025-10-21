import "expo-router/entry";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
    </AuthProvider>
  );
}
