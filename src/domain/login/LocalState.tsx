import React, { Component } from 'react';

import Layout from '../../common/layout/Layout';
import HelsinkiLogo from '../../common/helsinkiLogo/HelsinkiLogo';
import styles from '../../common/header/header.module.scss';

type Props = {
  login: Function;
};

const Header = () => (
  <header className={styles.header}>
    <HelsinkiLogo color="white" />
  </header>
);

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
      <Layout header={<Header />} sidebar={<div></div>}>
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
      </Layout>
    );
  }
}
