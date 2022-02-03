import { Menu } from 'antd';
import { Logo, StyledHeader, StyledInnerHeader } from './styles/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledInnerHeader>
        <Logo id='logo'>大胖猫</Logo>
        <div>
          <Menu mode={'horizontal'} disabledOverflow>
            <Menu.Item key={'主页'}>主页</Menu.Item>
            <Menu.Item key={'博客'}>博客</Menu.Item>
            <Menu.Item key={'股票'}>股票</Menu.Item>
            <Menu.Item key={'关于我'}>关于我</Menu.Item>
          </Menu>
        </div>
      </StyledInnerHeader>
    </StyledHeader>
  );
};

export default Header;
