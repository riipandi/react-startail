import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

class AppLayout extends PureComponent {
  render() {
    return (
      <div className="font-sans antialiased min-h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.pageTitle || 'Reactail'}</title>
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
