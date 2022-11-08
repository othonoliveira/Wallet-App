import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const coinValue = expenses
      .map((element) => +element.value * +element.exchangeRates[element.currency].ask);
    const total = coinValue.length > 0 && coinValue.reduce((acc, curr) => acc + curr);
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">{(+total).toFixed(2)}</p>
      </div>
    );
  }
}

Header.propTypes = {}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
