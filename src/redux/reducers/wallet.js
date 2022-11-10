// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INTI_STATE = {
  currencies: [],
  error: null,
  expenses: [],
  exchangeRates: {},
  edit: false,
  editionID: 0,
};

const wallet = (state = INTI_STATE, action) => {
  switch (action.type) {
  case 'RESPONSE_CURRENCIES_SUCCESS':
    return {
      ...state,
      currencies: Object.values(action.currencies).map((coin) => coin.code),
    };
  case 'RESPONSE_EXCHANGE_RATES_SUCCESS':
    return {
      ...state,
      exchangeRates: action.exchangeRates,
    };
  case 'RESPONSE_EXCHANGE_RATES_ERROR' || 'RESPONSE_CURRENCIES_ERROR':
    return {
      ...state,
      error: action.error,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      editionID: action.editionID,
      edit: true,
    };
  case 'UPDATE_EXPENSES':
    return {
      ...state,
      edit: false,
      expenses: [...action.expenses],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: action.updatedExpenses,
    };
  //   break;
  default:
    return state;
  }
};

export default wallet;
