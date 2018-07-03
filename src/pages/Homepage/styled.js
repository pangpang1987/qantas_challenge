import styled from "styled-components";

import {Link as RouteLink} from 'react-router-dom';
import media from 'utils/media';

export const HomepageContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;
`;

export const HomepageBox = styled.div`
  position: absolute;
  width: 80%;
  max-width: 680px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 0 20px 20px;
  background-color: rgba(127, 127, 127, 0.25);
  color: #ffffff;

  ${media.phone`
    padding: 0 8px;
  `}
`;

export const Title = styled.h1`
  font-size: 32px;
  ${media.phone`
    font-size: 24px;
  `}
`;

export const SubTitle = styled.p`
  font-size: 24px;
  ${media.phone`
    font-size: 18px;
  `}
`;

export const Link = styled(RouteLink)`
  font-size: 20px;
  color: #ffffff;
  ${media.phone`
    font-size: 16px;
  `}
`
