// Esse reducer será responsável por tratar as informações da pessoa usuária

const INTI_STATE = {
  email: '',
};

const users = (state = INTI_STATE, action) => {
  switch (action.type) {
  case 'ADD_EMAIL':
    return {
      ...state,
      email: action.payload,
    };

  //   break;
  default:
    return state;
  }
};

export default users;
