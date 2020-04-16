import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Details from './components/Details';
import './App.css';
import './bootstrap.min.css';


function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/users/:username" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}


const context = React.createContext();

class App extends React.Component{
  state = {
    users: [],
    loading: false
  }
  
  updateUsers = (newUsers) => this.setState(()=>({ users: newUsers }));

  search = (username, e) =>{
    e.preventDefault();

    if(username.length > 1){
      this.setState(()=>({ users: [], loading: true }))
  
  
      fetch(`https://api.github.com/search/users?q=${username}`)
      .then(res => res.json())
      .then(data =>{
        this.setState(()=>({ users: data.items, loading: false }))
      })
      .catch(err => console.error(err));

    }else alert('Please enter username!');
  }

  render(){
    const {state, updateUsers, search} = this;
    let one = {state, updateUsers, search};
    return(
      <context.Provider value={one}>
        <Routes />
      </context.Provider>
    )
  }
} 


export const Consumer = context.Consumer;

export default App;