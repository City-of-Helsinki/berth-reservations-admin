import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default function LogoutButton() {
  const client = useApolloClient();
  return (
    <button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
      }}
    >
      Logout
    </button>
  );
}
