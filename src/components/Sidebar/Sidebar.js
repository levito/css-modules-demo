import React from 'react';

import './sidebar.css';

export default props => (
  <div className="sidebar">
    <h2 className="headline">
      {props.headline}
    </h2>
    {props.children}
  </div>
);
