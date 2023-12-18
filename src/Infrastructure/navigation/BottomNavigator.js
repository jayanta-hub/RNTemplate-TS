import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { Provider } from "react-native-paper";
import HomeNavigator from "./HomeNavigator";
import MyAccountNavigator from "./MyAccountNavigator";
import FavoritesNavigator from "./FavoritesNavigator";
const BottomStack = createBottomTabNavigator();

const BottomNavigator = (props) => {
  const { navigation } = props;

  return (
    <Provider>
      <BottomStack.Navigator
        initialRouteName="HOME"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HOME") {
              iconName = focused ? "home" : "home";
              return <Entypo name={iconName} size={size} color={color} />;
            } else if (route.name === "FAVORITES") {
              iconName = focused ? "star" : "star";
              return <Entypo name={iconName} size={size} color={color} />;
            } else if (route.name === "MY ACCOUNT") {
              iconName = focused ? "person" : "person";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#0077A3",
        })}
      >
        <BottomStack.Screen
          options={{ headerShown: false }}
          name="HOME"
          component={HomeNavigator}
        />
        <BottomStack.Screen
          name="FAVORITES"
          component={FavoritesNavigator}
          options={{ headerShown: false }}
        />
        <BottomStack.Screen
          name="MY ACCOUNT"
          component={MyAccountNavigator}
          options={{
            headerShown: false,
            headerStyle: { borderBottomWidth: 1, borderColor: "#00000029" },
          }}
        />
      </BottomStack.Navigator>
    </Provider>
  );
};

export default BottomNavigator;
