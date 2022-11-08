// Coloque aqui suas actions

import getCurrencies from '../../services/currenciesApi';

export const addEmail = (payload) => ({
  type: 'ADD_EMAIL',
  payload,
});

// action creator
export const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCIES',
});

// action creator
export const responseCurrenciesSuccess = (currencies) => ({
  type: 'RESPONSE_CURRENCIES_SUCCESS',
  currencies,
});

// action creator
export const responseCurrenciesError = (error) => ({
  type: 'RESPONSE_CURRENCIES_ERROR',
  error,
});

// thunkCurrencies
export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());

    try {
      const response = await getCurrencies();
      dispatch(responseCurrenciesSuccess(response));
    } catch (error) {
      dispatch(responseCurrenciesError(error));
    }
  };
}

// action creator
export const requestExchangeRates = () => ({
  type: 'REQUEST_EXCHANGE_RATES',
});

// action creator
export const responseExchangeRateSuccess = (exchangeRates) => ({
  type: 'RESPONSE_EXCHANGE_RATES_SUCCESS',
  exchangeRates,
});

// action creator
export const responseExchangeRatesError = (error) => ({
  type: 'RESPONSE_EXCHANGE_RATES_ERROR',
  error,
});

// thunkExchangeRates
export function fetchExchangeRates() {
  return async (dispatch) => {
    dispatch(requestExchangeRates());

    try {
      const response = await getCurrencies();
      console.log(response);
      dispatch(responseExchangeRateSuccess(response));
    } catch (error) {
      dispatch(responseExchangeRatesError(error));
    }
  };
}

// action creator
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});
