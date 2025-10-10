// App.js
import React from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import AppRoutes from "./src/routes/appRoutes";
import AuthProvider, { AuthContext } from "./src/context/AuthContext";
Icon.loadFont();

function AppContent() {
  const { loading } = React.useContext(AuthContext);

  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#2e7d32" />
      </View>
    );
  }

  return <AppRoutes />;
}

export default function App() {
  return (
    <NavigationContainer>
      
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
        <AppContent />
      </AuthProvider>
    </NavigationContainer>
  );
}
