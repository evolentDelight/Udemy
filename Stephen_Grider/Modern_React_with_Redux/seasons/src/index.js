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

  /* Component LifeCycle

    constructor
    render - constantly called at each iteration of updates
    componentDidMount - After initial render
    componentDidUpdate - At every update/rerender
    componentWillUnMount - When component is removed
  
  */

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
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
