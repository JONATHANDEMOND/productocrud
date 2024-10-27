import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../src/HomeScreen';
import { NuevoProductoScreen } from '../src/NuevoProductoScreen';
import { DetallesProdcutosScreen } from '../src/DetallesProductosScreen';
export const Stack = createStackNavigator();

 function NavigatorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetallesProdcutosScreen} />
      <Stack.Screen name="Nuevo" component={NuevoProductoScreen} />
    </Stack.Navigator>
  )
}

export default NavigatorStack