import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class StarComponent extends Component{

  constructor(){
    this.state={
      rating: 0
    }
  }
  render(){
    return (
      <div>
      <p>Star Component</p>
      <ul>
      <li onClick={()=>this.setState({rating: 1})} class={this.state.rating>=1?'selected':''}>
      &#9733;</li>
      <li onClick={()=>this.setState({rating: 2})} class={this.state.rating>=2?'selected':''}>&#9733;</li>
      <li onClick={()=>this.setState({rating: 3})} class={this.state.rating>=3?'selected':''}>&#9733;</li>
      <li onClick={()=>this.setState({rating: 4})} class={this.state.rating>=4?'selected':''}>&#9733;</li>
      <li onClick={()=>this.setState({rating: 5})} class={this.state.rating>=5?'selected':''}>&#9733;</li>
      </ul>
      <p>Your selected rating is : {this.state.rating}</p>
      </div>
    )
  }

}

export default StarComponent;
