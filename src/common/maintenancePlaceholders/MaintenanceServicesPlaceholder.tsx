import React from 'react';

import Section from '../section/Section';
import InternalLink from '../internalLink/InternalLink';
import SectionWithButton, { SectionWithButtonProps } from '../section/SectionWithButton';

export interface MaintenanceWorkPlaceholderProps {
  buttonText: SectionWithButtonProps['buttonText'];
  onClick?: SectionWithButtonProps['onClick'];
}

// TODO
const MaintenanceServicesPlaceholder = ({ buttonText, onClick }: MaintenanceWorkPlaceholderProps) => {
  const renderTitle = () => 'Huoltotyöt'.toUpperCase() + ' (PLACEHOLDER)';
  const renderContent = () => (
    <table>
      <tbody>
        <tr>
          <td>
            <InternalLink to="/">123</InternalLink>
          </td>
          <td>Portin lukko rikki</td>
        </tr>
        <tr>
          <td>
            <InternalLink to="/">456</InternalLink>
          </td>
          <td>Poiju irti</td>
        </tr>
      </tbody>
    </table>
  );

  return onClick ? (
    <SectionWithButton title={renderTitle()} buttonText={buttonText} onClick={onClick}>
      {renderContent()}
    </SectionWithButton>
  ) : (
    <Section title={renderTitle()}>{renderContent()}</Section>
  );
};

export default MaintenanceServicesPlaceholder;
