'use strict';

import React from 'react';

require('styles//Header.scss');

let sunbeach = require('../images/sun-beach.jpg');

class HeaderComponent extends React.Component {
  render() {
    return (
		<div className="header-component row">
			<div className="header-content">
				<h1 className="slideInLeft animated">HDS Productions</h1>
				<p  className="slideInRight animated">Serving Northern Virginia's video production needs.</p>
			</div>
			<img src={sunbeach} alt="Sun beach sea gulls" />
			<canvas id="header-canvas"></canvas>
		</div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
