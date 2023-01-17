import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import store from "../rootReduxSaga/rootReducer"
import MainDashboard from '../screens/dashboard'

const Stack = createNativeStackNavigator()

const Navigator = () => {
   return <Provider store={store} >
      <NavigationContainer>
         <Stack.Navigator initialRouteName='MainDashboard'>
            <Stack.Screen name='MainDashboard' component={MainDashboard} />
         </Stack.Navigator>
      </NavigationContainer>
   </Provider>
}

export default Navigator;