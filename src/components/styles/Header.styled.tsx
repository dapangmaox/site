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
  max-width: 1280px;
  margin: 0 auto;
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

  img {
    height: 32px;
    margin-right: 12px;
  }
`;
