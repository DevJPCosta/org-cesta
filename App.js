import React from 'react';
import { StatusBar, View } from 'react-native';
import
{
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Cesta from 'C:/Users/joao.santos/Documents/RNF/org-cesta/src/telas/Cesta.js';

export default function App ()
{
  const [ fonteCarregada ] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if (!fonteCarregada)
  {
    return <View />;
  }
  return (
    <View >
      <StatusBar />
      <Cesta />
    </View>
  );
}
