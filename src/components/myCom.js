import React from 'react'

class Mycom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this指当前实例，即实例化此组件时的实例对象，这里个人理解创建此组件时在构造方法中初始化其state
      lableName: props.name,
      lable2: "kick"
    };
    this.tick = this.tick.bind(this)
  }
  s = "属性";
  render() {
    return (
      <div>
        <span className="my-fk-span">{this.state.lableName}</span>
        <button onClick={this.aleryName.bind(this,this.state.lableName)}>click me1</button>
        <button onClick={(e)=>this.aleryName(this.state.lableName,e)}>click me2</button>
      </div>
    );
  }
  tick() {
    this.setState((predState, props) => ({
      lableName: predState.lableName + props.name + this.s + predState.lable2
    }));
  }
  aleryName(name,e){
    this.setState((predState, props) => ({
      lableName: predState.lableName + props.name + this.s + predState.lable2
    }));
    alert(name)
  }
}

export default Mycom