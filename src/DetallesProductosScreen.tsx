import { useNavigation, useRoute } from '@react-navigation/native';
import { ref, remove, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Text, TextInput } from 'react-native-paper'
import { dbRealTime } from './config/fireBaseConfig';
import { View } from 'react-native';
import { styles } from './theme/styles';



// interface
interface formProducto{
    id:string,
    nombreProducto:string,
    precio:string,
    stock:string, 
  
  
  }
  
  
  export const DetallesProdcutosScreen = () => {
    //hook accede a toda la infomracion de navegacion
  const route = useRoute();
  //@ts-ignore
  const{formProducto}=route.params;
  
  //hook state apr acambiar el esra del fomrulario de eduitar y eliminar
  const [formEdit, setFormEdit] = useState<formProducto>({
    id:'',
    nombreProducto:'',
    precio:'',
    stock:'',
    
  })
  //hook usenavigation:permite navegar de u n screen a otro
  const navigation = useNavigation();
  //hook Useefect cargar y mostrar la data en el formulario detalle
  useEffect(()=>{
      setFormEdit(formProducto);
  },[]
  )
  
  //funcione q nos permite actulizar los fomrularios
  const handleSetValues=(key:string,value:string)=>{
      setFormEdit({...formEdit,[key]:value})
  }
  //funcion para actulizar la data
  const handleUpdateProducto=async()=>{
      const dbRef=ref(dbRealTime,'producto/' + formEdit.id)
  try{
      await update(dbRef,{
          id:formEdit.id,
        nombreProducto:formEdit.nombreProducto,
        precio:formEdit.precio,
        stock:formEdit.stock,
    
      });
      navigation.goBack();
  }catch(e){
      console.log(e);
      
  }
  
  }
  //funcion para eliminar el producto
  const handleDeleteProducto = async()=>{
      const dbRef=ref(dbRealTime,'producto/'+ formEdit.id)
      try{
          await remove(dbRef);
          navigation.goBack();
      }catch(e){
          console.log(e);
          
      }
   }
  
  
    return (
      <View style={styles.container}>
      <Card >
      
      <Card.Content>
          <Text variant="headlineSmall" style={styles.textStyle}>Detalles Producto</Text>
          <TextInput 
          label='Id' 
          mode='outlined' 
          style={styles.inputStyle} 
          value={formEdit.id}
        onChangeText={(value)=>handleSetValues('id',value)}/>
        <TextInput 
        label='Nombre Producto' 
        mode='outlined' 
        style={styles.inputStyle} 
        value={formEdit.nombreProducto}
        onChangeText={(value)=>handleSetValues('nombreProducto',value)}/>
        <Divider/>
        <TextInput 
        label='Precio' 
        mode='outlined' 
        style={styles.inputStyle} 
        value={formEdit.precio}
        onChangeText={(value)=>handleSetValues('precio',value)}/>
        <TextInput 
        label='Stock' 
        mode='outlined' 
        style={styles.inputStyle} 
        value={formEdit.stock}
        onChangeText={(value)=>handleSetValues('stock', value)} keyboardType='numeric'
        />
       
      </Card.Content>
      </Card>
     
      <Button 
              mode='contained' 
              style={styles.buttonStyle}
              icon='motorbike'
              onPress={handleUpdateProducto}>
                  Actualizar
                  </Button>
  
                <Button 
              mode='contained'
              style={styles.buttonStyle}
               icon="delete-empty"
               onPress={handleDeleteProducto}
               >Eliminar
               </Button>  
      </View>
  
    )
}


