import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Urlfor } from '../sanity'

const CategoriesCard = ({imgUrl,title}) => {
  
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{
          uri:Urlfor(imgUrl).url(),
        }}
        className='h-20 w-20 rounded'
        />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard