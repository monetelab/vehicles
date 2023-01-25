import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VehicleDetails } from "../views/VehicleDetail/VehicleDetails";
import { VehicleList } from "../views/VehicleList/VehicleList";
import { Login } from "../views/Login/Login";
import { TokenContext } from "../context/TokenContext";
import { useContext } from "react";

export type RootStackParamList = {
  Login: undefined;
  VehicleList: undefined;
  VehicleDetails: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigator() {
  const { Token } = useContext(TokenContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {Token?.token ? (
          <>
            <Stack.Screen
              name="VehicleList"
              component={VehicleList}
            ></Stack.Screen>
            <Stack.Screen
              name="VehicleDetails"
              component={VehicleDetails}
            ></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
