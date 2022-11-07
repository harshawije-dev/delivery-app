import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Checkout from "./screens/Checkout";
import Home from "./screens/Home";
import OrderLoading from "./screens/OrderLoading";
import Restaurant from "./screens/Restaurant";
import store from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              title: "Checkout",
              ...TransitionPresets.RevealFromBottomAndroid,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OrderLoading"
            component={OrderLoading}
            options={{
              title: "OrderLoading",
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
