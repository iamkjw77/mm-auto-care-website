import React from 'react';
import { Link } from 'react-router-dom';
import { string, object, bool } from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import svg from 'assets';

const StyledIconContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  path {
    fill: ${({ color }) => color};
    stroke: ${({ stroke }) => stroke};
  }
`;

const StyledIconButton = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

const Icon = ({
  type,
  color,
  stroke,
  children,
  motionProps,
  stylesForContainer,
  button,
  link,
  to,
  ...restProps
}) => {
  let Comp = null;

  if (link)
    Comp = (
      <Link to={to}>{React.createElement(svg[type], { ...restProps })}</Link>
    );
  else if (button)
    Comp = (
      <StyledIconButton>
        {React.createElement(svg[type], { ...restProps })}
      </StyledIconButton>
    );
  else Comp = React.createElement(svg[type], { ...restProps });
  return (
    <StyledIconContainer
      color={color}
      stroke={stroke}
      {...motionProps}
      {...stylesForContainer}
    >
      {Comp}
      {children}
    </StyledIconContainer>
  );
};

Icon.propTypes = {
  type: string.isRequired,
  color: string,
  stroke: string,
  motionProps: object,
  button: bool,
  link: bool,
  to: string
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: '',
  stroke: '',
  button: false,
  link: false
};

StyledIconContainer.displayName = 'StyledIconContainer';

export default Icon;
