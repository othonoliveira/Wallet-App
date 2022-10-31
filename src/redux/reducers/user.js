// Esse reducer será responsável por tratar as informações da pessoa usuária

const INTI_STATE = {
  email: '',
  password: '',
};

const users = (state = INTI_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.payload.email,
      password: action.payload.password,
    };

  //   break;
  default:
    return state;
  }
};

export default users;
