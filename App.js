// Dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from "./store";


// Components
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Profile from './screens/profile';
import Options from './screens/options';
import EventDetail from './screens/eventdetail';
import ArtistDetail from './screens/artists';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Dashboard"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {StackNav()}
      </NavigationContainer>
    </Provider>
  );
}
