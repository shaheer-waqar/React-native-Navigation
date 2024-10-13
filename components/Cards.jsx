import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Cards = ({data}) => {
    return (
        <View style={[style.container,]}>
            <Image style={{width:"100%", height:250,objectFit:"cover"}} source={{uri:data.image}}/>
            <View style={style.cardDetail}>
            <Text style={{fontSize:16,fontWeight:'600'}}>{data.title.slice(0,40)}..</Text>
            <Text>{data.description.slice(0,50)}..</Text>
            <TouchableOpacity>
                <Text style={{backgroundColor:"blue",color:"white" ,paddingVertical:5,textAlign:'center',marginTop:4}}>Buy now</Text>
            </TouchableOpacity>
            </View>
        </View>
      )
    
}
const style = StyleSheet.create({
    container:{
        width:"100%",
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        overflow:"hidden"
    },
    cardDetail:{
      padding:5,
      paddingVertical:10,
      gap:4

    }

})
export default Cards