import React, { PureComponent } from 'react';
import AppLayout from '../../main/layout';

class Home extends PureComponent {
  render() {
    return (
      <AppLayout pageTitle="Home - Reactail">
        <h1 className="text-4xl text-primary-500">Home</h1>
      </AppLayout>
    );
  }
}

export default Home;
