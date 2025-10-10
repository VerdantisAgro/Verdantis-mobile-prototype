import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext"; 


import HomeScreen from "../screens/produtor-screens/ProdHomeScreen";
import DashboardScreen from "../screens/produtor-screens/ProdDashboardScreen";
import ChatScreen from "../screens/produtor-screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";


import GestHomeScreen from "../screens/gestor-screens/GestHomeScreen";
import GestDashboardScreen from "../screens/gestor-screens/GestDashboardScreen";
import GestContactScreen from "../screens/gestor-screens/GestContactScreen";
import GestProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();
  const { user } = useContext(AuthContext); 

  
  const isGestor = user?.role === "Gestor";

  
  const screens = isGestor
    ? [
        { name: "Home", component: GestHomeScreen },
        { name: "Dashboard", component: GestDashboardScreen },
        { name: "Chat", component: GestContactScreen },
        { name: "Profile", component: GestProfileScreen },
      ]
    : [
        { name: "Home", component: HomeScreen },
        { name: "Dashboard", component: DashboardScreen },
        { name: "Chat", component: ChatScreen },
        { name: "Profile", component: ProfileScreen },
      ];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Dashboard") iconName = "bar-chart-outline";
          else if (route.name === "Chat") iconName = "chatbubble-ellipses-outline";
          else if (route.name === "Profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      {screens.map((item) => (
        <Tab.Screen key={item.name} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
}
