import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackButton, ExitButton } from './Header';
import AlertsScreen from '../screens/AlertsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import YesNoScreen from '../screens/YesNoScreen';
import DateTimeScreen from '../screens/DateTimeScreen';
import OngoingHeadacheScreen from '../screens/OngoingHeadacheScreen';
import MultipleChoiceScreen from '../screens/MultipleChoiceScreen';
import DiaryCompleteScreen from '../screens/DiaryCompleteScreen';
import { LocalizationContext } from '../localization/i18n';
import * as data from '../data/mock.json';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const { alertNumber } = data;

export default function Navigator() {
  const { t } = React.useContext(LocalizationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="h0"
        screenOptions={{
          headerTitle: t('header-title'),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16 },
          headerLeft: () => <BackButton />,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRight: () => <ExitButton />,
          headerRightContainerStyle: { paddingRight: 10 },
        }}
      >
        <Stack.Screen name="h0" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              initialRouteName="home"
              activeColor="#0079c9"
              inactiveColor="#757575"
              barStyle={styles.tabNavigator}
            >
              <Tab.Screen
                name="alerts"
                component={AlertsScreen}
                options={{
                  tabBarLabel: t('alerts-label'),
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="bell"
                      color={color}
                      size={26}
                    />
                  ),
                  tabBarBadge: alertNumber,
                }}
              />
              <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                  tabBarLabel: t('home-label'),
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="settings"
                component={SettingsScreen}
                options={{
                  tabBarLabel: t('settings-label'),
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="settings"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="h1" component={YesNoScreen} />
        <Stack.Screen name="h2" component={DateTimeScreen} />
        <Stack.Screen name="h3" component={YesNoScreen} />
        <Stack.Screen name="h3_1" component={OngoingHeadacheScreen} />
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
        <Stack.Screen name="h17_1" component={YesNoScreen} />
        <Stack.Screen name="h18" component={DiaryCompleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: '#fff',
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1,
  },
});
