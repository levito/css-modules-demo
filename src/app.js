import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import Widget from './components/Widget/Widget.js';

const App = props => <div>
  <h1 className="headline">Hello DresdenJS!</h1>

  <div className="container">
    <div className="main">
      <h2>Main</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corrupti corporis, earum, doloremque dolores sint itaque nihil sapiente quam voluptatibus non eum excepturi quia minus ducimus aliquid, veniam reprehenderit esse molestiae ad quisquam! Atque officia molestiae quaerat error consequatur incidunt quibusdam tempore dolores suscipit ducimus voluptates quas magnam eligendi, ea ut vero ex, porro voluptate et inventore hic nesciunt. Maiores eos molestiae sequi illum eaque. Autem ducimus deleniti nobis dolore numquam, repellendus dolor quos consequuntur optio in ad magnam voluptas dolorum minima necessitatibus cum reiciendis!</p>
      <p>Quam maiores voluptas labore quibusdam ipsa, atque alias, sint, dolorum ut modi delectus consequatur error inventore ullam itaque in cum excepturi aliquid animi dicta incidunt possimus provident quos! Fuga architecto accusantium at, esse vitae minus dolore quaerat laborum repudiandae totam, quidem porro odit perspiciatis facere. Voluptates, tenetur repudiandae, sint iste debitis aliquam soluta vitae dignissimos inventore non, placeat deserunt a. Officia odit incidunt modi labore ea, aliquam ducimus, eos consectetur. Magni corporis expedita, quas quis consectetur, quidem, recusandae incidunt debitis quisquam dolorem error. Magnam delectus rerum fugit quos iure similique dolorem odio voluptatibus inventore impedit tempora quasi, non vel amet ullam enim. Alias recusandae animi sequi officiis, aliquam porro obcaecati cumque aut neque in. Blanditiis!</p>
    </div>

    <div className="sidebar">
      <h2>Sidebar</h2>

      <Widget headline="Widget 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Widget>
      <Widget headline="Widget 2">
        <p>Ab corporis molestias natus facere at, quibusdam animi non eum.</p>
      </Widget>
      <Widget headline="Widget 3">
        <p>Sit sed praesentium culpa obcaecati at porro excepturi inventore.</p>
      </Widget>
    </div>
  </div>
</div>;

ReactDOM.render(<App/>, document.getElementById('app'));
