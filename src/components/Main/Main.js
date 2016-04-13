import React, {Component} from 'react';

export default class Main extends Component {
  render () {
    return (
      <div id="main">
        <h2 className="headline">
          {this.props.headline}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
