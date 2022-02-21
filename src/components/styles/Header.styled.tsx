import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  margin-bottom: 20px;
`;

export const StyledInnerHeader = styled.div`
  position: relative;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(1140px + 8vw);
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;

  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

export const StyledLink = styled(Link)`
  height: 64px;
  color: #000000d9;
  font-weight: 700;
  font-size: 18px;
  line-height: 64px;
  white-space: nowrap;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  img {
    height: 32px;
    margin-right: 12px;
  }
`;
