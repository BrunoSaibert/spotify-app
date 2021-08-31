import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {
  useFonts,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import theme from './src/styles/theme';

import {Routes} from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
