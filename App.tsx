import React from 'react';
import AppLoading from 'expo-app-loading';
import {Text, View} from 'react-native';

import {
  useFonts,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'OpenSans_600SemiBold', fontSize: 40}}>
        Open Sans
      </Text>
    </View>
  );
}
