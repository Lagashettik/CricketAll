import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import store from "../rootReduxSaga/rootReducer"
import MainDashboard from '../screens/dashboard'
import ScoreScreen from '../screens/scoreScreen'
import ScoreScreenRed from '../screens/scoreScreen/ScoreScreenRed'
import MainDashboardRed from '../screens/dashboard/MainDashboardRed'
import EnterMatchDetails from '../screens/enterMatchDetails'

const Stack = createNativeStackNavigator()

const Navigator = () => {
   return <Provider store={store} >
      <NavigationContainer>
         <Stack.Navigator initialRouteName='MainDashboard'>
            <Stack.Screen name='MainDashboard' component={MainDashboard} options={{headerShown: false}} />
            <Stack.Screen name='MainDashboardRed' component={MainDashboardRed} options={{headerShown: false}} />
            <Stack.Screen name='ScoreScreen' component={ScoreScreen} options={{headerShown: false}} />
            <Stack.Screen name='ScoreScreenRed' component={ScoreScreenRed} options={{headerShown: false}} />
            <Stack.Screen name='EnterMatchDetails' component={EnterMatchDetails} options={{headerShown: false}} />
         </Stack.Navigator>
      </NavigationContainer>
   </Provider>
}

export default Navigator;