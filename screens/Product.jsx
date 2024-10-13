import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/Cards';
import axios from 'axios';

const Product = () => {
    const [data,setData] = useState([]);
    const getData =()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }
    useEffect(()=>{
      getData()
    },[])
  
    return (
      <SafeAreaView>
      <ScrollView style={{padding:0,marginTop:5,paddingHorizontal:15}}>
      <View style={{gap:5}}>
        {data.map((e,i)=>{
          return(
            <Cards key={i} data={e}/>
  
          )
        })}
      </View>
      </ScrollView>
      </SafeAreaView>
    )
}

export default Product