import React from "react";
import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RoutersList } from "./router";

class App extends React.Component{

  render(){
    return <div>
      <Header/>
      <Switch>
        <Route path ={RoutersList.HOME}><Home/></Route>
        <Route path ={RoutersList.ABOUT}><About/></Route>
        <Route path ={RoutersList.CONTACT}><Contact/></Route>
        <Redirect path ={RoutersList.HOME}><Home/></Redirect>
      </Switch>
      <Home/>
      <About/>
      <Contact/>
    </div>
  }
}


export default App
