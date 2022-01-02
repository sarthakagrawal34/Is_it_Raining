// Given a class component, add state to it
// state should have a property called `isRaining` which is a boolean
// (true if it is raining, false if not)
// Render the word "Yes" if it is raining
// or "No" if it is not raining

import React from "react";

class App extends React.Component {
  constructor() {
    // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
    super();
    this.state= {
      itsRaining: false
    }
  }
  render(){
    return(
      <div>
        <h1> Is it Raining today? {this.state.itsRaining? 'Yes': "No"}</h1>
      </div>
    );
  }
}

export default App;
