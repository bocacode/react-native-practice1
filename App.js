import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/HomeScreen'
import RestaurantDetails from './screens/RestaurantDetailsScreen'
import AddNewScreen from './screens/AddNewScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name='RestaurantDetails'
          component={RestaurantDetails}
          options={{title: 'Restaurant details'}}
        />  
        <Stack.Screen 
          name='AddNewRestaurant'
          component={AddNewScreen}
          options={{title: 'Add new Restaurant'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
