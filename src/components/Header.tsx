import { GithubOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { FlexContainer } from './styles/Container.styled';
import {
  StyledHeader,
  StyledInnerHeader,
  StyledLink,
} from './styles/Header.styled';

const Header = () => {
  const goToGithub = () => {
    window.open('https://github.com/dapangmaox/site');
  };
  return (
    <StyledHeader>
      <StyledInnerHeader>
        <StyledLink to={''}>
          <img
            src={
              'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            }
            alt=''
          />
          <span>大胖猫</span>
        </StyledLink>

        <FlexContainer style={{ alignItems: 'center' }}>
          <Menu mode={'horizontal'} disabledOverflow>
            <Menu.Item key={'主页'}>主页</Menu.Item>
            <Menu.Item key={'博客'}>博客</Menu.Item>
            <Menu.Item key={'股票'}>股票</Menu.Item>
            <Menu.Item key={'关于我'}>关于我</Menu.Item>
          </Menu>
          <GithubOutlined style={{ fontSize: '20px' }} onClick={goToGithub} />
        </FlexContainer>
      </StyledInnerHeader>
    </StyledHeader>
  );
};

export default Header;
