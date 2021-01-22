import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }*/
  //constructor and line below have the same effect
  state = { lat: null, errorMessage: "" }; //no "this" statement
  //This line is converted to a similar code as above by Babel
  //Abbreviation

  /* Component LifeCycle

    constructor
    render - constantly called at each iteration of updates
    componentDidMount - After initial render
    componentDidUpdate - At every update/rerender
    componentWillUnMount - When component is removed
  
  */

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <Spinner
        message={`Please accept the alert request to know your location.`}
      />
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
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
