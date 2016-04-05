import React, {Component} from 'react';

import styles from './widget.css';

export default class Widget extends Component {
  render () {
    return (
      <div className={styles.widget}>
        <h3 className={styles.headline}>
          {this.props.headline}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
