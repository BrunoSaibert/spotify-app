import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components';

import styled from 'styled-components/native';

import {
  useFonts,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import theme from './src/styles/theme';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-family: 'OpenSans_700Bold';
  color: #000;
  text-align: center;
  font-size: 40px;
`;

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
      <Container>
        <Title>Open Sans</Title>
      </Container>
    </ThemeProvider>
  );
}
