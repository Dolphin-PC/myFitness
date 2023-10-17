import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import discoverScreen from './src/screens/DiscoverScreen';
import historyScreen from './src/screens/historyScreen';
import trainScreen from './src/screens/trainScreen';
import analyticsScreen from './src/screens/analyticsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Discover" component={discoverScreen} />
        <Tab.Screen name="History" component={historyScreen} />
        <Tab.Screen name="Train" component={trainScreen} />
        <Tab.Screen name="Analytics" component={analyticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
