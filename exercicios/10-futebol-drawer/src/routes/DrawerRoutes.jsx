import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import EscudoScreeen from '../screens/EscudoScreen'
import JogadoresScreeen from '../screens/JogadoresScreen'
import TitulosScreeen from '../screens/TitulosScreen'


import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen name='EscudoScreen' 
                       component={EscudoScreeen} 
                       options={{
                       title:"Inicio", 
                       drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
                    }}
                />

        <Drawer.Screen name='JogadoresScreen' component={JogadoresScreeen}/>
        <Drawer.Screen name='TitulosScreen' component={TitulosScreeen}/>
        
    </Drawer.Navigator>

   
  );
};

