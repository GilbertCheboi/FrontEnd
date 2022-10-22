import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FootballScreen from '../screens/FootballScreen';
import FootballDetail from '../screens/FootballDetail';

export default function FootballStack() {
  const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="Football Home" component={FootballScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={FootballDetail} />
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}