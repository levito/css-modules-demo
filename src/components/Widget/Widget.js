import React from 'react';

import './widget.css';

export default props => (
  <div className="widget">
    <h3 className="headline">
      {props.headline}
    </h3>
    {props.children}
  </div>
);
