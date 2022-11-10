import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, fetchExchangeRates, updateExpenses } from '../redux/actions';

const defaultState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { state } = this;
    await dispatch(fetchExchangeRates());
    const { exchangeRates, expenses } = this.props;
    dispatch(addExpense({
      id: expenses.length,
      ...state,
      exchangeRates,
    }, 'ADD_EXPENSE'));
    this.setState(defaultState);
  };

  editExpense = async () => {
    const { dispatch } = this.props;
    const { state } = this;
    await dispatch(fetchExchangeRates());
    const { expenses, editionID, exchangeRates } = this.props;
    expenses[editionID] = {
      id: editionID,
      ...state,
      exchangeRates,
    };
    this.setState(defaultState);
    await dispatch(updateExpenses(expenses));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, edit } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            id="value"
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            value={ description }
            id="description"
            type="text"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.handleChange }
            id="currency"
            name="currency"
            data-testid="currency-input"
            value={ currency }
          >
            {/* <option value="Select your option" disabled>Coin</option> */}
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>{coin}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            onChange={ this.handleChange }
            id="method"
            name="method"
            data-testid="method-input"
            value={ method }
          >
            {/* <option value="Select your method" disabled>Payment method</option> */}
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            onChange={ this.handleChange }
            id="tag"
            name="tag"
            data-testid="tag-input"
            value={ tag }
          >
            {/* <option value="Select the tag" disabled>Tag</option> */}
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ edit ? this.editExpense : this.handleClick } type="button">
          { (edit) ? 'Editar despesa' : 'Adicionar despesa' }
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
  editionID: state.wallet.editionID,
});

WalletForm.propTypes = {}.isRequired;

export default connect(mapStateToProps)(WalletForm);
