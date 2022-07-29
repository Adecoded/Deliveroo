import { View, Text, SafeAreaView, Image, TextInput, ScrollView, } from 'react-native'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline"
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import SanityClient from '../sanity'

const HomeScreen = () => {

    const navigation =useNavigation();

const [featuredCategories,setFeaturedCategories] =useState([])


    useLayoutEffect(() => {
    navigation.setOptions({
       headerShown:false
    })
    }, []);
useEffect(() => {
   SanityClient.fetch(
`*[_type == "featured"] {
  ...,
 resturants[] ->{
  ...,
  dishes [] ->  
 }
}`).then(data =>{
  setFeaturedCategories(data)
});
}, [])

  return (
    <SafeAreaView className='bg-white pt-5' style={{marginBottom:110}}>
<View>
      {/* header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
        <Image
        source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-7 w-7 br-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
        <Text className='font-bold text-xl'>Current Location
        <ChevronDownIcon size={20} color="#00CCBB" style={{marginLeft:12,top:2}}/>
        </Text>
        
      </View>
      <UserIcon size={35} color="#00CCBB" style={{left:10}}/>
      </View>
      {/* search */}
      <View className='flex-row items-center spac-x-2 pb-2 mx-2 px-4 '>
      <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 ' >
       <SearchIcon color="gray" size={20}/>
       <TextInput placeholder='Resturant and cushins' 
       keyboardType='default'
       />

          </View>
    
       <AdjustmentsIcon color="#00CCBB" style={{left:12}}/>
        </View>
        {/* body */}
        <ScrollView className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom:100,paddingTop:8
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
            {/* Categories */}
            <Categories/>
            {/* Features Row */}
         {featuredCategories?.map((category)=>(
           <FeaturedRow
           key={category._id}
           id={category._id}
           title={category.title}
           description={category.short_description}
           />
         ))}
            
        </ScrollView>
      </View>
   
    </SafeAreaView>
  )
}

export default HomeScreen