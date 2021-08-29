import React,{Component} from "react";
import Form from "./Components/Form";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModifyForm from "./Components/ModifyForm"
class App extends Component {

  render() {
    return (

      <Router>
      <div className = "App">
             
             <Switch>
                <Route exact path="/">
                    <Form />
                </Route>
                <Route exact path="/newPage">
                    <ModifyForm/>
                </Route>
                {/* <Route  exact path="/newPage" component={Test}/> */}
              </Switch > 
          
      </div>
      </Router>
      
      
    );
  }
}

export default App;
