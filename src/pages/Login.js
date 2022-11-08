import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

const validaEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const FIVE = 5;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  validateInputs = () => {
    const { email, password } = this.state;
    const validatedEmail = validaEmail.test(email);
    const validatedPassword = password.length > FIVE;
    console.log(validatedPassword);
    if (validatedEmail && validatedPassword) {
      this.setState({ disabled: false });
    } else { this.setState({ disabled: true }); }
  };

  handleChange = async (event) => {
    const { name, value } = event.target;
    await this.setState({ [name]: value });
    this.validateInputs();
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {}.isRequired;

export default connect()(Login);
