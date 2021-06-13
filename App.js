import React from 'react';
// import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import AddScreen from './screens/Add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// registerRootComponent(App);
