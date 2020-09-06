import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
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
