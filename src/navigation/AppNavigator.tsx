import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import MenuOverviewScreen from '../screens/MenuOverviewScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import EditItemScreen from '../screens/EditItemScreen';
import DeleteConfirmScreen from '../screens/DeleteConfirmScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  MenuOverview: undefined;
  Confirmation: { message?: string } | undefined;
  EditItem: { id: string } | undefined;
  DeleteConfirm: { id: string } | undefined;
  Settings: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="MenuOverview" component={MenuOverviewScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="EditItem" component={EditItemScreen} />
        <Stack.Screen name="DeleteConfirm" component={DeleteConfirmScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
