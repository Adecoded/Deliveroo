import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'
import SanityClient from '../sanity'
const FeaturedRow = ({id,description,title}) => {
const  [resturants,setResturants] = useState([]);
  useEffect(() => {
    SanityClient.fetch(
 `*[_type == "featured" && _id ==$id] {
  ...,
 resturants[] ->{
  ...,
  dishes [] ->,
   type ->{
     name
   }
 }
}[0]

 `,
 {id}
 ).then(data =>{
  setResturants(data?.resturants);
 })
 
 }, [id])
  return (
    <View>
     <View className='mt-4 flex-row items-center justify-between px-4' style={{left:-2}}>
      <Text className='font-bold text-lg'>{title}</Text>
       <ArrowRightIcon color="#00CCBB" />
     </View>
     <Text className='text-xs text-gray-500 px-6' style={{left:-8}}>{description}</Text>
     <ScrollView
     horizontal
     
     contentContainerStyle={{
      paddingHorizontal:15,

     }}
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}
     className='pt-4'
     >
      {/* ResturantCard */}
      {resturants.map(resturant =>(
 <ResturantCard
 key={resturant._id}
 id={resturant._id}
 imgUrl={resturant.image}
 title ={resturant.title}
 rating={resturant.rating}
 genre={resturant.type?.name}
 address={resturant.address}
 short_description={resturant.short_description}
 dishes={resturant.dishes}
 long={resturant.long}
 lat={resturant.lat}
 />
      ))}

     </ScrollView>
    </View>
  )
}

export default FeaturedRow