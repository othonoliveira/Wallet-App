import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">0</p>
      </div>
    );
  }
}

Header.propTypes = {}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
