import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0
    }
  }

  render() {
    const {name,location} = this.props
    const {count} = this.state
    return (
      <div>
        <p>name-{name}</p>
        <p>location- {location}</p>
        <p>Count- {count}</p>
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Change Count</button>
      </div>
    );
  }
}

export default UserClass;
