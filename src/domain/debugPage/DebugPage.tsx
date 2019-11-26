import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Section, Notification } from 'hds-react';

import HarborsPage from '../login/HarborsPageContainer';
import List from '../../common/list/List';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import ListItem from '../../common/list/ListItem';
import LogoutButton from '../login/LogoutButton';
import Login from '../login/Login';

export interface LocalState {
  cartItems: Array<string>;
  isLoggedIn: boolean;
}

export const GET_LOCAL_STATE = gql`
  query GetLocalState {
    cartItems @client
    isLoggedIn @client
  }
`;

const IndividualHarborPage: React.SFC = () => {
  const { loading, error, data } = useQuery<LocalState>(GET_LOCAL_STATE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { isLoggedIn, cartItems } = data
    ? data
    : { cartItems: [], isLoggedIn: false };

  return (
    <>
      <Section color="secondary">
        <Notification labelText="debug page">
          <LabelValuePair
            label="isLoggedIn"
            value={isLoggedIn ? 'true' : 'false'}
          />
          {isLoggedIn && <LogoutButton />}

          {!isLoggedIn && <Login />}
        </Notification>
      </Section>

      <Section color="secondary">
        <Notification labelText="selected harbor id's:"></Notification>
      </Section>

      <List>
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((item: string) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
      </List>
      <HarborsPage />
    </>
  );
};

export default IndividualHarborPage;
