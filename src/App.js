import React, {Component} from 'react'
import {Link} from 'react-router'
import './style.css'

export default class App extends Component {
  render(){
    return (
      <div>
        <h2>实验</h2>
        <ul>
          <li>
            <Link to="/xixi">XiXi</Link>
          </li>
          <li>
            <Link to="/haha">HaHa</Link>
          </li>
        </ul>
        {
          this.props.children
        }
      </div>
    )
  }
}
