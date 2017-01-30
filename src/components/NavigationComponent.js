'use strict';

import React from 'react';

var classNames = require('classnames');
var debounce = require('debounce');

require('styles//Navigation.scss');

class NavigationComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {navVisible: false};
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		let el = document.querySelector('.header-component');

		this.handleVisibility(el);
	}

	shouldBeVisible(el) {
	    let rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
	    );
	}

	handleVisibility(el) {
		let visible = this.shouldBeVisible(el);

		this.setState({
	  		navVisible: visible
		});
	}


  	render() {

  		let navbarClasses = classNames({
			'navbar': true,
			'fixed-top': true,
			'navbar-toggleable-md': true,
			'navbar-inverse': true,
			'bg-inverse': true,
			'hidden': this.state.isVisible
	    });

	    return (
	      	<nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<a className="navbar-brand" href="#">
				    <img src="images/logo.png" width="75" height="67" className="d-inline-block align-top" alt="" />
			  	</a>

				<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
					<ul className="navbar-nav">
					  	<li className="nav-item active">
					    	<a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#">What We Do</a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#">Our Work</a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#">Contact Us</a>
					  	</li>
					</ul>
				</div>
			</nav>
	    );
  	}
}

NavigationComponent.displayName = 'NavigationComponent';

// Uncomment properties you need
// NavigationComponent.propTypes = {};
// NavigationComponent.defaultProps = {};

export default NavigationComponent;
