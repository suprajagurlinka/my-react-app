import React, { Component } from 'react'

export default class classState extends Component {
   constructor(){
       super()
       this.state={
           count=0
       }
   }
   increment=()=>{
       this.state=this.count+1
   }
   
   
    render() {
        return (
            <div>
                <h1>count</h1>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}
