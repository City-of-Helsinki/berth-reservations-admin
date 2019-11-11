import React from 'react';
import classNames from 'classnames';

import Text from '../text/Text';
import styles from './link.module.scss';

export interface WithAnchorProps {
  linkColor?:
    | 'primary'
    | 'error'
    | 'inherit'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary';
  underline?: 'none' | 'hover' | 'always';
  component?: HTMLAnchorElement;
  variant?: 'default' | 'withArrow';
  href: string;
  children: React.ReactNode;
}

const withAnchor = <P extends object>(Component: React.ComponentType<P>) =>
  class WithAnchor extends React.Component<WithAnchorProps & P> {
    render() {
      const {
        linkColor = 'primary',
        underline = 'hover',
        variant = 'default',
        href,
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

      const classes = classNames(
        styles.button,
        styles[linkColor],
        styles[underlineStyle],
        styles[variant]
      );

      return (
        <a
          className={classNames(
            styles.button,
            styles[linkColor],
            styles[underlineStyle],
            styles[variant]
          )}
          href={href}
        >
          <Text {...this.props} className={classes}>
            {this.props.children}
          </Text>
        </a>
      );
    }
  };

export default withAnchor;
