import React from 'react';

import Box from './Box';
import Card from '../card/Card';
import Paragraph from '../paragraph/Paragraph';
import LabelValuePair from '../labelValuePair/LabelValuePair';

const P1 = () => (
  <Paragraph>
    <LabelValuePair label="Nimi" value="Mikko Mallintaja" />
    <LabelValuePair label="SOTU" value="010101-123A" />
    <LabelValuePair label="ID" value="123456789" />
  </Paragraph>
);

const P2 = () => (
  <Paragraph title="Yhteystiedot">
    <LabelValuePair label="Puhelin" value="+358 100 100" />
    <LabelValuePair label="Sähköposti" value="etunimi.sukunimi@gmail.com" />
    <LabelValuePair label="Osoite" value="Keskuskatu 4 A 30 00100 Helsinki" />
  </Paragraph>
);

const P3 = () => (
  <Paragraph title="Asiakasryhmä">
    <p>Yksityinen asiakas</p>
  </Paragraph>
);

export default {
  component: Box,
  title: 'Layout/Box',
};

export const defaultLayout = () => <Box>content</Box>;
const MockCard = () => (
  <Card title="Asiakastiedot">
    <P1 />
    <hr />
    <P3 />
    <hr />
    <P2 />
  </Card>
);

export const sampleCards = () => (
  <Box>
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
  </Box>
);
