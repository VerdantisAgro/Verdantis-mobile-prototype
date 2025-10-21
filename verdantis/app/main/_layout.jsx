import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext";

export default function MainLayout() {
  const { user } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const isGestor = user?.role === "Gestor";

  // Abas diferentes conforme o papel do usuário
  const screens = isGestor
    ? [
        { name: "gestor/index", icon: "home-outline" },
        { name: "gestor/dashboard", icon: "bar-chart-outline" },
        { name: "gestor/contact", icon: "chatbubble-ellipses-outline" },
        { name: "profile", icon: "person-outline" },
      ]
    : [
        { name: "produtor/index", icon: "home-outline" },
        { name: "produtor/dashboard", icon: "bar-chart-outline" },
        { name: "produtor/chat", icon: "chatbubble-ellipses-outline" },
        { name: "profile", icon: "person-outline" },
      ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#32CD32",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? 10 : 5,
        },
      }}
    >
      {screens.map(({ name, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={icon} size={26} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
