import React, {Component} from 'react';

import './main.css';

export default class Main extends Component {
  render () {
    return (
      <div className="main">
        <h2 className="headline">
          {this.props.headline}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
