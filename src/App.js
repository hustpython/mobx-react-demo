import React, { Component } from 'react';
import './App.css';
import store from './store'
import { observer } from 'mobx-react'
import Test from './test';
@observer
class App extends Component {
  changes(){
    store.add()
    console.log(store.gen.a)
  }
  render() {
    return (
      <div onClick={this.changes}>
        ss
        <Test />
      </div>
    );
  }
}

export default App;
