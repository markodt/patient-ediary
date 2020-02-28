import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import YesNoScreen from './src/components/YesNoScreen';
import DateTimeScreen from './src/components/DateTimeScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0079c9',
    accent: '#0079c9',
    background: '#fff',
    surface: '#fff',
    error: '#be1716',
    text: '#000',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="h0"
          screenOptions={{ title: 'Headache Diary' }}
        >
          <Stack.Screen
            name="h0"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="h1" component={YesNoScreen} />
          <Stack.Screen name="h2" component={DateTimeScreen} />
          <Stack.Screen name="h3" component={YesNoScreen} />
          <Stack.Screen name="h4" component={DateTimeScreen} />
          <Stack.Screen name="h5" component={YesNoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
