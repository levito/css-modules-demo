import React, {Component} from 'react';

export default class Sidebar extends Component {
  render () {
    return (
      <div id="sidebar">
        <h2 className="headline">
          {this.props.headline}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
