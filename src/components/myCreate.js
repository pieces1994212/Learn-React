import React from "react";

function MytestBox(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.readme}</p>
      {props.children}
    </div>
  );
}

class TestMyTestBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Hot Wheels",
      readme: "Welcome to mini cars world",
      info: ""
    };
    this.handelLogin = this.handelLogin.bind(this);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(e) {
    this.setState({
      info: e.target.value
    });
  }
  handelLogin(e) {
    alert(this.state.info + "login success");
  }
  render() {
    return (
      <MytestBox title={this.state.header} readme={this.state.readme}>
        <div>
          <input value={this.state.info} onChange={this.handelInput} />
          <button type="button" onClick={this.handelLogin}>
            submit
          </button>
        </div>
      </MytestBox>
    );
  }
}

export default TestMyTestBox;
