// In App.js in a new project

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { all_screens } from '../../utils/all_screen_list';
import { asyncStatus } from '../../utils/async_status';
import { ActivityIndicator, Image, Text, View } from 'react-native'


const Stack = createNativeStackNavigator();


export const App_Navigation = () => {
  // const { userAuth, check_initial_auth_status, check__initial_auth_error } = useSelector(state => state.auth)



  // if (checkAuthStatus === asyncStatus.IDLE || checkAuthStatus === asyncStatus.LOADING) {
  //   return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <ActivityIndicator color='black' size={35} />
  //   </View>
  // }

  // if (checkAuthStatus === asyncStatus.ERROR) {
  //   return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text style={{ color: 'red' }}>
  //       Something went wrong
  //     </Text>
  //   </View>
  // }

  // if (checkAuthStatus === asyncStatus.SUCCEEDED) {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: userAuth
      // }}
      >
        {
          React.Children.toArray(
            all_screens.map((screen) => {
              const { name, auth_required, Screen_Component, header_shown, admin } = screen
              return <Stack.Screen name={name} component={Screen_Component} options={{ headerShown: header_shown }} />
            })
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
  // }
}

