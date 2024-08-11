import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./src/pages/categories/Category";
import Meal from "./src/pages/meals/Meal";
import Detail from "./src/pages/details/Detail";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            title: "Categories",
            headerTitleStyle: { color: "#FFA500" },
            headerStyle: { backgroundColor: "white" },
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={Meal}
          options={{
            title: "Meals",
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "#FFA500",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="MealDetailPage"
          component={Detail}
          options={{
            title: "Detail",
            headerTitleStyle: { color: "#FFA500" },
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "#FFA500",
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
