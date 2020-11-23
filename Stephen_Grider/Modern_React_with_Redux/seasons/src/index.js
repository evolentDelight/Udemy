import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        {this.state.errorMessage ? "Error: " + this.state.errorMessage : null}
      </div>
    );
  }
}

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position); //Average time to fetch: 28ms=0.028s - PersonalC
//     },
//     (err) => console.log(err)
//   ); //Takes a while to get data

//   return <div>Latitude ${}</div>;
// };

ReactDOM.render(<App />, document.querySelector("#root"));
