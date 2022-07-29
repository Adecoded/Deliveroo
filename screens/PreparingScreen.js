import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreparingScreen = () => {

    const navigation =useNavigation();


    useEffect(() => {
        setTimeout(() =>{
            navigation.navigate("Delivery")
        }, 4000);
    },[])
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>

       

   <Animatable.Text
   animation="slideInDown"
   iterationCount={1}
   className='text-lg my-10 text-white font-bold text-center'
   >
Waiting for resturant to accept your order!
   </Animatable.Text>
   <Progress.Circle size={50} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingScreen