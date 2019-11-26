import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import Button from '../../common/button/Button';

export default function LogoutButton() {
  const client = useApolloClient();
  return (
    <Button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
      }}
    >
      Logout
    </Button>
  );
}
