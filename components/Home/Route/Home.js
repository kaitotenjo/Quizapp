import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const goToQuiz = () => {
      Actions.Quiz()
    }
    const goToTheory= () => {
    Actions.Theory()
    }
    const goToAccount= () => {
    Actions.Account()
    }
     
 
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToQuiz}> 
      <Text>ruby on rails</Text>
      </TouchableOpacity>
   )
}
export default Home