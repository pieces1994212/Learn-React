import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      hobby: 3,
      hobbys: [
        { name: "driving", value: 1 },
        { name: "swimming", value: 2 },
        { name: "flying", value: 3 }
      ]
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
        [name]: value
    });
  }
  handelSubmit(event) {
    alert(
      "提交数据 name:" + this.state.name + "hobby:" + this.state.hobby
    );
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          name:
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handelInput}
          />
        </label>
        <label>
          hobby:
          <select
            value={this.state.hobby}
            name="hobby"
            onChange={this.handelInput}
          >
            {this.state.hobbys.map(e => (
              <option value={e.value} key={e.name}>{e.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default MyForm;
