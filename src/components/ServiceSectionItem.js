import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemStyles = styled.div`
  text-align: center;
  .serviceItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum sint ut animi rem saepe facere, temporibus enim magni voluptas.',
}) {
  return (
    <ItemStyles>
      <div className="serviceItem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <Ptext>{desc}</Ptext>
      </div>
    </ItemStyles>
  );
}
