import React from 'react';
import  {Route,Switch} from 'react-router-dom'
import Home from './Components/core/Home';



const MainRouter = () => {

   return( <div>
       <Switch>
           <Route exact path="/" component={Home} />
       </Switch>
   </div>)



}