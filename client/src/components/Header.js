import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Payments from './Payments';

const Header = (props) => {
  const { auth } = props;
  const renderContent = () => {
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
        return [
          <li>
            <Payments />
          </li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to={auth ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </NavLink>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.shape({}),
};
Header.defaultProps = {
  auth: null,
};
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Header);
