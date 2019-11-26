import React, { Component } from 'react';

type Props = {
  login: Function;
};
export default class LoginForm extends Component<Props> {
  state = { email: '' };

  onChange = event => {
    const email = event.target.value;
    this.setState(s => ({ email }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email } });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          data-testid="login-input"
          onChange={this.onChange}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}
