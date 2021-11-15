import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import Mywebsite from "./App";

// function diplaying continous time
/*
function showTime() {
  const elem = (
    <div>
      <h1>Time is {new Date().toLocaleTimeString()}</h1>
      <h2>Something is fissy</h2>
    </div>
  );
const elem = (
  <div id="mystyle">
    <h1>today is sunday.....</h1>
    <h2> This is Dr.Ganesan..</h2>
  </div>
);
*/
//FUNCTION COMPONENT CREATION
/*
function Header() {
  return (
    <div>
      <h1>Software Engineer</h1>;<h2>Ganesan traget is 2 lakhs per month</h2>
    </div>
  );
}
function Sidebar() {
  return <h1>This is sidebar</h1>;
}
function Navbar() {
  return <h1> This is Navbar</h1>;
}

//FUNCTION COMPILATION AND CALLING

function Mywebsite() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Navbar />
    </div>
  );
}
*/
// CLASS COMPONENT CREATION
// class Mywebsite extends React.Component {
//     render() {
//       return <h1>Welcome to my first class component application</h1>;
//     }
//   }
/*
class Myfirstclass extends React.Component {
  render() {
    return (
      <div>
        <Mywebsite />
        <h2>This is Dr.Ganesan from chennai</h2>
      </div>
    );
  }
}

// REACT PROPS
class Learnreactpropsparent extends React.Component {
  render() {
    return (
      <h1>
        Hello Ganesan. Welcome to {this.props.var.topic}.. Learn in{" "}
        {this.props.var.language}{" "}
      </h1>
    );
  }
}
class Learnreactpropschild extends React.Component {
  render() {
    const v = { topic: "reactjs", language: "english", concept: "props" };
    return <Learnreactpropsparent var={v} />;
  }
}
*/

//LEARN REACT STATE
/*
class Learnreactstate extends React.Component {
  constructor() {
    super();
    this.state = { initialvalue: "Welcome" };
  }

  changevalue = () => {
    this.setState({ initialvalue: "Thanks for watching" });
  };
  render() {
    return (
      <div>
        <h1> Hi Hello and {this.state.initialvalue}</h1>;
        <button type="button" onClick={this.changevalue}>
          Exit
        </button>
      </div>
    );
  }
}
*/
//LEARN REACT LIFECYCLE
/*
class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { value: "Welcome", name: "Guys" };
  }
  componentWillMount() {
    alert("Learn Reactjs Lifecycle");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.value} {this.state.name}
        </h1>
        <br />
        <button type="button" onClick={this.changevalue}>
          Change value
        </button>
      </div>
    );
  }
  changevalue = () => {
    this.setState({ value: "Learn React in Tamil", name: "friends" });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: "Thank You" });
    }, 5000);
  }
  componentWillUpdate() {
    alert("Do you want to update to a new value");
  }
  componentDidUpdate() {
    document.getElementById("root").innerHTML =
      "New value updated successfully" + this.state.value;
  }
}
*/

// Learn Event Handling

/*class Eventbind extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome",
    };
  }
  clickevent = () => {
    this.setState({ msg: "Thank You" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button type="button" onClick={this.clickevent}>
          clickme
        </button>
      </div>
    );
  }
}
//LEARN EVENT HANDLING WITH BINDING
/*class Eventbind extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome",
    };
  }
  clickevent = (a) => {
    this.setState({ msg: a });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button
          type="button"
          onClick={this.clickevent.bind(this, "Hello world")}
        >
          clickme
        </button>
      </div>
    );
  }
}
*/

//LEARN REACT FORMS
//React forms with two input arrow functions
/*
class Reactforms extends React.Component {
  constructor() {
    super();
    this.state = { username: " " };
    this.state = { userage: null };
  }

  uservalue = (event) => {
    this.setState({ username: event.target.value });
  };
  userage = (event) => {
    this.setState({ userage: event.target.value });
  };
  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <h2>Your age: {this.state.userage}</h2>
        Enter your name: <input type="text" onChange={this.uservalue}></input>
        Enter your age: <input type="text" onChange={this.userage}></input>
      </form>
    );
  }
}
*/
//learn React with inputs in single function

class Reactforms extends React.Component {
  constructor() {
    super();
    this.state = { username: " ", age: null, errmsg: "" };
  }

  uservalue = (event) => {
    let n = event.target.name;
    let v = event.target.value;
    let err = "";
    if (n === "age") {
      if (v != "" && !Number(v)) {
        err = <strong>Invalid value, Your age must be a number</strong>;
      }
    }

    this.setState({ errmsg: err });
    this.setState({ [n]: v });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <h2>Your age: {this.state.age}</h2>
        Enter your name:{" "}
        <input type="text" name="username" onChange={this.uservalue}></input>
        Enter your age:{" "}
        <input type="text" name="age" onChange={this.uservalue}></input>
        {this.state.errmsg}
      </form>
    );
  }
}

function gth() {
  const ganesh = <h1>Hi How are u?..this is github learning</h1>;
}
//this is am doing second change to learn branching in github
ReactDOM.render(<Reactforms />, document.getElementById("root"));

//this is first edit ...let me chk
