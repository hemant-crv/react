import React, { Component } from 'react';
import Ninja from './Ninjas';
import Addninjas from './Addninjas';

class App extends Component {
  state = {
    ninjas : [
      {name : 'hemant', age : '21', belt : 'black', id: 1},
      {name : 'prashast', age : '20', belt : 'black', id :2},
      {name : 'bharat', age : '25', belt : 'black', id :3}
    ]
  }
  render() {
    return (
      <div className="App">
      <Ninja ninjas={this.state.ninjas}/>  
      <Addninjas/>
      </div>
    );
  }
}

export default App;
