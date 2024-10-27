import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { dbRealTime } from './config/fireBaseConfig';
import { onValue, ref } from 'firebase/database';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './theme/styles';
import { ProductoComponet } from './components/ProductoComponent';

export interface formProducto{
    id:string,
    nombreProducto:string,
    precio:string,
    stock:string, 
  
  }

export const HomeScreen = () => {

    const navigation=useNavigation();

    const [producto, setFormProducto] = useState<formProducto[]>([]);

    useEffect(()=>{
        getAllProducto()
    },[]);
  
       ///navegacion
            const NuevoNav = () => {
                navigation.dispatch(CommonActions.navigate({ name: "Nuevo" }))
            };

                ///traer data
                const getAllProducto = () => {
                    const dbRef = ref(dbRealTime, "producto/");
                    onValue(dbRef, (snapshot) => {
                      const data = snapshot.val();
                      if (!data) return;
                      const getKeys = Object.keys(data);
                      const listProducto: formProducto[] = [];
                      getKeys.forEach((key) => {
                        const value = { ...data[key], id: key };
                        listProducto.push(value);
                      });
                      setFormProducto(listProducto);
                    });
                  };

  return (
    <View style={styles.container}>
    <FlatList
      data={producto}
      renderItem={({ item }) => <ProductoComponet formProducto={item} />}
      keyExtractor={(item) => item.id}
    />

    <Button style={styles.buttonStyle} mode="contained" onPress={NuevoNav}>
      Agregar
    </Button>
  </View>
  )
}


