import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { IconButton, Text, TextInput } from 'react-native-paper'
import { push, ref, set } from 'firebase/database';
import { dbRealTime } from './config/fireBaseConfig';
import { View } from 'react-native';
import { styles } from './theme/styles';
interface formProducto{
    id:string,
    nombreProducto:string,
    precio:string,
    stock:string, 
  
  }


export  const NuevoProductoScreen=()=> {
    const navigation=useNavigation()

    const [producto, setFormProducto] = useState<formProducto>({
      id:'',
      nombreProducto:'',
      precio:'',
      stock:''
     
    })
    
    ///funcion para setear formulario
    const handleSetValues=(key:string,value:string)=>{
          setFormProducto({...producto,[key]:value})
    }
  
  //funcion apra agregar persnal
  const handleSetProducto=async()=>{
    
    //para crear la tabla en la base de datos
    const dbRef = ref(dbRealTime, 'producto/');
    //para grabar en la base de datos
    const saveProducto = push(dbRef);
    try{
      await set(saveProducto, producto)
      navigation.goBack();
    }catch(e){
      console.log(e);
      
    }
  
  
  
  
  
  }
  
  
    return (
   
        <View style={styles.container}>
          <Text variant="headlineSmall">Nuevo Producto</Text>
          <Text variant="titleLarge">Agrega ID</Text>
          <TextInput
            label="id"
            onChangeText={(value) => handleSetValues("id", value)}
          />
          <Text variant="titleLarge">Agrega Nombre Producto</Text>
          <TextInput
            label="NombreProducto"
            onChangeText={(value) => handleSetValues("nombreProducto", value)}
          />
          <Text variant="titleLarge">Agrega Precio</Text>
          <TextInput
            label="Precio"
            onChangeText={(value) => handleSetValues("precio", value)}
          />
          <Text variant="titleLarge">Agrega Stock</Text>
          <TextInput
            label="Stock"
            onChangeText={(value) => handleSetValues("stock", value)}
          />
         
           <View style={styles.buttonStyle}>
          <IconButton
            icon="alert-plus-outline"
            size={35}
            onPress={handleSetProducto}
          />
        </View>
        </View>
       
      
    )
}


