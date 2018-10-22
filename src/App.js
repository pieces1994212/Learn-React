import React, { Component } from "react";
import "./App.css";
import Mycom from "./components/myCom";
import MyForm from "./components/myFrom";
import CustomForm from "./components/myConvent"
import TestMyTestBox from "./components/myCreate"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm />
        <Mycom name={"pieces"} />
        <CustomForm></CustomForm>
        <TestMyTestBox></TestMyTestBox>
      </div>
    );
  }
}

export default App;
