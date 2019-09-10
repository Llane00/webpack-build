import React from 'react';
//import './importIcons';
import '../icons/alipay.svg';
import './icon.scss';
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = 
  ({
    className, 
    name, 
    ...restProps
  }) => {
  return (
    <svg className={classes('lui-icon', className)} 
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;