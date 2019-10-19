import React, {Component} from 'react';
import Stopwatch from './Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div><Stopwatch/></div>
    )
  }
}

export default App;
