import AccordionItem from 'components/AccodionItem/AccordionItem';
import { array } from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.ul`
  padding: 10px;
`;

const accordionState = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: true,
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: false,
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Detail Correction',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: false,
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: false,
  },
];

function AccordionList({ accordion }) {
  const [accordionItemList, setAccordionItemList] = useState(accordion);

  const handleClick = id => {
    setAccordionItemList(
      accordionItemList.map(item =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <AccordionWrapper>
      {accordionItemList.map(item => (
        <AccordionItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </AccordionWrapper>
  );
}

AccordionList.propTypes = {
  accordion: array,
};

AccordionList.defaultProps = {
  accordion: accordionState,
};

export default AccordionList;