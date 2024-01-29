import React from "react";
import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RoutersList } from "./router";
import "./assets/style/style.scss";
import Footer from "./components/footer";

class App extends React.Component {

  render() {
    return <div>
      <Header />
      <Switch>
        <Route exact path={RoutersList.HOME}><Home/></Route>
        <Route exact path={RoutersList.ABOUT}><About/></Route>
        <Route exact path={RoutersList.CONTACT}><Contact/></Route>
        <Redirect exact path={RoutersList.HOME}><Home/></Redirect>
      </Switch>
      <Footer/>
    </div>
  }
}


export default App
