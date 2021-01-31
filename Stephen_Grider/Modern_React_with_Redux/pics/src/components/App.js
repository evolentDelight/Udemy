import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    //Method Two - async&await
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    // Method One
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
