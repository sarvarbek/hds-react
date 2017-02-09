'use strict';

import React from 'react';

var classNames = require('classnames');

require('styles//Services.scss');

class ServicesComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {sectionTitleVisible: false};
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		let el = document.querySelector('.section-title-bg');

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
		if (this.state.sectionTitleVisible === true) return;

		let visible = this.isElementInViewport(el);

		if (visible) {
			this.setState({
		  		sectionTitleVisible: visible
			});
		}
	}

	render() {
		let sectionTitleClasses = classNames({
			'section-title-bg': true,
			'animated': true,
			'from-right': true,
			'activated': this.state.sectionTitleVisible
	    });

	    let preproductionClasses = classNames({
			'services-section-preproduction': true,
			'animated': true,
			'from-left': true,
			'activated': this.state.sectionTitleVisible
	    });

	    let productionClasses = classNames({
			'services-section-production': true,
			'animated': true,
			'from-right': true,
			'activated': this.state.sectionTitleVisible
	    });

	    let postproductionClasses = classNames({
			'services-section-postproduction': true,
			'animated': true,
			'from-left': true,
			'activated': this.state.sectionTitleVisible
	    });

		return (
			<div className="services-component section-group">
				<div className={sectionTitleClasses}>
					<h1 className="section-title ml-auto">What We Do</h1>
				</div>

				<div className={preproductionClasses}>
					<div className="container">
						<h1 className="service-title">Pre-Production</h1>

						<div className="clearfix">
							<ul className="float-left">
								<li>Scriptwriting</li>
								<li>Storyboarding</li>
								<li>Concept Development</li>
							</ul>
							<ul className="float-left">
								<li>Location Scouting</li>
								<li>Casting</li>
								<li>Set Design</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={productionClasses}>
					<div className="container">
						<h1 className="service-title">Production</h1>

						<div className="clearfix">
							<ul className="float-left">
								<li>Videos</li>
								<li>Photography</li>
								<li>Production Management</li>
							</ul>
							<ul className="float-left">
								<li>Cast & Crew</li>
								<li>Equipment</li>
								<li>Sets & Props</li>
							</ul>
						</div>

						<ul className="hidden-xs-up">
							<li>Documentaries</li>
							<li>Digital Video productions</li>
							<li>Performances</li>
							<li>Social Media Videos</li>
							<li>Promo Videos</li>
							<li>Landscapes</li>
							<li>Real Estate</li>
							<li>Concerts</li>
							<li>Music videos</li>
							<li>Action Sport</li>
							<li>Commercial Sport</li>
							<li>Travel films</li>
							<li>Sizzle Reels</li>
							<li>Pitch videos</li>
							<li>CEO Profiles</li>
							<li>Branding Videos</li>
							<li>Corporate Videos</li>
							<li>Web Videos</li>
							<li>Recruitment Videos</li>
							<li>Marketing Videos </li>
							<li>Training Videos</li>
							<li>TV Commercials </li>
							<li>Education & Training Videos</li>
							<li>Live Events Videos</li>
							<li>Comedy</li>
						</ul>
					</div>
				</div>

				<div className={postproductionClasses}>
					<div className="container">
						<h1 className="service-title">Post-Production</h1>

						<div className="clearfix">
							<ul className="float-left">
								<li>Editing</li>
								<li>Color Correction</li>
								<li>Photoshop</li>
								<li>Visual Effects</li>
							</ul>
							<ul className="float-left">
								<li>Compositing</li>
								<li>Motion Graphics</li>
								<li>Music Composition</li>
								<li>Sound Design</li>
							</ul>
							<ul className="float-left">
								<li>Sound Mixing</li>
								<li>DVD Authoring</li>
								<li>Video Formatting</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ServicesComponent.displayName = 'ServicesComponent';

// Uncomment properties you need
// ServicesComponent.propTypes = {};
// ServicesComponent.defaultProps = {};

export default ServicesComponent;
