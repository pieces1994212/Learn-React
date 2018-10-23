import React from "react";

// function MytestBox(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.readme}</p>
//       {props.children}
//     </div>
//   );
// }

class MytestBox extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.readme}</p>
        {this.props.children}
      </div>
    )
  }
}

class TestMyTestBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Hot Wheels",
      readme: "Welcome to mini cars world",
      info: ""
    };
    this.myRef = React.createRef();
    this.myCusRef = React.createRef();
    this.handelLogin = this.handelLogin.bind(this);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(e) {
    this.setState({
      info: e.target.value
    });
  }
  handelLogin(e) {
    console.log(this.myRef.current);
    console.log(this.myCusRef.current);
    alert(this.state.info + "login success");
  }
  render() {
    return (
      <MytestBox title={this.state.header} readme={this.state.readme} ref={this.myCusRef}>
        <div>
          <input value={this.state.info} onChange={this.handelInput} />
          <button type="button" onClick={this.handelLogin} ref={this.myRef}>
            submit
          </button>
        </div>
      </MytestBox>
    );
  }
}

export default TestMyTestBox;
