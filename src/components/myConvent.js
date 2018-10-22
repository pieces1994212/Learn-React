import React from "react";

//变量提升demo

//子组件1
class InputA extends React.Component {
  constructor(props) {
    super(props);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(e) {
    this.props.handelChangeA(e.target.value);
  }
  render() {
    return (
      <label>
        inputA:
        <input type="text" value={this.props.val} onChange={this.handelInput} />
      </label>
    );
  }
}

//子组件2
class InputB extends React.Component {
  constructor(props) {
    super(props);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(e) {
    this.props.handelChangeB(e.target.value);
  }
  render() {
    return (
      <label>
        inputB:
        <input type="text" value={this.props.val} onChange={this.handelInput} />
      </label>
    );
  }
}

//父组件中变量提升
class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    // 利用props提供value以及改变value的方法
    return (
      <div>
        <span>Now value is :{this.state.value}</span>
        <InputA val={this.state.value} handelChangeA={this.handelChange} />
        <InputB val={this.state.value} handelChangeB={this.handelChange} />
      </div>
    );
  }
}

export default CustomForm;
