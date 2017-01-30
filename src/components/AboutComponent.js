'use strict';

import React from 'react';

var classNames = require('classnames');
var debounce = require('debounce');

require('styles//About.scss');

class AboutComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isVisible: false};
	}

	componentDidMount() {
		document.addEventListener('scroll', debounce(this.handleScroll.bind(this), 100));
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		let el = document.querySelector('.about-component');

		this.handleVisibility(el);
	}

	isElementInViewport(el) {
	    let rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
	    );
	}

	handleVisibility(el) {
		let visible = this.isElementInViewport(el);

		if (visible) {
			this.setState({
		  		isVisible: visible
			});
		}
	}

	render() {
		let h1Classes = classNames({
			'section-title': true,
			'animated': true,
			'from-left': true,
			'activated': this.state.isVisible
	    });

	    let p1Classes = classNames({
			'animated': true,
			'from-right': true,
			'text-center': true,
			'activated': this.state.isVisible
	    });

	    let p2Classes = classNames({
			'animated': true,
			'from-left': true,
			'text-center': true,
			'activated': this.state.isVisible
	    });

		return (
			<div className="about-component section-group">
				<h1 className={h1Classes}>HDS Productions</h1>

				<div className="row justify-content-md-center">
					<div className="col-12 col-md-6">
						<p className={p1Classes}>HDS Productions is an independent production company that has a vast network of knowable and experienced professionals in the industry. From developing a creative ideas into filming on locations and later with our help finalize your idea into well professional project. </p>
						<p className={p2Classes}>Our mission starts with your vision, your story is important to us and to our company and we will do everything in our ability to make sure you connect to your audience in a professional level. </p>
					</div>
				</div>
			</div>
		);
	}
}

AboutComponent.displayName = 'AboutComponent';

// Uncomment properties you need
// AboutComponent.propTypes = {};
// AboutComponent.defaultProps = {};

export default AboutComponent;
