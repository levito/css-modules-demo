import React from 'react';

import './main.css';

export default props => (
  <div className="main">
    <h2 className="headline">
      {props.headline}
    </h2>
    {props.children}
  </div>
);
