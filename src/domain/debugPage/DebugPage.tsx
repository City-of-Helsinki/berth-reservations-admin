import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import HarborsPage from '../harbors/HarborsPageContainer';
import List from '../../common/list/List';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import styles from './debugPage.module.scss';
import ListItem from '../../common/list/ListItem';
import LogoutButton from '../login/LogoutButton';
import Login from '../login/Login';

export const GET_LOCAL_STATE = gql`
  query GetLocalState {
    cartItems @client
    isLoggedIn @client
  }
`;

const IndividualHarborPage: React.SFC = ({ children }) => {
  const { loading, error, data } = useQuery<any>(GET_LOCAL_STATE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { isLoggedIn, cartItems } = data;

  return (
    <div className={styles.individualHarborPage}>
      <LabelValuePair
        label="isLoggedIn"
        value={isLoggedIn ? 'true' : 'false'}
      />
      {isLoggedIn && <LogoutButton />}

      {!isLoggedIn && <Login />}

      <div>
        <h1>selected harbor id's:</h1>
        <List>
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item: any) => <ListItem>{item}</ListItem>)}
        </List>
      </div>
      <HarborsPage />
    </div>
  );
};

export default IndividualHarborPage;
