import React from 'react';
import classNames from 'classnames';

import Text from '../text/Text';
import styles from './link.module.scss';

export interface WithAnchorProps {
  linkColor?:
    | 'default'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary';
  underline?: 'none' | 'hover' | 'always';
  component?: HTMLAnchorElement;
  variant?: string;
  href: string;
  children: React.ReactNode;
  onBlur?: Function;
  onFocus?: Function;
}

const withAnchor = <P extends object>(Component: React.ComponentType<P>) =>
  class WithAnchor extends React.Component<WithAnchorProps & P> {
    render() {
      const {
        linkColor = 'textPrimary',
        underline,
        variant,
        onFocus,
        onBlur,
        href,
        ...passThroughProps
      } = this.props;

      const underlineStyle = (function() {
        if (underline === 'always') {
          return 'underlineAlways';
        }
        if (underline === 'none') {
          return 'underlineNone';
        }
        return 'underlineHover';
      })();

      return (
        <a
          className={classNames(
            styles.button,
            styles[underlineStyle],
            styles[linkColor]
          )}
          href={href}
        >
          <Text {...{ passThroughProps }}>{this.props.children}</Text>
        </a>
      );
    }
  };

export default withAnchor;
