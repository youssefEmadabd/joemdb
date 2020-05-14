import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Auth from "./utils/Auth";
import Login from "./views/Login"
import HomeScreen from "./views/HomeScreen"
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:{},
    }
  }

componentDidMount(){
  this.authListener()
}
  
  authListener(){
    Auth.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }

    })

  }
  render(){
    return (
    <div className="App">
      {this.state.user ? (<HomeScreen/>):(<Login/>)}  
    </div>
  );
}
}
export default App;
