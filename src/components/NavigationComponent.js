'use strict';

import React from 'react';

var classNames = require('classnames');
//var debounce = require('debounce');

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

	isVisible(el) {
	    let rect = el.getBoundingClientRect();

	    return rect.bottom <= window.innerHeight - window.innerHeight * .95; /* at least scrolled 20% of window height  */
	}

	handleVisibility(el) {
		let visible = this.isVisible(el);

		this.setState({
	  		navVisible: visible
		});
	}

	handleNavClick(e) {
		const component = e.target.getAttribute('href');

      	this.doScrolling(component, 250);
	}

	getElementY(query) {
  		return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
	}

	doScrolling(element, duration) {
		let startingY = window.pageYOffset;
		let elementY = this.getElementY(element);
		let diff = elementY - startingY;
		let start;

		// Bootstrap our animation - it will get called right before next frame shall be rendered.
		window.requestAnimationFrame(function step(timestamp) {
			if (!start) start = timestamp
			// Elapsed miliseconds since start of scrolling.
			let time = timestamp - start
			// Get percent of completion in range [0, 1].
			let percent = Math.min(time / duration, 1)

			window.scrollTo(0, startingY + diff * percent)

			// Proceed with animation as long as we wanted it to.
			if (time < duration) {
				window.requestAnimationFrame(step)
			}
		})
	}

  	render() {

  		let navbarClasses = classNames({
			'navbar': true,
			'fixed-top': true,
			'navbar-toggleable-md': true,
			'navbar-inverse': true,
			'bg-inverse': true,
			'hidden': !this.state.navVisible
	    });

	    return (
	      	<nav className={navbarClasses}>
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<a className="navbar-brand" href="#">
				    <img src="images/logo.png" width="75" height="67" className="d-inline-block align-top" alt="" />
			  	</a>

				<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
					<ul className="navbar-nav">
					  	<li className="nav-item active">
					    	<a className="nav-link" href="#about" onClick={this.handleNavClick.bind(this)}>About Us <span className="sr-only">(current)</span></a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#services" onClick={this.handleNavClick.bind(this)}>What We Do</a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#portfolio" onClick={this.handleNavClick.bind(this)}>Our Work</a>
					  	</li>
					  	<li className="nav-item">
					    	<a className="nav-link" href="#contact" onClick={this.handleNavClick.bind(this)}>Contact Us</a>
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
