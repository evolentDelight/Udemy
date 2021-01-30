import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Fix #1
  // onFormSubmit(event) {
  //   event.preventDefault();
  //By binding in constructor this.onFormSubmit = this.onFormSubmit.bind(this); the this.state.term can be called
  //   //console.log(this.state.term);
  //   //calling this.state.term causes error
  //   //TypeError: Cannot read property 'state' of undefined
  //   //this refers to parent object. In this example, it's onSubmit() in JSX <form>
  //     //Essentially think onSubmit.(this.onFormSubmit); before the dot, the parent object
  // }

  //Fix #2
  onFormSubmit = (event) => {
    //Arrow functions(2015 implementation) automatically binds this to any expected references to this
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  //Fix #3
  // onFormSubmit(event) {
  //   //After creating an anonymous arrow function in the JSX declaration
  //   //onSubmit={(event) => this.onFormSubmit(event)} Pass event property
  //   event.preventDefault();

  //   console.log(this.state.term);
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Enter Here"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
