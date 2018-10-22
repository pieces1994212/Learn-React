import React from "react";

function LoginWarning(props) {
  if (props.isLogin) {
    return null;
  }
  return <span>you need login in</span>;
}

function List(props) {
  let list = props.list;
  let lis = list.map(item => {
    return <li key={item.toString()}>{item}</li>;
  });
  return <ul>{lis}</ul>;
}

class Mycom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this指当前实例，即实例化此组件时的实例对象，这里个人理解创建此组件时在构造方法中初始化其state
      isLogin: false,
      list: [1, 2, 3]
    };
    this.loginIn = this.loginIn.bind(this);
    this.loginOut = this.loginOut.bind(this);
  }
  render() {
    return (
      <div>
        <List list={this.state.list} />
        <LoginWarning isLogin={this.state.isLogin} />
        {this.state.isLogin ? (
          <div>
            <span>now in</span>
            <button onClick={this.loginOut}>login out</button>
          </div>
        ) : (
          <div>
            <span>now out</span>
            <button onClick={this.loginIn}>login in</button>
          </div>
        )}
      </div>
    );
  }
  loginIn() {
    this.setState({
      isLogin: true
    });
  }
  loginOut() {
    this.setState({
      isLogin: false
    });
  }
}

export default Mycom;
