import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../redux/actions';
import './Table.css';

class Table extends Component {
  editButton = async (id) => {
    const { dispatch } = this.props;
    await dispatch(editExpense(id));
  };

  deleteButton = async (expense) => {
    const { expenses, dispatch } = this.props;
    const updatedExpenses = expenses.filter((element) => element !== expense);
    await dispatch(deleteExpense(updatedExpenses));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{(+expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{(+expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(+expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  onClick={ () => this.editButton(expense.id) }
                  type="button"
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => this.deleteButton(expense) }
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {}.isRequired;

export default connect(mapStateToProps)(Table);
