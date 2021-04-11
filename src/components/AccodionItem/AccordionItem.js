import React from 'react';
import styled from 'styled-components';
import { object, func } from 'prop-types';
import theme from 'theme/theme';
import { Icon, Button } from 'components';

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 4.5rem;
  padding: ${theme.calcInterval([0, 50, 50])};
  font-weight: 400;
  overflow: hidden;
  position: relative;

  
  &:hover {
    border: 0;
    padding: ${theme.calcInterval([0, 50, 50])};
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    padding: ${theme.calcInterval([20, 0])};
    //line-height: ${theme.calcRem(54)};

    text-align: center;
    border-bottom: ${`1px solid ${theme.colors.lightGray}`};
    font-weight: bold;
  }

  p {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: -15px;
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.lightGray};
    line-height: ${theme.calcRem(36)};

    span {
      padding: ${theme.calcRem(5)};
    }
  }

  div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(-50px, -50%, 0);
  }
`;

const ItemWrapper = styled.li`
  max-width: 465px;
`;

const variants = {
  visible: {
    color: theme.colors.white,
    backgroundColor: theme.colors.redMain,
    height: 'auto',
    opacity: 0.8,
    transition: { duration: 0.5, type: 'tween' }
  },
  hidden: {
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    height: '4.5rem',
    opacity: 1,
    transition: { duration: 0.5, type: 'tween' }
  }
};

const AccordionItem = ({ item, onClick }) => {
  return (
    <ItemWrapper>
      <StyledButton
        tag="a"
        onClick={() => onClick(item.id)}
        variants={variants}
        animate={item.active ? 'visible' : 'hidden'}
      >
        <h3>{item.title}</h3>
        <p>
          {item.description.map((des, i) => (
            <span key={i}>{des}</span>
          ))}
        </p>
        {item.active && (
          <Icon
            title="rigthArrow Link"
            type="rightArrow"
            color={theme.colors.white}
            width="16"
            height="28"
          />
        )}
      </StyledButton>
    </ItemWrapper>
  );
};

AccordionItem.propTypes = {
  item: object.isRequired,
  onClick: func.isRequired
};

AccordionItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: true
  }
};

ItemWrapper.displayName = 'AccordionItemWrapper';
export default React.memo(AccordionItem);
