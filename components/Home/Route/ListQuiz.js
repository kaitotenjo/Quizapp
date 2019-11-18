import React from 'react'
import {FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ListItem } from 'react-native-elements'
import list from '../../data/ListTheory'

 keyExtractor = (item, index) => index.toString()
 renderItem = ({ item }) => (
   <ListItem
     title={item.name}
     subtitle={item.id}
     bottomDivider
     chevron
   />
 )
 
const  ListQuiz= () => {
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
export default ListQuiz