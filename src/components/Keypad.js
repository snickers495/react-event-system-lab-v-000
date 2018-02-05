// Code Keypad Component Here
import React from 'react';
export default class Keypad extends React.Component {

  handleKey(){
    
  }
  render(){
    return(
      <div>
        <input onKeyUp={this.handleKey} type="password" />
      </div>
    )
  }
}
