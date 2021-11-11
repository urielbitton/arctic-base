import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoreContextProvider from './src/app/store/context';
import ScreenNav from './src/app/navigation/ScreenNav'

export default function App() {
  return (
    <StoreContextProvider>
      <ScreenNav />
    </StoreContextProvider>
  );
}
