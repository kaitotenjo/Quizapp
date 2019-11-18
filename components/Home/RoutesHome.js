import React from 'react'
import { Router, Scene ,Stack} from 'react-native-router-flux'
import Home from '../Home/Route/Home'
import Account from '../Home/Route/Account'
import ListQuiz from '../Home/Route/ListQuiz'
import ListTheory from '../Home/Route/ListTheory'
import Login from '../auth/LogIn'
import SignUp from '../auth/SignUp'
import Loading from '../auth/Loading' 
const Routes = () => (
<Router>
<Scene key='root' hideNavBar={true}>
     <Stack key = "Loginroute">
         <Scene key = "home"   hideNavBar={true} tabs={true} tabStyle={{backgroundColor:"#FFFFFF"}}  >
            <Scene key ="MainHome" title ="Home" component={Home} initial={true} />
            <Scene key ="Theory" title ="Theory" component={ListTheory} />
            <Scene key ="Quiz" title ="Quiz" component={ListQuiz} />
            <Scene key ="Account" title ="Account" component={Account} />
         </Scene>
         <Scene key = "Login" title = "LogIn" component ={Login} initial={true}/>
         <Scene key = "SignUp"   component = {SignUp} title=" SignUp"/>
         <Scene key = "Loading" component ={Loading} title="Loading"/>
      </Stack>
</Scene>
</Router>
)
export default Routes