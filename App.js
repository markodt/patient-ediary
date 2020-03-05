import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackButton, ExitButton } from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import YesNoScreen from './src/components/YesNoScreen';
import DateTimeScreen from './src/components/DateTimeScreen';
import OngoingHeadacheScreen from './src/components/OngoingHeadacheScreen';
import MultipleChoiceScreen from './src/components/MultipleChoiceScreen';
import DiaryCompleteScreen from './src/components/DiaryCompleteScreen';

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
          screenOptions={{
            headerTitle: 'Headache Diary',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16 },
            headerLeft: () => <BackButton />,
            headerLeftContainerStyle: { paddingLeft: 10 },
            headerRight: () => <ExitButton />,
            headerRightContainerStyle: { paddingRight: 10 },
          }}
        >
          <Stack.Screen
            name="h0"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="h1" component={YesNoScreen} />
          <Stack.Screen name="h2" component={DateTimeScreen} />
          <Stack.Screen name="h3" component={YesNoScreen} />
          <Stack.Screen name="h3.1" component={OngoingHeadacheScreen} />
          <Stack.Screen name="h4" component={DateTimeScreen} />
          <Stack.Screen name="h5" component={YesNoScreen} />
          <Stack.Screen name="h6" component={YesNoScreen} />
          <Stack.Screen name="h7" component={YesNoScreen} />
          <Stack.Screen name="h8" component={YesNoScreen} />
          <Stack.Screen name="h9" component={YesNoScreen} />
          <Stack.Screen name="h10" component={YesNoScreen} />
          <Stack.Screen name="h11" component={YesNoScreen} />
          <Stack.Screen name="h12" component={YesNoScreen} />
          <Stack.Screen name="h13" component={MultipleChoiceScreen} />
          <Stack.Screen name="h14" component={YesNoScreen} />
          <Stack.Screen name="h15" component={MultipleChoiceScreen} />
          <Stack.Screen name="h16" component={YesNoScreen} />
          <Stack.Screen name="h17" component={YesNoScreen} />
          <Stack.Screen name="h17.1" component={YesNoScreen} />
          <Stack.Screen name="h18" component={DiaryCompleteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
