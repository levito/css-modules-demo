import React, {Component} from 'react';

import styles from './sidebar.css';

export default class Sidebar extends Component {
  render () {
    return (
      <div className={styles.sidebar}>
        <h2 className={styles.headline}>
          {this.props.headline}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
