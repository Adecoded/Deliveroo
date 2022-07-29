import { TouchableOpacity, Text,View,Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { Urlfor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch,useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'
const DishRow = ({id,name,description,image,price}) => {

  const [pressed ,setPressed] =useState(false);
const items = useSelector(state=> selectBasketItemsWithId(state,id));

const dispatch =useDispatch();

  const addItemToBasket =() =>{
dispatch(addToBasket({id,name,description,image,price}));
  };
const removeItemsFromBasket = () =>{
if (!items. length>0) return;
  dispatch(removeFromBasket({id}));
};
  return (
    <>
    <TouchableOpacity onPress={() =>setPressed(!pressed)} className= {` bg-white border p-4 border-gray-200 $(pressed $$ "border-0")`}>
      <View className='flex-row'>
     <View className='flex-1 pr-2'>
    <Text className='text-lg mb-1'>{name}</Text>
      <Text className='text-gray-400'>{description}</Text>
      <Text className='text-gray-400 mt-2'>
   <Currency quantity={price} currency="NGN"/>
   </Text>
     </View>
     <View>
      <Image source={{uri:Urlfor(image).url()}}
      className='h-20 w-20 bg-gray-300 p-4'
      style={{borderWidth:1,borderColor:'#f3f3f4'}}
      />
     </View>
     </View>
    </TouchableOpacity>

    {pressed && (
      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 pb-3'>
          <TouchableOpacity disabled={!items.length} onPress={removeItemsFromBasket}>

            <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "#D3D3D3"} />
            </TouchableOpacity>
          
          <Text>{items.length}</Text>

          <TouchableOpacity
          onPress={addItemToBasket}
          >
          <PlusCircleIcon  size={40} color="#00CCBB" /> 
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  )
}

export default DishRow