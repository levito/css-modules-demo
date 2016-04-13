import React, {Component} from 'react';

export default class Widget extends Component {
  render () {
    return (
      <div className="widget">
        <h3 className="headline">
          {this.props.headline}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
