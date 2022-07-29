import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import {XCircleIcon} from 'react-native-heroicons/solid'
import { Urlfor } from '../sanity';
import Currency from 'react-currency-formatter'
const BasketScreen = () => {
  const navigation =useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const BasketTotal =useSelector(selectBasketTotal)
  const [groupedItemsBasket,setGroupedItemsBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() =>{
const groupedItems = items.reduce((results,item) =>{
  (results[item.id] =results[item.id] || []).push(item);
  return results;
}, {})
setGroupedItemsBasket(groupedItems);
  },[items])
  
  return (
    <SafeAreaView className='flex-1 bg-white'>
    <View className='flex-1 bg-gray-100'>
      <View className='p-5 border-b border-[#00BBCC] bg-white shadows-xs'>
        <View>
          <Text className='text-lg font-bold text-center'>Basket</Text>
          <Text className='text-center text-gray-400'>
            {resturant.title}
            </Text>
        </View>
<TouchableOpacity onPress={navigation.goBack} 
className='rounded-full bg-gray-100 absolute top-2 right-5'
>
<XCircleIcon color='#00BBCC' size={50}/>
</TouchableOpacity>
      </View>

      <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
        <Image source={{uri:"https://links.papareact.com/wru"}}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <Text className='flex-1'>Deliver in 50-75 min</Text>
        <TouchableOpacity>
          <Text className='text-[#00BBCC]'>change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className='divide-y divide-gray-200'>
        {Object.entries(groupedItemsBasket).map(([key, items]) =>(
           <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
            <Text className='text-[#00BBCC] '>{items.length} x</Text>
            <Image
            source={{uri: Urlfor(items[0]?.image).url()}}
            className='h-12 w-12 rounded-full'
            />
            <Text className='flex-1'>{items[0]?.name}</Text>

            <Text className='text-gray-600'>
              <Currency quantity={items[0]?.price} currency='NGN'/>
            </Text>
            <TouchableOpacity>
              <Text
              className='text-[#00BBCC] text-xs'
              onPress={() =>dispatch(removeFromBasket({id: key}))}
              >
                   Remove
              </Text>
            </TouchableOpacity>
           </View>
        ))}
      </ScrollView>
      <View className='p-5 bg-white mt-5 space-y-4'>
        <View className='flex-row justify-between'>
          <Text className='text-gray-400'>Subtotal</Text>
          <Text className='text-gray-400'>
              <Currency quantity={BasketTotal} currency='NGN'/>
            </Text>
        </View>

        <View className='flex-row justify-between'>
          <Text className='text-gray-400'>Delivery Fee</Text>
          <Text className='text-gray-400'>
              <Currency quantity={500} currency='NGN'/>
            </Text>
        </View>

        <View className='flex-row justify-between'>
          <Text>Order Total</Text>
          <Text className='font-extrabold'>
              <Currency quantity={BasketTotal + 500} currency='NGN'/>
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderPlaced')} className='rounded-lg bg-[#00BBCC] p-4'>
          <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default BasketScreen