import React, { Component } from 'react';

class Child extends Component {
  constructor(){
    super()

    this.state = {
      data: [1,2,3,4,5],
      imageurl: ["a","b","c","d","e"]
    }

    this.handleInputOnClick = this.handleInputOnClick.bind(this)
  }

  handleInputOnClick() {

    console.log("state", this.state)
  }

  render() {
    // console.log(this.props)

    console.log("state->", this.state.data)

    return (
        <div style={{
          }}>
          <ul onClick= {this.handleInputOnClick}>
           {this.state.imageurl.map((num)=> {
               return(
                <li>
                    <div>
                        <img src={num}/>
                    </div>
                </li>
               )
           })}
          </ul>
        </div>
       )
  }
}

// const Child = (props) => {
//   return (
//   <div style={{
//     color: props.color,
//     fontSize: props.fontSize
//     }}>
//     test
//   </div> )
// }

export default Child;