import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { formProducto } from '../HomeScreen';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface Props{
    formProducto:formProducto
  }
  
  export const ProductoComponet = ({formProducto}:Props) => {
    const navigation = useNavigation();
  
  
    return (
      
            <View>
          <Text variant="headlineSmall">Prodcuto</Text>
          <Text variant="titleLarge">Id: {formProducto.id}</Text>
          <Text variant="titleLarge">Nombre Producto: {formProducto.nombreProducto}</Text>
          <Text variant="titleLarge">Precio: {formProducto.precio}</Text>
          <Text variant="titleLarge">Stock: {formProducto.stock}</Text>
          <IconButton icon ="arrow-right-bold-circle"
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Detalles',params:{formProducto}}))}
         />
      </View>
    )
  }

