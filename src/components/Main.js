require('styles/App.scss');

import React from 'react';
import NavigationComponent from 'components/NavigationComponent';
import HeaderComponent from 'components/HeaderComponent';
import AboutComponent from 'components/AboutComponent';
import ServicesComponent from 'components/ServicesComponent';
import ContactComponent from 'components/ContactComponent';

class AppComponent extends React.Component {
  render() {
    return (
      	<div>
      		<NavigationComponent />
      		<HeaderComponent />
      		<AboutComponent />
      		<ServicesComponent />
      		<ContactComponent />
    	</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
