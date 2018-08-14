import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return 'loading';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a>Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            {this.renderContent()}
            {/* <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({}),
};
Header.defaultProps = {
  auth: null,
};
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Header);
