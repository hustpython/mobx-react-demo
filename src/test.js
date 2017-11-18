import React, { Component } from 'react';
import './App.css';
import store from './store'
import { observer } from 'mobx-react'

@observer
class Test extends Component {

  render() {
    return (
      <div>
        {store.gen.a}
      </div>
    );
  }
}

export default Test;
