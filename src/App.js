import React from "react";
import "./App.css";
import Time from "./Component/Time";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Yessine EN HLIMA",
      age: "31",
      imgSrc: "user.png",
      profession: "Full Stack Web Developer",
    },
    show: false,
  };

  handleClick = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.handleClick}>
            {this.state.show ? "Hidden" : "Show"}
          </button>
          {this.state.show ? (
            <div className="card">
              <img
                src={this.state.Person.imgSrc}
                width="120px"
                height="120px"
                alt=""
              />
              <div className="person">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={this.state.Person.fullName}
                  readOnly
                />

                <label>Age:</label>
                <input
                  type="text"
                  value={this.state.Person.age + " years old"}
                  readOnly
                />

                <label>Profession:</label>
                <input
                  type="text"
                  value={this.state.Person.profession}
                  readOnly
                />
              </div>
              <Time />
            </div>
          ) : (
            <h2>Click to show the profile</h2>
          )}
        </div>
      </div>
    );
  }
}

export default App;
