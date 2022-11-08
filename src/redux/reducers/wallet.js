// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INTI_STATE = {
  currencies: [],
  error: null,
  expenses: [],
  exchangeRates: {},
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
  //   break;
  default:
    return state;
  }
};

export default wallet;
