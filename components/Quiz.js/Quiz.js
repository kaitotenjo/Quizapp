import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const  Quiz= () => {
   const goToHome = () => {
      Actions.home()
   }
  const Quizstate ={
   correctCount: 0,
   totalCount: this.props.navigation.getParam("questions", []).length,
   activeQuestionIndex: 0,
   answered: false,
   answerCorrect: false
  }
  const [Quiz, setQuiz] = useState(Quizstate)
  const answer = correct => {
   this.setState(
     state => {
       const nextState = { answered: true };

       if (correct) {
         nextState.correctCount = state.correctCount + 1;
         nextState.answerCorrect = true;
       } else {
         nextState.answerCorrect = false;
       }

       return nextState;
     },
     () => {
       setTimeout(() => this.nextQuestion(), 750);
     }
   );
   };
   const nextQuestion = () => {
      this.setState(state => {
        const nextIndex = state.activeQuestionIndex + 1;
  
        if (nextIndex >= state.totalCount) {
          this.props.navigation.popToTop();
        }
  
        return {
          activeQuestionIndex: nextIndex,
          answered: false
        };
      });
    };
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>Account</Text>
      </TouchableOpacity>
   )
}
export default Quiz