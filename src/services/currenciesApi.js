const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

// const toArray = (object) => {
//   delete object.USDT;
//   const response = object.reduce((acc, cur) => [...acc, cur], []);
//   return response;
// };

const getCurrencies = async () => {
  const request = await fetch((ENDPOINT));
  const response = await request.json();
  delete response.USDT;
  return request.ok ? Promise.resolve(response) : Promise.reject(response);
};

export default getCurrencies;
