/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" />;

// TODO: remove terra-application after it is incorporated into dev-site
const TitleTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation hero={hero} />
  </ApplicationBase>
);

export default TitleTest;
