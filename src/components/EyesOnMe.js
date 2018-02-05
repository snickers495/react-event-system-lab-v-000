// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {

  handleKey(){
    console.log('Entering password...');
  }
  render(){
    return(
      <div>
        <input onKeyUp={this.handleKey} type="password" />
      </div>
    )
  }
}
