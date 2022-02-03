import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
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

export const Logo = styled.a`
  height: 64px;
  overflow: hidden;
  color: #000000d9;
  font-weight: 700;
  font-size: 18px;
  line-height: 64px;
  white-space: nowrap;
  text-decoration: none;
`;
