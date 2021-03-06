import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import { Home } from "../screens/Home";
import { Busca } from "../screens/Busca";
import { Biblioteca } from "../screens/Biblioteca";

const Tab = createBottomTabNavigator();

export function Routes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Buscar"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.lighter,
        tabBarInactiveTintColor: theme.colors.grey,
        tabBarStyle: {
          backgroundColor: theme.colors.dark,
          height: 56,
          paddingTop: 8,
          paddingBottom: 8,
          borderTopColor: theme.colors.dark,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Busca}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sua Biblioteca"
        component={Biblioteca}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="bar-chart-2" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
