import React from 'react';

import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Paragraph',
};

export const plain = () => (
  <Paragraph>
    <table className="table table-borderless">
      <tbody>
        <tr>
          <td>Jono nro:</td>
          <td>245</td>
        </tr>
        <tr>
          <td>Kirjattu</td>
          <td>23.8.2019 kello 21.06</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>Ei käsitelty</td>
        </tr>
      </tbody>
    </table>
  </Paragraph>
);
