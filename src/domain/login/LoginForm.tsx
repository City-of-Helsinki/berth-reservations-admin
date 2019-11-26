import React, { Component } from 'react';

import Button from '../../common/button/Button';
import Layout from '../../common/layout/Layout';
import Icon from '../../common/icon/Icon';
import Header from '../../common/header/Header';

const CustomHeader = () => (
  <Header>
    <Icon name="helsinkiLogo" size="large" rectangle={true} color="white" />
  </Header>
);

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
      <Layout header={<CustomHeader />} sidebar={<div></div>}>
        <h1>Prototype stuff</h1>
        <p>Insert any syntactically valid email. </p>
        <form onSubmit={this.onSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={this.onChange}
          />
          <Button onClick={this.onSubmit}>Log in</Button>
        </form>
      </Layout>
    );
  }
}
