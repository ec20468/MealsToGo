import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const CreateScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={CreateScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
