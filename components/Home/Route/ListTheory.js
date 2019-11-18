import React from 'react'
import {FlatList,TouchableOpacity} from 'react-native'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { ListItem } from 'react-native-elements'
import list from '../../data/ListTheory'

 keyExtractor = (item, index) => index.toString()
 renderItem = ({ item }) => (
   <ListItem
     title={item.name}
     bottomDivider
     chevron
     getid={item.id}
     onPress={()=>tthis.gotoTheory(getid)}
   />
 )
 const gotoTheory=({getid})=>{
  <TouchableOpacity onPress={() => {
    Actions.push({getid});
  }}>
  </TouchableOpacity>
}
const  ListTheory= () => {
   const goToHome = () => {
      Actions.home()
   }
   
   return (
   
         <FlatList
           keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
  
   )
}
export default ListTheory