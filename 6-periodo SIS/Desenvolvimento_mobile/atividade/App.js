import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tela1 from "./src/Tela1";
import Tela2 from "./src/Tela2";
import Tela3 from "./src/Tela3";
import Tela4 from "./src/Tela4";
import Tela5 from "./src/Tela5";
import Tela6 from "./src/Tela6";
import Tela7 from "./src/Tela7";
import Tela8 from "./src/Tela8";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="Tela6" component={Tela6} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}