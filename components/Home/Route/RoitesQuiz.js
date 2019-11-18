import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Route/Home'
import Account from './Route/Account'
import ListQuiz from './Route/ListQuiz'
import ListTheory from './Route/ListTheory'
import list from '../../data/ListTheory'
keyExtractor = (item, index) => index.toString()
renderItem = ({ item }) => (
  <ListItem
    id={item.id}
    title={item.name}
    bottomDivider
    chevron
  /> 
)
const Routes = () => (
   <Router>
       <Scene key = {item.name}  component={item.name} title={item.name}>
       <FlatList
           keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </Scene>
   </Router>
)
export default Routes