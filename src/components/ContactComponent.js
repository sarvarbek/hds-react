'use strict';

import React from 'react';

require('styles//Contact.scss');

class ContactComponent extends React.Component {
	render() {
		return (
		  	<div className="contact-component section-group" id="contact">
				<div className={sectionTitleClasses}>
					<h1 className="section-title ml-auto">Get in Touch</h1>
				</div>
			</div>
		);
	}
}

ContactComponent.displayName = 'ContactComponent';

// Uncomment properties you need
// ContactComponent.propTypes = {};
// ContactComponent.defaultProps = {};

export default ContactComponent;
