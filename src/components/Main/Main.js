import React, {Component} from 'react';

import styles from './main.css';

export default class Main extends Component {
  render () {
    return (
      <div className={styles.main}>
        <h2 className={styles.headline}>
          {this.props.headline}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
