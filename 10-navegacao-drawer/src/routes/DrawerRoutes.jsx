import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import HomeScreeen from '../screens/HomeScreen'
import ProfileScreeen from '../screens/ProfileScreen'
import UserScreeen from '../screens/UserScreen'
import ConfigScreeen from '../screens/ConfigScreen'

import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen name='HomeScreen' 
                       component={HomeScreeen} 
                       options={{
                       title:"Inicio", 
                       drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
                    }}
                />

        <Drawer.Screen name='ProfileScreen' component={ProfileScreeen}/>
        <Drawer.Screen name='UserScreen' component={UserScreeen}/>
        <Drawer.Screen name='ConfigScreen' component={ConfigScreeen}/>

    </Drawer.Navigator>

   
  );
};

